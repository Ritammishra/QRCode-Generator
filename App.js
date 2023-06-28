const wrapper = document.querySelector(".main");
const generateBtn = document.querySelector(".submit");
let qrimg = wrapper.querySelector("img")
let user_Input = document.getElementById("input");

generateBtn.addEventListener("click" ,()=>{
    let userInput = user_Input.value;
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${userInput}`
    wrapper.classList.add('active')
})





