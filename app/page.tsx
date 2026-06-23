'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from './lib/services';
import { siteData } from './lib/site-data';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would integrate with your form handling service
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const features = [
    {
      icon: "🚀",
      title: "Agile Development",
      description: "Flexible and iterative approach ensuring rapid delivery and adaptability to changing requirements."
    },
    {
      icon: "📈",
      title: "Scalable Architecture",
      description: "Future-proof solutions designed to grow with your business and handle increasing demands."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Efficient development processes and experienced teams ensure timely project completion."
    },
    {
      icon: "👥",
      title: "Dedicated Team",
      description: "Expert developers committed to your project success with deep domain knowledge."
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <main className="relative">

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500/60 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-indigo-500/60 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-pink-500/60 rounded-full animate-bounce" style={{animationDelay: '0.8s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full px-6 py-3 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for new projects</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900 dark:text-white">Building Software</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  That Scales Businesses
                </span>
              </h1>
              
              <div className="relative">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  We design and develop <span className="font-semibold text-blue-600 dark:text-blue-400">high-performance</span> web, mobile, AI, and enterprise solutions that help businesses <span className="font-semibold text-purple-600 dark:text-purple-400">grow faster</span>.
                </p>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-500/30 dark:to-purple-500/30 blur-lg opacity-75 rounded-lg"></div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link
                href="#contact"
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                href="#services"
                className="group border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Services</span>
                  <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{siteData.stats.projectsDelivered}</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mt-2">Projects Delivered</div>
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{siteData.stats.clientSatisfaction}</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mt-2">Client Satisfaction</div>
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{siteData.stats.yearsExperience}</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mt-2">Years Experience</div>
                <div className="h-1 w-12 bg-gradient-to-r from-indigo-600 to-indigo-400 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{siteData.stats.technologies}</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mt-2">Technologies</div>
                <div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-teal-400 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Our Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We offer comprehensive software development services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-10 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="text-5xl lg:text-6xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                    {service.description}
                  </p>

                  <Link href={`/services/${service.slug}`} className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 block">
                    <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Don&apos;t see what you&apos;re looking for?
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Discuss Your Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 dark:from-purple-500/20 dark:to-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Why Choose <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Jamy Labs</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We combine technical expertise with business acumen to deliver exceptional software solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-4 border border-white/20 dark:border-gray-700/50 overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <span className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base lg:text-lg">
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="mt-24 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {siteData.stats.happyClients}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {siteData.stats.linesOfCode}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Lines of Code</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {siteData.stats.support}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {siteData.stats.uptime}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Story</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Jamy Labs</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Building the future through innovative software solutions and engineering excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our Story
              </h3>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
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

              <div className="flex items-center space-x-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{siteData.stats.yearsExperience}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Years of Excellence</div>
                </div>
                <div className="w-px h-16 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">{siteData.stats.projectsDelivered}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div className="w-px h-16 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{siteData.stats.clientSatisfaction}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-200/50 dark:border-gray-600/50">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
                  Company Growth
                </h4>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-xl">{siteData.stats.projectsDelivered}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full animate-pulse" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</span>
                      <span className="font-bold text-green-600 dark:text-green-400 text-xl">{siteData.stats.clientSatisfaction}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-600 to-teal-600 h-3 rounded-full animate-pulse" style={{width: '98%', animationDelay: '0.5s'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Team Growth</span>
                      <span className="font-bold text-purple-600 dark:text-purple-400 text-xl">300%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full animate-pulse" style={{width: '75%', animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">{siteData.stats.uptime}</div>
                  <div className="text-sm opacity-90">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Let&apos;s Connect</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Let&apos;s Start <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Building Together</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to turn your ideas into reality? Get in touch with us for a free consultation and project estimate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
                  Tell Us About Your Project
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl leading-relaxed mb-12">
                  We&apos;re here to help bring your ideas to life. Reach out to us and we&apos;ll get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 lg:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50 group hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">📧</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg lg:text-xl">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg">{siteData.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 lg:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50 group hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">📞</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg lg:text-xl">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg">{siteData.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 lg:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50 group hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">📍</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg lg:text-xl">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg">{siteData.contact.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 lg:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50 group hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">⏰</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg lg:text-xl">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg">{siteData.contact.responseTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}