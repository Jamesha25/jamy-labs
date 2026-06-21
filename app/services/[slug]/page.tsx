import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '../../lib/services';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#services" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-12 group">
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </Link>

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative">
            <div className="text-6xl lg:text-7xl mb-8 animate-bounce">
              {service.icon}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 border-b border-gray-200 dark:border-gray-700 pb-10">
              {service.description}
            </p>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-purple-600 mr-3 rounded-full"></div>
                Service Details
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.details}
              </p>
            </div>

            {service.features && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-purple-600 to-indigo-600 mr-3 rounded-full"></div>
                  Key Features
                </h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700/50 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-16 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span>Discuss This Service</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
