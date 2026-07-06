// src/pages/CustomInstrumentDisplay.jsx


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Layers,
  Check,
  Gauge,
  Palette,
  StickyNote,
  ImageIcon,
} from "lucide-react";

const CustomInstrumentDisplay = () => {
  const stats = [
    {
      value: "Any",
      label: "Instrument Type Supported",
    },
    {
      value: "Full",
      label: "Color Customization",
    },
    {
      value: "Per-Unit",
      label: "Instrument Notes",
    },
    {
      value: "Multi",
      label: "Drawings & Map Services",
    },
  ];

  const features = [
    "Any instrument type supported",
    "Custom colors, no restrictions",
    "Seamless per-instrument notes",
    "Drawings, images & map services",
    "Flexible symbols & display styles",
    "Instant setup for new instruments",
  ];

  const useCases = [
    {
      icon: <Gauge size={28} />,
      title: "Any Instrument, Any Vendor",
      desc: "Configure piezometers, inclinometers, tiltmeters, extensometers or any custom sensor without limitations.",
    },
    {
      icon: <Palette size={28} />,
      title: "Custom Visual Identity",
      desc: "Assign your own colors, symbols and styles to every instrument so teams can identify them at a glance.",
    },
    {
      icon: <StickyNote size={28} />,
      title: "Per-Instrument Notes",
      desc: "Attach installation details, calibration records and site observations directly to each instrument.",
    },
    {
      icon: <ImageIcon size={28} />,
      title: "Drawings & Map Overlays",
      desc: "Display instruments over CAD drawings, site images and live map services for complete context.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* ================= HERO ================= */}

      <section className="bg-[#F5F6F7]">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-[50px] sm:px-6 md:pb-20 md:pt-[60px] lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="inline-flex items-center gap-2 rounded-lg bg-[#FFF4EC] px-4 py-2">
                <Layers size={18} className="text-[#F26418]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[#F26418]">
                  Custom Instrument Display
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                Display Every Instrument{" "}
                <span className="text-[#F26418]">
                  Exactly the Way You Want
                </span>
              </h1>

              <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                TeraStamp supports any instrument type with complete display
                freedom. Set custom colors without restrictions, add
                per-instrument notes seamlessly, and view everything over
                drawings, images and map services — your instruments, your
                way.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="rounded-lg bg-[#F26418] px-6 py-3 font-semibold text-white transition hover:bg-[#dd5b10]"
                >
                  Request Demo
                </Link>

                <Link
                  to="/features"
                  className="rounded-lg border border-[#E2E5E9] bg-white px-6 py-3 font-semibold text-[#32353A] transition hover:border-[#F26418] hover:text-[#F26418]"
                >
                  Explore Features
                </Link>

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg">

                <img
                  src="/allinone/custominstrument.jpeg"
                  alt="Custom Instrument Display Dashboard"
                  className="h-full w-full object-cover"
                />

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

            {stats.map((stat, index) => (

              <motion.div
                key={index}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:index*.1 }}
                className="rounded-2xl border border-[#E2E5E9] bg-[#F5F6F7] p-6 text-center"
              >

                <h3 className="text-3xl font-bold text-[#F26418]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-[#5C636E]">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}

     {/* ================= FEATURES ================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg">

                <img
                  src="/allinone/custominstrument2.jpeg"
                  alt="Instrument Customization Options"
                  className="h-full w-full object-cover"
                />

              </div>
            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >

              <h2 className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                Everything You Need for{" "}
                <span className="text-[#F26418]">
                  Flexible Instrument Display
                </span>
              </h2>

              <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                Every project is different, and so are its instruments.
                TeraStamp gives you full control over how each instrument
                appears, what information it carries and where it&apos;s
                displayed — with zero restrictions.
              </p>

              <div className="mt-8 space-y-3">

                {features.map((feature, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="flex items-start gap-4"
                  >

                    <Check
                      size={20}
                      className="mt-1 rounded-full bg-[#F26418] p-1 text-white flex-shrink-0"
                    />

                    <span className="text-[18px] leading-7 text-[#5C636E]">
                      {feature}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= USE CASES ================= */}

      <section className="bg-[#F5F6F7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h2 className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
              Custom Instrument Display for{" "}
              <span className="text-[#F26418]">
                Every Monitoring Setup
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]">
              Whether your project uses standard geotechnical sensors or
              fully custom instruments, TeraStamp adapts its display to
              match your workflow — not the other way around.
            </p>

          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {useCases.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-2xl border border-[#E2E5E9] bg-white p-8 shadow-sm transition-all"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF4EC] text-[#F26418]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#32353A]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#5C636E]">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]"
          >
            Ready to Display Your Instruments{" "}
            <span className="text-[#F26418]">
              Your Way?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]"
          >
            See how TeraStamp supports any instrument type with custom
            colors, per-instrument notes, and display over drawings, images
            and map services — with complete freedom and zero restrictions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="rounded-lg bg-[#F26418] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#dd5b10]"
            >
              Request a Demo
            </Link>

            <Link
              to="/features"
              className="rounded-lg border border-[#E2E5E9] bg-white px-8 py-3 text-base font-semibold text-[#32353A] transition hover:border-[#F26418] hover:text-[#F26418]"
            >
              Explore Features
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default CustomInstrumentDisplay;