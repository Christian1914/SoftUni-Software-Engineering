age = int(input())
price_washing_machine = float(input())
toy_price = int(input())

money = 10
count_toys = 0
sum = 0
for i in range(1, age + 1):
    if i % 2 != 0:
        count_toys = count_toys + 1
    else:
        sum = sum + money - 1
        money = money + 10

money_toys = count_toys * toy_price
total_sum = money_toys + sum

diff = abs(total_sum - price_washing_machine)

if total_sum >= price_washing_machine:
    print(f"Yes! {diff:.2f}")
else:
    print(f"No! {diff:.2f}")