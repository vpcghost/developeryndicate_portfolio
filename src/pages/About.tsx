import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
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

  const philosophy = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering solutions that challenge the status quo and reshape industries.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every line of code and design decision.',
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Building systems that grow seamlessly from startup to enterprise scale.',
    },
  ];

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Clients Served' },
    { value: '20+', label: 'Projects Delivered' },
    { value: '15+', label: 'Team Members' },
  ];

  return (
    <div className="bg-zinc-950 text-white pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Beyond Code — We Design Evolution
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Developer Syndicate is a collective of engineers, designers, and visionaries shaping the next frontier of technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Philosophy</h2>
            <p className="text-zinc-400 text-lg max-w-3xl">
              We believe in building technology that doesn't just serve today's needs, but anticipates tomorrow's challenges. Our approach combines cutting-edge innovation with battle-tested engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors duration-300">
                  <item.icon size={28} className="text-zinc-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Mission</h2>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-4xl">
              To craft intelligent, immersive, and scalable digital experiences that redefine industries. We partner with forward-thinking organizations to turn ambitious visions into remarkable realities.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 p-12 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800">
            <h3 className="text-2xl font-semibold mb-8 text-center">By the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-zinc-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Team</h2>
            <p className="text-zinc-400 text-lg max-w-3xl">
              15+ talented engineers and designers working globally, united by a passion for excellence and innovation. We bring diverse perspectives and world-class expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll opacity-0 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Global Presence</h3>
              <p className="text-zinc-400 leading-relaxed">
                With team members across multiple time zones, we provide around-the-clock development capabilities and maintain continuous momentum on every project.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Diverse Expertise</h3>
              <p className="text-zinc-400 leading-relaxed">
                From AR/VR specialists to cloud architects, our team encompasses the full spectrum of modern technology expertise required for complex digital transformations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
