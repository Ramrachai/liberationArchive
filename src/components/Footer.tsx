import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { href: '#introduction', label: 'Introduction' },
    { href: '#documents', label: 'Historical Documents' },
    { href: '#interviews', label: 'Interviews' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About the Archive</h3>
            <p className="text-sm leading-relaxed">
              The Liberation War Archive is dedicated to preserving and sharing the historical records
              of Bangladesh's Liberation War of 1971. We aim to honor the memory of our freedom
              fighters and educate future generations about this significant period in our history.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span className="text-sm">+880 123-456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span className="text-sm">contact@liberationarchive.org</span>
              </div>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Liberation War Archive. All rights reserved.
          </p>
          <p className="text-sm text-white">
            Developed by&nbsp;
            <a
              href="https://ramrachai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors"
            >
              Ramrachai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 