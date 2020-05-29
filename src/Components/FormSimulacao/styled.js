import styled from 'styled-components'

export const InputContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;

    div{
        margin: 10px 0px;
        width: 464px;
        height: 70px;
        display:flex;
        flex-direction:column;
    }   


    input,select{
        background: #FFFFFF;
        border: 1px solid #646464;
        color:#0067CC;
        box-sizing: border-box;
        border-radius: 4px;
        width:100%;
        height:100%;
        font-size:20px;
        padding: 0px 5px; 
    }

    input.Button{
        border:none;
        border-bottom:2px solid  #646464;
        background:#FFFFFF;
        color:#646464;
        padding: 0px 120px;
        border-radius:0px;
        :focus{
            color:#0067CC;
            border-color:#0067CC;
        }
    }

` 
export const Body = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    height:100%;

    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    p{
        width:80%;
        text-align:justify;
        font-size:18px;
    }    
    button{
        border:none;
        border-radius:4px;
        padding:15px 120px;
        color:#FFFFFF;
        background-color:#0067CC;
        font-size:15px;
        cursor:pointer;
    }

    h2{
        align-self: flex-start;
        margin-left:150px;
    }

    div.header{
        width:100%;
        display:flex;
        justify-content: space-evenly;

        div:first-child{
            width:50%;
            display:flex;
            flex-direction:column;
            justify-content: space-evenly;
            align-items:flex-start;
            b{
                width:50%;
                align-self:flex-start;
                text-align: start;
                font-size:56px;
                color:#0067CC;
            }
        }
        div:last-child{
            width:50%;
            width:465px;
            height:449px;
        }
    }

`

export const Table = styled.div`
    width:60%;
    height:800px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    
    table{
        border-collapse: collapse;
        td,tr,th{
            padding: 5px 10px;
            border:1px solid black;
        }
        th{
            background:black;   
            color:white;
        }
    }

`