let paragrafo = document.getElementById('paragrafo');

async function swapi(tipo) {
  const resposta = await axios.get(`https://swapi.dev/api/${tipo}`);
  console.log(resposta);
  return resposta.data.results;
}

async function abre(tipo) {
  paragrafo.innerHTML = "";
  const resposta = await swapi(tipo);
  console.log(resposta)
  if (tipo == "films") {
    for (let i = 0; i < resposta.length; i++) {
      console.log(resposta[i].name);
      paragrafo.innerHTML += resposta[i].title + "<br>";
    }
  } else {
    for (let i = 0; i < resposta.length; i++) {
      console.log(resposta[i].name);
      paragrafo.innerHTML += resposta[i].name + "<br>";
    }
  }
}

