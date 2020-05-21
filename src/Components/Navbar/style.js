import styled from 'styled-components'

export const Containers = styled.div`
    width:100%;
    height:${props=>props.height};
    background-color:${props=>props.BgColor};
    color: ${props=>props.color};
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    nav{
        height:100%;
        width:80%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
    }
    button{
        border:none;
        border-bottom:2px solid ${props=>props.BgColor};
        padding:5px 10px;
        color:${props=>props.color};
        background-color:${props=>props.BgColor};
        font-size:15px;
        cursor:pointer;
        transition: all .7s;

        :hover{
            border-color:${props=>props.color};
        }
    }

    img{
        height:100%;
        
    }
`
