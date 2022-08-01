import UpdateComponent from "../shared/WithCounter";

const { Component } = require("react");

class HoverCounter extends Component{
    render(){
        const {count, incrementCount} = this.props
        return(
            <div>
                <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter);