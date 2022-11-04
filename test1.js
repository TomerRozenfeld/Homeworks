function _calNum(x){
    return(x*53);
};
console.log(_calNum(3));
console.log(_calNum(9));

function _calNum2(x,y){
    return(x**y);
};
console.log(_calNum2(5,8))
console.log(_calNum2(7,2))

function _calNum3(a ,b ,c ,d ,e){
    return Number(a) + Number(b) + Number(c) + Number(d) + Number(e);
}

function _calc(){
    let num1= prompt("First Number");
    let num2= prompt("Second Number"); 
    let num3= prompt("Third Number");
    let num4= prompt("Fourth Number");
    let num5= prompt("Fifth Number");
    let result= _calNum3(num1, num2, num3, num4, num5);
    alert(result);
    alert(`${num1} + ${num2} + ${num3} + ${num4} + ${num5} = ${_calNum3(Number(num1), Number(num2), Number(num3), Number(num4), Number(num5))}`);
};
_calc();


function _Names(){
    let fname=prompt("First Name")
    let lname=prompt("Last Name")
    let age=prompt("age")
    alert(`First Name:${fname}\n Last Name:${lname}\n age: ${age}`)
}
_Names();