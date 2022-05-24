import sys
count_of_numbers = int(input())

sum = 0
max_num = - sys.maxsize

for i in range(count_of_numbers):
    num = int(input())

    sum = sum + num
    if num > max_num:
        max_num = num

sum = sum - max_num

if sum == max_num:
    print("Yes")
    print(f"Sum = {sum}")
else:
    print("No")
    diff = abs(sum - max_num)
    print(f"Diff = {diff}")
