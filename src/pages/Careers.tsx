import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Careers() {
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

  const jobs = [
    {
      title: 'AR/VR Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build cutting-edge immersive experiences using Unity and Unreal Engine. Work on enterprise VR training platforms and interactive AR applications.',
      requirements: ['3+ years XR development', 'Unity/Unreal expertise', 'C# or C++ proficiency'],
    },
    {
      title: 'Full Stack Engineer',
      location: 'India',
      type: 'Full-time',
      description: 'Design and build scalable SaaS platforms using modern web technologies. Lead architectural decisions and mentor junior developers.',
      requirements: ['5+ years full-stack experience', 'React, Node.js expertise', 'Cloud platform knowledge'],
    },
    {
      title: 'Game Designer',
      location: 'India',
      type: 'Full-time',
      description: 'Craft engaging game mechanics and player experiences. Collaborate with engineers to bring creative visions to life in multiplayer environments.',
      requirements: ['3+ years game design', 'Shipped titles portfolio', 'Strong systems thinking'],
    },
    {
      title: 'Cloud Architect',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement cloud-native architectures for enterprise-scale applications. Drive infrastructure automation and DevOps best practices.',
      requirements: ['5+ years cloud experience', 'AWS/Azure/GCP expertise', 'Kubernetes proficiency'],
    },
  ];

  const benefits = [
    'Competitive compensation',
    'Remote-first culture',
    'Cutting-edge projects',
    'Learning & development budget',
    'Flexible working hours',
    'Health & wellness programs',
  ];

  return (
    <div className="bg-zinc-950 text-white pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Join the Syndicate — Build the Future
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Be part of a world-class team shaping technology for tomorrow. We're always looking for talented individuals who share our passion for innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Developer Syndicate?</h2>
            <p className="text-zinc-400 text-lg max-w-3xl">
              We offer more than just a job — we provide an environment where talented individuals can do their best work, tackle challenging problems, and make meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 animate-on-scroll opacity-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
              >
                <p className="text-zinc-300 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Open Positions</h2>
            <p className="text-zinc-400 text-lg">
              Explore opportunities to work on cutting-edge projects
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Clock size={16} />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-100 transition-all duration-300 transform group-hover:scale-105 whitespace-nowrap">
                    Apply Now
                    <ArrowRight size={18} />
                  </button>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-4">{job.description}</p>

                <div>
                  <p className="text-sm font-semibold text-zinc-500 mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, reqIndex) => (
                      <span
                        key={reqIndex}
                        className="px-3 py-1.5 text-sm bg-zinc-800 text-zinc-300 rounded-lg"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              We're always interested in connecting with talented individuals. Send us your portfolio and let's explore opportunities together.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 font-semibold rounded-xl hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105">
              Get in Touch
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
