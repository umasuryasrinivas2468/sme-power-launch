
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-smebank-800">Banking. Simplified.</span>{" "}
              <br />
              <span className="bg-gradient-to-r from-smebank-600 to-smeteal-600 text-transparent bg-clip-text">
                For Every Indian SME.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Experience hassle-free banking tailored for your business growth.
              Get smart invoicing, instant loans, and 24/7 dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="border border-smebank-600 text-smebank-600 hover:bg-smebank-50 px-6 py-3 rounded-full font-medium">
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  Trusted by 1000+ businesses in India
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SME Banking Dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute top-1/4 -right-10 w-20 h-20 bg-smeorange-500 rounded-full blur-2xl opacity-30" />
            <div className="absolute bottom-1/3 -left-10 w-32 h-32 bg-smebank-500 rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </div>
      
      {/* Gradient circles decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-smebank-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-smeteal-500 rounded-full blur-3xl opacity-10" />
    </section>
  );
};

export default HeroSection;
