import { apiClient } from "../../../core/network/apiClient.js"
class GetTask{
    constructor(){
        this.client = apiClient
    }
    async getTasks(){
        let result = await this.client.get("tareas")
        return result
    }
}
export const getTasks = new GetTask()
