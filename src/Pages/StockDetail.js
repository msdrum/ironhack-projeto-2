//Aqui no StockDetail vamos receber via useParams() o stockID.

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Table, Row, Col } from "react-bootstrap";
import DeletePosBtn from '../components/DeletePosBtn';
import ModalOp from '../components/ModalOp'

function StockDetail() {
  const { stockID } = useParams();
  const [stock, setStock] = useState({});

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await axios.get(
          `http://ironrest.herokuapp.com/minha-carteira/${stockID}`
        );
        setStock(response.data);
      } catch (error) {
        console.error("STOCK DETAIL -->", error);
      }
    }
    fetchStock();
  }, [stockID]);

  console.log(stock.op)
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>{stock.ticker}</Card.Title>
            <ModalOp ticker={stock.ticker} stockID={stockID} />
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
              {stock.op.map(op => {
                return (
                <div>
                  <td>{op.data}</td>
                  <td>{op.qtd}</td>
                  <td>{op.preco}</td>
                  <td>{op.preco * op.qtd}</td>
                  <td>{op.tipo}</td>
                </div>
                )                
              })}
                <td>Editar</td>
                <td>Excluir</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <DeletePosBtn stockID={stockID}/>
      </Container>
    </div>
  );
}

export default StockDetail;
