function fatorial(x) {
    var res;
    res = x == 0 ? 1 : x * fatorial(x-1)
    return res;
}
module.exports = fatorial;