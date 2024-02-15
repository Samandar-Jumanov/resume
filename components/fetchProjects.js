export const getProjects = async () =>{
     try {
        const data = await   fetch(`https://api.github.com/users/Samandar-Jumanov/repos`)
        return data.json();
        
     } catch (error) {
           console.log(error)
     }   
}


