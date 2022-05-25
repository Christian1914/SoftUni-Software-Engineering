count_moves = int(input())

invali_numbers = 0
group_1 = 0
group_2 = 0
group_3 = 0
group_4 = 0
group_5 = 0
counter_numbers = 0



for i in range(count_moves):
    current_number = int(input())

    if 0 <= current_number <= 9:
        group_1 += 1
        counter_numbers = counter_numbers + (current_number * 0.20)
    elif 10 <= current_number <= 19:
        group_2 += 1
        counter_numbers = counter_numbers + (current_number * 0.30)

    elif 20 <= current_number <= 29:
        group_3 += 1
        counter_numbers = counter_numbers + (current_number * 0.40)
    elif 30 <= current_number <= 39:
        group_4 += 1
        counter_numbers += 50
    elif 40 <= current_number <= 50:
        group_5 += 1
        counter_numbers += 100
    else:
        invali_numbers += 1
        counter_numbers = counter_numbers / 2



p1_percent = group_1 / count_moves * 100
p2_percent = group_2 / count_moves * 100
p3_percent = group_3 / count_moves * 100
p4_percent = group_4 / count_moves * 100
p5_percent = group_5 / count_moves * 100
p6_percent = invali_numbers / count_moves * 100

print(f"{counter_numbers:.2f}")
print(f"From 0 to 9: {p1_percent:.2f}%")
print(f"From 10 to 19: {p2_percent:.2f}%")
print(f"From 20 to 29: {p3_percent:.2f}%")
print(f"From 30 to 39: {p4_percent:.2f}%")
print(f"From 40 to 50: {p5_percent:.2f}%")
print(f"Invalid numbers: {p6_percent:.2f}%")