import { useQuery } from "react-query";
import './Questao2.css'
const getInfo = async () =>{
    const res = await fetch('https://api-staging.vagalumewifi.com.br/api/tests/infoTeste');   
    return res.json()
  } 

function Questao2(connectedCount) {
const { data, status } = useQuery('info', getInfo)

if(status === 'success' && data !== 'undefined'){
    return (
        <>
          <div id="cards">
            <div id="card">
              <h1>Pessoas Totais</h1>
              <p>{data.total}</p>
            </div>
            <div id="card">
              <h1>Pessoas Online</h1>
              <p>{data.online}</p>
            </div>
            <div id="card">
              <h1>Pessoas offline</h1>
              <p>{data.total - data.online}</p>
            </div>
            <div id="card">
              <h1>Pessoas conectadas no período</h1>
              <p>{connectedCount.connectedCount}</p>
            </div>
          </div>
        </>
      );
}

  }
  
  export default Questao2;
  