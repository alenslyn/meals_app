import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favMealIds = useSelector((state) => state.favMeals.ids);
  const dispatch = useDispatch();

  const favoriteMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
