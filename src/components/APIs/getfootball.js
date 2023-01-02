import axios from "axios"
const footballAPI= 'https://myfakeapi.com/api/football/teams'
let data = null 
export const getfootball = async () => {

    await axios.get(`${footballAPI}`)
    .then(res=>{
        console.log(res.data)
        data = res.data.Teams
    })
    .catch(err=>{
            console.log(err)

    })

    return data
}