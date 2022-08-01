import { Component } from "react";
import data from '../products.json'

const WithSearch = (WrappedComponent) => {
    class WithSearches extends Component{
        constructor(props){
            super(props)
            this.state = {
                searchkey: ''
            }
        }

        handleInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        render(){
            return (
                <WrappedComponent {...this.props} name = 'searchkey' value = {this.state.searchkey} handleInput = {this.handleInput} data={data.products}></WrappedComponent>
            );
        }
    }
    return WithSearches
}

export default WithSearch;