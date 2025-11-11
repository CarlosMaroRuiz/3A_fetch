import { getTasks } from "../services/getTaskServices.js"
class GetController{

    constructor(){
       this.taskServices = getTasks
    }
    async getTasks(){
        /*
        En este getTask vinculara lo que es servicio con iu
        1-llamamos servicio y obtenemos datos
        2-esos datos renderizamos con nuestra logica de iu
        */
   
       try{
        let tasks = await this.taskServices.getTasks()
        console.log("datos del servicio")

        console.table(tasks)

       }catch(error){
          console.warn("Parece que hubo un error")
          console.log(error)
       }
    }
}

export const getController = new GetController()