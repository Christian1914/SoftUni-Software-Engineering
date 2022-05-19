money = float(input())
year_to_live = int(input())
boys_years = 18
cost_for_one_year = 0

for i in range(1800, year_to_live +1):

     if i % 2 == 0:
        cost_for_one_year = cost_for_one_year + 12000
     else:
         cost_for_one_year = cost_for_one_year + 12000 + (50 * boys_years)


     total_money = money - cost_for_one_year
     boys_years = boys_years + 1
     cost_for_one_year = 0
     money = total_money

if money >= 0:
    print(f"Yes! He will live a carefree life and will have {abs(total_money):.2f} dollars left.")
else:
    print(f"He will need {abs(total_money):.2f)} dollars to survive.")



print(total_money)