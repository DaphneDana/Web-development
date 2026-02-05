import Link from 'next/link';
import Image from 'next/image';
{/*recipe card component*/}
interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  rating: number;
}

export default function RecipeCard({
  id,
  title,
  description,
  image,
  prepTime,
  cookTime,
  difficulty,
  category,
  rating,
}: RecipeCardProps) {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  };

  return (
    <Link href={`/recipe/${id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col border border-gray-200 dark:border-gray-700">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyColors[difficulty]} dark:bg-opacity-90`}>
              {difficulty}
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">{category}</span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-1">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">{description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {prepTime + cookTime} min
              </span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
