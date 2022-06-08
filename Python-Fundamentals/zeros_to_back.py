list = input().split(", ")
int_list = []
final_list = []
for element in list:
    int_list.append(int(element))

    if element == "0":
        int_list.remove(0)
        final_list.append(0)

for number in final_list:
    if number == 0:
        int_list.append(0)


print(int_list)