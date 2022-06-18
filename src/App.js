import './App.css';
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <main className="main">
        <h1 className="main__header">Ты сегодня покормил кота?</h1>
        <List />
      </main>
    </div>
  );
}

export default App;
