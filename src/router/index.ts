import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RecipeList from '../components/RecipeList.vue';
import RecipeDetails from '../components/RecipeDetails.vue';
import FavouritesList from '../components/FavouritesList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipes',
    name: 'RecipeList',
    component: RecipeList
  },
  {
    path: '/recipes/:id',
    name: 'RecipeDetails',
    component: RecipeDetails
  },
  {
    path: '/favourites',
    name: 'FavouritesList',
    component: FavouritesList
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router