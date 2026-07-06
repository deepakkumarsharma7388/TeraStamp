import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Map,
    Check,
    MapPinned,
    Layers3,
    MapIcon,
    Route,
} from "lucide-react";

const GISMonitoringMap = () => {
    const stats = [
        {
            value: "Live",
            label: "Google Maps Sync",
        },
        {
            value: "1000+",
            label: "Assets Supported",
        },
        {
            value: "Multi",
            label: "Layer System",
        },
        {
            value: "24/7",
            label: "Map Updates",
        },
    ];

    const features = [
        "Live Google Maps integration",
        "Instrument & asset layers",
        "Geo-referenced analytics",
        "Tunnel alignment & zones",
        "Interactive map filtering",
        "Real-time location updates",
    ];

    const useCases = [
        {
            icon: <MapPinned size={28} />,
            title: "Metro Rail Projects",
            desc: "Track instruments, stations and tunnel alignment on an interactive GIS map.",
        },
        {
            icon: <Layers3 size={28} />,
            title: "Mining Operations",
            desc: "Visualize monitoring locations, excavation zones and equipment layers.",
        },
        {
            icon: <MapIcon size={28} />,
            title: "Construction Sites",
            desc: "View project assets and monitoring instruments with live location updates.",
        },
        {
            icon: <Route size={28} />,
            title: "Infrastructure",
            desc: "Monitor bridges, highways and utilities with geospatial intelligence.",
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
                                <Map size={18} className="text-[#F26418]" />
                                <span className="text-sm font-semibold uppercase tracking-wider text-[#F26418]">
                                    GIS Monitoring Map
                                </span>
                            </div>

                            <h1 className="mt-6 text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                                Visualize Every Asset with an{" "}
                                <span className="text-[#F26418]">
                                    Intelligent GIS Monitoring Map
                                </span>
                            </h1>

                            <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                                TeraStamp combines live monitoring data with GIS technology,
                                allowing engineers to visualize instruments, assets, tunnel
                                alignments and project locations directly on an interactive
                                Google Map for faster and smarter decision-making.
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
                                    src="/allinone/gismonitoring.jpeg"
                                    alt="GIS Monitoring Dashboard"
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
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * .1 }}
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
                                    src="/allinone/gismonitoring2.jpeg"
                                    alt="GIS Layers"
                                    className="h-[280px] w-full object-fill sm:h-[500px] lg:h-[560px]"
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
                                    Smart GIS Monitoring
                                </span>
                            </h2>

                            <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                                Manage monitoring instruments, project assets and critical
                                infrastructure using an intelligent GIS platform. Every
                                monitoring point is linked to its exact location, giving
                                engineers complete project visibility.
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
                            GIS Monitoring for{" "}
                            <span className="text-[#F26418]">
                                Every Infrastructure Project
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]">
                            From metro rail systems to bridges, tunnels and mining
                            operations, TeraStamp provides accurate location-based
                            monitoring to improve project safety and decision making.
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
                        Ready to Visualize Your Entire Project on a{" "}
                        <span className="text-[#F26418]">
                            Smart GIS Map?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]"
                    >
                        Experience how TeraStamp transforms geospatial monitoring into a
                        powerful decision-making platform. Track assets, monitor
                        instruments, and respond to site conditions faster than ever.
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

export default GISMonitoringMap;