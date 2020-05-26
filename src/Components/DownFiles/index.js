import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'


export default function DownFiles(){
    return (
        <div style={{width: "100%"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", backgroundColor: "#EBF3ED", alignItems: "baseline", borderRadius: "10px", padding: "5px 15px", lineHeight: "0px", margin: "5px 0px"}}>
                    <p style={{color: "#0067CC", fontSize: "15px", fontWeight: "600"}}>Relatório de desempenho</p>
                    <FontAwesomeIcon icon={faUpload} style={{color: "#0067CC", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}/>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", backgroundColor: "#EBF3ED", alignItems: "baseline", borderRadius: "10px", padding: "5px 15px", lineHeight: "0px", margin: "5px 0px"}}>
                    <p style={{color: "#0067CC", fontSize: "15px", fontWeight: "600"}}>Nota de energia da compra</p>
                    <FontAwesomeIcon icon={faUpload} style={{color: "#0067CC", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}/>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", backgroundColor: "#EBF3ED", alignItems: "baseline", borderRadius: "10px", padding: "5px 15px", lineHeight: "0px", margin: "5px 0px"}}>
                    <p style={{color: "#0067CC", fontSize: "15px", fontWeight: "600"}}>Notas de gestão e representação</p>
                    <FontAwesomeIcon icon={faUpload} style={{color: "#0067CC", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}/>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-between", backgroundColor: "#EBF3ED", alignItems: "baseline", borderRadius: "10px", padding: "5px 15px", lineHeight: "0px", margin: "5px 0px"}}>
                    <p style={{color: "#0067CC", fontSize: "15px", fontWeight: "600"}}>Fatura da distribuidora</p>
                    <FontAwesomeIcon icon={faUpload} style={{color: "#0067CC", fontSize: "15px", fontWeight: "600", cursor: "pointer"}}/>
                </div>
                <div style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
                    <p style={{color: "gray", fontSize: "14px"}}>Para anexar um documento, confira se o mesmo está em formato .pdf</p>
                    <p style={{color: "#0067CC", fontSize: "14px"}}>Salvar</p>
                </div>
            </div>
        </div>
    );
}