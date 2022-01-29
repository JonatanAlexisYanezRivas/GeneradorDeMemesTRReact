import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }

  const exportar = function(evento){
    alert("Exportar");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      

      var img = canvas.toDataURL("image/jpg");
      var link = document.createElement('a');
      link.download = "meme.jpg";
      link.href = img;
      link.click();
  });
  }


  return (
    <div className="App">
      <h1>Generador de Memes</h1>
        <select onChange={onChangeImagen}>
          <option value="Takemichi">Takemichi</option>
          <option value="Mikey">Mikey</option>
          <option value="Draken">Draken</option>
          <option value="Chifuyu">Chifuyo</option>
        </select> <br/>
        
        <input onChange={onChangeLinea1} type="text" placeholder='linea 1'></input> <br/>
        <input onChange={onChangeLinea2} type="text" placeholder='linea 2'></input> <br/>
        <button onClick={exportar}>Exportar</button> <br/>

        <div className='meme' id='meme'>
          <span className='span1'>{linea1}</span> <br/>
          <span className='span2'>{linea2}</span> <br/>
          <img className='img' src={"/img/"+ imagen + ".jpg"}></img>
        </div>
        
    </div>
  );
}

export default App;
