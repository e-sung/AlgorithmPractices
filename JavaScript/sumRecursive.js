function sumRecursive(n){
  if(n<2){
    return n
  }
  return n + sumRecursive(n-1)
}
