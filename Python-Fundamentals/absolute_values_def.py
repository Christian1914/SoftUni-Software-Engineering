# def even_or_odd_number(num):
#     if num % 2 == 0:
#         return "Even number"
#     else:
#         return "Odd number"
#
# print(even_or_odd_number(2))

#numbers = [1, 2, 3, 4, 5, 6, 10, 11, 13]
# def check_numbers(num):
#     if num % 2 == 0:
#         return True
#     else:
#         return False
#
# result = list(filter(check_numbers, numbers))
#
# print(result)

# numbers = input().split(" ")
# abs_numbers = []
#
# for num in numbers:
#     abs_numbers.append(abs(float(num)))
#
# print(abs_numbers)

def abs_number(nums):
    result = [abs(num) for num in nums]
    return result

numbers = list(map(float, input().split(" ")))

print(abs_number(numbers))
