import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-gray-400 mt-16 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <img src="/logo.png" alt="Company Logo" className="h-8" />
          </Link>
          <p className="text-sm">&copy; 2024 Company Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-gray-300">Contact Us</h4>
          <div className="flex items-center space-x-2">
            <Mail size={20} />
            <span>email@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={20} />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={20} />
            <span>123 Main St, City, Country</span>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-gray-300">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
