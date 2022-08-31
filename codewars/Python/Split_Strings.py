def solution(s):
    pairs = []
    counter = 0
    str = ""
    for c in s:
        if counter > 1:
            counter = 0
            pairs.append(str)
            str = ""
        counter += 1
        str += c
    if counter > 0:
        pairs.append(str)
    if len(s) % 2 == 1:
        pairs[-1] = pairs[-1] + "_"
    return pairs
        
        
