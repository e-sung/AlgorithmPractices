func sumRecursive(from1to n:UInt)->UInt{
  if n<2 {
    return n
  }
  return n + sumRecursive(from1to: n-1)
}
