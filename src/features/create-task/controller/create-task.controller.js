import { createTask } from "../services/create-task.services.js";

class CreateController {

    constructor() {
        this.taskService = createTask;
    }

    async createNewTask(data) {
     

        try {
            const newTask = await this.taskService.createTask(data);
            return newTask;

        } catch (error) {
            console.warn("Error al crear la tarea");
            console.error(error);
            throw error;
        }
    }
}

export const createController = new CreateController();
