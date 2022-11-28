  const btn = document.getElementById("press");
  const inpt = document.getElementById("in");
  function nationalize(name){
    let file = "https://api.nationalize.io/?name="
    let file2 = file + name;
    fetch (file2)
    .then(response => {
    return response.json();

    })
    .then(myData =>{
      const element = `
      <p>country: ${myData.country[0]["country_id"]}</p>
      <p>probability: ${myData.country[0]["probability"]}</p>
      `
      document.getElementById("demo").innerHTML = element;

    })
  }

btn.addEventListener("click", function(){
  const value = inpt.value;
  nationalize(value)
});
