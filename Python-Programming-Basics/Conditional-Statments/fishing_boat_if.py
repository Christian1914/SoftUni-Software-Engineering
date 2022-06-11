budget = int(input())
sezon = input()
count_fishers = int(input())

sum = 0

if sezon == "Spring":
    if count_fishers <= 6:
        sum = 3000 * 0.90
    elif 6 < count_fishers <= 11:
        sum = 3000 * 0.85
    elif count_fishers > 12:
        sum = 3000 * 0.75

if sezon == "Summer":
    if count_fishers <= 6:
        sum = 4200 * 0.90
    elif 6 < count_fishers <= 11:
        sum = 4200 * 0.85
    elif count_fishers > 12:
        sum = 4200 * 0.75

if sezon == "Autumn":
    if count_fishers <= 6:
        sum = 4200 * 0.90
    elif 6 < count_fishers <= 11:
        sum = 4200 * 0.85
    elif count_fishers > 12:
        sum = 4200 * 0.75


if sezon == "Winter":
    if count_fishers <= 6:
        sum = 2600 * 0.90
    elif 6 < count_fishers <= 11:
        sum = 2600 * 0.85
    elif count_fishers > 12:
        sum = 2600 * 0.75

if count_fishers % 2 == 0:
    if sezon == "Spring" or sezon == "Winter" or sezon == "Summer":
        sum = sum * 0.95

diff = abs(budget - sum)
if budget >= sum:
    print(f"Yes! You have {diff:.2f} leva left.")
else:
    print(f"Not enough money! You need {diff:.2f} leva.")