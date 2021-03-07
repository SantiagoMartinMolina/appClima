import styled from 'styled-components';

export const StyledSearch = styled.form`
    
    display: flex;
    align-items: center;        

    .input-container{
        position: relative;
    }
    .input-container:focus-within::before{
        transform: scale(1);
    }
    .input-container::before{
        content: '';
        background-color: var(--color);
        /* display: block; */
        border-radius: 10px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
        transform: scale(0);
        transition: transform 0.3s ease;
    }

    input{
        /* margin: 15px 0; */
        border-radius: 10px;
        outline: none;
        background-color: transparent;
        color: white;
        border: 2px solid white;
        padding: 10px 20px;
        font-family: inherit;
    }
    button{
        margin: 0 20px;
        border-radius: 10px;
        border: 2px solid white;
        padding: 10px 20px;
        background-color: transparent;
        color: white;
        cursor: pointer;
        position: relative;
        font-family: inherit;

        &::before{
            content: '';
        background-color: var(--color);
        /* display: block; */
        border-radius: 10px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
        transform: scale(0);
        transition: transform 0.3s ease;

        }
        &:hover::before{
        transform: scale(1);
        }
    }
    
`