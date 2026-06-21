import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Your Next Product?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your ideas into reality with our expert development team.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/jamy-labs-logo.jpeg"
                alt="Jamy Labs Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-bold text-2xl text-white">
                Jamy Labs
              </span>
            </div>

            <p className="text-gray-400 mb-6 text-lg">
              Building the future through innovative software solutions. We help businesses scale with cutting-edge technology.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">SaaS Platforms</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">AI Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jamy Labs. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mt-4 md:mt-0">
              <span>Made with ❤️ in India By Jamy Labs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}