// // let student = 50;

// // if ((80 < student) && (student < 100)) {
// //     console.log(`student's grade is ${student} aa`)
// // } else if ((60 < student) && (student < 80)) {
// //     console.log(`student's grade is ${student} bb`)
// // } else if ((40 < student) && (student < 60)) {
// //     console.log(`student's grade is ${student} cc`)
// // } else {
// //     console.log(`student's grade is ${student} dd`)
// // }




// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// const number2 = parseFloat(prompt('Enter second number: '));
// let answer
// switch (operator) {
//     case "+": 
//     console.log(number1+number2)
//         break;
//     case "-":
//         console.log(number1 - number2)
//         break;
//     case "*":
//         console.log(number1 * number2)
//         break;
//     case "/": 
//         console.log(number1 / number2)
    

//     default:
//         break;
// }




// let surname = (a, b) => {
//     return a + b
//   }
  
//   let x = surname(3, 5)
  
//   console.log(x)
  
//   let fonkName = function add(a, b)  {
//     return a + b
//   }
  
//   let z = fonkName(3,5)
  
//   console.log(z + 9)
  

 

// let fonkName = (a) => {
//     if (a % 2 == 0) {
//         return `Sayı Çifttir. + ${a}`
//     } else {
//         return `Sayı tektir. + ${a}`
//     }
// }
// for (a=30; 0 < a; a--) {
//     let result = fonkName(a)
//     console.log(result)
// }



// let calc = (a, b=5, operator="*") => {

     
//     if (operator == "+" ) {
//         return a + b;
//     } else if (operator == "-"){
//         return a - b
//     } else if (operator == "*") {
//         return a * b;
//     } else if (operator == "/"){
//         return a/b;
//     }
    
// }
// let number = calc(9)
// console.log(number)

// let primenumber = 1000000
// let answer = true
// let hprime = (primenumber / 2)

// for(i = 2 ; i < hprime; i++ ) {

//     if(i == 2) {
//         continue;
//     } 
//     else if(primenumber % i == 0) {
//         answer = false
//         break;        
//     } 
        
// }
// console.log(answer)

// let word = 'araba'
// function reverse(worlds) {
//     //
//     let newword = ""
//     for (let index = worlds.length-1; index > -1; index--) {
//         newword += worlds[index];
        
//     }
//     return newword
// }

// console.log(reverse(word))


// --------------------------------------

// let word = "kus"
// function finder(letter) {
//     let result = 0;
    
//     for (let index = 0; index < letter.length; index++) {
//         if (letter[index] == "a") {
//             result += 1
//         }
              
//     } 
//     if(result == 0){
//         return `word a harfine sahip değildir. `
        
//     }else {
//         return result
//     }
// }
// console.log(finder(word))


// +++++++++++++++++++++++++++++++

// let array1 = [5, 17, 12, 9, 3, 6, 11, 2]
// function arr(sayilar) {
//     let result = 0;
//     for (let index = 0; index < sayilar.length; index++) {
//         if((sayilar[index]) > 15){
//             result += sayilar[index]
//         }
        
//     }
//     return result
// }
// console.log(arr(array1))

// ----------------------------------

// let num1 = 100
// let num2 = 30

// function ebob(a, b) {    
//     let buyuksayi, kucuksayi
//     let arrbolen = []   
//         if(a > b){
//         buyuksayi = a, kucuksayi = b;
//         }else{
//             buyuksayi = b, kucuksayi = a;
//         }
//         for (let i = 2; i <= kucuksayi; i++){
            
//             if (num1 % i ==0 && num2 % i ==0){
//                 arrbolen.push(i)
//             }
//         }
//         return arrbolen[arrbolen.length-1]
    

    
// }
// console.log(ebob(num1, num2))


// ++++++++++++++++++++++++++++++++++


let word = "derya"
function check(kelime) {
    let result = ""
    for (let index = kelime.length-1; index > -1; index--) {        
        result+= kelime[index]; 
              
    }
    
    if(kelime === result){
        return true;
    }else {
        return false;
    }
}
console.log(check(word))

// +++++++++++++++++++++++++++++++++++++

// let dizi = [12, 8, 7, 11, 9, 2, 21]
// let num = 68

// function bulucu(sayilar, num) {
//     for (let index = 0; index < sayilar.length; index++) {
//         const current = sayilar[index];
//         for (let secondi = index + 1; secondi < sayilar.length; secondi++) {
//             const element = sayilar[secondi];
//             if (current + element == num) {
//                 return true;                
//             }  
//         } 
//     }
//     return false
// }
// console.log(bulucu(dizi, num))

// -------------------------------------------
// dizi içindeki sayıların iki sayının toplamının en büyük olanını bulma.
// let dizi = [3, 9, 7, 2, 1, 11]


// function bulucu(sayilar) {
//     let x = 0
//         for (let index = 0; index < sayilar.length; index++) {
//             const current = sayilar[index];
//             for (let secondi = index + 1; secondi < sayilar.length; secondi++) {
//                 const element = sayilar[secondi];
//                 if (current + element > x) {
//                     x = current + element;                
//                 }  
//             } 
//         }
//         return x
//     }
//     console.log(bulucu(dizi))

//     ----------------------

// -bir sayıyı tersten yazma: 571 -175 

// -bir fonksiyona sayı yazıyorum ama çıktı romen rakamları olacak: dönüştürücü

// -array ve sonuca sahibiz. arrayin içindeki iki sayılnınn toplamı verilen (19) a en yakın olanı seçsin. 


// --------------------------------
//soru 2 romen rakamına dönüştürmece
// bunlar sabitlerim:  baştan aşağı giren sayıyı bölecekler.


//bölme işlemini for ile sağlıyoruz.

// let num = 222

// function convertingroman(sayi){

//     let yenisayi = ""
//     const romannumbers = [ //as ARRAY

//         {numeral : 1000, roman :"M"},
//         {numeral : 500, roman :"D"},
//         {numeral : 100, roman :"C"},
//         {numeral : 90, roman :"XC"},
//         {numeral : 50, roman :"L"},
//         {numeral : 40, roman :"XL"},
//         {numeral : 10, roman :"X"},
//         {numeral : 9, roman :"IX"},
//         {numeral : 8, roman :"VIII"},
//         {numeral : 7, roman :"VII"},
//         {numeral : 6, roman :"VI"},
//         {numeral : 5, roman :"V"},
//         {numeral : 4, roman :"IV"},
//         {numeral : 3, roman :"III"},
//         {numeral : 2, roman :"II"},
//         {numeral : 1, roman :"I"}
//     ]  
    

//     for (let index = 0; index < romannumbers.length; index++) {
//         let adet = Math.floor(sayi / romannumbers[index].numeral);
//         while(sayi >= romannumbers[index].numeral){
//             yenisayi += (romannumbers[index].roman).repeat(adet);
//             sayi -= romannumbers[index].numeral*adet
//         }
            
//         }
//         return yenisayi
// }

// console.log(convertingroman(num))


// ----------------------------------
//Çözüm 1 sayıyı tersine döndürmece
// let num = 123
// function reversing(sayi) {
//     return (
   
//     parseFloat(
//        sayi
//        .toString()
//        .split("")
//        .reverse()
//        .join("")
//    ))

   
// }
// console.log(reversing(num))

// //------------------------------------------
// //Çözüm 2
// let abc=120
// function reverse(number) {
    
//     const element = abc.toString()
//     let newString = ""
    
//     for (let index = element.length-1; index > -1; index--) {
//         newString += element[index];
//     }
//     return newString;
// }
// const result =reverse(abc)
// console.log(parseInt(result))
// //------------------------------------------



    
    
    
    // function closestone(sayi) {
    //     let myArray =[7, 8, 10, 12, 19, 45]
    
    //     function bulucu(dizisayilari) {
            
    //         for (let index = 0; index < dizisayilari.length; index++) {
                
    //             const current = dizisayilari[index];
    //             for (let secondi = index + 1; secondi < dizisayilari.length; secondi++) {
    //                 let result = Array
    //                 const element = dizisayilari[secondi];
    //                 let toplam = (current + element)
    //                 if (toplam = num){
    //                     return "Dizi içerisinde +${toplam}, +${num}'a eşittir." 
    //                 }else (toplam== num++ || toplam== --num)
    //                     return "Dizideki +${toplam}$ +{num}'a en yakındır. "
                    
    //                 console.log(bulucu(myArray))


    //             }
    //         }
    //     }console.log(bulucu(myArray))
//     // }
//     // console.log(closestone(num))



// let myArray =[7, 8, 10, 12, 19, 45]
// let num = 36
// let myNewArray = [];
// for (let index = 0; index < myArray.length; index++) {
                
//     const current = myArray[index];
//     for (let secondi = index + 1; secondi < myArray.length; secondi++) {
        
//         const element = myArray[secondi];
//         if(myNewArray.push(element+current)){
        
//         }
        
//     } 
// } console.log(myNewArray) 
// -----------------------------------------
// function plusMinus(arr= [-4,3,-9,0,4,1]) {
//     // Write your code here
    
//     let zero = 0
//     let positive =0
//     let negative = 0;
    
//     for(let index=0; index < arr.length; index++){
//         if(arr[index]<0){
//             negative++          
//         }else if(arr[index]>0){
//             positive++        
//         }else{
//             zero++        
//         }
    
//     }
//     let pporsion = (positive/arr.length).toFixed(6);
//     let nporsion = (negative/arr.length).toFixed(6);
//     let nzero = (zero/arr.length).toFixed(6);
//     console.log(pporsion)
//     console.log(nporsion)
//     console.log(nzero)
    
// }
// plusMinus()



// function fizzBuzz(n) {
//     let myNewArray = []
//     for(let i=1; i < n+1; i++){
//         if((i % 3 === 0) && (i % 5 === 0) ){
//             myNewArray.push("Fizz");
//         }else if(i % 5 === 0){
//             myNewArray.push("Buzz"); 
//         }else if(i % 3 === 0){
//             myNewArray.push("FizzBuzz");
//         }else{
//             myNewArray.push(String(i));
//         }
        
//     }
//     return myNewArray
// };
// console.log(fizzBuzz(8))

// Bu biçim linear search olmuş. Zaman karmaşası bakımından istediğimizi vermemiş.


// var search = function(nums, target) {
//     for(let index=0; index < nums.length; index++){
//         if(index = target){
//             return nums.indexOf(index)
//         }else{
//             return -1
//         }
//     }
    
// };
// console.log(search([-1,0,3,5,9,12], 9))

// // 0 için çözüm gelmiyor
// var search = function(nums, target) {
//     let left = 0, right = nums.length-1
//     let mid = ((right+left)/2)
    
//     if (target < mid){
//         for(let index=1; index<mid; index++){
//             if(index = target){
//                 return nums.indexOf(index)
//             }else{
//                 return -1
//             }
//          }
//     }
//     if(target > mid){
//         for(let k=mid-1; k < nums.length; k--){
//             if(k =target){
//                 return nums.indexOf(k);
//             }else{
//                 return -1
//             }
//         }
//     }
//     if(target === mid){
//         return mid
//     }
    
// };
// console.log(search([-1,0,2,5,9,12,-2], 0))


// var search=function(nums, target){
//     let left=0, right=nums.length -1;
//     while(left<=right){
//         let mid = Math.floor(left+right)/2
//         if(nums[mid] == target){
//             return mid
//         }
//         if(target<nums[mid]){
//             right = mid-1
//         }else {
//             left = mid+1
//         }
//     }
//     return -1
// }
// console.log(search([-1,0,2,5,9,12,-2], 0))


// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         let left = 1, right = n;
//         while(left<=right){
//             let mid = Math.floor(left + (right - left)/2);
            
//             if(isBadVersion(mid)){
//                 right = mid-1
//             }else{
//                 left = mid+1
//             }
            
//         }
        
//         return left
//     }
// }

// console.log(5)

// function staircase(n) {
//     // Write your code here
    
//     for( let index=1; index < n+1; index++){
//       const element = "#".repeat(index+1)
//       element.padStart(index)
//     }
    
// }
// staircase(6)


function staircase(n) {
    // Write your code here
    
    for( let index=1; index < n+1; index++){
        
        console.log("#".repeat(index).padStart(n))
    }
}
