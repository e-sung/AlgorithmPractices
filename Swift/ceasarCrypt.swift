enum CharType{
    case upperCase
    case lowerCase
    case noneAlphabet
}

func getTypeOfChar(_ num:Int) -> CharType{
    switch num {
    case 65...90:
        return CharType.upperCase
    case 97...122:
        return CharType.lowerCase
    default:
        return CharType.noneAlphabet
    }
}


func ceasarCrypt(n:Int, s:String)->String{
    var result = ""
    for char in s.characters{
        var asciiValue = Int(String(char).unicodeScalars[String(char).unicodeScalars.startIndex].value)
        let originalCase = getTypeOfChar(asciiValue)
        if(originalCase != CharType.noneAlphabet){
            asciiValue += n
            let newCase = getTypeOfChar(asciiValue)
            if(originalCase != newCase){
                asciiValue -= 26
            }
        }
        result.append(Character(UnicodeScalar(asciiValue)!))
    }
    return result
}
