command = input()
number_of_coffes = 0
events = ["coding","dog","cat","movie","CODING", "DOG", "CAT", "MOVIE"]
while command != "END" :
    if command in events:
        if command.isupper():
            number_of_coffes += 2
        else:
            number_of_coffes += 1
    command = input()
if number_of_coffes > 5:
    print("You need extra sleep")
else :
    print(number_of_coffes)