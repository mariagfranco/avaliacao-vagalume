import { useState } from "react";

import './Questao1.css';

function Questao1(count){
const [hidden, setHidden] = useState(true)

return(
    <div className="card">
        <button id="button" onClick={() => setHidden(!hidden)}>
            Questão 1
        </button>
        <div hidden={hidden}>
            <h1 >{count.count}</h1>

        </div>
    </div>
)

}

export default Questao1;