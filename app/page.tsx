'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Car {
  id: number;
  name: string;
  price: number;
  type: string;
  image: string;
}

export default function Home() {
  const [cars, setCars] = useState([] as Car[]);
  
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Reliable Car Rental Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Professional drivers, comfortable cars, and competitive pricing for all your travel needs
          </p>
          <div className="bg-yellow-400 text-gray-900 py-4 px-6 rounded-lg inline-block mb-8">
            <span className="font-bold">CALL NOW & GET 10% OFF: </span>
            <span className="font-extrabold text-xl">+91 9876543210</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/booking" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Book Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="container mx-auto px-4 py-12 -mt-12">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap border-b border-gray-200 mb-6">
            <button className="py-3 px-6 font-medium text-blue-600 border-b-2 border-blue-600">
              One Way
            </button>
            <button className="py-3 px-6 font-medium text-gray-500 hover:text-gray-700">
              Round Trip
            </button>
            <button className="py-3 px-6 font-medium text-gray-500 hover:text-gray-700">
              Hourly Rental
            </button>
            <button className="py-3 px-6 font-medium text-gray-500 hover:text-gray-700">
              Outstation
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter pickup location" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter drop location" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Date & Time</label>
              <div className="relative">
                <input 
                  type="datetime-local" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                Search Cabs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Our Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Local Taxi Service", icon: "🚗" },
            { title: "One-Way Taxi Service", icon: "🚕" },
            { title: "Airport Taxi Service", icon: "✈️" },
            { title: "Corporate Taxi Service", icon: "🏢" },
            { title: "Outstation Taxi Service", icon: "🛣️" }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <Link href="/booking" className="text-blue-600 hover:text-blue-800 font-medium">
                Book Now →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Popular Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Delhi to Mathura Vrindavan Same Day Tour", 
                duration: "1 Day", 
                price: "₹4,500" 
              },
              { 
                title: "Delhi-Agra One Day Tour", 
                duration: "1 Day", 
                price: "₹3,800" 
              },
              { 
                title: "Golden Triangle Tour 5N6D", 
                duration: "6 Days", 
                price: "₹18,500" 
              },
              { 
                title: "Delhi to Haridwar Same Day Trip", 
                duration: "1 Day", 
                price: "₹5,200" 
              },
              { 
                title: "Delhi to Manali Tour Package 3N4D", 
                duration: "4 Days", 
                price: "₹12,800" 
              },
              { 
                title: "Chardham Yatra", 
                duration: "8 Days", 
                price: "₹28,500" 
              }
            ].map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">{pkg.duration}</span>
                    <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                  </div>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Comfortable Travel</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Experienced Driver</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Sightseeing Guide</span>
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            "Delhi", "Uttar Pradesh", "Haryana", "Himachal Pradesh", 
            "Rajasthan", "Punjab", "Uttarakhand"
          ].map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition duration-300">
              <span className="font-medium">{location}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Display */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Our Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                {/* Using a div with gradient background as placeholder for image */}
                <div className="w-full h-48 bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">{car.name}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                  <p className="text-gray-600">{car.type}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-indigo-600">${car.price}/day</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 font-bold">4.8/5</span>
            </div>
            <p className="text-gray-700 mb-4">
              "The service was exceptional! The driver was punctual and very courteous. The car was clean and comfortable. 
              Will definitely use MTI Car Rental services again for all our travel needs."
            </p>
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-4">
                <h4 className="font-bold">Rajesh Kumar</h4>
                <p className="text-gray-600">Delhi to Agra Tour</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read More Reviews →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}