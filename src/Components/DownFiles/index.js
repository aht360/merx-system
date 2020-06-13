import React from 'react';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import Upload from '../../Assets/upload.png';

export default function DownFiles(){
    return (
        <div style={{width: "100%", fontFamily: "Encode Sans"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "baseline", borderRadius: "10px", padding: "5px 15px", lineHeight: "0px", margin: "5px 0px"}}>
                    <p style={{color: "#0067CC", fontSize: "15px", fontWeight: "normal", letterSpacing: "0.1em"}}>Relatório de desempenho</p>
                    <img src={Upload} alt="upload" icon={faUpload} style={{color: "#0067CC", fontSize: "15px", fontWeight: "normal", cursor: "pointer"}}/>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "baseline", borderRadius: "10px", padding: "5px 15px", lineHeight: "0px", margin: "5px 0px"}}>
                    <p style={{color: "#0067CC", fontSize: "15px", fontWeight: "normal", letterSpacing: "0.1em"}}>Nota de energia da compra</p>
                    <img src={Upload} alt="upload" icon={faUpload} style={{color: "#0067CC", fontSize: "15px", fontWeight: "normal", cursor: "pointer"}}/>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "baseline", borderRadius: "10px", padding: "5px 15px", lineHeight: "0px", margin: "5px 0px"}}>
                    <p style={{color: "#0067CC", fontSize: "15px", fontWeight: "normal", letterSpacing: "0.1em"}}>Notas de gestão e representação</p>
                    <img src={Upload} alt="upload" icon={faUpload} style={{color: "#0067CC", fontSize: "15px", fontWeight: "normal", cursor: "pointer"}}/>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "baseline", borderRadius: "10px", padding: "5px 15px", lineHeight: "0px", margin: "5px 0px"}}>
                    <p style={{color: "#0067CC", fontSize: "15px", fontWeight: "normal", letterSpacing: "0.1em"}}>Fatura da distribuidora</p>
                    <img src={Upload} alt="upload" icon={faUpload} style={{color: "#0067CC", fontSize: "15px", fontWeight: "normal", cursor: "pointer"}}/>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
                    <p style={{color: "gray", fontSize: "14px"}}>Para anexar um documento, confira se o mesmo está em formato .pdf</p>
                    <p style={{color: "#0067CC", fontSize: "14px", fontWeight: "bold"}}>Salvar</p>
                </div>
            </div>
        </div>
    );
}