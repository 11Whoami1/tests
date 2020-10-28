/* Use after connected lib liki.js */
function edit(i) {
    let num1 = i;
    let num2 = getRandomInRange(100, 999);
    let num3 = num2 - num1;
    return num3;
}
function foks(i) {
    let v = getRandomInRange(100, 1500);
    let c = edit(i);
    let num1 = c * 2;
    let num2 = revert(v);
    let num3 = num2 / 2;
    let num4 = num1 - num3;

    return num4;
}