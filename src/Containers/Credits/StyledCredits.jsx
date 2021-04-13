import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCredits = styled(motion.div)`
    /* background-color: rgba(51, 118, 172, 0.363); */
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
    a{
        color: white;
    }

`

