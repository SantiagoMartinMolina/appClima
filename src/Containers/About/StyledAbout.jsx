import styled from 'styled-components'
import { motion } from 'framer-motion';

export const StyledAbout = styled(motion.div)`
    /* background-color: rgba(51, 118, 172, 0.363); */
    /* background-color: rgba(156, 220, 170, 0.4); */
    margin: auto;
    padding: 20px;
    max-width: 700px;
    color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 20px #00000060;
    border: 1px solid rgba(255, 255, 255, 0.15);
    width: 90%;
    margin-bottom: 40px;


    .redes{
        width: 100%;
        margin: 30px auto 0;
        p{
             margin-top: 10px;
        }
        h4{
            text-align: center;
        }
    }


    .redes p a{
        color: white;
    }

    .links-container {
        display: flex;
        justify-content: center;
        align-items: center;  
        margin-top: 20px;
    }

    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        margin-top: 30px;
    }

    .text{
        text-align: left;
    }
    .technologies{
        margin: 30px 0;

        .tech-cont{
            margin-top: 20px;
            display: flex;
            justify-content: center;

            p{
                margin-top: 10px;
            }
        }
        
    }

    .fab{
        font-size: 30px;
        margin-right: 10px;
    }

    .mg-r{
        margin-right: 60px;
    }

    @media screen and (max-width: 480px){

        .tech-cont i{
            margin: 0;
        }
        /* .mg-r{
            margin: 0;
        }
        .mg-r i{
            display: block;
        } */

    }
`
