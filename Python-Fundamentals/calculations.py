
def func(number_a, number_b, opearation):
    if opearation == "multiply":
        return number_a * number_b
    elif opearation == "divide":
        return int(number_a / number_b)
    elif opearation == "add":
        return number_a + number_b
    elif opearation == "subtract":
        return number_a - number_b

type_of_operation = input()
first_number = int(input())
second_number = int(input())

print(func(first_number, second_number, type_of_operation))