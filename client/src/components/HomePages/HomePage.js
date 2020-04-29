import React, { Component } from 'react'
import API from '../../utils/API'

export default class HomePage extends Component {
     async componentDidMount() {
         const res = await API.getUsers()
         console.log(res.data)
     }
    
    render() {
        return (
            <div>
                Welcome to HomePage
            </div>
        )
    }
}
