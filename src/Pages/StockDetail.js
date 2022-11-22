//Aqui no StockDetail vamos receber via useParams() o stockID.

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Table, Row, Col } from "react-bootstrap";
import DeletePosBtn from "../components/DeletePosBtn";
import ModalOp from "../components/ModalOp";

function StockDetail({ selectedWallet }) {
  const { stockID } = useParams();

  const [stock, setStock] = useState({});

  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await axios.get(
          `http://ironrest.herokuapp.com/minha-carteira/${stockID}`
        );
        // console.log(response.data);
        setStock(response.data);
        setIsloading(false);
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
              {!isloading &&
                stock.op.map((op) => {
                  return (
                    <tr key={op.data + op.preco + op.qtd + op.tipo}>
                      <td>{op.data}</td>
                      <td>{op.qtd}</td>
                      <td>{op.preco}</td>
                      <td>{op.preco * op.qtd}</td>
                      <td>{op.tipo}</td>
                      <td>Editar</td>
                      <td>Excluir</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Card>
        <DeletePosBtn stockID={stockID} />
      </Container>
    </div>
  );
}

export default StockDetail;
