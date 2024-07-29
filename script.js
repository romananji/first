const headingElement=document.getElementById("heading");
const button=document.getElementById("button");
const para=document.getElementById("para")
button.addEventListener("click", async function(){
    headingElement.textContent="heading changed";
    headingElement.style.color="blue";
    headingElement.style.fontWeight="bold";
    headingElement.style.fontFamily="Bree Serif";

    const response=await fetch("/notes/");
    const data=await response.text();
    para.textContent=data;
})