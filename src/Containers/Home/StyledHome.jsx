import styled from 'styled-components'


export const StyledHome = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    .welcome{
        margin: auto;
        padding: 25px 35px;
        max-width: 700px;
        color: white;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 4px 20px #00000060;
        border: 1px solid rgba(255, 255, 255, 0.15);
        position: absolute;
        top: 0;
        text-align: left;
        h1{
            text-align: center;
        }
    }

    .card-home{
        display: flex;
        flex-direction: column;

        color: white;
        padding: 20px 45px;
        max-width: 50%;
        border-radius: 20px;
        background-color: rgba(0,0,0,0.3);
        backdrop-filter: blur(5px);
        box-shadow: 5px 5px 5px rgba(0,0,0, 0.5);

        ul{
            text-align: left;
            margin-top: 10px;
            li{
                margin-bottom: 10px;
            }
        }


    }

    .card-container{
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;    
    }
    
`