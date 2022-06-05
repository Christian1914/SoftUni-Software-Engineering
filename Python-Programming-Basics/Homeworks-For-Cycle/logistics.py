

count_of_loads = int(input())
price_for_bus = 0
price_for_truck = 0
price_for_train = 0
load1 = 0
load2 = 0
load3 = 0

for loads in range(1, count_of_loads + 1):
    current_load = int(input())
    if current_load <= 3:
        load1 = load1 + current_load
        price_for_bus = 200 * load1

    elif current_load <= 11:
        load2 = load2 + current_load
        price_for_truck = 175 * load2

    elif current_load >= 12:
        load3 = load3 + current_load
        price_for_train = 120 * load3

all_loads = load1 + load2 + load3
all_price = price_for_bus + price_for_truck + price_for_train
avg_loads = all_price / all_loads
print(f"{avg_loads:.2f}")
print(f"{(load1 / all_loads * 100):.2f}%")
print(f"{(load2 / all_loads * 100):.2f}%")
print(f"{(load3 / all_loads * 100):.2f}%")
