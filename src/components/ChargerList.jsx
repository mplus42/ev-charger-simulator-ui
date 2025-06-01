import ChargerCard from "./ChargerCard";

export default function ChargerList({ chargers, updateState, removeCharger }) {
  return (
    <div className="space-y-4">
      {chargers.map((charger) => (
        <ChargerCard
          key={charger.id}
          charger={charger}
          updateState={updateState}
          removeCharger={removeCharger}
        />
      ))}
    </div>
  );
}
