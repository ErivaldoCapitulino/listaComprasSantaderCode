const apiURL = "https://crudcrud.com/api/b55e75f405c1490587ad069a4ae96e4c/items";

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "../../index.html";
}

async function criarItem(item) {
  try {
    const resposta = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (resposta.ok) {
      const novoItem = await resposta.json();
      alert("Item criado com sucesso:", novoItem);

      salvarNoLocalStorage(novoItem);
    } else {
      alert("Falha ao criar o item.");
    }
  } catch (erro) {
    alert("Erro ao criar o item:", erro);
  }
}

function salvarNoLocalStorage(item) {
  const itens = JSON.parse(localStorage.getItem("itens")) || [];
  itens.push(item);
  localStorage.setItem("itens", JSON.stringify(itens));
}

const itemForm = document.querySelector("#itemForm");
itemForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.querySelector("#novoItemNome").value;
  const imagem = document.querySelector("#novoItemImagem").value;

  if (nome && imagem) {
    await criarItem({
      name: nome,
      itemImagem: imagem,
    });

    document.querySelector("#novoItemNome").value = "";
    document.querySelector("#novoItemImagem").value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

async function excluirItem() {
  const id = document.querySelector("#excluirItemId").value;

  if (id) {

    const confirmDelete = confirm("Tem certeza de que deseja excluir este item?");

    if (confirmDelete) {
      try {
        const resposta = await fetch(`${apiURL}/${id}`, {
          method: "DELETE",
        });

        if (resposta.ok) {
          alert("Item excluído com sucesso.");

          const itens = recuperarDoLocalStorage();
          const novosItens = itens.filter(item => item._id !== id);
          salvarNoLocalStorage(novosItens);

          document.querySelector("#excluirItemId").value = "";
        } else {
          alert("Falha ao excluir o item na API.");
        }
      } catch (erro) {
        alert("Erro ao excluir o item verifique se o ID está corre:");
      }
    }
  } else {
    alert("Por favor, insira o ID do item a ser excluído.");
  }
}


const excluirBotao = document.querySelector(".excluir");
excluirBotao.addEventListener("click", excluirItem);

// Função para recuperar itens do Local Storage
function recuperarDoLocalStorage() {
  const itensJSON = localStorage.getItem('itens');
  return JSON.parse(itensJSON) || [];
}

// Função para buscar um item pelo ID via API
async function buscarItemPorId(id) {
  try {
    const resposta = await fetch(`${apiURL}/${id}`);

    if (resposta.ok) {
      const item = await resposta.json();
      const conteudoDiv = document.querySelector(".conteudo");
      conteudoDiv.innerHTML = '';

      const itemDiv = document.createElement('div');
      itemDiv.classList = "divConteudo";
      itemDiv.textContent = `ID: ${item._id}, Nome: ${item.name}`;

      const imagem = document.createElement('img');
      imagem.src = item.itemImagem;
      imagem.classList = "tamanho";

      itemDiv.appendChild(imagem);

      conteudoDiv.appendChild(itemDiv);

      alert("Item encontrado:", item);
    } else {
      alert("Item não encontrado na API.");
    }
  } catch (erro) {
    alert("Erro ao buscar o item na API:", erro);
  }
}

const buscarIdBotao = document.querySelector(".buscar");

buscarIdBotao.addEventListener("click", async () => {
  const id = document.querySelector("#buscarItemId").value;

  if (id) {
    await buscarItemPorId(id);
  } else {
    alert("Por favor, insira o ID do item a ser buscado.");
  }
});

let itemEditando = null;

async function listarTodos() {
  try {
    const resposta = await fetch(apiURL);

    if (resposta.ok) {
      const itensDaAPI = await resposta.json();
      const conteudoDiv = document.querySelector(".conteudo");

      conteudoDiv.innerHTML = '';

      itensDaAPI.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList = "divConteudo";
        itemDiv.textContent = `ID: ${item._id}, Nome: ${item.name}`;

        itemDiv.addEventListener("click", () => {
          itemEditando = item;
          preencherCamposEdicao(item);
        });

        const imagem = document.createElement('img');
        imagem.src = item.itemImagem;
        imagem.classList = "tamanho";

        itemDiv.appendChild(imagem);

        conteudoDiv.appendChild(itemDiv);
      });

      sincronizarLocalStorage(itensDaAPI);
    } else {
      alert("Falha ao listar os itens.");
    }
  } catch (erro) {
    alert("Erro ao listar os itens:", erro);
  }
}

function sincronizarLocalStorage(itensDaAPI) {
  try {
    const itensNoLocalStorage = recuperarDoLocalStorage();

    // Encontra itens que estão no Local Storage, mas não na API e remove-os
    const itensParaRemover = itensNoLocalStorage.filter(itemLS =>
      !itensDaAPI.some(itemAPI => itemAPI._id === itemLS._id)
    );

    itensParaRemover.forEach(itemRemover => {
      const index = itensNoLocalStorage.findIndex(item => item._id === itemRemover._id);
      itensNoLocalStorage.splice(index, 1);
    });

    // Adiciona itens da API que não estão no Local Storage
    itensDaAPI.forEach(itemAPI => {
      const itemExistente = itensNoLocalStorage.find(itemLS => itemLS._id === itemAPI._id);
      if (!itemExistente) {
        itensNoLocalStorage.push(itemAPI);
      }
    });

    // Atualiza o Local Storage com os itens sincronizados
    localStorage.setItem("itens", JSON.stringify(itensNoLocalStorage));
  } catch (erro) {
    alert("Erro ao sincronizar o Local Storage:", erro);
  }
}

function preencherCamposEdicao(item) {
  const editarItemId = document.querySelector("#atualizarItemId");
  const editarItemNome = document.querySelector("#atualizarItemNome");
  const editarItemImagem = document.querySelector("#atualizarItemImagem");

  editarItemId.value = item._id;
  editarItemNome.value = item.name;
  editarItemImagem.value = item.itemImagem;
}

const atualizarBotao = document.querySelector(".atualizar");
atualizarBotao.addEventListener("click", async () => {
  if (itemEditando) {
    const id = itemEditando._id;
    const nome = document.querySelector("#atualizarItemNome").value;
    const imagem = document.querySelector("#atualizarItemImagem").value;

    if (id && nome && imagem) {
      try {
        const resposta = await fetch(`${apiURL}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nome,
            itemImagem: imagem,
          }),
        });

        if (resposta.ok) {
          alert("Item atualizado com sucesso.");

          // Atualiza o item no Local Storage
          const itensLocalStorage = recuperarDoLocalStorage();
          const itemIndex = itensLocalStorage.findIndex(item => item._id === id);
          if (itemIndex !== -1) {
            itensLocalStorage[itemIndex].name = nome;
            itensLocalStorage[itemIndex].itemImagem = imagem;
            localStorage.setItem("itens", JSON.stringify(itensLocalStorage));
          }

          document.querySelector("#atualizarItemId").value = "";
          document.querySelector("#atualizarItemNome").value = "";
          document.querySelector("#atualizarItemImagem").value = "";

          listarTodos();
        } else {
          alert("Falha ao atualizar o item.");
        }
      } catch (erro) {
        alert("Erro ao atualizar o item:", erro);
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  } else {
    alert("Selecione um item para editar.");
  }
});


listarTodos();
setInterval(listarTodos, 10000000);
