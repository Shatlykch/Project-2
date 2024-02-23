# Food Finder App

## Usage

- Enter a calorie range (e.g., 50-500) in the input field.
- Click the "Submit" button to fetch food items within that calorie range.
- The app will display a list of food items along with their images, labels, categories, and nutrient information.

## Code Structure

### App Component

The `App` component is the root component of the app. It manages the state for the query and container of food items. It fetches the data from the Edamam Food API using Axios and renders the `FoodForm` and `FoodList` components.

### FoodForm Component

The `FoodForm` component is a functional component that renders a form with an input field for entering the calorie range and a submit button. It takes three props: `query`, `onChangeHandler`, and `onSubmitHandler`.

### FoodList Component

The `FoodList` component is a functional component that renders a list of food items. It maps over the `container` state and renders a `div` for each food item, displaying the image, label, category, and nutrient information.

## Dependencies

- React
- Axios
## Wireframe

You can view the wireframe for this project [here](https://wireframe.cc/phG0F0).
