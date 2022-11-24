    import axios from 'axios';
    
    async function calcData(i) {

        const quantidadeTotal =
        i.op
          .filter((op) => op.tipo === "Compra")
          .map((op) => +op.qtd)
          .reduce((a, b) => a + +b, 0) -
        i.op
          .filter((op) => op.tipo === "Venda")
          .map((op) => +op.qtd)
          .reduce((a, b) => a + +b, 0);
      const precoMedio =
        i.op
          .filter((op) => op.tipo === "Compra")
          .map((op) => +op.preco * +op.qtd)
          .reduce((a, b) => a + +b, 0) /
        i.op
          .filter((op) => op.tipo === "Compra")
          .map((op) => +op.qtd)
          .reduce((a, b) => a + +b, 0);  

      await axios.put(
        `https://ironrest.herokuapp.com/minha-carteira/${i._id}`,
        { pm: precoMedio }
      );

      await axios.put(
        `https://ironrest.herokuapp.com/minha-carteira/${i._id}`,
        { qtd_total: quantidadeTotal }
      );
    }
  
    export default calcData;
