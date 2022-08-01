import { Component } from "react";

const UpdateComponent = OriginalComponent => {
    class NewComponent extends Component{
        render(){
            return(
                <OriginalComponent name = 'This is HOC'></OriginalComponent>
            )
        }
    }
    return NewComponent
}

export default UpdateComponent;