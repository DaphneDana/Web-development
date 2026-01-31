import Navbar from '@/components/Navbar';
import Link from 'next/link';
{/*careers */}
interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'We\'re looking for an experienced frontend developer to help build and improve our recipe sharing platform. You\'ll work with React, Next.js, and modern web technologies.',
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Hybrid',
    description: 'Join our design team to create beautiful and intuitive user experiences. You\'ll work on everything from user flows to visual design and prototyping.',
  },
  {
    id: '3',
    title: 'Content Manager',
    department: 'Content',
    type: 'Full-time',
    location: 'Remote',
    description: 'Help curate and manage our recipe collection. You\'ll work with our community to ensure high-quality content and help users share their best recipes.',
  },
  {
    id: '4',
    title: 'Backend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'Build scalable backend systems to support our growing community. Experience with Node.js, databases, and API design is essential.',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us build the best recipe sharing platform and make cooking accessible to everyone
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Work at RecipeShare?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Work</h3>
              <p className="text-gray-600">
                Work from anywhere with flexible hours that fit your lifestyle.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Learn and grow with a team that values professional development.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Great Team</h3>
              <p className="text-gray-600">
                Work with passionate, talented people who love what they do.
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {job.location}
                      </span>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Open Positions Message */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Don't See a Role That Fits?</h3>
          <p className="text-gray-600 mb-6">
            We're always looking for talented people to join our team. Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </main>
    </div>
  );
}
