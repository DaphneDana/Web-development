export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  author: string;
  rating: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Soft and chewy chocolate chip cookies that are perfect for any occasion. A timeless favorite!',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: 'Easy',
    category: 'Dessert',
    author: 'Sarah Johnson',
    rating: 4.8,
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Mix flour, baking soda, and salt in a bowl',
      'Cream butter and sugars until fluffy',
      'Beat in eggs and vanilla',
      'Gradually blend in flour mixture',
      'Stir in chocolate chips',
      'Drop rounded tablespoons onto ungreased baking sheets',
      'Bake for 9-11 minutes until golden brown'
    ],
    tags: ['dessert', 'cookies', 'chocolate', 'baking']
  },
  {
    id: '2',
    title: 'Creamy Chicken Alfredo Pasta',
    description: 'Rich and creamy pasta dish with tender chicken and parmesan cheese. A restaurant-quality meal at home.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    category: 'Main Course',
    author: 'Michael Chen',
    rating: 4.6,
    ingredients: [
      '1 lb fettuccine pasta',
      '2 chicken breasts, sliced',
      '2 cups heavy cream',
      '1 cup grated parmesan cheese',
      '4 cloves garlic, minced',
      '2 tbsp butter',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Season chicken with salt and pepper',
      'Cook chicken in a large pan until golden',
      'Add garlic and butter, cook for 1 minute',
      'Pour in heavy cream and bring to a simmer',
      'Stir in parmesan cheese until melted',
      'Toss with cooked pasta',
      'Garnish with parsley and serve'
    ],
    tags: ['pasta', 'chicken', 'italian', 'creamy']
  },
  {
    id: '3',
    title: 'Fresh Garden Salad',
    description: 'A vibrant mix of fresh vegetables with a tangy vinaigrette. Healthy, refreshing, and delicious!',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: 'Easy',
    category: 'Salad',
    author: 'Emma Williams',
    rating: 4.5,
    ingredients: [
      '4 cups mixed greens',
      '1 cup cherry tomatoes, halved',
      '1 cucumber, sliced',
      '1/2 red onion, thinly sliced',
      '1/2 cup feta cheese',
      '1/4 cup olive oil',
      '2 tbsp lemon juice',
      '1 tsp Dijon mustard',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Wash and dry all vegetables',
      'Combine greens, tomatoes, cucumber, and onion in a large bowl',
      'Whisk together olive oil, lemon juice, and mustard',
      'Season dressing with salt and pepper',
      'Toss salad with dressing',
      'Top with feta cheese',
      'Serve immediately'
    ],
    tags: ['salad', 'healthy', 'vegetarian', 'fresh']
  },
  {
    id: '4',
    title: 'Beef Tacos with Salsa',
    description: 'Spicy ground beef tacos topped with fresh salsa, cheese, and all your favorite toppings.',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c0b5d73?w=800&h=600&fit=crop',
    prepTime: 15,
    cookTime: 20,
    servings: 6,
    difficulty: 'Easy',
    category: 'Main Course',
    author: 'Carlos Rodriguez',
    rating: 4.7,
    ingredients: [
      '1 lb ground beef',
      '1 packet taco seasoning',
      '12 taco shells',
      '1 cup shredded lettuce',
      '1 cup diced tomatoes',
      '1/2 cup shredded cheese',
      '1/2 cup sour cream',
      '1/4 cup chopped cilantro',
      'Lime wedges for serving'
    ],
    instructions: [
      'Brown ground beef in a large skillet',
      'Add taco seasoning and water, simmer',
      'Warm taco shells according to package',
      'Fill shells with seasoned beef',
      'Top with lettuce, tomatoes, and cheese',
      'Add sour cream and cilantro',
      'Serve with lime wedges'
    ],
    tags: ['tacos', 'mexican', 'beef', 'spicy']
  },
  {
    id: '5',
    title: 'Homemade Pizza Margherita',
    description: 'Classic Italian pizza with fresh mozzarella, basil, and tomato sauce. Simple and delicious!',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop',
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    category: 'Main Course',
    author: 'Luca Bianchi',
    rating: 4.9,
    ingredients: [
      '1 pizza dough',
      '1/2 cup tomato sauce',
      '8 oz fresh mozzarella',
      'Fresh basil leaves',
      '2 tbsp olive oil',
      'Salt to taste',
      'Cornmeal for dusting'
    ],
    instructions: [
      'Preheat oven to 475°F (245°C)',
      'Roll out pizza dough on a floured surface',
      'Transfer to a pizza pan dusted with cornmeal',
      'Spread tomato sauce evenly',
      'Tear mozzarella and distribute over sauce',
      'Drizzle with olive oil',
      'Bake for 12-15 minutes until crust is golden',
      'Top with fresh basil before serving'
    ],
    tags: ['pizza', 'italian', 'vegetarian', 'classic']
  },
  {
    id: '6',
    title: 'Berry Smoothie Bowl',
    description: 'A colorful and nutritious smoothie bowl topped with fresh berries, granola, and honey.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    author: 'Olivia Green',
    rating: 4.4,
    ingredients: [
      '2 cups frozen mixed berries',
      '1 banana',
      '1/2 cup Greek yogurt',
      '1/4 cup milk',
      '1 tbsp honey',
      'Granola for topping',
      'Fresh berries for garnish',
      'Chia seeds for topping'
    ],
    instructions: [
      'Blend frozen berries, banana, yogurt, and milk',
      'Add honey and blend until smooth',
      'Pour into bowls',
      'Top with granola and fresh berries',
      'Sprinkle with chia seeds',
      'Serve immediately'
    ],
    tags: ['breakfast', 'smoothie', 'healthy', 'berries']
  }
];

export const categories = ['All', 'Breakfast', 'Main Course', 'Dessert', 'Salad', 'Snack'];
