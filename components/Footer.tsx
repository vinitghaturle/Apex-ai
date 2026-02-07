import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerData = {
    GDGoC_GHRCE: [
      { name: 'Instagram', href: 'https://www.instagram.com/gdg.ghrce?igsh=MTc5ZWg3cmg1ZHh3eA==' },
      { name: 'Linkedin', href: 'https://www.linkedin.com/company/gdgoc-ghrce/' },
      { name: 'Youtube', href: 'https://youtube.com/@gdgocghrce?si=7qxCf86wVYIDzGgW' },
      { name: 'Website', href: 'https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-nagpur-india/' },
    ],
    SRC: [
      { name: 'Instagram', href: 'https://www.instagram.com/gdg.ghrce?igsh=MTc5ZWg3cmg1ZHh3eA==' },
      { name: 'Linkedin', href: 'https://www.linkedin.com/company/gdgoc-ghrce/' },
      { name: 'Youtube', href: 'https://youtube.com/@gdgocghrce?si=7qxCf86wVYIDzGgW' },
      { name: 'Website', href: 'https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-nagpur-india/' },
    ],
    IEEE_CS_GHRCE: [
      { name: 'Instagram', href: 'https://www.instagram.com/gdg.ghrce?igsh=MTc5ZWg3cmg1ZHh3eA==' },
      { name: 'Linkedin', href: 'https://www.linkedin.com/company/gdgoc-ghrce/' },
      { name: 'Youtube', href: 'https://youtube.com/@gdgocghrce?si=7qxCf86wVYIDzGgW' },
      { name: 'Website', href: 'https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-nagpur-india/' },
    ],
    SRC_Coordinator: [
      { name: 'Mr. Karan G Dubey', href: '#' },
      { name: '7249757517', href: '#' },
    ],
  };

  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/thefoot.webp" // Replace with your image path
          alt="Footer Background"
          fill
          className="object-cover object-center opacity-55"
          priority
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Top Section: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerData).map(([title, links]) => (
            <div key={title} className="flex flex-col space-y-4">
              <span className="text-xl font-bold tracking-tight uppercase border-b border-white/20 pb-2">
                {title}
              </span>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/10 mb-8" />

        {/* Bottom Section: Legal & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xs text-gray-400">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p>© 2026, Apex-ai</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <Link href="#" className="hover:underline">Terms of Use</Link>
              <Link href="#" className="hover:underline">Code of Conduct</Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p>
              Website made with 💙 by{' '}
              <Link href="https://linktr.ee/vinit656" className="text-white">Vinit Ghaturle</Link> &{' '}
              <Link href="#" className="text-white">Atharva Patil</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;