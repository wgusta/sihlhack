"""Runtime registry for API/control-loop integration."""
from typing import Optional


_control_loop = None


def set_control_loop(control_loop) -> None:
    global _control_loop
    _control_loop = control_loop


def get_control_loop():
    return _control_loop
