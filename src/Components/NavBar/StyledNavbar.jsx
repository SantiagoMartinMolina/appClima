import styled from 'styled-components'

export const StyledNavbar = styled.nav`

    color: white;
    background: rgb(124,176,135);
    background: linear-gradient(180deg, rgba(124,176,135,0.9) 0%, rgba(156,220,170,0.3) 52%, rgba(173,249,189,0) 92%);
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
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        
        &:hover::before{
            transform: scaleX(1);
        }

    }
    .links{
        font-size: 20px;
        a:first-child{
            margin-right: 20px;
        }
    }

    @media screen and (max-width: 480px){
        .nav-container{
            flex-direction: column;
        }   
        .links{

        }   
          
    }



    
    
`