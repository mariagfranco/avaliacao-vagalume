import './App.css';
import { useQuery } from "react-query";
import Questao1 from './questoes/Questao1';
import Questao2 from './questoes/Questao2';

const getApi = async () =>{
  const res = await fetch('https://api-staging.vagalumewifi.com.br/api/tests/apiTeste');   
  return res.json()
} 

function App() {

  const { data, status } = useQuery('api', getApi)
  
  const beginDate = new Date('01/08/2022');
  const endDate = new Date('08/08/2022');
  
  const differentUser = [];
  
  if(status !== 'loading'){
      const filteredClients = data.connected.filter( (x, i) => 
      x.client_id === "vagalume" &&
      new Date(x.last_connection) >= beginDate &&
      new Date(x.last_connection) <= endDate
  );
    
  filteredClients.forEach(element => {
    if(!differentUser.includes(element.user_id)){
      differentUser.push(element.user_id)
    }
  });
  }

  const differentUsersCount = differentUser.length;
  return (
    <div className="App">
      <Questao1 count={differentUsersCount}/>
      <Questao2 connectedCount={differentUsersCount}/>
    </div>
  );
}

export default App;
