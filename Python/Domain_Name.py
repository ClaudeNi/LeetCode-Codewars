def domain_name(url):
    str = ""
    if "www." in url:
        start = url.find("www.") + 4
        str = url[start:]
    elif "https" in url or "http" in url:
        start = url.find("://") + 3
        str = url[start:]
    else:
        str = url
    end = str.find(".")
    str = str[:end]
    return str
