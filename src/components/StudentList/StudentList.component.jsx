import React, {Component} from 'react'

import './studentList.styles.css'

class StudentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentData: [
                {
                    id: 1,
                    name: "Eddy",
                    color: "chartreuse",
                    school: "Nebula Academy",
                },
                {
                    id: 2,
                    name: "Chelsea",
                    color: "purple",
                    school: "Nebula Academy",
                },
                {
                    id: 3,
                    name: "Tauseef",
                    color: "orange",
                    school: "Nebula Academy",
                },
                {
                    id: 4,
                    name: "Maurice",
                    color: "red",
                    school: "Nebula Academy",
                },
                {
                    id: 5,
                    name: "D'aja",
                    color: "blue",
                    school: "Nebula Academy",
                },
                {
                    id: 6,
                    name: "Jasmine",
                    color: "pink",
                    school: "Nebula Academy",
                },
                {
                    id: 7,
                    name: "Anitria",
                    color: "blue",
                    school: "Nebula Academy",
                },
            ]}
    }
    render(){
        return(
            <div>
                {this.state.studentData.map((student) => (
                    <div className="studentCard">
                        <h1>Hi {student.name}</h1>
                        <p>
                            {student.name}'s favorite color is {student.color}
                        </p>
                    </div>
                ))}
            </div>
        )
    }

}

export default StudentList