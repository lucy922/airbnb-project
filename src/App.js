import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const card = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
        <section className="card">{card}</section>
      </div>
    </div>
  );
}

export default App;
