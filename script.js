let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg");
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
const enableboxes = () => {
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
            msgcontainer.classList.add("hide");
        }

}
const resetGame = () => {
    turnO=true;
    enableboxes();
}
const disableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const showWinner=(winner)=>
{
msg.innerText = `Congratulations, winner is ${winner}`;

msgcontainer.classList.remove("hide");
disableboxes();
}
const checkwinner = () => {
    for (let pattern of Object.values(winpatterns) ){
         let pos1val= boxes[pattern[0]].innerText;
         let pos2val=   boxes[pattern[1]].innerText;
         let pos3val=  boxes[pattern[2]].innerText;

         if(pos1val!="" && pos2val!="" && pos3val!="")
         {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
         }
        }
     
    }









let select=document.getElementById("select");
select.addEventListener("change",()=>{
let selectedcolor=select.value;
document.body.style.backgroundColor=selectedcolor;
})

newgamebtn.addEventListener("click",enableboxes);
resetbtn.addEventListener("click",resetGame);