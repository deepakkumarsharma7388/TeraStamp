import { useMemo } from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { name: "Applications", path: "/applications" },
    { name: "Projects", path: "/use-cases" },
    { name: "Modules", path: "/modules" },
    { name: "Features", path: "/features" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "FAQ", path: "/faq" },
  ];

  const companyLinks = [
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Legal Notice", path: "/legal-notice" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms Of Use", path: "/terms" },
    { name: "Cookies Policy", path: "/cookies" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Copyright Policy", path: "/copyright" },
  ];

  // Square halftone dots (the signature block around the logo).
  const dots = useMemo(() => {
    const arr = [];
    const center = 180; // viewBox is 360 x 360
    const spacing = 12; // gap between dots
    const clearHalf = 78; // clear square in the middle for the logo
    const maxHalf = 176; // outer bound of the dot field
    for (let x = center - maxHalf; x <= center + maxHalf; x += spacing) {
      for (let y = center - maxHalf; y <= center + maxHalf; y += spacing) {
        const cheb = Math.max(Math.abs(x - center), Math.abs(y - center));
        if (cheb < clearHalf) continue; // keep the center clear for the logo
        const t = (cheb - clearHalf) / (maxHalf - clearHalf); // 0 near logo -> 1 outer
        // Brightest hugging the logo, gently fading outward.
        const opacity = Math.max(0.05, 0.8 * (1 - t) + 0.05);
        const radius = 1.9 - t * 0.7;
        arr.push({ x, y, opacity, radius, key: `${x}-${y}` });
      }
    }
    return arr;
  }, []);

  const linkClass = ({ isActive }) =>
    `text-base transition-colors duration-200 hover:text-[#F26418] ${
      isActive ? "font-semibold text-[#F26418]" : "text-white/80"
    }`;

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        {/* Top: links | logo halftone | tagline */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_auto_1.1fr] lg:gap-10 xl:gap-16">
          {/* Mobile only — logo (with its halftone design) beside tagline, compact */}
          <div className="sm:hidden">
            <div className="flex items-center gap-4">
              <div className="relative aspect-square w-[140px] flex-shrink-0">
                {/* soft glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#F26418]/5 blur-2xl" />
                <svg
                  viewBox="0 0 360 360"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  {dots.map((d) => (
                    <circle
                      key={d.key}
                      cx={d.x}
                      cy={d.y}
                      r={d.radius}
                      fill="#ffffff"
                      opacity={d.opacity}
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link to="/" className="inline-block">
                    <img
                      src="/logo5.png"
                      alt="TeraStamp"
                      className="h-[44px] w-auto drop-shadow-[0_0_15px_rgba(242,100,24,0.35)]"
                    />
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F26418]">
                  Why TeraStamp
                </p>
                <h2 className="mt-1 text-xl font-bold leading-tight">
                  Data you can build on.
                </h2>
              </div>
            </div>

            <p className="mt-4 text-[15px] leading-7 text-white/70">
              We turn raw field and sensor data into decisions you can act on —
              scalable intelligence that keeps civil, tunneling, and mining
              projects on time, on budget, and on record.
            </p>
          </div>

          {/* Left — link columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Product
              </h3>
              <ul className="mt-5 space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink to={link.path} className={linkClass}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Company
              </h3>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink to={link.path} className={linkClass}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center — logo inside the dotted halftone square (hidden on mobile) */}
          <div className="order-first hidden justify-center sm:flex lg:order-none">
            <div className="relative aspect-square w-[240px] sm:w-[300px] lg:w-[300px] xl:w-[320px]">
              {/* soft glow */}
              <div className="absolute inset-0 rounded-3xl bg-[#F26418]/5 blur-3xl" />
              <svg
                viewBox="0 0 360 360"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {dots.map((d) => (
                  <circle
                    key={d.key}
                    cx={d.x}
                    cy={d.y}
                    r={d.radius}
                    fill="#ffffff"
                    opacity={d.opacity}
                  />
                ))}
              </svg>

              <div className="absolute inset-0 grid place-items-center">
                <Link to="/" className="flex items-center justify-center">
                  <img
                    src="/logo5.png"
                    alt="TeraStamp"
                    className="block h-[76px] w-auto object-contain drop-shadow-[0_0_25px_rgba(242,100,24,0.35)] sm:h-[92px] lg:h-[96px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right — tagline block (hidden on mobile) */}
          <div className="hidden sm:block lg:pl-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F26418]">
              Why TeraStamp
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Data you can build on.
            </h2>
            <p className="mt-4 max-w-md text-[17px] leading-8 text-white/70">
              We turn raw field and sensor data into decisions you can act on —
              scalable intelligence that keeps civil, tunneling, and mining
              projects on time, on budget, and on record.
            </p>
          </div>
        </div>

        {/* Bottom bar — copyright + legal links */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} TeraStamp. All Rights Reserved.
          </p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 hover:text-[#F26418] ${
                    isActive ? "text-[#F26418]" : "text-white/60"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;