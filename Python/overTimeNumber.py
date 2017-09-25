def noOvertime(n, works):
    result = 0 
    while n>0:
        works[works.index(max(works))]  -= 1
        n -= 1   
    return overTimeNumber(works)
    
    
def overTimeNumber(arr):
    answer = 0
    for i in arr:
        answer += i*i
    return answer

noOvertime(4,[4,3,3])
