let rules=document.getElementById('rules-container')
let displayRules=0
let x = Math.floor((Math.random() * 3) + 1)
let youSelect=document.querySelectorAll(".game-btn")
let triangle=document.getElementById("triangle")
youSelect.forEach((element)=>{
    element.addEventListener("click",()=>{
        console.log(element)
        youSelect.forEach(item=>{
            item.style.display="none"
        });
        triangle.style.display="none"
    })
})

function hideRules(){
    if(displayRules==1){
        rules.style.display='block';
        displayRules=0;
    }
    else{
        rules.style.display='none';
        displayRules=1;
    }
}