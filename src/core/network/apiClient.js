//clase que nos permite interactuar con las enpoints
//utilizando metodos get,post,delete, etc...
class ApiClient {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        try {
            let url = `${this.baseUrl}${endpoint}`;
            let response = await fetch(url);
            return await response.json();
        } catch (error) {
            throw error;
        }
    }

    async post(endpoint, data) {
        try {
            const url = `${this.baseUrl}${endpoint}`;

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Error POST ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}

/*
1-exportar la clase
2-crear una instancia de ello.
*/
export const apiClient = new ApiClient("https://api-scalar-swagger.onrender.com/api/")