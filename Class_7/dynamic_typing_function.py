def convert(x):
    print(type(x))
    return 'the argument is ' + str(x) # error without casting

print(convert("str"))
print(convert(42))
