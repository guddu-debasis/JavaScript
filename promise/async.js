const git=fetch('https://api.github.com/users/guddu-debasis')
// .then((response)=>{
//      return response.json()
// })
// .then((data) => {
//     console.log(data);
//     return  data.twitter_username
// })
// .then((twittwer_username)=>{
//     console.log(twittwer_username)
// })
// .catch((err)=>{
//     console.log(err)
// })

async function gitData(){
     try {
        const response=await git
        const data=await response.json()
        console.log(data)
     } catch (error) {
         console.log("Error: "+error)
     }

}

gitData()
