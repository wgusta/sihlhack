"""Grid-OS Entry Point."""
import argparse
import logging
import threading
from .core.types import HubConfig
from .core.control_loop import GridOSControlLoop
from .runtime import set_control_loop
from .sim.client import SihlSimClient, SimConfig

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(levelname)s: %(message)s")
logger = logging.getLogger("grid_os")

def main():
    parser = argparse.ArgumentParser(description="Grid-OS: The Sihl-Kernel")
    parser.add_argument("--hub-id", default="hub_01")
    parser.add_argument("--sim-url", default=None)
    parser.add_argument("--api-only", action="store_true")
    parser.add_argument("--api-port", type=int, default=8080)
    args = parser.parse_args()
    config = HubConfig(hub_id=args.hub_id)
    sim = SihlSimClient(SimConfig(base_url=args.sim_url, hub_id=args.hub_id)) if args.sim_url else SihlSimClient()
    sim.connect()
    control = GridOSControlLoop(config, sim_client=sim)
    set_control_loop(control)
    if args.api_only:
        import uvicorn
        uvicorn.run("grid_os.api.server:app", host="0.0.0.0", port=args.api_port)
    else:
        api_thread = threading.Thread(target=lambda: __import__("uvicorn").run(
            "grid_os.api.server:app", host="0.0.0.0", port=args.api_port, log_level="warning"),
            daemon=True)
        api_thread.start()
        try:
            control.start()
        except KeyboardInterrupt:
            control.stop()

if __name__ == "__main__":
    main()
