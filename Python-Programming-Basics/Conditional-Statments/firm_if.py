import math

hours = int(input())
days = int(input())
workers_off_time_count = int(input())

training = days * 0.90
work_days = training * 8

work_off_days_workers = workers_off_time_count * (2 * days)
total_hours = work_days + work_off_days_workers
diff = abs(math.floor(total_hours - hours))

if total_hours > hours:
    print(f"Yes!{diff} hours left.")
else:
    print(f"Not enough time!{diff} hours needed.")
