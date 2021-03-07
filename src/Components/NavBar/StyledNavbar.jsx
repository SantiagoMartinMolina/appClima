import styled from 'styled-components'

export const StyledNavbar = styled.nav`

    /* background-color: transparent; */
    
    color: white;
    background: rgb(133,133,135);
    background: linear-gradient(180deg, rgba(133,133,135,0.7441177154455532) 0%, rgba(121,121,124,0.6012605725884104) 52%, rgba(124,127,128,0) 92%);
    /* min-height: 100px; */
    padding-bottom: 25px;
    .nav-container{
        margin: 0 auto;
        padding: 20px 0;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1{
            position: relative;
            &::before{
                content: '';
                height: 5px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                background-color: var(--color);
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }
            &:hover::before{
                transform: scaleX(1);
            }
        }
    }
    a{
        text-decoration: none;
        color: white;
        position: relative;

        &::before{
            content: '';
            background-color: var(--color);
            height: 5px;
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            /* top: 100%; */
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        
        &:hover::before{
            transform: scaleX(1);
        }
    }




    
    
`