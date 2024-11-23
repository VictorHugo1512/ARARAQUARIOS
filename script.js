function updateDateTime() {
    const dt = luxon.DateTime.now().setZone('America/Sao_Paulo');
    const formatted = dt.toFormat('dd/MM/yyyy HH:mm:ss');
    document.getElementById('datetime').textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();

function showModule(moduleName) {
    const content = document.getElementById('content');

    switch (moduleName) {
        case 'fornecedores':
            content.innerHTML = `
<div id="content">
<h2 class="module-title">Fornecedores</h2>
<div class="form-container">
    <div class="form-group">
        <div class="form-field">
            <label for="produtoId">Id do Produto</label>
            <input type="text" id="produtoId">
        </div>
        <div class="form-field">
            <label for="nomeProduto">Nome do Produto</label>
            <input type="text" id="nomeProduto">
        </div>
        <div class="form-field">
            <label for="fornecedor">Fornecedor</label>
            <input type="text" id="fornecedor">
        </div>
        <div class="form-field">
            <label for="dataValidade">Data de Validade</label>
            <input type="date" id="dataValidade">
        </div>
        <div class="form-field">
            <label for="quantidade">Quantidade</label>
            <input type="number" id="quantidade">
        </div>
    </div>
    
    <div class="button-group">
        <button class="btn" onclick="adicionarFornecedor()">Adicionar</button>
        <button class="btn" onclick="atualizarFornecedor()">Atualizar</button>
        <button class="btn" onclick="removerFornecedor()">Remover</button>
        <button class="btn" onclick="limparFormulario()">Limpar</button>
    </div>

    <table class="content-table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Fornecedores</th>
                <th>Data Validade</th>
                <th>Quantidade</th>
            </tr>
        </thead>
        <tbody id="fornecedoresTable">
        </tbody>
    </table>
</div>
</div>
            `;
            break;
        case 'usuarios':
            content.innerHTML = `
            <h2 class="module-title">Funcionários</h2>
<div class="form-container">
    <div class="form-group">
        <div class="form-field">
            <label for="employeeId">ID</label>
            <input type="text" id="employeeId">
        </div>
        <div class="form-field">
            <label for="employeeName">Nome</label>
            <input type="text" id="employeeName">
        </div>
        <div class="form-field">
            <label for="employeeRole">Cargo</label>
            <input type="text" id="employeeRole">
    </div>
    <div class="form-group">
    </div>
    <div class="button-group">
        <button class="btn" onclick="addEmployee()">Adicionar</button>
        <button class="btn" onclick="updateEmployee()">Atualizar</button>
        <button class="btn" onclick="removeEmployee()">Remover</button>
        <button class="btn" onclick="clearEmployeeForm()">Limpar</button>
    </div>
    <table class="data-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cargo</th>
            </tr>
        </thead>
        <tbody id="employeeTableBody">
        </tbody>
    </table>
</div>
`;

            // Initialize the table with sample data
            initializeEmployeeTable();
            break;

        case 'produtos':
            content.innerHTML = `
                <h2 class="module-title">Produtos</h2>
                <div class="form-container">
                    <div class="form-group">
                        <div class="form-field">
                            <label for="productId">Id do Produto</label>
                            <input type="text" id="productId">
                        </div>
                        <div class="form-field">
                            <label for="manufacturer">Fabricante</label>
                            <input type="text" id="manufacturer">
                        </div>
                        <div class="form-field">
                            <label for="manufactureDate">Data de Fabricação</label>
                            <input type="date" id="manufactureDate">
                        </div>
                        <div class="form-field">
                            <label for="stock">Estoque</label>
                            <input type="number" id="stock">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-field">
                            <label for="productName">Nome do Produto</label>
                            <input type="text" id="productName">
                        </div>
                        <div class="form-field">
                            <label for="unitPrice">Preço Unitário</label>
                            <input type="number" id="unitPrice" step="0.01">
                        </div>
                        <div class="form-field">
                            <label for="validityDate">Data de Validade</label>
                            <input type="date" id="validityDate">
                        </div>
                    </div>
                    <div class="button-group">
                        <button class="btn">Adicionar</button>
                        <button class="btn">Atualizar</button>
                        <button class="btn">Remover</button>
                        <button class="btn">Limpar</button>
                    </div>
                </div>
            `;
            break;
        case 'monitoramento':
            content.innerHTML = `
<h2 class="module-title">Monitoramento</h2>
<div class="form-container">
    <div class="form-group">
        <div class="form-field">
            <label for="loteId">Digite o ID do lote</label>
            <div style="display: flex; gap: 10px;">
                <input type="text" id="loteId" placeholder="ID do lote">
                <button class="btn" onclick="buscarLote()">
                    <span style="font-size: 1.2em;">🔍</span>
                </button>
            </div>
        </div>
    </div>

    <div style="margin: 20px 0;">
        <strong>Lote de produção selecionado:</strong>
        <div id="loteSelecionado" style="background: #eee; padding: 10px; margin-top: 5px; border-radius: 4px;">
            Nenhum lote selecionado
        </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <div class="monitor-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: var(--primary-color); margin-bottom: 10px;">NÍVEL DE PH</h3>
            <div class="monitor-value" id="phValue" style="font-size: 24px; font-weight: bold;">
                O valor é: ...
            </div>
        </div>

        <div class="monitor-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: var(--primary-color); margin-bottom: 10px;">NÍVEL DE CO2</h3>
            <div class="monitor-value" id="co2Value" style="font-size: 24px; font-weight: bold;">
                O valor é: ...
            </div>
        </div>

        <div class="monitor-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: var(--primary-color); margin-bottom: 10px;">NÍVEL DE CONDUTIVIDADE</h3>
            <div class="monitor-value" id="condutividadeValue" style="font-size: 24px; font-weight: bold;">
                O valor é: ...
            </div>
        </div>

        <div class="monitor-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: var(--primary-color); margin-bottom: 10px;">NÍVEL DE ILUMINAÇÃO</h3>
            <div class="monitor-value" id="iluminacaoValue" style="font-size: 24px; font-weight: bold;">
                O valor é: ...
            </div>
        </div>
    </div>
</div>
`;

            // Adicionar a função de busca de lote
            function buscarLote() {
                const loteId = document.getElementById('loteId').value;
                document.getElementById('loteSelecionado').textContent = `Lote #${loteId}`;

                // Simulação de valores de monitoramento
                setInterval(() => {
                    document.getElementById('phValue').textContent = `O valor é: ${(Math.random() * 14).toFixed(2)}`;
                    document.getElementById('co2Value').textContent = `O valor é: ${(Math.random() * 1000).toFixed(2)} ppm`;
                    document.getElementById('condutividadeValue').textContent = `O valor é: ${(Math.random() * 2000).toFixed(2)} µS/cm`;
                    document.getElementById('iluminacaoValue').textContent = `O valor é: ${(Math.random() * 100000).toFixed(2)} lux`;
                }, 2000);
            }
            break;

        case 'vendas':
            content.innerHTML = `
                <h2 class="module-title">Vendas</h2>
                <div class="form-container">
                    <div class="form-group">
                        <div class="form-field">
                            <label for="id">Id:</label>
                            <input type="text" id="id" disabled value="--">
                        </div>
                        <div class="form-field">
                            <label for="productName">Nome do Produto:</label>
                            <input type="text" id="productName" disabled value="--">
                        </div>
                        <div class="form-field">
                            <label for="productPrice">Preço do Produto:</label>
                            <input type="text" id="productPrice" disabled value="--">
                        </div>
                        <div class="form-field">
                            <label for="quantity">Quantidade:</label>
                            <input type="number" id="quantity">
                        </div>
                    </div>
                    <div class="button-group">
                        <button class="btn">Adicionar</button>
                        <button class="btn">Remover</button>
                        <button class="btn">Limpar</button>
                    </div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Preço Produto</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                        <div>
                            <strong>Valor Total: </strong>
                            <span>--</span>
                        </div>
                        <div>
                            <strong>Valor a Pagar: </strong>
                            <span>--</span>
                        </div>
                        <div>
                            <label for="paymentAmount">Valor a Pagar:</label>
                            <input type="number" id="paymentAmount" step="0.01">
                            <button class="btn">Remover</button>
                        </div>
                    </div>
                </div>
            `;
            break;

        case 'relatorios':
            content.innerHTML = `
                <h2 class="module-title">Relatórios</h2>
                <div class="report-container">
                    <div class="report-box">
                        <div class="report-title">Vendas realizadas</div>
                        <div id="salesChart"></div>
                    </div>
                    <div class="report-box">
                        <div class="report-title">Fluxo de Caixa</div>
                        <div id="cashFlowChart"></div>
                    </div>
                </div>
            `;
            break;

        case 'producao':
            content.innerHTML = `
<h2 class="module-title">Produção</h2>
<div class="form-container">
    <div class="form-group">
        <div class="form-field">
            <label for="productionId">Id</label>
            <input type="text" id="productionId">
        </div>
        <div class="form-field">
            <label for="productionName">Nome do Produto</label>
            <input type="text" id="productionName">
        </div>
        <div class="form-field">
            <label for="productionLote">Lote</label>
            <input type="text" id="productionLote">
        </div>
    </div>
    <div class="form-group">
        <div class="form-field">
            <label for="productionDate">Data de Produção</label>
            <input type="date" id="productionDate">
        </div>
        <div class="form-field">
            <label for="expirationDate">Data de Colheita</label>
            <input type="date" id="expirationDate">
        </div>
        <div class="form-field">
            <label for="quantityExpected">Quantidade Esperada</label>
            <input type="number" id="quantityExpected">
        </div>
    </div>
    
    <div class="button-group">
        <button class="btn" onclick="adicionarProducao()">Adicionar</button>
        <button class="btn" onclick="atualizarProducao()">Atualizar</button>
        <button class="btn" onclick="removerProducao()">Remover</button>
        <button class="btn" onclick="limparFormularioProducao()">Limpar</button>
    </div>

    <table class="content-table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome do Produto</th>
                <th>Lote</th>
                <th>Data de Produção</th>
                <th>Data de Colheita</th>
                <th>Quantidade Esperada</th>
            </tr>
        </thead>
        <tbody id="producaoTable">
        </tbody>
    </table>
</div>
`;

            // Inicializa a tabela com dados de exemplo
            initializeProducaoTable();
            break;
            // Array para armazenar os dados de produção
            let producoes = [
                {
                    id: "1",
                    nome: "Alface",
                    lote: "001",
                    dataProducao: "2023-05-01",
                    dataColheita: "2023-05-15",
                    quantidadeEsperada: 500
                },
                {
                    id: "2",
                    nome: "Tomate",
                    lote: "002",
                    dataProducao: "2023-05-01",
                    dataColheita: "2023-05-15",
                    quantidadeEsperada: 300
                },
                {
                    id: "3",
                    nome: "Cenoura",
                    lote: "003",
                    dataProducao: "2023-05-01",
                    dataColheita: "2023-05-15",
                    quantidadeEsperada: 450
                },
                {
                    id: "4",
                    nome: "Espinafre",
                    lote: "004",
                    dataProducao: "2023-05-01",
                    dataColheita: "2023-05-15",
                    quantidadeEsperada: 600
                },
                {
                    id: "5",
                    nome: "Pimentão",
                    lote: "005",
                    dataProducao: "2023-05-01",
                    dataColheita: "2023-05-15",
                    quantidadeEsperada: 350
                }
            ];

            function initializeProducaoTable() {
                atualizarTabelaProducao();
            }

            function adicionarProducao() {
                const producao = {
                    id: document.getElementById('productionId').value,
                    nome: document.getElementById('productionName').value,
                    lote: document.getElementById('productionLote').value,
                    dataProducao: document.getElementById('productionDate').value,
                    dataColheita: document.getElementById('expirationDate').value,
                    quantidadeEsperada: document.getElementById('quantityExpected').value
                };

                producoes.push(producao);
                atualizarTabelaProducao();
                limparFormularioProducao();
            }

            function atualizarTabelaProducao() {
                const tbody = document.getElementById('producaoTable');
                tbody.innerHTML = '';

                producoes.forEach(producao => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
<td>${producao.id}</td>
<td>${producao.nome}</td>
<td>${producao.lote}</td>
<td>${formatDate(producao.dataProducao)}</td>
<td>${formatDate(producao.dataColheita)}</td>
<td>${producao.quantidadeEsperada}</td>
`;
                    tbody.appendChild(tr);
                });
            }

            function formatDate(dateString) {
                const date = new Date(dateString);
                return date.toLocaleDateString('pt-BR');
            }

            function limparFormularioProducao() {
                document.getElementById('productionId').value = '';
                document.getElementById('productionName').value = '';
                document.getElementById('productionLote').value = '';
                document.getElementById('productionDate').value = '';
                document.getElementById('expirationDate').value = '';
                document.getElementById('quantityExpected').value = '';
            }

            function removerProducao() {
                const id = document.getElementById('productionId').value;
                producoes = producoes.filter(producao => producao.id !== id);
                atualizarTabelaProducao();
                limparFormularioProducao();
            }

            function atualizarProducao() {
                const id = document.getElementById('productionId').value;
                const index = producoes.findIndex(producao => producao.id === id);

                if (index !== -1) {
                    producoes[index] = {
                        id: document.getElementById('productionId').value,
                        nome: document.getElementById('productionName').value,
                        lote: document.getElementById('productionLote').value,
                        dataProducao: document.getElementById('productionDate').value,
                        dataColheita: document.getElementById('expirationDate').value,
                        quantidadeEsperada: document.getElementById('quantityExpected').value
                    };
                    atualizarTabelaProducao();
                    limparFormularioProducao();
                }
            }
        case 'clientes':
            content.innerHTML = `
<h2 class="module-title">Clientes</h2>
<div class="form-container">
    <div class="form-group">
        <div class="form-field">
            <label for="clientId">ID</label>
            <input type="text" id="clientId">
        </div>
        <div class="form-field">
            <label for="clientName">Nome</label>
            <input type="text" id="clientName">
        </div>
        <div class="form-field">
            <label for="clientCpf">CPF</label>
            <input type="text" id="clientCpf">
        </div>
        <div class="form-field">
            <label for="clientEmail">E-Mail</label>
            <input type="email" id="clientEmail">
        </div>
    </div>
    
    <div class="button-group">
        <button class="btn" onclick="adicionarCliente()">Adicionar</button>
        <button class="btn" onclick="atualizarCliente()">Atualizar</button>
        <button class="btn" onclick="removerCliente()">Remover</button>
        <button class="btn" onclick="limparFormularioCliente()">Limpar</button>
    </div>

    <table class="content-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>E-Mail</th>
            </tr>
        </thead>
        <tbody id="clientesTable">
        </tbody>
    </table>
</div>
`;

            // Add this script after the HTML
            let clientes = [];

            function adicionarCliente() {
                const cliente = {
                    id: document.getElementById('clientId').value,
                    nome: document.getElementById('clientName').value,
                    cpf: document.getElementById('clientCpf').value,
                    email: document.getElementById('clientEmail').value
                };

                clientes.push(cliente);
                atualizarTabelaClientes();
                limparFormularioCliente();
            }

            function atualizarTabelaClientes() {
                const tbody = document.getElementById('clientesTable');
                tbody.innerHTML = '';

                clientes.forEach(cliente => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
        <td>${cliente.id}</td>
        <td>${cliente.nome}</td>
        <td>${cliente.cpf}</td>
        <td>${cliente.email}</td>
    `;
                    tbody.appendChild(tr);
                });
            }

            function limparFormularioCliente() {
                document.getElementById('clientId').value = '';
                document.getElementById('clientName').value = '';
                document.getElementById('clientCpf').value = '';
                document.getElementById('clientEmail').value = '';
            }

            function removerCliente() {
                const id = document.getElementById('clientId').value;
                clientes = clientes.filter(cliente => cliente.id !== id);
                atualizarTabelaClientes();
                limparFormularioCliente();
            }

            function atualizarCliente() {
                const id = document.getElementById('clientId').value;
                const index = clientes.findIndex(cliente => cliente.id === id);

                if (index !== -1) {
                    clientes[index] = {
                        id: document.getElementById('clientId').value,
                        nome: document.getElementById('clientName').value,
                        cpf: document.getElementById('clientCpf').value,
                        email: document.getElementById('clientEmail').value
                    };
                    atualizarTabelaClientes();
                    limparFormularioCliente();
                }
            }

            // Add sample data
            clientes.push({
                id: "1",
                nome: "João Silva",
                cpf: "123.456.789-00",
                email: "joao@email.com"
            });
            atualizarTabelaClientes();
            break;

        default:
            content.innerHTML = `
                <div class="welcome-message">
                    <h2>Módulo ${moduleName}</h2>
                    <p>Este módulo está em desenvolvimento.</p>
                </div>
            `;

    }
}
let fornecedores = [];

function adicionarFornecedor() {
    const produto = {
        id: document.getElementById('produtoId').value,
        nome: document.getElementById('nomeProduto').value,
        fornecedor: document.getElementById('fornecedor').value,
        dataValidade: document.getElementById('dataValidade').value,
        quantidade: document.getElementById('quantidade').value
    };

    fornecedores.push(produto);
    atualizarTabela();
    limparFormulario();
}

function atualizarTabela() {
    const tbody = document.getElementById('fornecedoresTable');
    tbody.innerHTML = '';

    fornecedores.forEach(produto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.fornecedor}</td>
            <td>${produto.dataValidade}</td>
            <td>${produto.quantidade}</td>
        `;
        tbody.appendChild(tr);
    });
}

function limparFormulario() {
    document.getElementById('produtoId').value = '';
    document.getElementById('nomeProduto').value = '';
    document.getElementById('fornecedor').value = '';
    document.getElementById('dataValidade').value = '';
    document.getElementById('quantidade').value = '';
}

function removerFornecedor() {
    const id = document.getElementById('produtoId').value;
    fornecedores = fornecedores.filter(produto => produto.id !== id);
    atualizarTabela();
    limparFormulario();
}

function atualizarFornecedor() {
    const id = document.getElementById('produtoId').value;
    const index = fornecedores.findIndex(produto => produto.id === id);

    if (index !== -1) {
        fornecedores[index] = {
            id: document.getElementById('produtoId').value,
            nome: document.getElementById('nomeProduto').value,
            fornecedor: document.getElementById('fornecedor').value,
            dataValidade: document.getElementById('dataValidade').value,
            quantidade: document.getElementById('quantidade').value
        };
        atualizarTabela();
        limparFormulario();
    }
}

// Add sample data
fornecedores.push({
    id: "20",
    nome: "asasasasas",
    fornecedor: "dffffffffddd",
    dataValidade: "23/09/2023",
    quantidade: "20"
});
atualizarTabela();