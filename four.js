function calculateSummary(alpha, beta) {
    return alpha + beta;
}
var sum = calculateSummary(40, 50);
console.log(sum);

/**==================================== */
function welcome() {
    console.log('Welcome to Ho Chi Minh City');
}
function calFunc(fn) {
    fn();
}
calFunc(welcome);

/**====================================== */
var sum = function () {
    console.log('Chao mung den voi khoa hoc nodejs');
}
sum();