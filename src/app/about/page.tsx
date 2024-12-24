import React from 'react';


export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto my-8 px-4">
            {/* Hero Section - Personal Brand Statement */}
            <section className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">B2B Marketing Data Scientist</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Transforming marketing data into qualified B2B leads through predictive analytics and digital strategy
                </p>
            </section>

            {/* Value Proposition Cards */}
            <section className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white rounded-lg shadow">
                    <div className="flex items-center mb-4">
                        <h3 className="text-xl font-semibold">Data-Driven Growth</h3>
                    </div>
                    <p className="text-gray-600">
                        Specializing in predictive modeling and machine learning to identify high-value prospects and optimize marketing ROI
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow">
                    <div className="flex items-center mb-4">
                        <h3 className="text-xl font-semibold">Lead Generation Expert</h3>
                    </div>
                    <p className="text-gray-600">
                        Proven track record of increasing qualified leads by 200% through targeted digital marketing strategies
                    </p>
                </div>
            </section>

            {/* Professional Background */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Expertise</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Technical Skills</h3>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Machine Learning & Predictive Analytics</li>
                            <li>Marketing Attribution Modeling</li>
                            <li>Python, R, SQL for Data Analysis</li>
                            <li>Marketing Automation & CRM Systems</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Industry Focus</h3>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>B2B SaaS & Technology</li>
                            <li>Enterprise Solutions</li>
                            <li>Digital Marketing Strategy</li>
                            <li>Lead Scoring & Qualification</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Key Achievements */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Impact & Results</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-3">Lead Generation</h3>
                        <p className="text-gray-600">Increased qualified leads by 200% through implementation of ML-based lead scoring system</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-3">ROI Optimization</h3>
                        <p className="text-gray-600">Improved marketing ROI by 150% using data-driven campaign optimization</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
                <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
                <p className="text-gray-600 mb-6">
                    Looking to improve your B2B lead generation through data science? Let&apos;s discuss how we can transform your marketing strategy.
                </p>
                <div className="space-x-4">
                    <a href="mailto:your.email@example.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Contact Me
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200">
                        LinkedIn
                    </a>
                </div>
            </section>
        </div>
    );
}

