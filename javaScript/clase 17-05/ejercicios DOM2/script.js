const beepButton = document.getElementById('beepButton')

function seEjecutaEnEvento(){
    document.body.insertAdjacentHTML('beforeend', '<p>BEEP</p>')
    document.body.classList.toggle('color')
}

beepButton.addEventListener('click', seEjecutaEnEvento)

const parrafos = document.querySelectorAll('p')

for(const parrafo of parrafos){
    parrafo.addEventListener('click', function(){
        parrafo.classList.toggle('resaltado')
    })
}

const divMagia = document.getElementById("magia");
const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", function() {
    divMagia.style.display = "block";
});

imagen.addEventListener("mouseout", function() {
    divMagia.style.display = "none";
});

const showMoneyButton = document.getElementById("showMoney");
const showMiamiButton = document.getElementById("showMiami");
const showMaiameeeButton = document.getElementById("showMaiameee");
const images = document.querySelectorAll("img");

showMoneyButton.addEventListener("click", function() {
    images[0].classList.toggle("oculto");
});

showMiamiButton.addEventListener("click", function() {
    images[1].classList.toggle("oculto");
});

showMaiameeeButton.addEventListener("click", function() {
    images[2].classList.toggle("oculto");
});

images.forEach(function(image) {
    image.addEventListener("click", function() {
        image.classList.add("oculto");
    });
});