import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <div className="container">
                <h1>YadaaFood</h1>
                <nav>
                    <a href="">Products</a>
                    <a href="">Mais vendidos</a>
                    <a href="">Carrinho</a>
                </nav>
            </div>
        </Container>
    )
}