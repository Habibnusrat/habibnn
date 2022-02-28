
const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
}
loadCountry();

const displayCountry = countrys =>{
    const countryfind = document.getElementById('country')
   
    countrys.forEach( country =>{
        const name = country.name.common;
        const region = country.region;
        const countrydiv = document.createElement('div')
        countrydiv.classList.add('divcount');

        countrydiv.innerHTML = `
        <h3> ${name}</h3>
        <p> ${region}</p>
        <button onClick="loadCountryDetail('${name}')">Detail</button>
        `
        countryfind.appendChild(countrydiv);

    } )
   
   }
   const loadCountryDetail = name =>{

    const url = `https://restcountries.com/v3.1/name/${name}`;
       fetch(url)
       .then(res => res.json())
       .then(data => displayCountryDetailss(data[0]))
   }

   const displayCountryDetailss = country => {
    console.log(country);
       const countryDiv = document.getElementById('contry-Details');
       countryDiv.innerHTML = `
       
       <h4>${country.name.common}</h4>
       <p> Populatin: ${country.population}</p>
        <img width="200px" src=${country.flags.png} alt="">
  
       `
   }
  