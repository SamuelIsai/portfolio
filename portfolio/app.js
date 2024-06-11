const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY >0);
})

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";

        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className = "";
    }
}

/*const links = document.querySelectorAll("#nav a");
for(i = 0; i < links.length; i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}*/

const links = document.querySelectorAll("#nav a");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href"); 
        const targetElement = document.querySelector(targetId);

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        const duration = 1000;

        const step = Math.abs(targetPosition - window.scrollY) / (duration / 23); 

        smoothScroll(targetPosition, step);
    });
});

function smoothScroll(targetPosition, step) {
    const direction = targetPosition > window.scrollY ? 1 : -1;

    const newScrollPosition = window.scrollY + step * direction;

    window.scrollTo(0, newScrollPosition);

    if ((direction === 1 && newScrollPosition < targetPosition) || (direction === -1 && newScrollPosition > targetPosition)) {
        setTimeout(() => {
            smoothScroll(targetPosition, step);
        }, 16);
    }
}



const testimonials = [
    {
        quote: `Yo Herbert René Cordero Henríquez, Licenciado de profesión y docente de la Universidad Gerardo Barrios, doy mi recomendación por este medio de Samuel Isaí Mejía Alfaro quien es mi estudiante, cursando la carrera de Ingeniería en Sistemas y Redes Informáticas y conozco desde hace 4 años.
        Como estudiante ha mostrado respeto a los docentes y compañeros, completa dedicación a las actividades y proyectos de estudio. Demuestra poseer buenas habilidades, trabajo en equipo y disponibilidad en los quehaceres de la Facultad de Ciencia y Tecnología y gran sentido de responsabilidad.
        Es una excelente persona, con gran carisma y habilidades sociales; su forma de pensar estratégica la hace muy apta para desarrollar cualquier tarea. Por su aptitud y actitud tiene gran interés por superarse. Por lo que estoy seguro que llegará a ser una de las mejores en lo que se dedique o emprenda.
        Para los usos que la interesada estime conveniente, se extiende la presente a los once días del mes de junio de dos mil veinticuatro.`,
        author: "Lic. Herbert Cordero",
        position: "Docente de la Facultad de Ciencia y Tecnología",
        img: "https://via.placeholder.com/100"
    },
    {
        quote: `Yo Oscar Roberto Torres Rodríguez, Licenciado en Computación del origen y domicilio de Santa Elena y actualmente docente tiempo completo de la Facultad de Ciencias y Tecnologías de la Universidad Gerardo Barrios de Usulután, HAGO CONSTAR QUE:
            Samuel Isaí Mejía Alfaro, es estudiante del ciclo VII de Ingeniería en Sistemas y Redes Informática, de la Universidad “Gerardo Barrios”, afirmo que él es una persona de excelente conducta, honrado, intachable, responsable en todos sus actos y en cuanto a su rol como estudiante es disciplinado, autodidacta, y su participación en equipo es ejemplar, mostrando una capacidad para colaborar efectivamente con sus compañeros. Además, posee un amplio dominio en áreas clave como redes y bases de datos, y su disposición para compartir estos conocimientos promete contribuir significativamente al avance de la comunidad académica y profesional.  
            Para los usos que el interesado estime conveniente, le extiendo la presente en la ciudad de Usulután a los 11 días del mes de junio del 2024.`,
        author: "Lic. Óscar Torres",
        position: "Docente de la Facultad de Ciencia y Tecnología",
        img: "https://via.placeholder.com/100"
    },
    {
        quote: `Reciba un cordial y respetuoso saludo. A través de estas lineas deseo hacer de su conocimiento que Samuel Isai Mejia Alfaro quien es estudiante de la carrera de ingeniera en sistema y
            redes informáticas, es un estudiante con una conducta intachable. Ha demostrado ser un ordenado,
            comprometido, responsable y fiel cumplidor de sus tareas. Siempre ha manifestado preocupación
            por mejorar, capacitarse y actualizar sus conocimientos.
            
            Durante este ciclo I-2024 se ha desempeñado de forma excelente en la asignatura de robótica,
            desarrollando un robot basado en software y hardware libre. Es por ello que, le sugiero
            esta recomendación, con la confianza de que estará siempre a la altura de sus compromisos y
            responsabilidades.
            
            Sin mas nada a que referirme y, esperando que esta misiva sea tomada en cuenta, dejo mi correo de
            contacto para cualquier informacion de interés.`,
        author: "Ing. Marvin Parada",
        position: "Docente de la Facultad de Ciencia y Tecnología",
        img: "https://via.placeholder.com/100"
    },
    {
        quote: `Yo Alcir Gustavo Quintanilla Rodríguez, Ingeniero de profesión y docente de la 
            Universidad Gerardo Barrios, doy mi recomendación por este medio de Mejía Alfaro 
            Samuel Isaí quien es mi estudiante, cursando la carrera de Ingeniería en Sistemas y 
            Redes Informáticas y conozco desde hace 4 años. 
            Como estudiante ha mostrado respeto a los docentes y compañeros, completa 
            dedicación a las actividades y proyectos de estudio. Demuestra poseer buenas 
            habilidades, trabajo en equipo y disponibilidad en los quehaceres de la Facultad de 
            Ciencia y Tecnología y gran sentido de responsabilidad. 
            Es una excelente persona, con gran carisma y habilidades sociales; su forma de 
            pensar estratégica lo hace muy apto para desarrollar cualquier tarea. Por su aptitud 
            y actitud tiene gran interés por superarse. Por lo que estoy seguro que llegará a ser 
            unos de las mejores en lo que se dedique o emprenda. 
            Para los usos que la interesada estime conveniente, se extiende la presente a los diez 
            días del mes de junio de dos mil veinticuatro.`,
        author: "Ing. Alcir Quintanilla",
        position: "Docente de la Facultad de Ciencia y Tecnología",
        img: "https://via.placeholder.com/100"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    document.querySelector('.quote').textContent = testimonial.quote;
    document.querySelector('.author').textContent = testimonial.author;
    document.querySelector('.position').textContent = testimonial.position;
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

document.addEventListener('DOMContentLoaded', updateTestimonial);
