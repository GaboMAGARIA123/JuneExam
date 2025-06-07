//1. დაწერეთ ფუნქცია რომელიც შეაბრუნებს სტრინგს
const str = "Hello World!"; // !dlroW olleH
const reverseString = (input) => {
let reversed = '';
for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
}
return reversed;
};
/* Reverse function removed as per request */
console.log(reverseString(str));
//2. დაწერეთ ფუნქცია რომელიც სიტყვების მხოლოდ პირველ ასოებს გადააქცევს დიდ ასოებად.
const str1 = "heLLo woRld"; // HeLLo woRLd
const capitalizeFirstLetters = (input) => {
    return input.split('').map((lete, index) => {
        if (index === 0 || input[index - 1] === ' ') {
            return lete.toUpperCase();
        }
        return lete;
    }).join('');
}
console.log(capitalizeFirstLetters(str1));
//3. დაწერეთ ფუნქცია რომელიც მასივის შიდა ელემენტებს ამოკრეფს და გადააქცევს ერთ მთლიან მასივად
const arr = [1, 2, 3, [4, 5], 6, [7, 8, 9]]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mergeArrays = (input) => {
    if  (Array.isArray(input)) {
        return input.reduce((acc, val) => acc.concat(mergeArrays(val)), []);
    }
    return [input];
}
console.log(mergeArrays(arr));
//4. დაწერეთ ფუნქცია რომელიც სტრინგს გადააქცევს მოკლე ჩანაწერად.
//თუ სტრინგის სიმბოლოები ერთმანეთის გვერდით ერთნაირია და რაოდენობა მეტია 1-ზე
//მაშინ მათი რაოდენობა გამოიტანეთ და შემდეგ ეს სიმბოლო ხოლო თუ მხოლოდ 1 არის მაშინ თვითონ ეს სიმბოლო
const str2 = "FFCCCBBBBGD"; //2F3C4BGD
const compressString = (input) => {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            compressed += (count > 1 ? count : '') + input[i];
            count = 1;
        }
    }
    return compressed;
}
console.log(compressString(str2));