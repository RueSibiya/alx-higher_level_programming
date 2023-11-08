#!/usr/bin/python3
"""Defines a file-writing function."""


def write_file(filename="", text=""):
    """Open the file in write mode, which will create the file.

    Args:
        filename (str): example.txt
        text (str): text to write to a file.
    Returns:
        Number of characters written.
    """
    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
