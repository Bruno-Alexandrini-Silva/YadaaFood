import { Container } from "./styles";

export function CardProducts() {


    return (


        <Container>
            <img src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=4x3&$p$f=eceb3e7" alt="" />
            <div>
                <h1>Nome do produto</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <span>R$12,00</span>
                <button>Adicionar ao carrinho</button>
            </div>
        </Container>
    )
}