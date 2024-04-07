#!/usr/bin/python3
"""
This script fetches https://intranet.hbtn.io/status
"""
from urllib.request import Request, urlopen

if __name__ == "__main__":
    req = Request("https://intranet.hbtn.io/statu")
    with urlopen(req) as response:
        the_page = response.read()
        print("Body response:")
        print("\t- type: {}".format(type(the_page)))
        print("\t- content: {}".format(the_page))
        print("\t- utf8 content: {}".format(the_page.decode("utf-8")))
