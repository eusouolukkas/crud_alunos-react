import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            CADASTRO DE ALUNOS
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarColor02'>
            <ul className='navbar-nav me-auto'></ul>

            <button
              className='btn btn-outline-secondary my-1 my-sm-0'
              onClick={() => navigate("/cadastro")}
            >
              CADASTRAR
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
