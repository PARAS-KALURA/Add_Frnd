const istatus = document.querySelector("h5")
const btn = document.querySelector("#add")
// const removeFrnd = document.querySelector("#remove")

let check = 0;

btn.addEventListener("click", function(){
    if(check == 0){
      istatus.innerHTML = "FRIENDS";
      istatus.style.color = "green";
      btn.innerHTML = "Remove Friend";
      check = 1;
      }
      else{
        istatus.innerHTML = "STRANGER";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;
      }
      
})

// removeFrnd.addEventListener("click",function(){
//     istatus.innerHTML = "STRANGER"
//     istatus.style.color = "red"
// })

