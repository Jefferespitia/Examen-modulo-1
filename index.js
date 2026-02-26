    const ratingButtons = document.querySelectorAll(".rating-button");
    const submitButton = document.querySelector(".submit-btn");
    const component = document.querySelector(".component");
    const greetings = document.querySelector(".greetings");

    ratingButtons.forEach(button => {
        button.addEventListener("click", () => {
            ratingButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });
    });

    submitButton.addEventListener("click", () => {
        const selectedRating = document.querySelector(".rating-button.selected");
        if (selectedRating) {
            const ratingValue = selectedRating.textContent;
            // Crear elemento para mostrar la selección
            let selectionText = greetings.querySelector(".selection-text");
            if (!selectionText) {
                selectionText = document.createElement("p");
                selectionText.className = "selection-text";
                greetings.insertBefore(selectionText, greetings.querySelector("h1"));
            }
            selectionText.textContent = `Seleccionaste ${ratingValue} de 5`;
            // Ocultar componente inicial y mostrar saludos
            component.style.display = "none";
            greetings.classList.add("show");
        } else {
            alert("Por favor, selecciona una calificación antes de enviar.");
        }
    });
