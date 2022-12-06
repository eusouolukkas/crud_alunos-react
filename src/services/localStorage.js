export const getListCadastro = () => {
    if(!localStorage["@cadastros"]){
        localStorage["@cadastros"] = JSON.stringify([]);
    }

    let cadastros = JSON.parse(localStorage["@cadastros"]);

    return cadastros;
};

export const getCadastroById = (id) => {
    const cadastros = getListCadastro();
    const cadastro = cadastros.find(cadastro => cadastro.id === id);
    
    return cadastro;
}

export const addCadastro = (cadastro) => {
    const cadastros = getListCadastro();
    cadastros.push(cadastro);

    localStorage["@cadastros"] = JSON.stringify(cadastros);

    console.log(cadastros);
};

export const editCadastro = (id, novoCadastro) => {
    let cadastros = getListCadastro();

    cadastros = cadastros.filter(cadastro => cadastro.id !== id);
    cadastros.push(novoCadastro);

    localStorage["@cadastros"] = JSON.stringify(cadastros);
};

export const deleteCadastro = (id) => {
    let cadastros = getListCadastro();
    cadastros = cadastros.filter((cadastro) => cadastro.id !== id);

    localStorage["@cadastros"] = JSON.stringify(cadastros);
};