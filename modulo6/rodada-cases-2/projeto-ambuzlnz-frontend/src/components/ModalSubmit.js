import styled from "styled-components"

export const ModalDiv = styled.div`
    border: 1px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background-color: white;
    
    .closeSubmit {
        position: relative;
        top: -1em;
        left: 100%;
        background-color: blue;
    }
`
export function ModalSubmit(props) {
    const { order, closeSubmit } = props

    return (
        <ModalDiv>
            <button
                className="closeSubmit"
                onClick={closeSubmit}
            >
                X
            </button>
            <h2>Pedido realizado com sucesso!</h2>
            <h3>Resumo do pedido</h3>
            <p>ID do pedido: {order.id}</p>
            {order.pizzas.map((pizza) => (
                <p key={pizza.name}>
                    Pizza {pizza.name}
                    - {pizza.price.toLocaleString(
                        'pt-br',
                        { style: 'currency', currency: 'USD' }
                    )}
                    {" "} x {pizza.quantity}
                </p>
            ))}
            <p>Total pago: {
                order.total.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </p>
        </ModalDiv>
    )
}