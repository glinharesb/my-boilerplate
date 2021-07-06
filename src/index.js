import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.scss";

const App = () => {
    return (
        <div>
            <Title>Oi</Title>
        </div>
    )
};

const Title = styled.h1`
    font-size: 1.5em;
    color: palevioletred;
`;

ReactDOM.render(<App/>, document.getElementById("root"));
