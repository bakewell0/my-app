const Api = {
    fetchUser:()=>{
        fetch("./data.json")
        .then(function (response) {
          return {
              user:{
                  id:"1",
                  name:"33333"
              }
          };
        })
    }
}

export default Api;




