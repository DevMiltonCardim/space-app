import styled from "styled-components";

const CorpoRodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
    border-radius: 20px 20px 0px 0px;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

const Rodape = () => {
    return (
        <CorpoRodape>
            <IconeContainer>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/facebook.svg" alt="Imagem-facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/twitter.svg" alt="Imagem-twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/imagens/sociais/instagram.svg" alt="Imagem-instagram" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido Por Milton Para Alura.</RodapeTexto>
        </CorpoRodape>
    )
}

export default Rodape;