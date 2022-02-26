
/*
UNDEFINED
1. variable value not assigned
2. function but didn't return anything
3. function has return keyword, but nothing stated to return;
4. parameter that isn't passed
5. Property that doesn't exist in the object
6. accessing array element out of range
7. accessing deleted array item
8. explicitly set value as undefined


NULL Means that the value is not available
*/

let first;
//console.log(first);


function second(x,y){
    const sum = x + y;
}
const result = second(5,6);
//console.log(result);


function add(a,b){
    const sum = a+b;
    return;
    const fun = a * b;
    return sum;
}
//console.log(add(2,3));

function double(a,b){
    const result = a *2;
    //console.log(b);
    return result;
}
double(4);

const fifth = {name: 'sogir', age:15 , location:'bandarbon'};
//console.log(fifth.phone);

const sixth = [54,2,86,2,3];
//console.log(sixth[10]);
delete sixth[2];
console.log(sixth);
console.log(sixth.length);
console.log(sixth[2]);