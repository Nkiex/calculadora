document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".boton");
    const pantalla = document.querySelector("#pantalla");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const botonPresionado = boton.textContent;

            if(boton.id === "c"){
                pantalla.textContent = "0";
                return;
            }

            if(boton.id === "borrar"){
                if(pantalla.textContent.length === 1 || pantalla.textContent === "error"){
                    pantalla.textContent = "0";
                }else{
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                }
                return;
            }

            if(boton.id === "igual"){
                try{
                    pantalla.textContent = eval(pantalla.textContent);
                    return;
                }catch{
                    pantalla.textContent = "error";
                }
                return;
            }

            if(boton.id === "raiz"){
                try {
                    pantalla.textContent = Math.sqrt(eval(pantalla.textContent));
                } catch {
                    pantalla.textContent = "error";
                }
                return;
            }
                

            if(pantalla.textContent === "0" || pantalla.textContent === "error"){
                pantalla.textContent = botonPresionado;
            }else{
                pantalla.textContent += botonPresionado;
            }
        });
    });
});