// Función para la Galería de Imágenes
function cambiarImagen(url) {
    // Busca el elemento con el ID que definiste en tu HTML
    const visor = document.getElementById('viewfinder');
    
    // Si el elemento existe, cambia su fuente (src) por la de la miniatura clickeada
    if (visor) {
        visor.src = url;
    }
}



function agregarTarea() {
    const input = document.getElementById('taskInput');
    const lista = document.getElementById('taskList');
    
    // Verificamos que el usuario haya escrito algo
    if (input && input.value.trim() !== "") {
        const li = document.createElement('li');
        
        // Creamos el contenido de la nota con un botón para eliminarla
        li.innerHTML = `
            <span onclick="this.parentElement.classList.toggle('completada')">${input.value}</span>
            <button class="btn-borrar" onclick="this.parentElement.remove()">Eliminar</button>
        `;
        
        lista.appendChild(li);
        input.value = ""; // Limpiamos el input para la próxima nota
    }
}