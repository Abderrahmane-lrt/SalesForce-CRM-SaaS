
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className=" border-t border-gray-200 mt-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Company Info */}
        <div>
          <div className="object-fit-contain pt-4">
            <img src={logo} alt="Logo" width={160} height={200} />
          </div>
          <p className="text-slate-600 text-sm my-4">
            2131 E Monument Ebridge <br />
            Maryland MD 21205
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.29 20v-7.75H5.5V8.5h2.79V6.41c0-2.86 1.93-4.88 4.69-4.88 1.36 0 2.52.1 2.84.15v3.28h-1.95c-1.37 0-1.74.65-1.74 1.6V8.5h3.47l-.45 3.75h-3.02V20" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.94 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 8H5v10h4V8H7zm6.32 0H9.34V18h3.94v-5.6c0-3.26 4.31-3.83 4.31 0V18H21V13.2c0-5.04-5.91-4.88-7.32-2.37V8z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4.3a8.27 8.27 0 01-2.36.64A4.12 4.12 0 0019.46 3.5a8.15 8.15 0 01-2.6 1 4.1 4.1 0 00-7.1 2.8c0 .32.04.63.12.93A11.66 11.66 0 012.8 2.7a4.1 4.1 0 001.27 5.49A4.08 4.08 0 012.8 8.08v.05a4.09 4.09 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 3.83 2.73 8.04 8.04 0 0011.64-2.47" />
              </svg>
            </a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-slate-600 hover:text-orange-500 text-sm"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-600 hover:text-orange-500 text-sm"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-600 hover:text-orange-500 text-sm"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            Contacts & Support
          </h4>
          <ul className="space-y-2">
            <li className="text-slate-600 text-sm">
              +212 789-905-0290 (Support Line)
            </li>
            <li className="text-slate-600 text-sm">+212 790 324543</li>
            <li>
              <a
                href="mailto:info@cybacrm.com"
                className="text-slate-600 hover:text-orange-500 text-sm"
              >
                info@salesforce.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer  */}
      <div className="border-t border-gray-200 pt-8 text-center text-slate-600 text-sm">
        <p>&copy; 2024 salesforce maroc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
