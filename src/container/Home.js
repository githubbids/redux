import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {moviesList} from '../actions/movieList'
import DisplayComponent from '../component/DisplayComponent'

export class Home extends Component {
    componentDidMount(){
        this.props.dispatch(moviesList())
    }
    render() {
        return (
            <div>
                <h1>Redux Example </h1>
                <DisplayComponent dataList={this.props.mydata}/>
            </div>
        )
    }
}
//to recive the state


//receive the state
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.movies
    }
    
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)
