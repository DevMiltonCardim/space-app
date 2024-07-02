import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json"
import Imagem from "../Imagem";

const ColunaDeImagens = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`

const Populares = () => {
    return (
    <section>
        <Titulo $alinhamento='center'>Populares</Titulo>
        <ColunaDeImagens>
            {fotos.map(foto => <Imagem
                key={foto.id} 
                foto={foto}
            />)}
        </ColunaDeImagens>
        <Botao>Ver mais</Botao>
    </section>
    )

}

export default Populares;