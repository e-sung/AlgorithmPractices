function fib(n) {
    if (n < 3) {
        return 1
    }

    var iterator = 3;
    var currentFib = 1;
    var prevFib = 1;
    var ithFib = currentFib + prevFib;

    while (i < n) {
        iterator += 1;
        prevFib = currentFib;
        currentFib = ithFib
        ithFib = prevFib + currentFib;
    }
    return ithFib;
}
