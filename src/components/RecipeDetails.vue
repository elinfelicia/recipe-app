<template>
    <div>
        <h1 v-if="recipe">{{ recipe.strMeal }}</h1>
        <div v-if="recipe">
            <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
            <h2>Instructions</h2>
            <p>{{ recipe.strInstructions }}</p>
            <h2>Ingredients</h2>
            <ul>
                <li v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}</li>
            </ul>
        </div>
        <div v-else>
            <h2>Loading...</h2>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    export default defineComponent({
        name: 'RecipeDetails',
        setup() {
            const route = useRoute();
            const recipe = ref<any>(null);
            const ingredients = ref<string[]>([]);

            onMounted(async () => {
                const id = route.params.id;
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                recipe.value = data.meals ? data.meals[0] : null;

                if (recipe.value) {
                    ingredients.value = Object.keys(recipe.value)
                        .filter(key => key.startsWith('strIngredient') && recipe.value[key])
                        .map(key => recipe.value[key]);
                }
            });

            return {
                recipe,
                ingredients,
            };
        },
    });
</script>

