
// chapter 26 to onward

// task 01
// var integer = +prompt("Please enter your number");
// document.write("Round off value is:"+Math.round(integer));
// document.write("Floor value is:"+Math.floor(integer));
// document.writet("ceil value:"+Math.ceil(integer));

// task 02
// var integer = +prompt("Please enter your number");
// document.write("Round off value is:"+Math.round(integer));
//  document.write("Floor value is:"+Math.floor(integer));
//  document.write("ceil value:"+Math.ceil(integer));

// task 03
//document.write("Absolute value of -4 is "+Math.abs(-4));

// task 04
// var value=Math.ceil(Math.random()*6);
// console.log("Random Dice Value: "+value)


// task 05

// var numberOfStars=Math.ceil(Math.random()*2);
// if(numberOfStars==2){
//     document.write(numberOfStars+"<br>"+"Random Coin Value: Tails");
// }
// else(document.write(numberOfStars+"<br>"+"Random Coin Value: Heads"));

// task 06
// var value=Math.ceil(Math.random()*100);
// console.log("random number between 1 and 100:"+value)

// task 07
// var weight = prompt("Enter your weight in Kg");
// if(weight=="50"){
//     weight=parseInt(weight);
//     document.write("The weight of user is: "+weight + " kilograms");
// }
// else if(weight=="50kgs"){
//     weight=parseInt(weight);
//     document.write("The weight of user is: "+weight+ " kilograms");
// }
// if(weight=="50.2kgs"){
//     weight=parseFloat(weight);
//     document.write("The weight of user is: "+weight + " kilograms");
// }
// else if(weight=="50.2kilograms"){
//     weight=parseFloat(weight);
//     document.write("The weight of user is: "+weight+ " kilograms");
// }
// else{
//     document.write("Wrong Input")
// }

// task 08

// var secretNumbers = Math.random();
// secretNumbers=((secretNumbers*9)+1);
// secretNumbers=Math.round(secretNumbers);
// var Input=+prompt("Enter your Number");
// if(Input==secretNumbers){
//     document.write("Congratulation!");
// }
// else{
//     document.write("Try Again!");
// }

// Chapter 31 to 34

// task 01
// console.log("Time is: "+new Date());

// task 02
// var currentMonth = todayDate.getMonth();
// var Months = ["January","February","March","April","May","June","July","August","September","October","Novermber","December"];
// for(var i = 0; i<Months.length ; i++){
//     if(i==currentMonth){
//         document.write("<br> Current Month:"+ Months[i]);
//     }
// }
// task 03
// var today = new Date().getDay();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// for(var i = 0; i<days.length ; i++){
//          if(i==today){
//              console.log("<br> Today is:"+ days[i].slice(0,3));
//          }
//     }

// task 04

//          var day=prompt("Enter the day");
//           if(day=="Saturday" || day== "Sunday"){
//               document.write("<br> It's Fun Day");
//             }
//             else{
//                 document.write("<br> Working Day");
//             }

// task 05
// var date = +prompt("Enter the date");
// if(date<16){
//     document.write("First Fifteen Days of the month");
// }
// else{
//     document.write("Last fifteen days of the month");
// }

// task 07
// var CurrentDate= new Date();
// document.write("Current Date: "+ CurrentDate);
// var currentdate= new Date("Jan 1,1970");
// var milliSecond = CurrentDate.getTime();
// var millisec = currentdate.getTime();
// var diffinMs = milliSecond - millisec;
// var minutes = (diffinMs)/( 1000 * 60);
// document.write("<br>Elapsed millisecond since Jaunary 1,1970: " + diffinMs);
// document.write("<br>Elapsed minutes since Jaunary 1,1970: " + minutes);


// task 08
// var time = parseFloat(prompt("Enter the time"));
// if(time<11.59){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");
// }

// // task 09
// var laterDate= new Date("Thu Dec 31,2020 00:00:00 GMT+0500 (PKT)");
// document.write(laterDate);

// task 10

// var today = new Date();
// var ramadanDate = new Date("June 18, 2015");
// var days=today.getTime();
// var Days=ramadanDate.getTime();
// var diff = days - Days;
// var dayssinceRamadan = (diff)/(1000*60*60*24); 
// dayssinceRamadan = Math.floor(dayssinceRamadan);
// document.write(dayssinceRamadan+ " days have been passed since "+ ramadanDate);

// task 11

// var startingDate = new Date("Jan 01, 2015");
// var referenceDay = new Date("Dec 05, 2015");
// var days=startingDate.getTime();
// var Days=referenceDay.getTime();
// var diff = Days - days;
// var secondsinceStart2015 = (diff)/(1000*60); 
// secondsinceStart2015 = Math.floor(secondsinceStart2015);
// document.write(secondsinceStart2015+ " days have been passed since "+ referenceDay);

// task 12
// var currentDate = new Date();
// document.write("Current Date is: "+ currentDate);
// var currentdate = new Date();
// currentdate.setHours(16);
// document.write("<br>1 hour ago it was "+ currentdate)

// task 13
//  var currentDate = new Date();
//  document.write("Current Date is: "+ currentDate);
//  currentDate.setFullYear("1921");
//  document.write("<br>100 years back, it was "+ currentDate) ;  

// task 14
// var today = new Date();
// var BirthDate = new Date("May 23, 1996");
// todayms = today.getTime();
// BirthDatems = BirthDate.getTime();
// var diff = todayms - BirthDatems;
// var age = (diff)/(1000*60*60*24*365);
// age = Math.floor(age);
// document.write("Your Age: "+age);
// document.write("<br> Your Birth Year is:" +BirthDate.getFullYear());

// task 15
// var todayDate= new Date();
// var currentMonth = todayDate.getMonth();
// var Months = ["January","February","March","April","May","June","July","August","September","October","Novermber","December"];
// for(var i = 0; i<Months.length ; i++){
//     if(i==currentMonth){
//         thisMonth=Months[i]
//     }
// }
// document.write("<h1> K-Electric Bill</h1>");
// document.write("Customer Name: <b> ABC Customer </b><br>");
// var units = 40;
// document.write("Month: <b>"+thisMonth +"</b><br>");
// document.write("Number of Units: <b>"+ units+" </b><br>");
// var chargesperUnit = 16; 
// document.write("Charges per Unit: <b>"+chargesperUnit + "</b><br><br>");
// var NetAmount = units*chargesperUnit;
// document.write("Net amount payable (within due date) <b>"+NetAmount+"</b><br>");
// document.write("Late Payment Surcharge: <b>350</b> <br>" );
// document.write("Gross Amount Payable (after due date):<b> " +NetAmount + 350)+"</b>"; 


// Chapter 35 to 38

// task 01
// function currentDate(){
//     document.write(new Date());
// }
// currentDate();

// task 02
// function fullName(){
//     var firstName=prompt("Enter your First Name");
//     var lastName=prompt("Enter your Last Name");
//     document.write("Hello! Welcome " + firstName+lastName)
// }
// fullName();

// task 03
// var x = +prompt("Enter first Number");
// var y = +prompt("Enter Second Number");
// var f = add(x,y);
// document.write("After Addition Answer is: "+f);
//   function add(a,b){
//   return a+b;
// }


// task 04


// var x = +prompt("Enter your first Number");
// var oprt = prompt("Enter Operator");
// var y = +prompt("Enter your second Number");
// var n = calculate(x,y,oprt);    // Function Calling
// document.write("Result is: "+ n)


// function calculate(num1,num2,opeator){
//     if(opeator=="+"){
//     return num1 + num2;}
//     else if(opeator=="-"){
//         return num1 - num2;
//     }
//     else if(opeator=="*"){
//         return num1 * num2;
//     }
//     else if(opeator=="/"){
//     return num1 / num2;}
//     else{
//         document.write("Wrong Input");
//     }
// }


// task 05


// function square(){
//     var y = x*x;
//     return y;
// }
    
// var x = +prompt("Enter any number");
// document.write("Square is: "+square(x));


// task 06
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = +prompt("Enter The number");
//   answer = factorial(n)
//  document.write("The factorial of " + n + " is " + answer);

// task 07
// var startNumber=+prompt("enter starting number");
// var lastNumber=+prompt("enter last number");
// for(var i = startNumber; i<=lastNumber;i++){
//     document.write("<br>"+i);
// }

// task 08

// function hypotenuse(a, b) {
//    function square(x)
//     { return x*x; 
//     }
//    return Math.sqrt(square(a) + square(b));
// }
//    var x = +prompt("Enter the value of base");
//    var y = +prompt("Enter the value of perpandicular");
//    function result(){
//    result = hypotenuse(x,y);
//    result=Math.round(result)
//    document.write ( result );
//    }
//    result();

// task 09

//  function RectangleArea(a,b){
//       let Area = a*b;
//       return Area;
//  }
// //  var z = RectangleArea(10,10);
// let x = 3;
// let y = 4;
//  var z = RectangleArea(x,y);
//  console.log(`The area of Rectangle is: ${z} `)

// task 10
// var x = +prompt("Enter The Width");
// var y = +prompt("Enter The height");
//  document.write("AREA OF TRIANGLE: "+ z);


// task 10b
// var checker = '';
// function palindrome(str){
//     for(let i = str.length;i>0;i--){
//         checker += str[i];     
//     }
//     if(checker = str){
//         console.log(`String ${str} is a Palindrome Word`);
//     }
//     else{
//         console.log(`String ${str} is not a Palindrome Word`);
//     }
// }
// let string = prompt("Enter any String to Check Palindrome");
// palindrome(string);


// task 11

// function titleCase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase('the quick brown fox jumps over dog'));


// task 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// task 14

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('Naveed Hussain', 'o'));



// The Geometrizer 

// const circumferenece = (radius) =>{
//     var circumferenece = 2 * 3.142 * radius;
//     return circumferenece;
// }

// const area = (radius) =>{
//     var area = 3.142 * radius * radius;
//     return area;
// }
// let r = 3;
// let cir_circle = circumferenece(r)
// let area_cir = area(r)
// console.log(`Circumference of Circle is ${cir_circle}`)
// console.log(`Area of Circle is ${area_cir}`)







