import styled from 'styled-components'


export const Body = styled.div`
    width:100%;
    height:100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    .branco{
        margin-top:-50px;
        background:#FFFFFF;
        height:60px;
        width:100%;
        display:flex;
        justify-content: space-evenly;
        align-content:center;
        div{
            width: 50%;
        }
    }
`


export const Containers = styled.div`
    width:${props=>props.width};
    height:${props=>props.height};
    background-color:${props=>props.BgColor};
    color: ${props=>props.color};
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;

    .line{
        width:1px;
        height:200px;
        border:1px solid #C4C4C4;
    }
`
export const Infos = styled.div`
    width:40%;
    height:350px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    text-align:center;
    font-size:18px;
    color:#515151;

    button{
        border:none;
        display:flex;
        align-items:center;
        background-color:#FFFFFF;
        align-items:center;
        cursor:pointer;
        color:#0067CC;
    }
    
`
export const Pictures = styled.div`
    height:450px;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items: center;
    background:#F4F4F4;

    img{
        width:40%;
        height:80%;
    }
`
export const Text = styled.div`
    font-size:18px;
    text-align:justify;
    height:70%;
    width:40%;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    
    p{ font-size:24px; }

`
export const ContainerIcon = styled.div`
    width:100%;
    height:600px;
    display:flex;
    justify-content:space-evenly;
    font-size:18px;
    h1{
        font-size:56px;
    }
    div{
        width:50%;
    }
    .title{
        width:40%;
    }
`
export const Icons = styled.div`
        width:100%;
        height:80%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;       
        text-align: justify;
        
    div{
        width:60%;
        height:30%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;    

        img{
            margin:20px;
            width:100px;
            height:100px;
        }      
    }
`
export const ContainerBePartner = styled.div`
    width:100%;
    height:400px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    .title{
        width:35%;
        b{ font-size:56px;}
        p{width:80%; font-size:18px;}
    }
    .buttons{
        width:45%;
        height:50%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }

    
`

export const BeClient = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    span{width:40%;}


    button{
        width:220px;
        margin: 0px 20px;
        padding:10px 15px;
        background:#0067CC;
        color:#FFFFFF;
        border: none;
        cursor:pointer;
        display:flex;
    }

`

export const Container = styled.div`
    background:#0067CC;
    color: #FFFFFF;
    height:500px;
    font-size:18px;
    display:flex;
    flex-direction:row;
    justify-content: space-around;

    div:first-child{
        width:60%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content: space-evenly;
        align-items: center;
        b{font-size:44px;}

        div{
            height:50%;
            width:80%;
            display: flex;
            flex-direction: column;
            button{ align-self:flex-start; }
        }
    }
    div:last-child{
        
        display:flex;
        align-items: flex-end;
        width:50%;
        img{
            width:95%;
            height:65%;
        }
    }

    button{
        background:#0067CC;
        color:#FFFFFF;
        border: none;
        cursor:pointer;
        display:flex;
        align-items:center;
    }
`