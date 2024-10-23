const funcionarios = [];
const pedidos = [];

function cadastroFuncionario() {
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;

    if (nome) {
        funcionarios.push({ nome, cargo });
        ListAtualizada();
        RespAtualizado();
        document.getElementById('nome').value = '';
    }
}

function ListAtualizada() {
    const listaFuncionarios = document.getElementById('listaFuncionario');
    listaFuncionarios.innerHTML = '';

    funcionarios.forEach(func => {
        listaFuncionarios.innerHTML += `
            <tr>
                <td>${func.nome}</td>
                <td>${func.cargo}</td>
            </tr>
        `;
    });
}

function RespAtualizado() {
    const responsavelPedido = document.getElementById('respPed');
    responsavelPedido.innerHTML = '';

    funcionarios.forEach(func => {
        responsavelPedido.innerHTML += `
            <option value="${func.nome}">${func.nome}</option>
        `;
    });
}

function cadastroPedido() {
    const descricao = document.getElementById('descPed').value;
    const responsavel = document.getElementById('respPed').value;
    const status = document.getElementById('statsPed').value;

    if (descricao && responsavel) {
        pedidos.push({ descricao, responsavel, status });
        atualizarListaPedidos();
        document.getElementById('descPed').value = '';
    } else {
        alert('Preencha todos os campos do pedido.');
    }
}

function atualizarListaPedidos() {
    const listaPedidos = document.getElementById('listaPedido');
    listaPedidos.innerHTML = '';

    pedidos.forEach(pedido => {
        listaPedidos.innerHTML += `
            <tr>
                <td>${pedido.descricao}</td>
                <td>${pedido.responsavel}</td>
                <td>${pedido.status}</td>
            </tr>
        `;
    });
}