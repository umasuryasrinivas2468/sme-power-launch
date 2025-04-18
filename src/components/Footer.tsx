import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Business Account", href: "#business-account" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Blog", href: "/blog" },
        { name: "Partners", href: "#partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Status", href: "/status" },
        { name: "Webinars", href: "/webinars" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" },
        { name: "GDPR", href: "/gdpr" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">SMEPower</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Empowering India's small businesses with modern banking solutions designed for growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-smebank-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} SMEPower. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://companieslogo.com/img/orig/AXISBANK.NS_BIG-10d0a853.png?t=1672905040"
                alt="Axis Bank Partner"
                className="h-8 grayscale opacity-70"
              />
              <img
                src="https://cashfree.com/images/v3/home/cashfree-payments-logo.svg"
                alt="Cashfree Payments Partner"
                className="h-6 grayscale opacity-70"
              />
              <div className="text-sm text-gray-500">
                Secured by bank-grade encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
