lost_fights_count = int(input())
helmet_price = float(input())
sword_price = float(input())
shield_price = float(input())
armor_price = float(input())

helmets_broken = lost_fights_count // 2
swords_broken = lost_fights_count // 3
shield_broken = lost_fights_count // 6
armor_broken = shield_broken // 2

expenses = helmets_broken * helmet_price + \
    swords_broken * sword_price + \
    shield_broken * shield_price + \
    armor_broken * armor_price
print(f"Gladiator expenses: {expenses:.2f} aureus")





