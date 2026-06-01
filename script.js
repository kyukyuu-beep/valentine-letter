const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

openBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();

    if(name !== ""){
        message.innerHTML = `Dear ${name}, ❤️`;
    }

    envelope.classList.toggle("open");

    if(envelope.classList.contains("open")){
        openBtn.textContent = "Close Letter";
    }else{
        openBtn.textContent = "Open Letter";
    }
});

musicBtn.addEventListener("click", () => {

    if(music.paused){
        music.play();
        musicBtn.textContent = "⏸ Pause Music";
    }else{
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }

});

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration =
        (Math.random()*3 + 3) + "s";

    document.querySelector(".hearts")
        .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createHeart,300);