class Caesar {
  enum CharType{
    lowerCase,
    upperCase,
    nonAlphabet
    }

  CharType getCharType(int n){
    if(n>=65 && n<=90){
      return CharType.upperCase;
    }else if(n>=97 && n<=122){
      return CharType.lowerCase;
    }else{
      return CharType.nonAlphabet;
    }
  }

    String caesar(String s, int n) {
        String result = "";
    int numberOfAlphabets = 26;
    n = n%numberOfAlphabets;

    for(int i=0; i<s.length();i++){
      int codePoint = Character.codePointAt(s,i);
      CharType originCharType = getCharType(codePoint);
      if(originCharType != CharType.nonAlphabet){      
        codePoint += n;
        CharType newCharType = getCharType(codePoint);
        if(originCharType != newCharType){
          codePoint -= numberOfAlphabets;
        }
      }
      result+=String.valueOf(Character.toChars(codePoint));
    }
        // 함수를 완성하세요.

        return result;
    }

    public static void main(String[] args) {
        Caesar c = new Caesar();
        System.out.println("s는 'a B z', n은 4인 경우: " + c.caesar("a B z", 4));
    }
}