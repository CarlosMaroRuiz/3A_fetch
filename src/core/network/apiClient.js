//clase que nos permite interactuar con las enpoints
//utilizando metodos get,post,delete, etc...
class ApiClient {

    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async get(endpoint) {
        //let url = this.baseUrl + endpoint
        try {
            let url = `${this.baseUrl}${endpoint}`
            let response = await fetch(url)
            return await response.json()
        } catch (error) {
          throw error
        }
    }
}
/*
1-exportar la clase
2-crear una instancia de ello.
*/
export const apiClient = new ApiClient("https://api-scalar-swagger.onrender.com/api/")