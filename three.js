var arr = ['Mango', 'Apple', 'Lemonade', 'Banana'];
console.log(arr[2]);
console.log(arr.length);

arr.push('Grape');
console.log('Length array: ', arr.length);

for (let index of arr) {
    console.log('Number element: ', index);
}