import styled from 'styled-components'
import { motion } from "framer-motion"



export const StyledCard = styled(motion.div)`
    /* background-color: rgba(51, 118, 172, 0.363); */
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-color: rgba(156, 220, 170, 0.4);
    /* background-color: rgba(182, 238, 194, 0.4); */

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
    border: 1px solid rgba(255, 255, 255, 0.4);
    position: relative;
    word-wrap: break-word;
    cursor: pointer;
    /* transition: all 3s ease; */

    
    h1{
        font-size: 22px; 
        line-height: 1.3;
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
        color: white;
        &:active{
            transform: scale(0.8)
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