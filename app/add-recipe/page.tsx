import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AddRecipePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Recipe Feature</h2>
          <p className="text-gray-600 mb-6">
            This feature will be available soon! For now, you can browse our collection of recipes.
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Browse Recipes
          </Link>
        </div>
      </main>
    </div>
  );
}
