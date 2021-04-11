import styled from 'styled-components'

export const StyledAbout = styled.div`
    background-color: rgba(51, 118, 172, 0.363);
    margin: auto;
    padding: 15px 25px;
    width: 700px;
    height: 450px;
    color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 20px #00000080;
    border: 1px solid rgba(255, 255, 255, 0.15);

    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
    }

    .text{
        text-align: left;
    }
    .technologies{
        /* text-align: left; */

    }
`
