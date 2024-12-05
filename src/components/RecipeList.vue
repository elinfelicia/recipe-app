<template>
    <div>
        
        <h1>Recipe List</h1>
        <input type="text" v-model="searchTerm" placeholder="Search for a recipe..." />  
        <button @click="fetchRecipes">Search</button>
        
        <div v-if="loading">
            <h2>Loading...</h2>
        </div>
        <div v-if="error">
            <h2>Error: {{ error }}</h2> 
        </div>
        
        <ul>
            <li v-for="recipe in recipes" :key="recipe.idMeal">
                <router-link :to="`/recipes/${recipe.idMeal}`">{{ recipe.strMeal }}</router-link>
                <button @click="addToFavourites(recipe)">Favourite</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'RecipeList',
        setup() {
            const searchTerm = ref('');
            const recipes = ref<any[]>([]);
            const loading = ref(false);
            const error = ref('');

            const fetchRecipes = async () => {
                loading.value = true;
                error.value = '';

                try {
                    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.value}`);
                    const data = await response.json();
                    recipes.value = data.meals || [];
                } catch (error) {
                    error.value = 'Failed to fetch recipes';
            } finally {
                loading.value = false;
            }
            };
            const addToFavourites = (recipe: any) => {
                let favourites = localStorage.getItem('favourites');
                const favouritesArray = favourites ? JSON.parse(favourites) : [];
                favouritesArray.push(recipe);
                localStorage.setItem('favourites', JSON.stringify(favouritesArray));
                alert('Recipe added to favourites');
            };

            return {
                searchTerm, 
                recipes, 
                loading, 
                error, 
                fetchRecipes, 
                addToFavourites
            }
        }
    });
</script>