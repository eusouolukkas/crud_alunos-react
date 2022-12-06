import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { CadastroList, CadastroForm } from "./components";

export const App = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<CadastroList />} />
          <Route path='/cadastro' element={<CadastroForm />} />
          <Route path='/editar/:id' element={<CadastroForm />} />
        </Routes>
      </div>
    </>
  );
};
