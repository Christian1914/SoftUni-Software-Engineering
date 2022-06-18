budget = float(input())
price_flour = float(input())

price_pack_of_eggs = 0.75 * price_flour
price_for_milk = 1.25 * price_flour
price_loaf_of_bread = price_pack_of_eggs + price_flour + 0.25 * price_for_milk
colored_eggs = 0
count_of_loaves = 0
spend_budget = 0.0
remaining_budget = budget - spend_budget

while remaining_budget >= price_loaf_of_bread:
    spend_budget += price_loaf_of_bread
    colored_eggs += 3
    count_of_loaves += 1
    if (count_of_loaves % 3) == 0:
        colored_eggs = colored_eggs - (count_of_loaves - 2)
    remaining_budget = budget - spend_budget
print(f"You made {count_of_loaves} loaves of Easter bread!"
      f"Now you have {colored_eggs} eggs and {(remaining_budget):.2f}BGN left.")