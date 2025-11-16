import { createController } from "./controller/create-task.controller.js";
import { createModal } from "../../common/ui/modal.js";

const form = document.getElementById("formTarea");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const descripcion = document.getElementById("descripcion").value;

    try {
        await createController.createNewTask({ descripcion });
        createModal("Tarea creada correctamente");
        form.reset();
    } catch (error) {
        createModal("No se pudo crear la tarea");
    }
});
