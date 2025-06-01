import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChargerList from "./components/ChargerList";

export default function App() {
  const [chargers, setChargers] = useState([]);

  const addCharger = () => {
    const newCharger = { id: uuidv4(), state: "offline" };
    setChargers([...chargers, newCharger]);
  };

  const updateChargerState = (id, newState) => {
    setChargers(chargers.map(c => c.id === id ? { ...c, state: newState } : c));
  };

  const removeCharger = (id) => {
    setChargers(chargers.filter(c => c.id !== id));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">EV Charger Simulator</h1>
      <button
        onClick={addCharger}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Charger
      </button>
      <ChargerList
        chargers={chargers}
        updateState={updateChargerState}
        removeCharger={removeCharger}
      />
    </div>
  );
}
