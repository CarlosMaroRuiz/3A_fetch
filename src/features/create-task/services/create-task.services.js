import { apiClient } from "../../../core/network/apiClient.js";

class CreateTask {
    constructor() {
        this.client = apiClient;
    }

    async createTask(data) {
        try {
            const result = await this.client.post("tareas", data);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export const createTask = new CreateTask();
