import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";
import { useEffect, useState } from "react";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
` 

const ModalZoom = ({ foto, aoAlternarFavorito }) => {
    const [ModalAberto, setModalAberto] = useState(false)

    useEffect(() => {
        if( foto ) {
            setModalAberto(true)
        }
    }, [foto]);

    const FecharModal = () => {
        setModalAberto(false)
    }

    return (
        <>
            {foto && ModalAberto && <>
                <Overlay onClick={FecharModal}/>
                <DialogEstilizado open={ModalAberto}>
                    <Imagem foto={foto} expandida={ModalAberto} aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <BotaoIcone formMethod="dialog" onClick={FecharModal}>
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </BotaoIcone>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom;