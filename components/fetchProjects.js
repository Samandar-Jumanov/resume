export const getProjects = async () =>{
     try {
        const data = await   fetch(`https://api.github.com/users/Samandar-Jumanov/repos`)
        console.log(data.json())
        return data.json()
     } catch (error) {
           console.log(error)
     }   
}


