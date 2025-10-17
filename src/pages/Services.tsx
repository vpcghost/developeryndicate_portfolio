import { Eye, Box, Gamepad2, Cloud, Cpu, Database, Globe, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Eye,
      title: 'AR / VR Development',
      description: 'Immersive spatial experiences that blur the line between digital and physical reality.',
      features: [
        { icon: Cpu, text: 'Enterprise VR training simulations' },
        { icon: Globe, text: 'Interactive AR product visualizations' },
        { icon: Zap, text: 'Spatial computing applications' },
      ],
      gradient: 'from-blue-600/10 to-cyan-600/10',
    },
    {
      icon: Box,
      title: 'SaaS / PaaS Platforms',
      description: 'Scalable, cloud-native software solutions designed for global enterprise deployment.',
      features: [
        { icon: Database, text: 'Multi-tenant architecture design' },
        { icon: Globe, text: 'API-first platform development' },
        { icon: Zap, text: 'Real-time data synchronization' },
      ],
      gradient: 'from-violet-600/10 to-purple-600/10',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Next-generation gaming experiences powered by industry-leading engines.',
      features: [
        { icon: Cpu, text: 'Unreal & Unity engine expertise' },
        { icon: Globe, text: 'Real-time multiplayer systems' },
        { icon: Zap, text: 'Cross-platform game deployment' },
      ],
      gradient: 'from-orange-600/10 to-red-600/10',
    },
    {
      icon: Cloud,
      title: 'AI & Cloud Automation',
      description: 'Intelligent frameworks for prediction, optimization, and seamless automation.',
      features: [
        { icon: Cpu, text: 'Machine learning model development' },
        { icon: Database, text: 'Cloud infrastructure automation' },
        { icon: Zap, text: 'Predictive analytics systems' },
      ],
      gradient: 'from-green-600/10 to-emerald-600/10',
    },
  ];

  return (
    <div className="bg-zinc-950 text-white pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Domains We Redefine
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Specialized expertise across the most transformative technologies shaping our digital future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors duration-300">
                      <service.icon size={32} className="text-zinc-300" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{service.title}</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                            <feature.icon size={16} className="text-zinc-400" />
                          </div>
                          <span className="text-zinc-300">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className={`relative aspect-square rounded-3xl bg-gradient-to-br ${service.gradient} border border-zinc-800 overflow-hidden group-hover:border-zinc-700 transition-all duration-500`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon size={120} className="text-zinc-700/30" />
                      </div>
                      <div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-center p-8">
                          <p className="text-sm text-zinc-300">Specialized Solution</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Our Approach
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-12">
              Every project begins with deep discovery, followed by iterative development and rigorous testing. We partner closely with clients to ensure solutions exceed expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Discovery', 'Design', 'Development', 'Delivery'].map((phase, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-zinc-800 mb-4">{index + 1}</div>
                  <h3 className="text-xl font-semibold">{phase}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
