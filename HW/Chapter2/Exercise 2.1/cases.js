const permutation = (n, r) => {
    let res = 1;
    for(let i=n; i>(n-r); i--){
        res *= i;
    }
    return res;
}

const combination = (n, r) => {
    let res = permutation(n, r);
    for(let i=r; i>1; i--){
        res /= i;
    }
    return res
}

const multiPermutation = (n, r) => {
    let res=1;
    for(let i=0; i<r; i++){
        res *= n;
    }
    return res;
}

const multiCombination = (n, r) => {
    return combination(n+r-1, r);
}

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination,
}