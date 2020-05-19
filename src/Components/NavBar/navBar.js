import React from 'react'
import {Containers} from './styles.js'
import {Link} from "react-router-dom";
import Logo from "../../Assets/logo.png"
import BlackLogo from "../../Assets/blackLogo.png"

export default function NavBar(props){
    var changeColor = props.changeColor || false
    var color 
    var fontColor
        if(changeColor ===false){
            color = "#0067CC"
            fontColor = "#FFFFFF"
        }else{
            color = "#FFFFFF;"
            fontColor = "#0067CC"
        }

    return(
        <div>
            <Containers height="70px" BgColor={color} color={fontColor}>
                {!changeColor && <img src={Logo} alt="Logo"/>}
                {changeColor && <img src={BlackLogo} alt="Logo"/>}
                <nav> 
                    <Link to="/"><button>Início</button></Link>
                    <button>Pesquisa Mercado Livre</button>
                    <button>Negocie sua Energia</button>
                    <Link to="/simulacao"><button>Simulação</button></Link>
                    <Link to="/"><button>Mercado Livre de Energia</button></Link>
                    <Link to="/"><button>Autoprodução de Energia</button></Link>
                    <Link to="/"><button>Contato</button></Link>
                    <Link to="/"><button>Login</button></Link>
                </nav>

            </Containers>
        </div>
    )
}