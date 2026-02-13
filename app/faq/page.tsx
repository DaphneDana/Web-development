'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
{/*faq page*/}
const faqs = [
  {
    id: 1,
    question: 'How do I submit a recipe?',
    answer: 'Click "Add Recipe" in the navigation bar and fill out the form with your recipe details, including ingredients, instructions, prep time, and a photo. Once submitted, our team will review it before it goes live on the site.',
  },
  {
    id: 2,
    question: 'Can I use recipes from RecipeShare for my own blog or business?',
    answer: 'Recipes shared on RecipeShare are contributed by our community. If you\'d like to use someone else\'s recipe, please reach out to the recipe author or contact us for permission. Our own guidelines and attribution requirements are outlined in our Terms of Use.',
  },
  {
    id: 3,
    question: 'How are recipes rated and can I rate them?',
    answer: 'Recipes display an average rating based on community reviews. Once you\'ve tried a recipe, you can leave a rating and optional comment to help others decide what to cook. Ratings help surface the most loved recipes.',
  },
  {
    id: 4,
    question: 'Is RecipeShare free to use?',
    answer: 'Yes! Browsing recipes, searching, and creating an account are free. We may offer optional premium features in the future, but the core experience of discovering and sharing recipes will always remain free.',
  },
  {
    id: 5,
    question: 'How do I save or bookmark my favorite recipes?',
    answer: 'When you\'re logged in, you can save recipes to your personal collection by clicking the bookmark or "Save" button on any recipe page. You can then access all your saved recipes from your profile or account dashboard.',
  },
  {
    id: 6,
    question: 'Who do I contact if I find an error in a recipe?',
    answer: 'If you spot a mistake—wrong ingredient, typo, or unclear step—use the "Report" or "Suggest edit" option on the recipe page, or email us at support@recipeshare.com. We\'ll review and update the recipe as needed.',
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about RecipeShare
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
