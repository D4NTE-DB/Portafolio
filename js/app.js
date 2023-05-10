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
    const copyButton = document.getElementById('boton-a-copiar');
const enEs = document.querySelector(".button-trans")   
const spanName = document.querySelector("span")
const h1Text = document.querySelectorAll("h1")
const anchors = document.querySelectorAll('a')
const pText = document.querySelectorAll("p")
const h2Title = document.querySelectorAll("h2")
const hireMe= document.getElementsByClassName("home-bt")
const h4Text = document.querySelectorAll("h4")
const navBg = document.querySelector(".nav-bg");
const navToggle = document.querySelector(".nav-toggle");
const body = document.querySelector("body");
const list = document.querySelectorAll(".list");
const btnDownload = document.getElementsByClassName("home-btn")

let isTogg = false;
let info = '';
let infoDownload = '';
enEs.addEventListener("click", () => {
    isTogg = !isTogg;
    console.log("sss")
    spanName.innerHTML = isTogg ? `Hola, Soy Daniel Babilonia` : `Hi, I'm Daniel Babionia`
    for (let index = 0; index < anchors.length; index++) {
      console.log(anchors[index])
      
    }
    console.log(`sss ${anchors[13]}`)
    // console.log(anchors)
    list[0].innerHTML = isTogg ? 'Inicio' : `Home`
    list[1].innerHTML = isTogg ? 'Sobre Mí' : `About Me`
    list[2].innerHTML = isTogg ? 'Tecnologías' : `Technologies`
    list[3].innerHTML = isTogg ? 'Experiencía' : `Experience`
    list[4].innerHTML = isTogg ? 'Portafolio' : `Portfolio`
    list[5].innerHTML = isTogg ? 'Contáctame' : `Contact Me`
    h2Title[3].innerHTML = isTogg ? 'Sobre Mí' : `About Me`
    h2Title[4].innerHTML = isTogg ? 'Tecnologías' : `Technologies`
    h2Title[5].innerHTML = isTogg ? 'Experiencía' : `Experience`
    h2Title[6].innerHTML = isTogg ? 'Portafolio' : `Portfolio`
    h2Title[10].innerHTML = isTogg ? 'Contáctame' : `Contact Me`
    pText[0].innerHTML = isTogg ? `Soy un desarrollador web apasionado y con experiencia, con habilidades en el desarrollo tanto en el front-end como en el back-end. Como desarrollador independiente, he trabajado en diversos proyectos y siempre estoy ansioso por aprender nuevas tecnologías. Poseo excelentes habilidades sociales, desarrolladas a través de mi experiencia previa en servicio al cliente, lo que me permite comunicarme efectivamente y brindar soluciones que superan las expectativas.` : `I am a passionate web developer with expertise in both front-end and back-end development. As a freelance developer, I have worked on diverse projects and I am always eager to learn new technologies. I possess excellent soft skills, developed through my previous work in customer service, allowing me to effectively communicate and deliver solutions that exceed expectations.`
    pText[1].innerHTML = isTogg ? '2023 - Presente' : `2023 - Present`
    // pText[4].innerHTML = isTogg ? 'Número Telefono' : `Phone Number` 
    pText[5].innerHTML = isTogg ? 'Número Telefono' : `Phone Number` 
    h4Text[0].innerHTML = isTogg ? 'Especialista en Soporte Técnico' : `Technical Support Specialist`
    h4Text[2].innerHTML = isTogg ? 'Desarrollador Front End' : `Front End Developer`
    h4Text[4].innerHTML = isTogg ? 'Representante Bilingüe de Servicio al Cliente' : `Bilingual Customer Service Representative`
    h4Text[6].innerHTML = isTogg ? 'Desarrollador Front End' : `Front End Developer`
    h1Text[0].innerHTML = isTogg ? 'Desarrollador Web' : `Web Developer`
    btnDownload[0].innerHTML = isTogg ? 'DESCARGAR HV' : `DOWNLOAD CV`
    info = isTogg ? 'mailto:dantealigheri.1998@gmail.com?Subject=Me%20gustaría%20empezar%20a%20trabajar%20contigo!' : `mailto:dantealigheri.1998@gmail.com?Subject=I%20Would%20like%20to%20start%20working%20with%20you!`
    anchors[18].setAttribute('href', info)
    anchors[12].setAttribute('href', info)
    infoDownload = isTogg ? 'mailto:dantealigheri.1998@gmail.com?Subject=Me%20gustaría%20empezar%20a%20trabajar%20contigo!' : `mailto:dantealigheri.1998@gmail.com?Subject=I%20Would%20like%20to%20start%20working%20with%20you!`
    infoDownload = isTogg ? './downloads/ES Daniel Babilonia CV DEF.pdf' : './downloads/EN Daniel Babilonia CV DEF.pdf'
    anchors[14].setAttribute('href', infoDownload)
    hireMe[0].innerHTML = isTogg ? 'CONTACTAME' : `HIRE ME`
})

// new ClipboardJS('#boton-a-copiar', {
//     text: function(trigger) {
//         console.log("perrito")
//       return trigger.getAttribute('data-clipboard-target');
//     }
//   });



copyButton.addEventListener('click', function() {
    console.log('222')
    var clipboard = new ClipboardJS(copyButton, {
      text: function() {
        return pText[6].textContent.replace(/\s+/g, '');
      }
    });

    clipboard.on('success', function(e) {
      console.log('Text copied to clipboard: ' + e.text.replace(/\s+/g, ''));
      clipboard.destroy();
    });

    clipboard.on('error', function(e) {
      console.error('Error copying text to clipboard: ' + e.text.replace(/\s+/g, ''));
      clipboard.destroy();
    });
  });
  


