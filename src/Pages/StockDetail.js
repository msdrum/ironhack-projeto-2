//Aqui no StockDetail vamos receber via useParams() o stockID.

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Table, Row, Col } from "react-bootstrap";

function StockDetail() {
  const { stockID } = useParams();

  const [stock, setStock] = useState({});

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await axios.get(
          `http://ironrest.herokuapp.com/minha-carteira/${stockID}`
        );
        console.log(response.data);
        setStock(response.data);
      } catch (error) {
        console.error("STOCK DETAIL -->", error);
      }
    }
    fetchStock();
  }, [stockID]);

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>{stock.ticker}</Card.Title>
          </Card.Header>

          <Table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Preço Unitário</th>
                <th>Valor da Operação</th>
                <th>Tipo da Operação</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{stock.data}</td>
                <td>{stock.qtd}</td>
                <td>{stock.preco}</td>
                <td>{stock.preco * stock.qtd}</td>
                <td>{stock.tipo}</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
}

export default StockDetail;
