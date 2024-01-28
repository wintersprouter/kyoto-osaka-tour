import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
const days = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
];

function App() {
  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    <>
      <Navbar />
      <Tabs
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </>
  );
}

export default App;
