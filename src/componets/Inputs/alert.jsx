
import { Fragment } from "react";

export const Alert = ({ messageAlerta, type = "info", text = 'PENDÊNCIAS' }) => {
    
    // Se não há mensagens, não renderizar nada
    if (!messageAlerta || (Array.isArray(messageAlerta) && messageAlerta.length === 0)) {
        return null;
    }

    // Garantir que messageAlerta seja um array
    const mensagens = Array.isArray(messageAlerta) ? messageAlerta : [messageAlerta];


    return (
        <Fragment>
            <div className="rounded p-3 cursor-pointer mt-3" title='LISTA DE PENDÊNCIAS DO PEDIDO ATUAL' style={{backgroundColor: '#cfdfeb'}}>
                <h3 className="form-label text-danger font-weight-bold fw-900">
                    <u>{text}:</u>
                </h3>
                <div>
                    {mensagens.map((pendencia, index) => (
                        <p 
                            key={index}
                            className="d-block form-label text-danger font-weight-bold h4 cursor-pointer mb-2" 
                            title={pendencia}
                        >
                            {pendencia}
                        </p>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};