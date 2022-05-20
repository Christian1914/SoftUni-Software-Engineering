import math

balls_count = int(input())


total_points = 0
red_balls = 0
orange_balls = 0
yellow_balls = 0
white_balls = 0
other_colours = 0
divides_from_black_balls = 0



for i in range (balls_count):
    coulors = input()

    if coulors == "red":
        total_points += 5
        red_balls += 1
    elif coulors == "orange":
        total_points += 10
        orange_balls += 1
    elif coulors == "yellow":
        total_points += 15
        yellow_balls += 1
    elif coulors == "white":
        total_points += 20
        white_balls += 1
    elif coulors == "black":
        total_points = math.floor(total_points / 2)
        divides_from_black_balls += 1
    else:
        other_colours += 1

print(f"Total points: {total_points}")
print(f"Red balls: {red_balls}")
print(f"Orange balls: {orange_balls}")
print(f"Yellow balls: {yellow_balls}")
print(f"White balls: {white_balls}")
print(f"Other colors picked: {other_colours}")
print(f"Divides from black balls: {divides_from_black_balls}")
