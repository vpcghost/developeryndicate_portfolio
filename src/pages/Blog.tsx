import { Calendar, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Blog() {
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

  const articles = [
    {
      title: 'Top 5 AR Trends in 2025',
      excerpt: 'Exploring the latest developments in augmented reality that are reshaping how we interact with digital content in physical spaces.',
      category: 'AR/VR',
      date: 'March 15, 2025',
      readTime: '6 min read',
      gradient: 'from-blue-600/20 to-cyan-600/20',
    },
    {
      title: 'Building Scalable SaaS Platforms – Lessons Learned',
      excerpt: 'Key architectural decisions and best practices from scaling multi-tenant SaaS applications to serve millions of users globally.',
      category: 'SaaS',
      date: 'March 10, 2025',
      readTime: '8 min read',
      gradient: 'from-violet-600/20 to-purple-600/20',
    },
    {
      title: 'Immersive Game Mechanics for Engagement',
      excerpt: 'Designing game systems that keep players deeply engaged through meaningful choices, progressive challenges, and social dynamics.',
      category: 'Game Dev',
      date: 'March 5, 2025',
      readTime: '7 min read',
      gradient: 'from-orange-600/20 to-red-600/20',
    },
    {
      title: 'AI-Powered Automation in Cloud Infrastructure',
      excerpt: 'How machine learning is revolutionizing DevOps workflows and enabling truly autonomous cloud operations at scale.',
      category: 'AI & Cloud',
      date: 'February 28, 2025',
      readTime: '9 min read',
      gradient: 'from-green-600/20 to-emerald-600/20',
    },
    {
      title: 'The Future of Spatial Computing',
      excerpt: 'Vision Pro and beyond — examining how spatial interfaces will transform professional workflows and creative expression.',
      category: 'AR/VR',
      date: 'February 20, 2025',
      readTime: '10 min read',
      gradient: 'from-blue-600/20 to-cyan-600/20',
    },
    {
      title: 'Microservices Architecture: When and Why',
      excerpt: 'Strategic considerations for adopting microservices patterns, including real-world trade-offs and implementation guidelines.',
      category: 'SaaS',
      date: 'February 15, 2025',
      readTime: '12 min read',
      gradient: 'from-violet-600/20 to-purple-600/20',
    },
  ];

  const categories = ['All', 'AR/VR', 'SaaS', 'Game Dev', 'AI & Cloud'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="bg-zinc-950 text-white pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Insights from the Syndicate
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Thoughts, research, and perspectives on the technologies shaping our digital future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-zinc-950'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={index}
                className="animate-on-scroll opacity-0 group cursor-pointer"
              >
                <div className={`relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br ${article.gradient} border border-zinc-800 group-hover:border-zinc-700 transition-all duration-500`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-zinc-700/20">{index + 1}</div>
                  </div>
                  <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      Read Article
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-lg font-medium">
                      {article.category}
                    </span>
                    <span className="text-zinc-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-semibold group-hover:text-zinc-300 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-zinc-500 pt-2">
                    <Calendar size={16} />
                    {article.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Stay Updated
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Subscribe to our newsletter for the latest insights and updates from Developer Syndicate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
              />
              <button className="px-8 py-4 bg-white text-zinc-950 font-semibold rounded-xl hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
