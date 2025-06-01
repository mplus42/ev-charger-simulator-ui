export default function ChargerCard({ charger, updateState, removeCharger }) {
  const { id, state } = charger;

  // Button styles map
  const btnStyles = {
    turnOn: "bg-green-500 hover:bg-green-600 text-white",
    startCharging: "bg-blue-500 hover:bg-blue-600 text-white",
    stopCharging: "bg-yellow-400 hover:bg-yellow-500 text-black",
    fault: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <div className="border p-4 rounded shadow bg-white">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm text-gray-600">ID: {id}</p>
          <p className="font-semibold">State: {state}</p>
        </div>
        <button
          onClick={() => removeCharger(id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => updateState(id, "online")}
          className={`btn ${btnStyles.turnOn}`}
        >
          Turn On
        </button>
        <button
          onClick={() => updateState(id, "charging")}
          className={`btn ${btnStyles.startCharging}`}
        >
          Start Charging
        </button>
        <button
          onClick={() => updateState(id, "ready")}
          className={`btn ${btnStyles.stopCharging}`}
        >
          Stop Charging
        </button>
        <button
          onClick={() => updateState(id, "fault")}
          className={`btn ${btnStyles.fault}`}
        >
          Simulate Fault
        </button>
      </div>
    </div>
  );
}
