
var arr = [
    {dp:"https://images.pexels.com/photos/9962890/pexels-photo-9962890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story:"https://images.unsplash.com/photo-1593783162886-d2277f7d5908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {dp:"https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
story:"https://images.unsplash.com/photo-1515734392280-e60c25eb9f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
},
    {dp:"https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
story:"https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
},
    {dp:"https://images.unsplash.com/photo-1580923368248-877f237696cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
story:"https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
},
    {dp:"https://images.pexels.com/photos/16574646/pexels-photo-16574646/free-photo-of-fashion-people-cute-flag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
story:"https://images.unsplash.com/photo-1562398766-0f40f880a33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80"
},
]

var storyLine = document.querySelector("#card")

var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="storyCricle">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storyLine.innerHTML = clutter

storyLine.addEventListener("click",function(dets){
    document.querySelector("#fullStory").style.display = "block"
    document.querySelector("#fullStory").style.backgroundImage =`url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector("#fullStory").style.display = "none"
    },1500)
    
})

let btn =  document.querySelector("button");

let flag = 0
btn.addEventListener("click",function(){
    if(flag == 0 ){
        btn.innerHTML = "UnFollow"
        flag = 1;
    }else{
        btn.innerHTML = "Follow"
        flag = 0;
    }
})

let card = document.querySelector(".image");
let popUp = document.querySelector(".pop-up");
let heart = document.querySelector(".heart")

card.addEventListener("dblclick", function(){
    popUp.style.transform = "translate(-50%,-50%) scale(1)"
    popUp.style.opacity = "0.9"
    heart.style.opacity = "1"
    heart.style.transform = "scale(1.2)"
    setTimeout (function(){
        popUp.style.transform = "translate(-50%,-50%) scale(0)" 
        popUp.style.opacity = "0"
        
        heart.style.transform = "scale(1)"
    },1000)
})

let check = 0
heart.addEventListener("click",function(){
    if (check == 0){
        popUp.style.transform = "translate(-50%,-50%) scale(1)"
        popUp.style.opacity = "0.9"
        heart.style.opacity = "1"
        heart.style.transform = "scale(1.2)"
        setTimeout (function(){
            popUp.style.transform = "translate(-50%,-50%) scale(0)" 
            popUp.style.opacity = "0"
            heart.style.transform = "scale(1)"
        },1000)
        check = 1;
    }else{
        heart.style.opacity = "0"
        check = 0;
    }

})

var crsr = document.querySelector(".cursor")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
   
})

