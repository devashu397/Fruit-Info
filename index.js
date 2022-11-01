function getInfo() {
  const fruit = document.getElementById("input").value;
  const url = `https://www.fruityvice.com/api/fruit/${encodeURIComponent(
    fruit
  )}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const info = document.getElementById("info");
      info.innerHTML = `Name: ${data.name}<br>Family: ${data.family}<br>Genus: ${data.genus}<br><br>Nutritions (in g)<br><br>Carbohydrates: ${data.nutritions.carbohydrates}<br>Fat: ${data.nutritions.fat}<br>Protein: ${data.nutritions.protein}<br>Sugar: ${data.nutritions.sugar}`;
    })
    .catch((err) => {
      const info = document.getElementById("info");
      info.innerHTML = "No such fruit found";
    });
}
