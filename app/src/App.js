import './App.css';


function Welcome(props) {
  return <h1>Welchome {props.name}</h1>
}


function App() {
  return (
    <div>
      <Welcome name="Joe" />
      <Welcome name="Dani" />
    </div>
  );
}

export default App;
