//Aqui no StockDetail vamos receber via useParams() o stockID.

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Table } from "react-bootstrap";
import DeletePosBtn from "../components/DeletePosBtn";
import ModalOp from "../components/ModalOp";
import UpdateOpModal from "../components/UpdateOpModal";

function StockDetail({ selectedWallet }) {
  const { stockID } = useParams();
  const [stock, setStock] = useState({});

  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/minha-carteira/${stockID}`
        );
        setStock(response.data);
        setIsloading(false);
        console.log("useEffect stockID");
      } catch (error) {
        console.error("STOCK DETAIL -->", error);
      }
    }
    fetchStock();
  }, [stockID]);

  async function handleDelete(index) {
    const clone = [...stock.op];
    clone.splice(index, 1);
    await axios.put(
      `https://ironrest.herokuapp.com/minha-carteira/${stockID}`,
      {
        op: clone,
      }
    );
  }

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
                stock.op.map((op, index) => {
                  return (
                    <tr key={op.data + op.preco + op.qtd + op.tipo}>
                      <td>{op.data}</td>
                      <td>{op.qtd}</td>
                      <td>{`R$ ${op.preco.replace(".", ",")}`}</td>
                      <td>
                        {(op.preco * op.qtd).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                      <td>{op.tipo}</td>
                      <td>
                        <UpdateOpModal
                          op={op}
                          stockID={stockID}
                          operations={stock.op}
                          index={index}
                        />
                      </td>
                      <td>
                        <Button
                          onClick={() => {
                            return handleDelete(index);
                          }}
                        >
                          Excluir
                        </Button>
                      </td>
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
