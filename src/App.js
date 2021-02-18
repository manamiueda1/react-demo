import "./App.css";

let studentData = [
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
];

function App() {
  return (
    <div>
      <StudentList />
      <StudentList />
      <StudentList />
      <StudentList />
    </div>
  );
}

function StudentList() {
  return studentData.map((student) => (
    <div className="studentCard">
      <h1>Hi {student.name}</h1>
      <p>
        {student.name}'s favorite color is {student.color}
      </p>
    </div>
  ));
}

export default App;
