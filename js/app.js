const INFO = [
    {
            header: {
            name: "Daniel."
        }, 
        name: "Pablo Babilonia",
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

const enEs = document.querySelector(".button-trans")   
const spanName = document.querySelector("span")
const h1Text = document.querySelectorAll("h1")
const pText = document.querySelectorAll("p")
const h2Title = document.querySelectorAll("h2")
const h4Text = document.querySelectorAll("h4")
const navBg = document.querySelector(".nav-bg");
const navToggle = document.querySelector(".nav-toggle");
const body = document.querySelector("body");
const list = document.querySelectorAll(".list");
const btnDownload = document.getElementsByClassName("home-btn")

let isTogg = false;
enEs.addEventListener("click", () => {
    isTogg = !isTogg;
    console.log("sss")
    spanName.innerHTML = isTogg ? `Hola, Soy Daniel Babilonia` : `Hi, I'm Daniel Babionia`
    console.log(h2Title[10])
    list[0].innerHTML = isTogg ? 'Inicio' : `Home`
    list[1].innerHTML = isTogg ? 'Sobre Mí' : `About Me`
    list[2].innerHTML = isTogg ? 'Tecnologías' : `Technologies`
    list[3].innerHTML = isTogg ? 'Experiencía' : `Experience`
    list[4].innerHTML = isTogg ? 'Portfolio' : `Portafolio`
    list[5].innerHTML = isTogg ? 'Contáctame' : `Contact Me`
    h2Title[3].innerHTML = isTogg ? 'Sobre Mí' : `About Me`
    h2Title[4].innerHTML = isTogg ? 'Tecnologías' : `Technologies`
    h2Title[5].innerHTML = isTogg ? 'Experiencía' : `Experience`
    h2Title[6].innerHTML = isTogg ? 'Portafolio' : `Portfolio`
    h2Title[10].innerHTML = isTogg ? 'Contáctame' : `Contact Me`
    pText[0].innerHTML = isTogg ? 'Soy un desarrollador con experiencia en la creación de sitios web para pequeñas y medianas empresas. Ya sea que esté tratando de ganar trabajo, listar sus servicios o incluso crear una tienda en línea completa, puedo ayudar. Además, trabajé como Representante de servicio al cliente bilingüe para eBay durante más de un año, por lo que puedo proporcionar una excelente perspectiva en cuanto a plataformas de comercio electrónico o diseños de UX-UI.' : `I'm a developer with experience in building websites for small and medium sized businesses. Whether you're trying to win work, list your services or even create a whole online store - I can help, I also worked for eBay as Bilingual Customer Service Representative for more than a year, so I can provide a really good insight when it comes from e-commerce platforms or UX-UI desings.`
    pText[1].innerHTML = isTogg ? '2023 - Presente' : `2023 - Present`
    pText[4].innerHTML = isTogg ? 'Número Telefono' : `Phone Number` 
    h4Text[0].innerHTML = isTogg ? 'Especialista en Soporte Técnico' : `Technical Support Specialist`
    h4Text[2].innerHTML = isTogg ? 'Desarrollador Front End' : `Front End Developer`
    h4Text[4].innerHTML = isTogg ? 'Representante Bilingüe de Servicio al Cliente' : `Bilingual Customer Service Representative`
    h1Text[0].innerHTML = isTogg ? 'Desarrollador Web y Representante de Servicio al cliente Bilingüe' : `Web Developer and Bilingual Customer Service Representative`
    btnDownload[0].innerHTML = isTogg ? 'DESCARGAR HV' : `DOWNLOAD CV`
})

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


