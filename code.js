function getFib (n, arr)
{
    size = arr.length;
    if (n == 0) return [0]
    if (n > 1)
    {
        arr[size] = arr[size-1] + arr[size-2]
        getFib(n-1, arr)               
    }
    return arr
}

function fib (n)
{
    let arr = [0,1]
    return getFib(n, arr)
}

console.log(fib(7))

