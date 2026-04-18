// 🔥 ELEMENTOS
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalOrganizer = document.getElementById("modal-organizer");
const whatsappLink = document.getElementById("whatsapp-link");
const mensaje = document.getElementById("mensaje");

// 🎬 FUNCIÓN PARA REINICIAR ANIMACIÓN DEL TEXTO
function animarMensaje() {
  mensaje.classList.remove("animar");
  void mensaje.offsetWidth; // 👈 reinicia animación
  mensaje.classList.add("animar");
}

// 🚀 ABRIR MODAL
function openModal(evento, organizador, numero) {
  modal.style.display = "flex";

  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  // Insertar datos
  modalTitle.textContent = evento;
  modalOrganizer.textContent = "Organizador: " + organizador;

  // 👉 Ahora es link de grupo
  whatsappLink.href = numero;

  // 🔥 Cambiar mensaje + animar
  mensaje.textContent = `Estás viendo: ${evento}`;
  animarMensaje();
}

// ❌ CERRAR MODAL
function closeModal() {
  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
  }, 300);

  // Restaurar mensaje + animar
  mensaje.textContent = "Haz clic en un evento para ver detalles e inscribirte";
  animarMensaje();
}

// 👆 CERRAR AL HACER CLICK FUERA
window.onclick = function (e) {
  if (e.target === modal) {
    closeModal();
  }
};

// ⌨️ EXTRA PRO: cerrar con tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});