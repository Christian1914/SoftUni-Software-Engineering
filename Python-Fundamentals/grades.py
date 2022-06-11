# number = int(input())
# def multiply_numbers():
#     result = 5 * number
#     print(result)
# multiply_numbers()

# def hello()
#     return "Hello Softuni"
#
# print(hello())

def grade(current_grade):
    result = None
    if 2.00 <= current_grade <= 2.99:
        result = "Fail"
    elif 3.00 <= current_grade <= 3.49:
        result = "Poor"
    elif 3.50 <= current_grade <= 4.49:
        result = "Good"
    elif 4.50 <= current_grade <= 5.49:
        result = "Very Good"
    elif 5.50 <= current_grade <= 6.00:
        result = "Excellent"


    return result
score = float(input())
print(grade(score))