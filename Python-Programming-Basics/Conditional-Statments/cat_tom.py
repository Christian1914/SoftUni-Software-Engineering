rest_days = int(input())

rest_days_play_time = rest_days * 127
work_days_play_time = (365 - rest_days) * 63

diff = rest_days_play_time + work_days_play_time

if rest_days_play_time + work_days_play_time > 30000:
    print(f"Tom will run away {diff}")

data = input()
num = int(data)
