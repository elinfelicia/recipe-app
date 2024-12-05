<template>
    <li>
        <router-link :to="`/recipes/${recipe.idMeal}`">{{ recipe.strMeal }}</router-link>
        <button @click="addToFavourites(recipe)">Favourite</button>
    </li>   
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';

    export default defineComponent({
        name: 'RecipeItem',
        props: {
            recipe: {
                type: Object as PropType<any>,
                required: true,
            },
        },
        setup(props) {
            const addToFavourites = (recipe: any) => {
                console.log(recipe);
            };
            return {
                addToFavourites,
            };
        },
    });
</script>