let contenedorTarjetas = document.querySelector(".cards-grid");

fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => {
    data.results.map((elemento) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("flip-card");

      const innerContenedor = document.createElement("div");
      innerContenedor.classList.add("flip-card-inner");

      const title=document.createElement("h1");
      title.classList.add("title")
      title.textContent=elemento.name;

      
      const frontCard = document.createElement("div");
      frontCard.classList.add("flip-card-front");
      frontCard.style.backgroundImage = `url('${elemento.image}')`;
      
      frontCard.appendChild(title);
      const backCard = document.createElement("div");
      backCard.classList.add("flip-card-back");
      backCard.innerHTML = `
        <p>Status: ${elemento.status}</p>
        <p>Species: ${elemento.species}</p>
      `;

      innerContenedor.appendChild(frontCard);
      innerContenedor.appendChild(backCard);
      tarjeta.appendChild(innerContenedor);
      contenedorTarjetas.appendChild(tarjeta);
    });
  });