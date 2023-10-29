#!/usr/bin/python3

class Square:

    def __init__(self, size=0):
        self.size = size

    @property
    def size(self):
        return (self.__size)

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError
        elif value < 0:
            raise ValueError
        self.__size = value

    def area(self):

        return (self.__size * self.__size)
