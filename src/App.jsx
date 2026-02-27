export default function App() {
  return (
    <div className="font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-wide">NEMORA</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#services" className="hover:text-accent">Services</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
          We Build Brands That Dominate Attention
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl">
          Nemora is a results-driven marketing agency helping ambitious
          businesses scale through strategy, content, and paid growth.
        </p>
        <a
          href="#contact"
          className="mt-8 px-8 py-4 bg-accent text-white rounded-lg hover:opacity-90 transition"
        >
          Work With Us
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-8 bg-slate-900">
        <h3 className="text-4xl font-bold text-center mb-16">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="p-8 bg-slate-800 rounded-xl">
            <h4 className="text-xl font-semibold mb-4">Brand Strategy</h4>
            <p className="text-gray-400">
              Positioning, messaging, and identity systems that create clarity and authority.
            </p>
          </div>

          <div className="p-8 bg-slate-800 rounded-xl">
            <h4 className="text-xl font-semibold mb-4">Paid Advertising</h4>
            <p className="text-gray-400">
              High-performance campaigns across Meta, Google and TikTok.
            </p>
          </div>

          <div className="p-8 bg-slate-800 rounded-xl">
            <h4 className="text-xl font-semibold mb-4">Content Production</h4>
            <p className="text-gray-400">
              Creative assets engineered to convert attention into revenue.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-8 text-center">
        <h3 className="text-4xl font-bold mb-8">About Nemora</h3>
        <p className="max-w-3xl mx-auto text-gray-400">
          We combine creative excellence with analytical precision.
          Every campaign is built around measurable growth and long-term
          brand equity.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-8 bg-slate-900 text-center">
        <h3 className="text-4xl font-bold mb-8">Let’s Build Something Powerful</h3>
        <p className="text-gray-400 mb-8">
          Ready to scale your brand? Let’s talk.
        </p>
        <a
          href="mailto:hello@nemoraagency.com"
          className="px-8 py-4 bg-accent rounded-lg hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Nemora Marketing Agency. All rights reserved.
      </footer>

    </div>
  );
}
