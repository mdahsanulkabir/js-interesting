/* 
Truthy
1. any boolean true is truthy
2. any string is truthy. even a space will be truthy
3. any array is truthy, even empty array is truthy
4. any empthy object is truthy
5. anything else that is not falsy is truthy

Falsy
1. any boolean false is falsy
2. any empthy string is falsy
3. 0 (as number) is falsy
4. undefined are falsy
5  null are falsy
6. NuN are falsy


*/

const x = [];
if(x){
    console.log('variable is truthy');
}
else{
    console.log('variable is falsy');
}