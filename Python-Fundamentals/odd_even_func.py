# def even_or_odd(numbers):
#     even_numbers = 0
#     odd_numbers = 0
#     for current_number in numbers:
#         if current_number % 2 == 0:
#             even_numbers += current_number
#         else:
#             odd_numbers += current_number
#
#     return even_numbers and odd_numbers

# numbers = list(map(int, input().split()))
#
# print(numbers)

numbers_as_string = input().split()
numbers_as_digits = []
for current_number in numbers_as_string:
    numbers_as_digits.append(int(current_number))









# def is_even(number):
#     if int(number) % 2 == 0:
#         return True
#     return False
#
#
#
# numbers = input().split()
# sum_even = 0
# sum_odd = 0
# for current_number in numbers:
#     if is_even(current_number):
#         sum_even += current_number
#
#     else:
#         sum_odd += current_number
#
# print(sum_even)
# print(sum_odd)