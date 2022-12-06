import { useEffect, useState } from "react";
import { getListCadastro } from "../services/localStorage";
import { CadastroItem } from "./CadastroItem";

export const CadastroList = () => {

  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    setCadastros(getListCadastro());
  }, [])

  return (
    <div>
      <h1 className='my-5 text-center'>Alunos</h1>

      {
        cadastros.length > 0 ? (
        <div className='card bg-secondary p-3'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Idade</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {cadastros.map(cadastro => 
                  <CadastroItem 
                      key={cadastro.id}
                      cadastro={cadastro} 
                      setCadastros={setCadastros}
                    />
              )}
            </tbody>
          </table>
        </div>
        ): (
          <h3 className="text-center">Sem cadastros registrados</h3>
        )
      }
    </div>
  )
};
