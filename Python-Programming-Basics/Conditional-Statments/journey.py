budget = float(input())
season = input()

price = 0

if budget <= 100:
    if season == "summer":
        price = budget * 0.30
        print(f"Somewhere in Bulgaria")
        print(f"Camp - {price:.2f}")

    elif season == "winter":
        price = budget * 0.70
        print(f"Somewhere in Bulgaria")
        print(f"Hotel - {price:.2f}")

elif budget <= 1000:
    if season == "summer":
        price = budget * 0.40
        print(f"Somewhere in Balkans")
        print(f"Camp - {price:.2f}")

    elif season == "winter":
        price = budget * 0.80
        print(f"Somewhere in Balkans")
        print(f"Hotel - {price:.2f}")

if budget > 1000:
    price = budget * 0.90
    print(f"Somewhere in Europe")
    print(f"Hotel - {price:.2f}")