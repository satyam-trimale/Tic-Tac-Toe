let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn")
let resetBtn = document.querySelector('#reset')

let turn0 = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(turn0){
            //Player 0
            
            box.innerText = "O";
            box.style.color = "#736372";
            turn0 = false;

        }else{
            box.innerText = "X"
            box.style.color = "#A18276"
            turn0 = true
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const ShowWinner = (winner) => {
    if(count == 9){
        msg.innerText = `It's a tie`;
    }else{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){ 
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner",pos1Val);
            ShowWinner(pos1Val);

        }
    }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);