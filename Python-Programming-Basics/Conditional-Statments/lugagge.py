price_bagage_over_20_kg = float(input())
bagage_kg = float(input())
days_until_travelling = int(input())
bagage_count = int(input())

if bagage_kg < 10:
    price_bagage_over_20_kg * 0.20
elif bagage_kg > 10:
    price_bagage_over_20_kg * 0.50
elif bagage_kg <= 20:
    price_bagage_over_20_kg = 20

    print(price_bagage_over_20_kg)