let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let turnO=true;
const winpatterns = {
    0: [0, 1, 2],
    1: [3, 4, 5],
    2: [6, 7, 8],
    3: [0, 3, 6],
    4: [1, 4, 7],
    5: [2, 5, 8],
    6: [0, 4, 8],
    7: [2, 4, 6]
};
boxes.forEach((box) => {
box.addEventListener("click",()=>{
    console.log("box was clicked");
   
    if(turnO)
    {
        box.innerHTML="O";
        turnO=false;
    }
    else{
        box.innerHTML="X";
        turnO=true;
    }
box.disabled = true; 
checkwinner();

})
})

const checkwinner = () => {
    for (let pattern of Object.values(winpatterns) ){
        console.log(pattern); 
    }
}