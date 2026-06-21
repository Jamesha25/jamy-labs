import { siteData } from '../lib/site-data';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jamy Labs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Building the future through innovative software solutions and engineering excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Story
            </h3>
            
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Founded in 2019, Jamy Labs emerged from a simple belief: technology should empower businesses to achieve their fullest potential. What started as a small team of passionate developers has grown into a comprehensive software development company serving clients worldwide.
              </p>
              
              <p>
                We specialize in building custom software solutions that not only meet today&apos;s requirements but also adapt and scale with your business as it grows. Our approach combines deep technical expertise with a thorough understanding of business needs.
              </p>
              
              <p>
                Today, we&apos;re proud to have delivered over 150 successful projects, ranging from startup MVPs to enterprise-grade platforms. Our commitment to quality, innovation, and client success drives everything we do.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Company Growth
              </h4>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects Delivered</span>
                  <span className="font-bold text-blue-600">{siteData.stats.projectsDelivered}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Client Satisfaction</span>
                  <span className="font-bold text-green-600">{siteData.stats.clientSatisfaction}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Team Growth</span>
                  <span className="font-bold text-purple-600">300%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}