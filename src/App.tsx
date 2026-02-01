import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import weird_ad_i_found from "./assets/images/weird-ad-i-found.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Caramon Cotroneo Hello World
            </p>
            <h1>Here is a brand new header for the test</h1>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>Here is one item</li>
                            <li>Here is another item</li>
                            <li>Here is a third</li>
                            <li>And a fourth</li>
                        </ul>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>

                    <Col>
                        <img
                            src={weird_ad_i_found}
                            alt="eeeThis is a screenshot of a weird ad I came across a few years ago."
                        ></img>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
