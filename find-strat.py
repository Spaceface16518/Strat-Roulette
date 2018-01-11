import sys
import random
import json

filePath = "../data/strats.txt"
count = len(open(filePath).readlines(  ))
lineNum = randint(1, count)
lines = [0]
with open(filePath) as strats_file:
    while strats_file.readline():
        lines.append(strats_file.tell())
    strats_file.seek(lines[lineNum])
    line = strats_file.readline()
return line
