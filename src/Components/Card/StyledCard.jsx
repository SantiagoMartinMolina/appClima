import styled from 'styled-components'

export const StyledCard = styled.div`
    background-color: rgba(51, 118, 172, 0.363);
    /* background-color: rgba(0, 0, 0, 0.5); */
    margin: 20px;
    padding: 15px 25px;
    width: 300px;
    min-height: 200px;
    display: flex;
    justify-content: space-around;
    color: white;
    /* align-items: space-between; */
    flex-direction: column;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 20px #00000080;
    border: 1px solid rgba(255, 255, 255, 0.15);
    position: relative;
    word-wrap: break-word;
    /* transition: all 3s ease; */
    
    h1{
        font-size: 22px; 
        line-height: 1.3;
    }

    button{
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px 10px;
        border: 0;
        border-radius: 5px;
        color: white;
        background-color: #943939;

        &:hover{
            background-color: #b95555;
        }
    }    

    .info{
         display: flex;
        justify-content: space-between; 
        align-items: center;  
        width: 100%;
    }

    p{
        font-weight: 500;
        span{
            display: block;
        }
    }
    
`