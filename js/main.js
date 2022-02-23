const randomIndex = function (length) {
 return Math.floor(Math.random() * length);
}

const fetchData = async function (url) {
  
  try {
     
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
       //const character = data[randomIndex(data.length)];

        console.log(data);

        const output = `
      <h1>Name:${data.name}</h1>
     <h2>Latin-name:${data.latin_name}</h2>
     <h2>Animal type:${data.animal_type}</h2>
     <img src="${data.image_link}" alt="Images of ${data.name}" style: width="400px" height="400px"">
     <p>Diet: ${data.diet}</p>
     <p>Diet: ${data.geo_range}</p>
     <p>habitat: ${data.habitat}</p>
     <p>lifespan: ${data.lifespan}</p>
     <p>Id: ${data.id}</p>

    
     `;
        document.querySelector('.content').innerHTML = output;

      } catch (error) {
      console.error("There was a problem.");
    }

  }

 const endpoint = 'https://zoo-animal-api.herokuapp.com/animals/rand';
 fetchData(endpoint);

 const submitHandler = (event) => {
  event.preventDefault();
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  fetchData(endpoint);
});