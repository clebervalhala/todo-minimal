import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState(""); // texto digitado
  const [lista, setLista] = useState([]);   // lista de tarefas

  function adicionarTarefa(e) {
    e.preventDefault();
    if (tarefa.trim() === "") return; // evita vazios
    setLista([...lista, tarefa]);     // adiciona nova tarefa
    setTarefa("");                    // limpa campo
  }

  function removerTarefa(index) {
    setLista(lista.filter((_, i) => i !== index));
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>To-Do Minimal</h1>

      {/* Campo e botão */}
      <form style={styles.form} onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa…"
          style={styles.input}
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          Adicionar
        </button>
      </form>

      {/* Lista dinâmica */}
      <ul style={styles.list}>
        {lista.map((item, index) => (
          <li key={index} style={styles.item}>
            {item}
            <button style={styles.remove} onClick={() => removerTarefa(index)}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: 520,
    margin: "40px auto",
    padding: "24px",
    borderRadius: 12,
    border: "1px solid #2a2a2a",
    background: "#121212",
    color: "#eaeaea",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
  },
  title: { margin: 0, marginBottom: 16, fontSize: 28, color: "#ffffff" },
  form: { display: "flex", gap: 8, marginBottom: 16 },
  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #444",
    outline: "none",
    background: "#1f1f1f",
    color: "#f5f5f5",
  },
  button: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #00adb5",
    background: "#00adb5",
    color: "#fff",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 8,
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 12px",
    border: "1px solid #333",
    borderRadius: 8,
    background: "#1a1a1a",
    color: "#eee",
  },
  remove: {
    border: "none",
    background: "#2b2b2b",
    color: "#ff5555",
    borderRadius: 6,
    padding: "2px 8px",
    cursor: "pointer",
    fontSize: 16,
    lineHeight: 1,
  },
};

export default App;
