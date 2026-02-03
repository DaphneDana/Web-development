'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">🍳 RecipeShare</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              Browse Recipes
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/careers" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">
              FAQ
            </Link>
            <ThemeToggle />
            <Link href="/add-recipe" className="bg-orange-600 dark:bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors font-medium">
              Add Recipe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
