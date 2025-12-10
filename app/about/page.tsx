'use client';

import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-indigo-800">About MTI Car Rental</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Providing reliable and comfortable transportation services across North India since 2010
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Company Story */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">Our Story</h2>
            <div className="prose max-w-none">
              <p className="mb-4 text-gray-700">
                Founded in 2010, MTI Car Rental began with a simple vision: to provide reliable, comfortable, 
                and affordable transportation services to travelers across North India. What started as a small 
                operation with just 5 cars has grown into one of the region's most trusted car rental companies.
              </p>
              <p className="mb-4 text-gray-700">
                Over the years, we've expanded our fleet, improved our services, and built a reputation for 
                excellence. Today, we serve thousands of customers annually, from business travelers to tourists 
                exploring the rich cultural heritage of North India.
              </p>
              <p className="text-gray-700">
                Our commitment to customer satisfaction, safety, and professionalism has remained unwavering 
                throughout our journey. We believe in going the extra mile to ensure every customer has a 
                seamless travel experience.
              </p>
            </div>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To provide safe, reliable, and comfortable transportation solutions that exceed our customers' 
                expectations while contributing positively to the communities we serve.
              </p>
              <p className="text-gray-700">
                We strive to make travel stress-free and enjoyable by offering well-maintained vehicles, 
                professional drivers, and exceptional customer service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                To be the leading car rental service provider in North India, recognized for our commitment 
                to quality, innovation, and sustainability.
              </p>
              <p className="text-gray-700">
                We envision expanding our eco-friendly fleet and implementing cutting-edge technology to 
                enhance the customer experience while reducing our environmental impact.
              </p>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">Why Choose MTI Car Rental?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Professional Drivers",
                  description: "All our drivers are trained professionals with clean driving records and excellent customer service skills.",
                  icon: "🚗"
                },
                {
                  title: "Well-Maintained Fleet",
                  description: "Our vehicles undergo regular maintenance checks to ensure safety and comfort.",
                  icon: "🔧"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock customer support to assist you with any queries or emergencies.",
                  icon: "📞"
                },
                {
                  title: "Transparent Pricing",
                  description: "No hidden charges or last-minute surprises. What you see is what you pay.",
                  icon: "💰"
                },
                {
                  title: "Flexible Options",
                  description: "Choose from various car types and rental durations to suit your specific needs.",
                  icon: "📅"
                },
                {
                  title: "On-Time Guarantee",
                  description: "We value your time and guarantee punctual pickups and drop-offs.",
                  icon: "⏱️"
                }
              ].map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Happy Customers Daily" },
                { number: "150+", label: "Vehicles in Fleet" },
                { number: "50+", label: "Cities Covered" },
                { number: "14+", label: "Years of Experience" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-xl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Team Introduction */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">Meet Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Sharma",
                  position: "Founder & CEO",
                  bio: "With over 20 years of experience in the transportation industry, Rajesh leads our company with vision and dedication."
                },
                {
                  name: "Priya Patel",
                  position: "Operations Director",
                  bio: "Priya oversees our daily operations, ensuring seamless service delivery and customer satisfaction."
                },
                {
                  name: "Amit Kumar",
                  position: "Fleet Manager",
                  bio: "Amit manages our extensive fleet, ensuring all vehicles meet our high standards of safety and comfort."
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}