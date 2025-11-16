export function createLabelTask(task) {
    // 1. Crear contenedor principal
    const labelContainer = document.createElement('div');
    labelContainer.className = "label-container";

    // 2. Crear checkbox
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.className = "task-checkbox";

    // 3. Crear elemento de texto
    const title = document.createElement('span');
    title.textContent = task.descripcion;
    title.className = "task-title";

    // Si está completada, poner estilo tachado
    if (task.completed) {
        title.classList.add("completed");
    }

    // 4. Agregar evento para actualizar estado visual
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            title.classList.add("completed");
        } else {
            title.classList.remove("completed");
        }
    });

    // 5. Agregar todo al contenedor
    labelContainer.appendChild(checkbox);
    labelContainer.appendChild(title);

    // 6. Retornar el componente armado
    return labelContainer;
}
