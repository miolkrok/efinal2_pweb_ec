import axios from "axios" 

export const generarTokenFachada = async(body)=>{

    return await generarToken(body)


}

const generarToken = async(body)=>{
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5MzYzMjY2MywiZXhwIjoxNjkzNjM0NjYzfQ.Nhx6usdYd88PU3WTMPyuDHNlwFy6xejijKVj7TDauOHrYjkExkNBA5HilWlmyyk6anEqSu5nRYkou9X7pVvwxQ",
        "Mensaje": "valor1"
      }

    axios.post(`http://localhost:8082/API/V1.0/Autorizacion/obtener`,body,{headers:headers}).then(r=>r.data)
}


export const  guardarEstudianteFachada = async(body)=>{
    return await guardarEstudiante(body)
}

const guardarEstudiante = async(body)=>{
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNYW51ZWwiLCJpYXQiOjE2OTM2Njc0MDQsImV4cCI6MTY5Mzg2NzQwNH0.hMTalIq8LQIh0ceiw4_wkRuDzBdgBoctSZLA64SbdmnvG-G2f1KDRlZ1-3WbhQ1w5xP3ONvuwjTULHFYPPKHcg",
        "Mensaje": "valor1"
      }

    axios.post(`http://localhost:8081/API/V1.0/Inscripcion/estudiantes`,body,{headers:headers}).then(r=>r.data)
}

