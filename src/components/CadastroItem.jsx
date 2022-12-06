import { useNavigate } from "react-router-dom";
import { getListCadastro, deleteCadastro } from "../services/localStorage";

export const CadastroItem = ({cadastro, setCadastros}) => {
  const {id, nome, sobrenome, idade} = cadastro;
  const navigate = useNavigate();

  const removeCadastro = () => {
    deleteCadastro(id);
    setCadastros(getListCadastro());
  }
  
  return (
    <tr>
      <th>{id}</th>
      <th>{nome}</th>
      <th>{sobrenome}</th>
      <th>{idade}</th>
      <th>
        <div className='d-flex gap-1'>
          <span role='button' className='badge bg-success' onClick={() => navigate(`/editar/${id}`)}>
            Editar
          </span>
          <span role='button' className='badge bg-danger' onClick={() => removeCadastro()}>
            Deletar
          </span>
        </div>
      </th>
    </tr>
  );
};
