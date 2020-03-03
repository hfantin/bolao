import React, { useState, useEffect } from "react";

import { Card, Spinner} from "react-bootstrap";


interface Props {
    loading: boolean;
    jogo: number;
    data: string;
    dezenas: Array<number>;
}

const UltimosJogos: React.FC<Props> = (props: Props) => {

    const { loading, jogo, data, dezenas } = props;

    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
        setShowLoading(loading);
    }, [loading]);

    return (
        <Card>
            <Card.Header>Concurso {jogo} realizado em {data}</Card.Header>
            <Card.Body>
            {showLoading ? (
                <Spinner animation="border" />
            ) : jogo ? (
                <>
                <Card.Text>{dezenas.join(", ")}</Card.Text>
                </>
            ) : null}
            </Card.Body>
      </Card>
    )
}

export default UltimosJogos;