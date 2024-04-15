import React from 'react'

export function TextoConSaltosDeLinea(texto) {
    const textoConSaltos = texto.split('\n').map((linea, index) => (
        <React.Fragment key={index}>
            {linea}
            <br />
        </React.Fragment>
    ));
    return <div>{textoConSaltos}</div>;
}
