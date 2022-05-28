type_tickets = input()
rows = int(input())
columns = int(input())

total_seats = rows * columns

if type_tickets == "Premiere":
    price = 12
elif type_tickets == "Normal":
    price = 7.5
elif type_tickets == "Discount":
    price = 5

sum = price * total_seats
print(f"{sum:.2f}")