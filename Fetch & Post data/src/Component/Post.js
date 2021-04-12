import React, {Component} from 'react';

class Post extends Component {

    async postData (){

        try{

            let result = await fetch('https://webhook.site/47fc5a28-3f9f-448c-953c-fc2c639c8c03', {
               method: 'post',
               mode: 'no-cors',
               headers: {
                   'Accept': 'application/json',
                   'Content-type': 'application/json',
               },
               body: JSON.stringify({
                   id: 1,
                   name: 'Parul Aggarwal',
                   age: 21,
                   gender: 'Female',
                   email: 'aggarwalparul@gmail.com'
               }) 
            });

            console.log(result)

        }catch(e){
            console.log(e)
        }

    }

    render(){
        return(
            <div>
                <button onClick= {this.postData}  >Submit</button>
            </div>
        )
    }
}

export default Post;