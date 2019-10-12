import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import { FaMinus, FaPlus } from "react-icons/fa";

let JumboDisplay = (props) => {
    let styles = {
        'jumbo': {height: "100vh",
                padding: "100px"},
    }
    return( 
    <Jumbotron style={styles.jumbo}>
        <h1 className="display-3">{props.count}</h1>
        <p className="lead">Counting above...</p>
        <hr className="my-2" />
        <p className="lead">
            <Row>
                <Col>
                    <Button id="decrease" color="warning" size="lg" block onClick = {props.setCounter}><FaMinus/></Button>
                </Col>
                <Col>
                    <Button id="increase" color="success" size="lg" block onClick = {props.setCounter}><FaPlus/></Button>
                </Col>
            </Row>
        </p>
        <Button color="danger" size="lg" block onClick={props.exitHandler}>EXIT</Button>
     </Jumbotron>);
} 

export default JumboDisplay;