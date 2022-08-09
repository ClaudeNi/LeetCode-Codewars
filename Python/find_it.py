def find_it(seq):
    counter = {}
    for num in seq:
        sNum = str(num)
        if sNum in counter:
            counter[sNum] += 1
        else:
            counter[sNum] = 1
    
    for num in counter:
        if counter[str(num)] % 2 == 1:
            return int(num)
