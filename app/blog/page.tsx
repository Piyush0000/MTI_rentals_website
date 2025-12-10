'use client';

import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Tourist Destinations in North India",
      excerpt: "Discover the most beautiful places to visit in North India, from the majestic Himalayas to historic monuments.",
      date: "June 15, 2023",
      author: "Travel Team",
      category: "Destinations",
      image: "/blog1.jpg"
    },
    {
      id: 2,
      title: "How to Plan a Perfect Road Trip",
      excerpt: "Essential tips for planning your next road adventure, including vehicle selection and safety measures.",
      date: "May 28, 2023",
      author: "Driving Experts",
      category: "Travel Tips",
      image: "/blog2.jpg"
    },
    {
      id: 3,
      title: "Benefits of Choosing a Professional Car Rental Service",
      excerpt: "Learn why renting from a professional service is safer, more convenient, and cost-effective.",
      date: "April 10, 2023",
      author: "MTI Team",
      category: "Services",
      image: "/blog3.jpg"
    },
    {
      id: 4,
      title: "Monsoon Travel: What You Need to Know",
      excerpt: "Tips for safe and enjoyable travel during the monsoon season in North India.",
      date: "July 5, 2023",
      author: "Weather Experts",
      category: "Seasonal Guides",
      image: "/blog4.jpg"
    },
    {
      id: 5,
      title: "Understanding Our Cancellation Policy",
      excerpt: "A detailed guide to our flexible cancellation and refund policies for your peace of mind.",
      date: "March 22, 2023",
      author: "Customer Support",
      category: "Policy",
      image: "/blog5.jpg"
    },
    {
      id: 6,
      title: "Eco-Friendly Travel Options",
      excerpt: "Explore our new hybrid and electric vehicle options for environmentally conscious travelers.",
      date: "February 14, 2023",
      author: "Sustainability Team",
      category: "Green Travel",
      image: "/blog6.jpg"
    }
  ];

  // Categories for filtering
  const categories = [
    "All",
    "Destinations",
    "Travel Tips",
    "Services",
    "Seasonal Guides",
    "Policy",
    "Green Travel"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-indigo-800">Travel Blog</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Explore travel tips, destination guides, and industry insights
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full ${index === 0 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                {/* Featured Image */}
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Blog Image</span>
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
              <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-md">2</button>
              <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-md">3</button>
              <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-md">Next →</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;