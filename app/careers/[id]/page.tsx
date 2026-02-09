import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
{/*careers page*/Link}
interface JobDetailPageProps {
  params: {
    id: string;
  };
}

const jobDetails: Record<string, {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}> = {
  '1': {
    title: 'Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'We\'re looking for an experienced frontend developer to help build and improve our recipe sharing platform. You\'ll work with React, Next.js, and modern web technologies to create beautiful, responsive user interfaces.',
    requirements: [
      '3+ years of experience with React and TypeScript',
      'Strong knowledge of Next.js and modern web frameworks',
      'Experience with CSS frameworks (Tailwind CSS preferred)',
      'Understanding of responsive design principles',
      'Experience with version control (Git)',
      'Strong problem-solving and communication skills'
    ],
    responsibilities: [
      'Develop and maintain frontend features',
      'Collaborate with designers and backend developers',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews',
      'Optimize application performance',
      'Ensure cross-browser compatibility'
    ],
  },
  '2': {
    title: 'UX/UI Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Hybrid',
    description: 'Join our design team to create beautiful and intuitive user experiences. You\'ll work on everything from user flows to visual design and prototyping.',
    requirements: [
      'Portfolio demonstrating strong UX/UI design skills',
      'Proficiency in design tools (Figma, Adobe XD, or similar)',
      'Understanding of user-centered design principles',
      'Experience with prototyping and user testing',
      'Strong visual design skills',
      'Excellent communication and collaboration skills'
    ],
    responsibilities: [
      'Create user flows, wireframes, and prototypes',
      'Design intuitive and beautiful user interfaces',
      'Collaborate with product and engineering teams',
      'Conduct user research and testing',
      'Maintain design systems and style guides',
      'Iterate on designs based on feedback'
    ],
  },
  '3': {
    title: 'Content Manager',
    department: 'Content',
    type: 'Full-time',
    location: 'Remote',
    description: 'Help curate and manage our recipe collection. You\'ll work with our community to ensure high-quality content and help users share their best recipes.',
    requirements: [
      '2+ years of experience in content management',
      'Strong writing and editing skills',
      'Knowledge of food and cooking',
      'Experience with CMS platforms',
      'Excellent attention to detail',
      'Strong organizational skills'
    ],
    responsibilities: [
      'Curate and review recipe submissions',
      'Edit and improve recipe content',
      'Manage content calendar',
      'Engage with community members',
      'Ensure content quality and accuracy',
      'Collaborate with marketing team'
    ],
  },
  '4': {
    title: 'Backend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'Build scalable backend systems to support our growing community. Experience with Node.js, databases, and API design is essential.',
    requirements: [
      '3+ years of experience with Node.js',
      'Strong knowledge of databases (PostgreSQL, MongoDB)',
      'Experience with RESTful and GraphQL APIs',
      'Understanding of cloud services (AWS, Azure, or GCP)',
      'Experience with authentication and security',
      'Strong problem-solving skills'
    ],
    responsibilities: [
      'Design and develop backend APIs',
      'Optimize database queries and performance',
      'Implement authentication and authorization',
      'Write unit and integration tests',
      'Collaborate with frontend developers',
      'Monitor and maintain production systems'
    ],
  },
};

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobDetails[params.id];

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/careers"
          className="inline-flex items-center text-gray-600 hover:text-orange-600 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Careers
        </Link>

        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-lg font-medium">
              {job.department}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">
              {job.type}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">
              {job.location}
            </span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {/* Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">•</span>
                <span className="text-gray-700">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">•</span>
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
          <p className="text-gray-600 mb-6">
            Send us your resume and cover letter, and tell us why you'd be a great fit for this role.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Apply Now
          </Link>
        </div>
      </main>
    </div>
  );
}
