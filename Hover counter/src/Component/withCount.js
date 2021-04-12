import React from 'react';

const withCount = WrappedComp =>{
    class WithCount extends React.Component{

        constructor(props){
            super(props)
    
            this.state ={
                count: 0
            }
        }
    
        incrementCount = () =>{
            this.setState( prevState =>{
                return{ count: prevState.count +1}
            }
            )
        }

        render(){
            return( 
            <WrappedComp 
             count={this.state.count} 
             incrementCount={this.incrementCount}   
            />)
        }
    }
    return WithCount
}

export default withCount;