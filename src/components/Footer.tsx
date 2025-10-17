import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/careers', label: 'Careers' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com', label: 'X' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-zinc-100 to-zinc-400 rounded-lg flex items-center justify-center">
              <span className="text-zinc-950 font-bold text-xl">DS</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Developer Syndicate</span>
          </div>

          <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-zinc-400 hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900">
          <p className="text-sm text-zinc-500 text-center">
            © 2025 Developer Syndicate • Crafted with precision & innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
