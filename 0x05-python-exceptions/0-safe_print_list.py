#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    num = 0
    try:
        for i in range(x):
            if num < x:
                print(my_list[i], end=' ')
                num += 1
            else:
                break
        print()
    except IndexError:
        print("")
    return num
