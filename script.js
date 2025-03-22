let fun = document.querySelectorAll(".log");
        fun.forEach(element => {
            element.style.color = "white";
        });

        setTimeout(() => {
            fun[0].innerHTML = 'ねぇねぇ、ゆう 😙'
        }, 2000);
        setTimeout(() => {
            fun[1].textContent = "ゆうが大丈夫だといいな💖"
        }, 4000);

        setTimeout(() => {
            fun[2].textContent = 'またゆうに会えてめっちゃ嬉しい🙃';
        }, 6000);

        setTimeout(() => {
            fun[3].textContent = "本当に😁"
        }, 8000);
        
        setTimeout(() => {
            let exit = document.querySelector(".exit");
            let song = new Audio("./song.mp3")
            exit.innerHTML="Once You done reading that, Click Anywhere on the site";
            document.addEventListener("click", () =>{
                document.querySelector(".panda").classList.add("active");
                document.querySelector(".container").classList.add("active");
                document.querySelectorAll(".log").forEach(element => {
                    element.classList.add("active");
                });
                document.querySelector(".exit").classList.add("active");
                song.play();
                document.querySelector(".mainMessage").classList.add("active");
                document.querySelector(".infoCircle").classList.add("active");
                
            });

        }, 10000);

        document.querySelector(".infoCircle").addEventListener("click", (e) => {
            document.querySelector(".about").classList.toggle("active");
            e.stopPropagation();
        });