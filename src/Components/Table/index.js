import React from 'react';
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        backgroundColor: '#CFE7FF',
        /*
        borderStyle: 'solid',
        border: '#E5E5E5',
        borderWidth: '10px',
        */
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif`,
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: '#CFE7FF',
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Demanda mínima', '10 MW', '3 MW', '3 MW', '500KW*'),
    createData('Tensão mínima de fornecimento', '69 Kv', ' ', '69Kv', ' '),
    createData('Exercício da Opção (consumidor livre)', '1998', '1998', '2000', '1998'),
    createData('Data ligação do consumidor', ' ', 'Após 08/07/95', ' ', 'Após 08/07/95'),
];


export default function Main(){
    
    return(
        <div className="table-container">
            <div className="textBox-table">
                <p className="text-table">
                    Seguida pela Lei 9.074, de 07 de julho de 1995, criando o produtor independente de energia (PIE) e o consumidor livre de energia elétrica, consumidor com direito a escolher livremente seu fornecedor de energia elétrica, de acordo com condições pré-estabelecidas definidas no quadro abaixo:
                </p>
            </div>

            <div className="table-box">
                <TableContainer component={Paper}>

                    <Table  aria-label="customized table">
                        <TableBody>

                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>

                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>

                                    <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="center">{row.protein}</StyledTableCell>

                                </StyledTableRow>
                            ))}

                        </TableBody>
                    </Table>

                </TableContainer>
            </div>


            <div className="textBox-table">
                <p className="text-table">
                    Em 1996, o Ministério de Minas e Energia (MME) implantou o Projeto de Reestruturação do Setor Elétrico Brasileiro, conhecido como projeto RE-SEB. Foi implantado por meio da contratação da consultoria inglesa Coopers &amp; Lybrad, que havia participado das reformas em países como: Grã-Bretanha, Finlândia, Ucrânia e Portugal, e tinha como principais objetivos: a desverticalização das empresas de energia elétrica, separando os segmentos em geração, transmissão e distribuição; criação da ANEEL; criação do ONS; criação do MAE; estabelecimento da competição na geração e comercialização; manter a distribuição e transmissão reguladas. </p>
                <p className="text-table">
                    Em 2003, foram lançadas duas importantes Medidas Provisórias, a Medida Provisória nº 144, que tratava sobre a comercialização da energia elétrica, e a Medida Provisória nº 145 que criou a EPE, com isso foi dado início a evolução do setor elétrico nacional. Estas Medidas Provisórias foram mais tarde transformadas na Lei Nº 10.848, de 15 de Março de 2004, que trouxe a desregulação do mercado de energia, saindo de um regime monopolista e levando a um mercado mais aberto e competitivo. 
                </p>
                <p className="text-table">
                    Essa mudança aconteceu com a substituição do Mercado Atacadista de Energia (MAE) pela Câmara de Comercialização de Energia Elétrica (CCEE), e divisão do mercado em dois ambientes de negociação de energia elétrica, o Ambiente de Contratação Livre (ACL) e Ambiente de Contratação Regulada (ACR).
                </p>
            </div>
        </div>
    );
}