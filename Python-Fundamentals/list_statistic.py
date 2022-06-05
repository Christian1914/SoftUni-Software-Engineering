count_of_numbers = int(input())
positives = []
negatives = []
positives_count = 0
sum_of_negatives = 0
for number in range(count_of_numbers):
    current_number = int(input())

    if current_number > 0:
        positives_count += 1
        positives.append(current_number)
    elif current_number < 0:
        sum_of_negatives += current_number
        negatives.append(current_number)

print(positives)
print(negatives)
print(f"Count of positives: {positives_count}")
print(f"Sum of negatives: {sum_of_negatives}")


