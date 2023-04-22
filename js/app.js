const INFO = [
    {
            header: {
            name: "Daniel."
        }, 
        name: "Daniel Babilonia",
        title: "Designer and Web Developer",
        aboutme: "I'm a developer with experience in building websites for small and medium sized businesses. Whether you're trying to win work, list your services or even create a whole online store - I can help, I also worked for eBay as Bilingual Customer Service Representative for more than a year, so I can provide a really good insight when it comes from e-commerce platforms or UX-UI desings!",
        technologies: [
            {
                title: "Javascript",
                img: `<box-icon name='javascript' type='logo' size="large"></box-icon>`,
            }
        ]
    },
    
       
    
    
    ]
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


