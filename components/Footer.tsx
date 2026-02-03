'use client';
{/*FOOTER COMPONENT*/}
export default function Footer() {
  
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 mt-16 border-t border-gray-800 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-white dark:text-white mb-3">🍳 RecipeShare</h2>
            <p className="text-sm text-gray-400 dark:text-gray-400">
              Discover, share, and cook delicious recipes from around the world. Made for
              food lovers by food lovers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-orange-400 transition-colors">
                  Browse Recipes
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-orange-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-orange-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-3">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>hello@recipeshare.com</li>
              <li>support@recipeshare.com</li>
              <li>Food City, FC 12345</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-3">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Get weekly recipes and cooking tips straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md text-sm bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-orange-600 text-sm font-medium text-white hover:bg-orange-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} RecipeShare. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
