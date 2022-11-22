import { useState, useEffect } from "react";
import axios from 'axios';
import {Row, Col, Container, Form, Button, ThemeProvider} from 'react-bootstrap'

function NewOp({stockID}) {
    //trazer o detalhamento como prop da página de detalhes
    const [position, setPosition] = useState()
    const [operation, setOperation] = useState({
        "tipo": "",
        "qtd": 0,
        "preco": 0,
        "data":""
    })

    useEffect(() => {
        async function fetchPosition() {
            const response = await axios.get(`https://ironrest.herokuapp.com/minha-carteira/${stockID}`)
            setPosition(response.data)
        }
        fetchPosition()
    })

    function handleChange(e) {
        setOperation({...operation, [e.target.name]:e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const clone = {...position}
        delete clone._id

        clone.op.push(operation)

        try {
           await axios.put(`https://ironrest.herokuapp.com/minha-carteira/${stockID}`,clone) 
        } catch (error) {
            
        }
    }
    console.log()
    return (
<ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
            >
            <Container fluid="md">
                <Row>
                    <Col>
                    <Form.Label>Tipo:</Form.Label>
                        <Form.Select name="tipo" value={operation.tipo} onChange={handleChange}>
                            <option>Selecionar</option>
                            <option value="Compra">Compra</option>
                            <option value="Venda">Venda</option>                  
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Data:</Form.Label>
                        <Form.Control type="date" 
                                      name="data" 
                                      value={operation.data}
                                      onChange={handleChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control type="number" 
                                      name="qtd" 
                                      value={
                                        operation.tipo === "Venda" ? -operation.qtd : operation.qtd
                                        } 
                                      onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Preço por ação:</Form.Label>
                        <Form.Control type="number" name="preco" value={operation.preco} onChange={handleChange}/>
                    </Col>
                </Row>
                    <Button as="input" type="submit" value="Nova Operação" onClick={handleSubmit}/>
            </Container>
        </ThemeProvider>
    )
}

export default NewOp