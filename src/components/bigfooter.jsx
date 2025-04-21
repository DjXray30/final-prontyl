import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Mission */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">VoteSmart</h2>
          <p className="text-sm leading-relaxed">
            Empowering democracy through secure and accessible digital voting. Your voice, your power, your future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">How It Works</a></li>
            <li><a href="#" className="hover:text-white">Vote Now</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
            <li><a href="#" className="hover:text-white">Security Practices</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Connect With Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@votesmart.org" className="text-blue-400 hover:underline">support@votesmart.org</a></li>
            <li>Phone: <a href="tel:+18001234567" className="hover:text-white">1-800-123-VOTE</a></li>
          </ul>
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">
        &copy; 2025 VoteSmart. All rights reserved. | Built with ❤️ for democracy.
      </div>
    </footer>
  );
}
