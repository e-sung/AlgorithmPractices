def caesar(s, n):
    numOfAlphabets = 26
    n = n%numOfAlphabets
    result = ""
    
    for char in s:
        unicodeNum = ord(char)
        if(char.isalpha()):
            unicodeNum += n
            if char.isupper() and unicodeNum > ord("Z"):
                unicodeNum -= numOfAlphabets
            elif char.islower() and unicodeNum > ord("z"):
                unicodeNum -= numOfAlphabets
        result += chr(unicodeNum)
                           
    return result

print('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4))