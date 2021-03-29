import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>CABÉÇA</h1>
            <h2>Quantas vezes o BnN pinou hoje? Conte para nós</h2>
            <Contador/>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qPSheWwmbBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
            <iframe width="560" height="315" src="https://www.youtube.com/embed/p_ijad7ZjkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
    export default Home