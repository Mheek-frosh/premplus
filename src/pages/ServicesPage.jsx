import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Building2, FileText, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            title: "Renewable Energy Design and Deployment",
            icon: <Zap className="w-8 h-8 text-brand-green" />,
            content: [
                "Our company specializes in providing end-to-end renewable energy systems design, deployment, and consultation services, catering specifically to heating, cooling, and power generation needs. With a strong commitment to sustainability, we offer comprehensive solutions that integrate solar, wind, and other renewable technologies to meet the diverse energy requirements of businesses.",
                "Our design phase involves a meticulous assessment of each client's unique needs, ensuring the creation of tailored systems that optimize energy efficiency and minimize environmental impact. From there, our expert team oversees the seamless deployment of these systems, guaranteeing efficient installation and integration into existing infrastructure.",
                "In the consultation realm, we go beyond delivering turnkey solutions. Our team collaborates closely with clients, providing strategic insights into the latest advancements, regulatory considerations, and potential cost savings associated with renewable energy technologies.",
                "Furthermore, our commitment extends to ongoing support and maintenance services, ensuring the longevity and optimal performance of the implemented renewable energy systems. We recognize the dynamic nature of technology and continuously strive to stay at the forefront of industry innovations. Our proactive approach enables us to provide regular updates, improvements, and necessary upgrades, thereby enhancing the resilience and efficiency of the systems over time."
            ],
            image: "https://images.unsplash.com/photo-1509391366360-fe09a921881b?w=800&q=80"
        },
        {
            title: "Power transmission and Distribution Consultancy",
            icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
            content: [
                "Our company stands as a premier provider of consultancy services specializing in high voltage power transmission and distribution. With a team of seasoned experts in electrical engineering and power systems, we offer comprehensive solutions to clients seeking to optimize, expand, or establish high voltage power infrastructure.",
                "Our consultancy services cover a spectrum of areas, including feasibility studies, project design, equipment selection, and performance optimization.",
                "We understand the critical importance of a reliable and efficient power transmission and distribution network, especially in the high voltage domain, and our team is dedicated to ensuring that our clients achieve their operational goals with maximum efficiency and safety. Whether it's advising on grid modernization, substation design, or transmission line optimization, our company is committed to delivering tailored solutions that meet the highest industry standards and pave the way for a robust and resilient power supply.",
                "Moreover, our team leverages the latest innovations in smart grid technology, digital monitoring systems, and predictive analytics to enhance the reliability and performance of high voltage transmission and distribution networks. This forward-thinking approach ensures that our clients not only meet current operational needs but are also well-positioned for the future evolution of power systems."
            ],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
        },
        {
            title: "Sustainable Building Design",
            icon: <Building2 className="w-8 h-8 text-brand-green" />,
            content: [
                "Our company takes pride in offering cutting-edge sustainable building design services, providing a holistic approach that aligns environmental responsibility with functional and aesthetic considerations. We understand the importance of creating structures that not only meet the immediate needs of our clients but also contribute to a more sustainable future. Our team of skilled architects and designers integrate energy-efficient technologies, eco-friendly materials, and innovative design principles to create buildings that minimize environmental impact while maximizing energy efficiency.",
                "From passive solar design to green roofs and efficient insulation systems, our sustainable building designs prioritize both environmental stewardship and operational cost-effectiveness. Embracing our services means not just constructing buildings, but shaping spaces that harmonize with the natural environment, promote energy conservation, and foster a healthier, more sustainable lifestyle.",
                "Choosing our sustainable building design service means investing in a future where architecture and environmental responsibility seamlessly coexist. By prioritizing sustainability from conception to construction, we contribute to the creation of resilient, energy-efficient, and aesthetically pleasing structures that stand as beacons of responsible design in the modern world."
            ],
            image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
        },
        {
            title: "Technical Advisory",
            icon: <FileText className="w-8 h-8 text-brand-green" />,
            content: [
                "Our company excels in providing top-notch electricity regulation consultancy and advisory services, serving as a trusted partner for clients navigating the complex landscape of energy regulations. With a team of seasoned experts, we offer comprehensive guidance on regulatory compliance, policy interpretation, and strategic planning tailored to the evolving dynamics of the electricity sector.",
                "We pride ourselves on staying abreast of the latest developments in the energy regulatory environment, enabling us to provide informed, forward-thinking advice to support our clients in making sound decisions. At the intersection of legal expertise, industry knowledge, and strategic foresight, our electricity regulation consultancy and advisory services empower clients to navigate regulatory challenges with confidence, ensuring compliance and fostering sustainable growth in an ever-changing energy landscape.",
                "At our core, we are committed to empowering our clients to make informed decisions that align with their business goals and regulatory obligations. By choosing our electricity regulation consultancy and advisory services, clients gain a strategic partner dedicated to navigating the intricacies of the energy sector, ensuring not only compliance but also strategic resilience and long-term success in a rapidly evolving regulatory landscape."
            ],
            image: "https://images.unsplash.com/photo-1454165205732-d01140e59b73?w=800&q=80"
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-4"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-brand-dark max-w-3xl leading-tight"
                    >
                        Premium engineering design and <span className="text-brand-green">consultancy services</span>
                    </motion.h1>
                </div>

                <div className="space-y-32">
                    {services.map((service, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}
                        >
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-brand-green/10 rounded-2xl">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-brand-dark">{service.title}</h2>
                                </div>
                                <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                                    {service.content.map((para, pIdx) => (
                                        <p key={pIdx}>{para}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[500px] group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-brand-dark/10" />
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-32 p-12 bg-brand-dark rounded-[40px] text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <h2 className="text-4xl font-bold mb-8 relative z-10">Ready to start your next project?</h2>
                    <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                        Let's collaborate to build a sustainable and efficient energy future for your business.
                    </p>
                    <button className="bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all relative z-10">
                        Contact Our Experts
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
