
import { useState, useEffect } from 'react';

const PartnersSection = () => {
  // These would be replaced with actual partner logos
  const partners = [
    {
      name: "Axis Bank",
      logo: "https://companieslogo.com/img/orig/AXISBANK.NS_BIG-10d0a853.png?t=1672905040",
      alt: "Axis Bank logo"
    },
    {
      name: "Cashfree Payments",
      logo: "https://cashfree.com/images/v3/home/cashfree-payments-logo.svg",
      alt: "Cashfree Payments logo"
    },
    {
      name: "DigiLocker",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/DigiLocker_logo.svg/1200px-DigiLocker_logo.svg.png",
      alt: "DigiLocker logo"
    },
    {
      name: "Meri Pehchan",
      logo: "https://pbs.twimg.com/profile_images/1375360792157224962/qEBHsiGo_400x400.jpg",
      alt: "Meri Pehchan logo"
    }
  ];

  // Placeholder function for responsive logos
  const [logoClasses, setLogoClasses] = useState("h-12 md:h-16");
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogoClasses("h-10");
      } else {
        setLogoClasses("h-12 md:h-16");
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Trusted Partners</h2>
          <p className="text-gray-600">Building India's financial future together</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.alt} 
                className={`${logoClasses} object-contain filter grayscale hover:grayscale-0 transition-all duration-300`} 
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            We've partnered with India's leading financial institutions to provide you with the best banking services tailored for SMEs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
