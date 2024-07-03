import styled from 'styled-components';
import tags from './tags.json';

const TagPai = styled.section`
    display: flex;
    width: auto;
    align-items: center;
    gap: 10px;
    padding-top: 32px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = ({ setTag, foto = [] }) => {
    return <TagPai>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
        </TagPai>
}

export default Tags;