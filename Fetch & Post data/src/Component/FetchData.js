import React, {Component} from 'react';

class FetchData extends Component{

    constructor(props){
        super(props);

        this.state ={
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render(){

        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return <div> Loading...</div>;
        }
        else{
            return(
                <div>
                    <ul>
                        {items.map(item =>(
                            <li key={item.id}>
                                Name: {item.name}  |  Email: {item.email}
                            </li>
                        )
                        )};
                    </ul>
                </div>
            )
        }    
    }
}

export default FetchData;