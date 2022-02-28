const searchFood = () => {
    const searchField= document.getElementById('search-fild')
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => Foodsearce(data.meals));
    // console.log(url);
}

const Foodsearce = mil =>{
    const seardhResult = document.getElementById('Searseresult');


    mil.forEach( ml=>{
        // console.log(ml);
        // console.log(ml.strMealThumb);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick ="loadM(${ml.idMeal})" class="card">
            <img src="${ml.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${ml.strMeal}</h5>
              <p class="card-text">${ml.strInstructions.slice(0,200)}</p>
            </div>
          </div>
        `;
        seardhResult.appendChild(div);
        // console.log(ml.idMeal)
    })

      

}

const loadM = mealId =>{
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaymealDetail(data.meals[0]))
}

const displaymealDetail = meal =>{
    console.log(meal);
}
