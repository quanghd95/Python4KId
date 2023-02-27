import math
def c():
    a= float(input("please input side a"))
    b= float(input("please input side b"))
    result=math.sqrt(a**2 + b**2)
    print(result)
def b():
    a = float(input("please input side a"))
    c = float(input("please input side c"))
    result=math.sqrt(c**2 - a**2)
    print(result)
def a():
    b = float(input("please input side b"))
    c = float(input("please input side c"))
    result=math.sqrt(c**2 - b**2)
    print(result)

answer= str(input("Which angle is missing?"))
if answer=="hypotenuse":
    print(c)
elif answer=="opposite":
    print(b)
elif answer=="adjacent":
    print(a)
else:
    print("Please input the correct sides")





def division():
    num1=int(input("Please enter the first number:"))
    num2=int(input("Please enter the second number:"))
    result=num1/num2
    print (num1, "/", num2, "=", result)

answer=str(input("Do you want to divide 2 numbers?"))
if answer == "yes":
    division()
else:
    print("we cannot divide")