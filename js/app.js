const navBg = document.querySelector(".nav-bg");
const navToggle = document.querySelector(".nav-toggle");
const body = document.querySelector("body");
const list = document.querySelectorAll(".list");

navToggle.addEventListener("click", ()=> {

    if (navBg.style.display == "block"){
        navBg.style.display = "none";
    }else{
        navBg.style.display = "block";
    }
})

function copyFunction() {
    const copyText = document.getElementById("myInput").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    k2button.innerText = "Text copied";
      textArea.remove();
}

document.getElementById('k2button').addEventListener('click', copyFunction);


