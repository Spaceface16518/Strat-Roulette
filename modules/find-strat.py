import sys
import random
import json

filePath = "../data/strats.txt"
count = len(open(filePath).readlines(  ))
lineNum = randint(1, count)
lines = [0]
with open(filePath) as strats:
    while strats.readline():
        lines.append(strats.tell())
    strats.seek(lines[lineNum])
    line = strats.readline()
return line