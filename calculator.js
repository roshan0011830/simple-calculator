console.log("welcome to calculator working---->");

let bottomPart = document.querySelector(".calc-bottom");
console.log(bottomPart);

bottomPart.addEventListener("click", handleButton)

let h1 = document.querySelector("h1");
console.log(h1);

let string = "";

let result;

//display select 
let display = document.querySelector("#display p");
console.log(display);

function handleButton(e){
    console.log("click hua hai");
    let clickedBtn = e.target;
    console.log(clickedBtn);

    console.log("ye likha hua hai abhi : ",clickedBtn.innerText);

    if(clickedBtn.innerText === "="){
        console.log("equal to dabaya mc");

        try {
            result = eval(string);
        } catch (error) {

            result = "Error";
            
        }
        console.log(result);

        display.innerText = `${result}`;

        string = "";


        
        
        
        
    }
    else if(clickedBtn.innerText === "Clear") {
        console.log("clear dabaya mc");

        

        display.innerText = "|";

        string = "";
        
    }
    else{
        console.log("normal calculation krdo");

        string += clickedBtn.innerText;
        console.log("string :",string); 

        display.innerText = `${string}`;
    }

}

// h1.addEventListener("click", handleh1);


//extra for keyboard functionality

document.addEventListener("keydown", (e) => {
  const validKeys = /[0-9+\-*/.=]|Enter|Backspace/;
  if (validKeys.test(e.key)) {
    if (e.key === "Enter") handleButton({target: {innerText: "="}});
    else if (e.key === "Backspace") handleButton({target: {innerText: "C"}});
    else handleButton({target: {innerText: e.key}});
  }
});


