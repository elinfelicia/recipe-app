<template>
    <div>
        <h1>Favourite Recipes</h1>
        <ul>
            <li v-for="recipe in favourites" :key="recipe.idMeal">
                <router-link :to="`/recipes/${recipe.idMeal}`">{{ recipe.strMeal }}</router-link>
                <button @click="removeFromFavourites(recipe)">Remove</button>
            </li>
        </ul>
        <div v-if="favourites.length === 0">
            <p>No favourite recipes yet.</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted} from 'vue';

    export default defineComponent({
        name: 'FavouritesList',
        setup() {
            const favourites = ref<any[]>([]);

            const getFavourites = () => {
                let storedFavourites = localStorage.getItem('favourites');
                favourites.value = storedFavourites ? JSON.parse(storedFavourites) : [];
            };

            const removeFromFavourites = (recipe: any) => {
                favourites.value = favourites.value.filter((r: any) => r.idMeal !== recipe.idMeal);
                localStorage.setItem('favourites', JSON.stringify(favourites.value));
            };

            onMounted(() => {
                getFavourites();
            });

            return {
                favourites,
                removeFromFavourites,
            };
        }
    });
</script>