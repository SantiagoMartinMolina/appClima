import styled from 'styled-components'


export const StyledHome = styled.div`
    /* background-color: red; */
    min-height: 80vh;
    display: flex;
    justify-content: center;
    /* align-items: flex-start; */
    align-items: center;

    .card-home{
        display: flex;
        flex-direction: column;

        color: white;
        /* padding: 0; */
        padding: 20px 45px;
        /* margin: 280px auto; */
        max-width: 50%;
        /* border: 5px solid black; */
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