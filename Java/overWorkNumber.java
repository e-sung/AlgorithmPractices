class NoOvertime {
  public int noOvertime(int no, int[] works) {
    while(no>0){
      int largestNumberIndex = getLargestNumberIndex(works);
      works[largestNumberIndex] -= 1;
      no -= 1;
    }
    return getOverTimeNumber(works);
  }
  
  public int getLargestNumberIndex(int[] arr){
    int maxNum = 0;
    int maxNumIndex = 0;
    
    for(int i=0; i<arr.length; i++){
      if(arr[i]>maxNum){
        maxNum = arr[i];
        maxNumIndex = i;
      }
    }
    return maxNumIndex;
  }
  
  public int getOverTimeNumber(int[] works){
    int answer = 0;
    for(int i=0; i<works.length; i++){
      answer += works[i]*works[i];
    }
    return answer;
  }
  
  public static void main(String[] args) {
    NoOvertime c = new NoOvertime();
    int []test = {4,3,3};
    // System.out.println(c.getOverTimeNumber(test));
    System.out.println(c.noOvertime(4,test));
  }
}
