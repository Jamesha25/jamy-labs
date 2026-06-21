export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your unique business requirements and scale with your growth."
    },
    {
      icon: "🌐",
      title: "Web Applications",
      description: "Modern, responsive web applications using cutting-edge technologies for optimal performance and user experience."
    },
    {
      icon: "📱",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android."
    },
    {
      icon: "☁️",
      title: "SaaS Platforms",
      description: "Scalable Software-as-a-Service solutions with robust architecture, security, and multi-tenancy support."
    },
    {
      icon: "🤖",
      title: "AI Solutions",
      description: "Intelligent applications powered by machine learning and AI to automate processes and drive innovation."
    },
    {
      icon: "⚡",
      title: "Cloud & DevOps",
      description: "Cloud-native solutions with automated deployment pipelines, monitoring, and infrastructure management."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            We offer comprehensive software development services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-blue-200"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}