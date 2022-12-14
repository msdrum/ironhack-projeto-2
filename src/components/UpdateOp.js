import {Row, Col, Container, Form, Button, ThemeProvider} from 'react-bootstrap'
import { useState } from "react";
import axios from 'axios';

function UpdateOp({ stockID, op, operations, index }) {

    const [operation, setOperation] = useState({
        "tipo": "",
        "qtd": 0,
        "preco": 0,
        "data":""
    })

    function handleChange(e) {
        setOperation({...operation, [e.target.name]:e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const clone = [...operations]

        clone.splice(index, 1, operation)        

        try {
           await axios.put(`https://ironrest.herokuapp.com/minha-carteira/${stockID}`, {"op":clone}) 
        } catch (error) {
            
        }
    }



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
                                      onChange={handleChange}
                                      placeholder={op.data}
                                      />
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
                                      onChange={handleChange}
                                      placeholder={op.data}
                                      />
                    </Col>
                    <Col>
                        <Form.Label>Pre??o por a????o:</Form.Label>
                        <Form.Control type="number" 
                                      name="preco" 
                                      value={operation.preco} 
                                      onChange={handleChange}
                                      placeholder={op.preco}  
                                      />
                    </Col>
                </Row>
                    <Button as="input" type="submit" value="Nova Opera????o" onClick={handleSubmit}/>
            </Container>
        </ThemeProvider>
    )
}

export default UpdateOp;