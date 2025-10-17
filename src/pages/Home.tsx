import { Link } from 'react-router-dom';
import { ArrowRight, Box, Cloud, Gamepad2, Eye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
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

  const capabilities = [
    {
      icon: Eye,
      title: 'AR / VR Development',
      description: 'Immersive spatial experiences that blur the line between digital and physical reality.',
    },
    {
      icon: Box,
      title: 'SaaS & PaaS Platforms',
      description: 'Scalable, cloud-native solutions designed for global enterprise deployment.',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Next-generation gaming experiences powered by Unreal and Unity engines.',
    },
    {
      icon: Cloud,
      title: 'AI & Cloud Automation',
      description: 'Intelligent frameworks for prediction, optimization, and seamless automation.',
    },
  ];

  const projects = [
    {
      title: 'NeuraSpace VR Training',
      category: 'Virtual Reality',
      description: 'Enterprise-grade VR training platform for Fortune 500 companies',
      gradient: 'from-blue-600/20 to-cyan-600/20',
    },
    {
      title: 'CloudFrame Platform',
      category: 'SaaS Infrastructure',
      description: 'Next-gen cloud orchestration platform serving 10K+ developers',
      gradient: 'from-violet-600/20 to-purple-600/20',
    },
    {
      title: 'PulsePlay Multiplayer Engine',
      category: 'Game Technology',
      description: 'Real-time multiplayer framework for competitive gaming',
      gradient: 'from-orange-600/20 to-red-600/20',
    },
  ];

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Clients Served' },
    { value: '20+', label: 'Projects Completed' },
  ];

  return (
    <div className="bg-zinc-950 text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Engineering the Next
              <br />
              Digital Frontier
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              We create AR/VR experiences, SaaS & PaaS platforms, game ecosystems, and AI-powered automation for the future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="group px-8 py-4 bg-white text-zinc-950 font-semibold rounded-xl hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Explore Capabilities
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-zinc-800 text-white font-semibold rounded-xl hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105 border border-zinc-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full p-1">
            <div className="w-1.5 h-3 bg-zinc-600 rounded-full mx-auto animate-scroll" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Developer Syndicate is a technology collective redefining digital innovation. Trusted by global clients to deliver scalable, immersive, and intelligent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll opacity-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Capabilities</h2>
            <p className="text-zinc-400 text-lg">Domains we redefine with precision and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors duration-300">
                  <capability.icon size={28} className="text-zinc-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-zinc-400 text-lg">Pioneering projects that push boundaries</p>
          </div>

          <div ref={featuredRef} className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 flex-shrink-0 w-[90%] md:w-[400px] snap-center group"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-zinc-700">{index + 1}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-zinc-500 font-medium">{project.category}</div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-zinc-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Ready to transform your vision into reality?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 font-semibold rounded-xl hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
