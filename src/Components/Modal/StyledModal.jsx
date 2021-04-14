import styled from 'styled-components'
import { motion } from "framer-motion"

export const StyledModalNotFound = styled(motion.div)`
    background-color: #c0ddc6;
    max-width: 400px;
    min-height: 250px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    .fa-exclamation-circle{
        font-size: 50px;
        margin-bottom: 10px;
    }

    p{
        font-size: 25px;
        margin-bottom: 30px;
    }

    button{
        padding: 5px 15px;
        border: 1px solid black;
        border-radius: 10px;
        background-color: transparent;
        font-size: 15px;
        cursor: pointer;
        &:active{
            transform: scale(0.9)
        }
    }   
    
`

export const StyledModalRepeated = styled(motion.div)`
    background-color: #c0ddc6;
    max-width: 400px;
    min-height: 250px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    .fa-exclamation-triangle{
        font-size: 50px;
        margin-bottom: 10px;
    }

    p{
        font-size: 25px;
        margin-bottom: 30px;
    }

    button{
        padding: 5px 15px;
        border: 1px solid black;
        background-color: transparent;
        border-radius: 10px;
        font-size: 15px;
        cursor: pointer;
        &:active{
            transform: scale(0.9)
        }
    }

    @media screen and (max-width: 480px){
        width: 90%;
    }
`

export const StyledModalDetail = styled(motion.div)`
    /* border: 1px solid white; */
    background-color: #c0ddc6;
    max-width: 400px;
    min-height: 250px;
    border-radius: 10px;
    position: relative;
    width: 90%;
    
    .info-container{
        padding: 20px 30px;
        text-align: left;
        h1{
            text-align: center;
            margin-bottom: 20px;
        }
    }

    .fa-map-marker-alt{
        color: #c22020;
    }

    button{
        padding: 0;
        outline: none;
        border: 0;
        background-color: transparent;
        font-size: 25px;
        position: absolute;
        top: 15px;
        right: 20px;
        cursor: pointer;

        &:active{
            transform: scale(0.8)
        }
    }

`

export const StyledOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
   
`

