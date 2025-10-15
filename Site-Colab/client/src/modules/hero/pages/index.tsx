import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Heart, Award } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [highlightsVisible, setHighlightsVisible] = useState(false);

  useEffect(() => {
    // Animação escalonada
    const titleTimer = setTimeout(() => setTitleVisible(true), 300);
    const highlightsTimer = setTimeout(() => setHighlightsVisible(true), 800);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(highlightsTimer);
    };
  }, []);

  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Ut enim ad minim veniam quis nostrud exercitation"
    }
  ];

  return (
    <section id="inicio" className="pt-4 md:pt-32 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className={`text-4xl lg:text-6xl font-playfair font-bold leading-tight transition-all duration-1000 ease-out ${
                titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ color: '#780000' }}>
                Lorem Ipsum Dolor Sit
                <span style={{ color: '#780000' }}> Amet Consectetur</span>
                <span style={{ color: '#780000' }}> Adipiscing</span>
              </h1>
              
              <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 ease-out ${
                titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '0.3s' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg"
                className="text-white px-8 py-4 text-lg"
                style={{ backgroundColor: '#01304A' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#023a5c'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#01304A'}
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá, gostaria de mais informações.', '_blank')}
              >
                Entre em Contato
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 mt-1">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className={`p-4 card-shadow border-4 border-primary bg-white rounded-lg transition-all duration-700 ease-out ${
                    highlightsVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 text-primary">
                        {highlight.icon}
                      </div>
                    </div>
                    <p className="text-lg  text-primary">
                      {highlight.text}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image - Hidden on mobile */}
          <div className="relative hidden md:block">
            <div className="relative overflow-hidden rounded-2xl elegant-shadow">
              <div className="w-full h-[600px] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground text-lg">Imagem de Demonstração</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
