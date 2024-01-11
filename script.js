// Sample recipe data
let recipes = [];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${recipe.name}</strong>
                        <p>${recipe.ingredients}</p>
                        <p>${recipe.instructions}</p>
                        <button onclick="editRecipe(${index})">Edit</button>
                        <button onclick="deleteRecipe(${index})">Delete</button>`;
        recipeList.appendChild(li);
    });
}

// Function to save or update a recipe
function saveRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    const recipe = {
        name: recipeName,
        ingredients: ingredients,
        instructions: instructions
    };

    recipes.push(recipe);
    displayRecipes();

    // Clear the form
    document.getElementById('recipeForm').reset();
}

// Function to edit a recipe
function editRecipe(index) {
    const recipe = recipes[index];

    document.getElementById('recipeName').value = recipe.name;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;

    // Remove the edited recipe from the array
    recipes.splice(index, 1);

    // Update the displayed recipes
    displayRecipes();
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Initial display of recipes
displayRecipes();
