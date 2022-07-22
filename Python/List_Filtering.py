def filter_list(l):
    new_list = []
    for x in l:
        if not type(x) is str:
            new_list.append(x)
    return new_list
