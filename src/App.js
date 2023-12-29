import { useEffect, useState } from "react";
import './style.css'

////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState([])

  useEffect(() => {

    function carregarApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json)
          setNutri(json)
        })
    }

    carregarApi()
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo}/>
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="btn">Saiba Mais</a>
          </article>
        )
      })}

    </div>
  );
}

export default App;
