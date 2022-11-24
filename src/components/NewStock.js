import { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  ThemeProvider,
} from "react-bootstrap";
import tickers from "../tickers.json";

function NewStock({ walletID, reload, setReload, handleClose }) {
  const [positions, setPosition] = useState([]);

  useEffect(() => {
    async function fetchPositions() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/minha-carteira"
      );
      setPosition(response.data);
    }
    fetchPositions();
  }, []);

  const [operation, setOperation] = useState({
    tipo: "Compra",
    qtd: 0,
    preco: 0,
    data: "",
  });

  const [form, setForm] = useState({
    ticker: "",
    pm: 0,
    qtd_total: 0,
    op: [],
    carteira: walletID,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleOperation(e) {
    setOperation({ ...operation, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    form.pm = operation.preco;
    form.qtd_total = operation.qtd;
    form.op.push(operation);
    await axios.post("https://ironrest.herokuapp.com/minha-carteira", form);

    setForm({
      ticker: "",
      pm: 0,
      qtd_total: 0,
      op: [],
      carteira: walletID,
    });

    setOperation({
      tipo: "Compra",
      qtd: 0,
      preco: 0,
      data: "",
    });
    setReload(!reload);
    handleClose();
    window.location.reload();
  }

  const selectedWalletTickers = positions
    .filter((pos) => pos.carteira === walletID)
    .map((pos) => pos.ticker);
  const tickerArr = tickers
    .map((ticker) => Object.values(ticker)[0])
    .filter((ticker) => {
      return !selectedWalletTickers.includes(ticker);
    });

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container fluid="md">
        <Row>
          <Col>
            <Form.Label>Ticker</Form.Label>
            <Form.Select
              name="ticker"
              value={form.ticker}
              onChange={handleChange}
            >
              <option>Ticker</option>
              {tickerArr.sort().map((ticker) => {
                return (
                  <option value={ticker} key={ticker}>
                    {ticker}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Data:</Form.Label>
            <Form.Control
              type="date"
              name="data"
              value={operation.data}
              onChange={handleOperation}
            />
          </Col>
          <Col>
            <Form.Label>Tipo:</Form.Label>
            <Form.Select
              name="tipo"
              value={operation.tipo}
              onChange={handleOperation}
            >
              <option>Selecionar</option>
              <option value="Compra">Compra</option>
              <option value="Venda">Venda</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control
              type="number"
              name="qtd"
              value={operation.qtd}
              onChange={handleOperation}
            />
          </Col>
          <Col>
            <Form.Label>Preço por ação:</Form.Label>
            <Form.Control
              type="number"
              name="preco"
              value={operation.preco}
              onChange={handleOperation}
            />
          </Col>
        </Row>
        <Button
          as="input"
          type="submit"
          value="Nova Posição"
          onClick={handleSubmit}
        />
      </Container>
    </ThemeProvider>
  );
}

export default NewStock;
