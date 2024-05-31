document.getElementById('enterButton').addEventListener('click', function() {
  window.location.href = "../pages/realpage.html"; // Reemplaza 'page2.html' con la URL de la verdadera página
});

function changeColorAndGoBack(element) {
        element.classList.add("selected"); // Agrega la clase "selected" al logo para cambiar su color
        window.history.back(); // Navega hacia atrás en la historia del navegador
}