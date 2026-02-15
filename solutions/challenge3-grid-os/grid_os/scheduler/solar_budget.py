"""Solar budget allocation for all 4 Grid-OS modes + utility function."""
from ..core.types import SensorState, PowerBudget, HubConfig, MarketPrices

def calculate_solar_budget(sensors: SensorState, config: HubConfig, mode: str) -> PowerBudget:
    solar = max(0, sensors.p_solar_w)
    soc = sensors.soc
    grid_price = sensors.grid_price
    if mode == "ISLAND":
        battery_w = min(solar * 0.6, config.battery_capacity_wh * 0.1) if soc < 80 else 0
        compute_w = max(0, solar - battery_w) * 0.8
        heat_w = compute_w * 0.95
        return PowerBudget(compute_w=compute_w, battery_w=battery_w, grid_w=0, heat_w=heat_w)
    elif mode == "WINTER_WARM":
        grid_w = min(config.max_grid_import_w, 1500)
        compute_w = (solar + grid_w) * 0.9
        battery_w = 0
        heat_w = compute_w * 0.95
        return PowerBudget(compute_w=compute_w, battery_w=battery_w, grid_w=grid_w, heat_w=heat_w)
    elif mode == "SUMMER_EARN":
        battery_w = min(solar * 0.3, config.battery_capacity_wh * 0.2) if soc < 90 else 0
        compute_w = max(0, solar - battery_w) * 0.85
        grid_w = -max(0, solar - compute_w - battery_w)
        heat_w = compute_w * 0.7
        return PowerBudget(compute_w=compute_w, battery_w=battery_w, grid_w=grid_w, heat_w=heat_w)
    elif mode == "ARBITRAGE":
        if grid_price < 0.10:
            battery_w = min(config.battery_capacity_wh * 0.3, config.max_grid_import_w * 0.5)
            compute_w = config.max_compute_w * 0.9
            grid_w = compute_w + battery_w - solar
        elif grid_price > 0.30:
            battery_w = -min(config.battery_capacity_wh * 0.2, soc / 100 * config.battery_capacity_wh * 0.1)
            compute_w = max(0, solar) * 0.5
            grid_w = -(solar - compute_w + abs(battery_w))
        else:
            compute_w = solar * 0.7
            battery_w = 0
            grid_w = 0
        heat_w = compute_w * 0.8
        return PowerBudget(compute_w=compute_w, battery_w=battery_w, grid_w=grid_w, heat_w=heat_w)
    return PowerBudget()

def utility(budget: PowerBudget, sensors: SensorState, prices: MarketPrices) -> float:
    u = (
        (budget.compute_w / 1000) * prices.compute_chf_kwh
        + (budget.heat_w / 1000) * prices.heat_chf_kwh
        - (max(0, budget.grid_w) / 1000) * prices.grid_import_chf_kwh
        + (max(0, -budget.grid_w) / 1000) * prices.grid_export_chf_kwh
    )
    return round(u, 4)
