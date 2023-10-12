var h1Element = document.querySelector('h1');

var button = document.querySelector('.click');


    button.addEventListener("click", function() {
        h1Element.textContent = "Text has been changed!";
    });

    document.getElementById("demo").innerHTML = 5 + 6;

const arr = [1,2,3,4,5,6,7,3,7]

const duplicate = arr.filter((err,index,arr)=>arr.indexOf(err)!==index)
console.log(duplicate); 

var str = 'Ankitha'
console.log(str);

var x = 2;
var y = "2";
console.log("value",x==y);
console.log("value",x===y);


function higherOrder(fn) {
    fn();
  }
     
  higherOrder(function() { console.log("Hello world") });

  function higherOrder2() {
    return function() {
      return "Do something";
    }
  }      
  var x = higherOrder2();
  x()   // Returns "Do something"

  const arrayNumber = [1,2,3,4]
  const sum = arrayNumber.reduce((acc,curr)=>{
    return acc + curr
  })

  console.log("arrayNumber",sum);


  const number = [1,2,3,4,5]
  number.forEach(numbers =>{
    console.log("Numbers",numbers);
  })

  const filters = [4,55,66,77]
  const valuFilter = filters.filter(n=>{
    return n > 5
  })

  console.log("FilteredValue",valuFilter);


  const lists = ["Apple","Banana","fruit","Graphs"]

  const finalList = lists.map(item=>{
    return item
  })

  console.log("finalList",finalList);


  var globalVar = "Hello world"
  
  function function1(){
    return globalVar
  }

  function function2(){
    return function1
  }

  var funVal = function2()
  console.log("funVal",funVal);