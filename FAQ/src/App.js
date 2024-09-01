import FaqCard from "./components/FaqCard";
import FaqItem from "./components/FaqItem";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Frequently asked questions</h1>
      <FaqCard />
      <FaqItem />
    </div>
  );
}
