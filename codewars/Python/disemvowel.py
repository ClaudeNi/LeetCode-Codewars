def disemvowel(string_):
    vowels = ["a","A","e","E","i","I","u","U","o","O"]
    
    str = ""
    for char in string_:
        if not char in vowels:
            str = str + char
    return str
