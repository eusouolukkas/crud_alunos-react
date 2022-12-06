import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { addCadastro, getCadastroById, editCadastro } from "../services/localStorage";

export const CadastroForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [ showAlert, setShowAlert ] = useState(false);

  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    id: "",
    nome: "",
    sobrenome: "",
    idade: "",
  });

  useEffect(() => {
    if(id) {
      const cadastro = getCadastroById(id);
      setForm(cadastro);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editCadastro(id, inputValues) : addCadastro(inputValues);
    setShowAlert(true);
    resetForm();
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div>
      {/* Header */}
      <div className='d-flex my-5 justify-content-between'>
        <button
          className='btn btn-outline-secondary'
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
        <h1>{ id ? "Editar" : "Cadastrar"} Aluno</h1>
        <div />
      </div>

      {/* Form */}
      <div className='card border-primary p-5 m-5'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='form-label mt-2' htmlFor='id'>
              Id
            </label>
            <input
              id='id'
              name='id'
              type='number'
              value={inputValues.id}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Coloque o Id'
            />
          </div>

          <div className='form-group'>
            <label className='form-label mt-2' htmlFor='nome'>
              Nome
            </label>
            <input
              id='nome'
              name='nome'
              type='text'
              value={inputValues.nome}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Coloque o Nome'
            />
          </div>

          <div className='form-group'>
            <label className='form-label mt-2' htmlFor='sobrenome'>
              Sobrenome
            </label>
            <input
              id='sobrenome'
              name="sobrenome"
              type='text'
              value={inputValues.sobrenome}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Coloque o Sobrenome'
            />
          </div>

          <div className='form-group'>
            <label className='form-label mt-2' htmlFor='idade'>
              Idade
            </label>
            <input
              id='idade'
              name="idade"
              type='text'
              value={inputValues.idade}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Coloque a Idade'
            />
          </div>

          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-outline-primary'>
              Cadastrar Aluno
            </button>
          </div>
        </form>
      </div>

      {
        showAlert && (
          <div className="px-5">
            <div className="alert alert-success text-white" role="alert">
              Cadastro realizado com sucesso!
            </div>
          </div>
        )
      }
    </div>
  );
};
