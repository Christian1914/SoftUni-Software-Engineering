# def order_calculation(type_of, count):
#     result = None
#     if type_of == "coffee":
#         result = count * 1.50
#     elif type_of == "coke":
#         result = count * 1.40
#     elif type_of == "water":
#         result = count * 1.00
#     elif type_of == "snacks":
#         result = count * 2.00
#     return f"{result:.2f}"
#
# type_of_product = input()
# count_of_products = int(input())
# print(f"{order_calculation(type_of_product, count_of_products)}")


def order_func(product: str, quantity: int):
    price = 0
    if product == "coffee":
        price = 1.50
    elif product == "coke":
        price = 1.40
    elif product == "water":
        price = 1.00
    elif product == "snacks":
        price = 2.00

    return f"{price * quantity:.2f}"

type_of_product = input()
product_quantity = int(input())
print(f"{order_func(type_of_product, product_quantity)}")