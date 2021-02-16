import "./App.css";

let pageContent = {
  title: "React Notes",
  paragraph1:
    "a library is a collection of non-volatile resources used by computer programs, often for software development.",
  paragraph2:
    "These may include configuration data, documentation, help data, message templates, pre-written code and subroutines, classes, values or type specifications.",
};

function App() {
  return (
    <div className="App">
      <h1>{pageContent.title}</h1>
      <p>{pageContent.paragraph1}</p>
      <p>{pageContent.paragraph2}</p>
    </div>
  );
}

export default App;
