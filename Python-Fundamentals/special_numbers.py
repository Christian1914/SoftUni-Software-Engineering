n = int(input())
is_special = False

for number in range(1, n + 1):
    current_number = number
    digit_sum = 0
    while current_number > 0:
        digit_sum += current_number % 10
        current_number = int(current_number / 10)
    is_special = digit_sum == 5 or digit_sum == 7 or digit_sum == 11

    print(f"{number} -> {is_special}")



