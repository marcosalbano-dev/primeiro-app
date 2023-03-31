import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React JS'
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);



  function handleRegister(event){
    event.preventDefault();
    setTarefas([...tarefas, input])
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>   
      <form onSubmit={ handleRegister }>
        <label>Nome da tarefa:</label><br/>
        <input 
          placeholder="Digite uma tarefa"
          value={input}
          onChange={ (event) => setInput(event.target.value) }
        /><br/><br/>
        
        <button type="submit">Registrar</button>
      </form>

      <ul>
       { tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
       )) }
      </ul>
    </div>
  );
}

export default App;

