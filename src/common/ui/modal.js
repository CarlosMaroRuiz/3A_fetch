export function createModal(message) {
   
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    // Crear la tarjeta modal
    const modal = document.createElement("div");
    modal.className = "modal-box";

    // Texto del mensaje
    const msg = document.createElement("p");
    msg.textContent = message;

    const btnClose = document.createElement("button");
    btnClose.textContent = "Cerrar";
    btnClose.className = "modal-btn";

    btnClose.addEventListener("click", () => {
        overlay.remove();
    });

    modal.appendChild(msg);
    modal.appendChild(btnClose);
    overlay.appendChild(modal);

  
    document.body.appendChild(overlay);
}
