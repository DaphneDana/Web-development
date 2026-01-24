import Link from 'next/link';
{/*Navbar*/}
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">🍳 RecipeShare</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Browse Recipes
            </Link>
            <Link href="/add-recipe" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium">
              Add Recipe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
