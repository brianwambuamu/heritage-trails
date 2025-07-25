import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>123 Heritage Lane, Historic District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@localheritage.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block hover:text-heritage-beige transition-colors">
                Home
              </a>
              <a href="/communities" className="block hover:text-heritage-beige transition-colors">
                Communities
              </a>
              <a href="/history" className="block hover:text-heritage-beige transition-colors">
                History
              </a>
              <a href="/contact" className="block hover:text-heritage-beige transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-heritage-beige transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-heritage-beige transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-heritage-beige transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm opacity-90">
              Preserving our local history for future generations.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Local History Heritage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;