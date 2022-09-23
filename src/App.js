import './App.css';
import React, { useState } from 'react';
import AtividadeForm from './components/AtividadeForm';
import Atividade from './components/Atividade';

let initialState =
  [
    {
      "id": 1,
      "descricao": "Primeira Atividade",
      "prioridade": "1",
      "titulo": "Título 1"
    },
    {
      "id": 2,
      "prioridade": "1",
      "descricao": "Segunda Atividade",
      "titulo": "Título 2"
    },
  ];

function App() {
  const [atividades, setAtividade] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    }

    atividades.push(atividade);

    setAtividade([...atividades]);
  };

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividade([...atividadesFiltradas]);
  }

  return (
    <>
      <AtividadeForm
          addAtividade={addAtividade}
          atividades={atividades}
      />
      <div className="mt-3">
        {atividades.map(ativ => (
          <Atividade 
              key={ativ.id} 
              deletarAtividade={deletarAtividade}
              ativ={ativ}
          />
        ))}
      </div>
    </>
  );
}

export default App;
