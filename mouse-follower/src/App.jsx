import { useEffect, useState } from "react";
function App() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    console.log("effect", { enabled });
  }, [enabled]);
  return (
    <>
      <h3>Mouse Follower</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}

export default App;
