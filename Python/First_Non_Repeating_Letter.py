def first_non_repeating_letter(string):
    lst = []
    for c in string:
        lst.append(c.lower())
    for i in range(len(lst)):
        if lst.count(lst[i]) == 1:
            return string[i]
    return ""
