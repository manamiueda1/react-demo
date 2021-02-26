import React, {Component} from 'react'

import './FavoriteCandy.styles.css'

class FavoriteCandy extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props.candies)
        let {studentData} = this.props.candies
        // let studentArray = this.props.candies.studentData
        return studentData.map(student => {
           return  (
           <p key={student.id} className='candy'>{student.name}'s favorite candy is {student.candy}</p>
           )
        })
    }
}

export default FavoriteCandy 