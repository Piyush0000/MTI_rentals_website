'use client';

import React from 'react';

const CancellationPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-indigo-800">Cancellation & Refund Policy</h1>
          <p className="text-gray-600 text-center mb-12">Last Updated: June 1, 2023</p>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <p className="text-gray-700 mb-6">
              At MTI Car Rental, we understand that plans can change. This Cancellation & Refund Policy outlines 
              the terms and conditions regarding cancellations and refunds for bookings made through our services. 
              Please read this policy carefully before making a booking.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-700">
                <span className="font-bold">Important:</span> Cancellation charges vary based on the type of service 
                and the time of cancellation. Please review the specific policies below.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">General Cancellation Policy</h2>
            <p className="text-gray-700 mb-6">
              All cancellations must be made through our official channels (website, mobile app, or customer care). 
              Cancellations made through unofficial channels will not be entertained.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Local & Airport Rides</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">Time Before Pickup</th>
                    <th className="py-3 px-4 text-left border-b">Cancellation Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">More than 60 minutes</td>
                    <td className="py-3 px-4 border-b">Free cancellation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">30-60 minutes</td>
                    <td className="py-3 px-4 border-b">25% of fare</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">15-30 minutes</td>
                    <td className="py-3 px-4 border-b">50% of fare</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Less than 15 minutes</td>
                    <td className="py-3 px-4 border-b">100% of fare</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">No-show</td>
                    <td className="py-3 px-4 border-b">100% of fare</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Outstation Rides</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">Time Before Pickup</th>
                    <th className="py-3 px-4 text-left border-b">Cancellation Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">More than 2 hours</td>
                    <td className="py-3 px-4 border-b">Free cancellation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">1-2 hours</td>
                    <td className="py-3 px-4 border-b">25% of fare</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">30 minutes - 1 hour</td>
                    <td className="py-3 px-4 border-b">50% of fare</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Less than 30 minutes</td>
                    <td className="py-3 px-4 border-b">100% of fare</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">No-show</td>
                    <td className="py-3 px-4 border-b">100% of fare</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Hourly Rentals</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">Time Before Pickup</th>
                    <th className="py-3 px-4 text-left border-b">Cancellation Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">More than 30 minutes</td>
                    <td className="py-3 px-4 border-b">Free cancellation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">15-30 minutes</td>
                    <td className="py-3 px-4 border-b">25% of fare</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Less than 15 minutes</td>
                    <td className="py-3 px-4 border-b">50% of fare</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">No-show</td>
                    <td className="py-3 px-4 border-b">100% of fare</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Tour Packages</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">Time Before Journey</th>
                    <th className="py-3 px-4 text-left border-b">Cancellation Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">More than 7 days</td>
                    <td className="py-3 px-4 border-b">10% of package cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">4-7 days</td>
                    <td className="py-3 px-4 border-b">25% of package cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">2-4 days</td>
                    <td className="py-3 px-4 border-b">50% of package cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Less than 2 days</td>
                    <td className="py-3 px-4 border-b">100% of package cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">No-show</td>
                    <td className="py-3 px-4 border-b">100% of package cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Refund Process</h2>
            <ol className="list-decimal pl-8 mb-6 text-gray-700 space-y-2">
              <li>Cancellation requests must be submitted through our official channels</li>
              <li>Applicable cancellation charges will be deducted from the total amount paid</li>
              <li>Refunds will be processed within 7-10 business days</li>
              <li>Refunds will be credited to the original payment method</li>
              <li>Bank processing time may vary and is not under our control</li>
            </ol>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Special Circumstances</h2>
            <p className="text-gray-700 mb-4">
              In case of special circumstances such as natural disasters, government restrictions, or medical emergencies, 
              we may offer flexible cancellation terms. Please contact our customer support team with supporting documentation.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              If you have any disputes regarding cancellations or refunds, please contact our customer support team at 
              +91 9876543210 or email us at support@mticarrental.com. We aim to resolve all disputes within 48 hours 
              of receipt.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Customer Support</h3>
                <p className="text-gray-700 mb-2">Phone: +91 9876543210</p>
                <p className="text-gray-700 mb-2">Email: support@mticarrental.com</p>
                <p className="text-gray-700">Hours: 24/7</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-700">Refund Queries</h3>
                <p className="text-gray-700 mb-2">Email: refunds@mticarrental.com</p>
                <p className="text-gray-700">Response Time: Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;