const knex = require("../conexao");
const { uploadImagem, excluirImagem} = require("../servicos/uploads");
const {
  erroCampo,
  erroServidor,
  naoEncontrado,
  erroProduto,
} = require("../erro");


const cadastrarProdutos = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  const {originalname, buffer, mimetype} = req.file

  try {
    if (!descricao || !quantidade_estoque || !valor || !categoria_id) {
      return res.status(400).json({ mensagem: erroCampo });
    }

    const categoria = await knex("categorias").where("id", categoria_id);

    if (categoria.length === 0) {
      return res.status(400).json({ mensagem: naoEncontrado });
    }
    
    let novoProduto = await knex("produtos")
      .insert({
        descricao,
        quantidade_estoque,
        valor : Number(valor),
        categoria_id,
      })
      .returning("*");

    if (!novoProduto) {
      return res.status(400).json({ mensagem: erroProduto });
    }

    const id = novoProduto[0].id
   
    const imagem = await uploadImagem(
      `produto/${id}/${originalname}`,
      buffer,
      mimetype
  )
   
    novoProduto = await knex('produtos').update({
      produto_imagem: imagem.path
    }).where({id}).returning('*')


    return res.status(200).json(novoProduto[0]);
  } catch (erro) {
    return res.status(500).json({ mensagem: erroServidor });
  }
};

const editarProduto = async (req, res) => {
  const { id } = req.params;
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  try {
    if (!descricao || !quantidade_estoque || !valor || !categoria_id) {
      return res.status(400).json({ mensagem: erroCampo });
    }

    const produtoExistente = await knex("produtos").where("id", id);

    if (produtoExistente.length === 0) {
      return res.status(404).json({ mensagem: naoEncontrado });
    }

    const categoriaExistente = await knex("categorias").where(
      "id",
      categoria_id
    );

    if (categoriaExistente.length === 0) {
      return res.status(404).json({ mensagem: naoEncontrado });
    }

    const produtoAtualizado = await knex("produtos")
      .update({
        descricao,
        quantidade_estoque,
        valor,
        categoria_id,
      })
      .where("id", id);

    if (!produtoAtualizado) {
      return res.status(400).json({ mensagem: erroProduto });
    }

    return res.status(200).json({ mensagem: "Produto atualizado com sucesso!" });

  } catch (erro) {
    return res.status(500).json({ mensagem: erroServidor });
  }
}

const obterProdutoId = async (req, res) => {
  const { id } = req.params

  try {

    const produto = await knex('produtos').where('id', id).first();

    if (!produto) {
      return res.status(404).json({ mensagem: naoEncontrado });
    }

    return res.status(200).json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: erroServidor });
  }
}

const excluirProdutoPorId = async (req, res) => {
  const { id } = req.params
  
  try {
    
    const produtoExiste = await knex('produtos').where('id', id).first()
   

    if (!produtoExiste) {
      return res.status(404).json({ mensagem: "Produto não existe "})
    }
    
    const produto = await knex('pedido_produtos').where('produto_id', id).first()

    
    
    if (produto) {
      return res.status(404).json({ mensagem: "Produto está em um pedido aberto" })
    }

    //VERIFICAR SE PRODUTO ESTÀ EM ALGUM PEDIDO
    //- Validar se o produto que está sendo excluído 
    //não está vinculado a nenhum pedido, caso estiver,
    //não poderá ser excluído e deverá ser retornada uma mensagem indicando o motivo.
    
    await knex('produtos').where('id', id).del();

    return res.status(204).json({ mensagem: 'Produto excluído com sucesso' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ mensagem: erroServidor })
  }
};

const listarProdutos = async (req, res) => {
  const categoriaId = Number(req.query.categoria_id);

  try {
    if (categoriaId) {
      const consultarCategoria = await knex("produtos").where(
        "categoria_id",
        "=",
        categoriaId
      );

      if (!consultarCategoria) {
        return res.status(404).json({
          mensagem: "A categoria do produto não existe.",
        });
      }

      const listarProdutosPorCategoria = await knex("produtos")
        .where("categoria_id", "=", categoriaId)
        .select("*");

      if (listarProdutosPorCategoria.length === 0) {
        return res.status(404).json({
          message: "Não existem produtos cadastrados nesta categoria.",
        });
      }
      return res.status(200).json(listarProdutosPorCategoria);
    }

    const listaDeProdutos = await knex("produtos").select("*");

    if (listaDeProdutos.length === 0) {
      return res
        .status(404)
        .json({ message: "Não existem produtos cadastrados." });
    }

    return res.status(200).json(listaDeProdutos);
  } catch (error) {
    return res.status(400).json({
      mensagem: errosGerais.erroServidor,
    });
  }
}
const excluirImagemProduto = async (req, res) => {
  const { id } = req.params;

  try {
      const produtoEncontrado = await knex('produtos').where({
          id,
          usuario_id: req.usuario.id
      }).first();

      if (!produtoEncontrado) {
          return res.status(404).json('Produto não encontrado');
      }

      await excluirImagem(produtoEncontrado.imagem)

      const produto = await knex('produtos')
          .where({ id })
          .update({
              imagem: null
          });

      if (!produto) {
          return res.status(400).json("O produto não foi atualizado");
      }

      return res.status(204).send()
  } catch (error) {
      return res.status(400).json(error.message);
  }
}

module.exports = {
  cadastrarProdutos,
  editarProduto,
  obterProdutoId,
  excluirProdutoPorId,
  listarProdutos,
  excluirImagemProduto
};
