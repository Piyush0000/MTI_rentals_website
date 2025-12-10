'use client';

import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-indigo-800">Terms and Conditions</h1>
          <p className="text-gray-600 text-center mb-12">Last Updated: June 1, 2023</p>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <p className="text-gray-700 mb-6">
              Welcome to MTI Car Rental. These terms and conditions outline the rules and regulations for the use of 
              MTI Car Rental's website and services. By accessing this website, we assume you accept these terms and 
              conditions in full. Do not continue to use MTI Car Rental's website if you do not accept all of the 
              terms and conditions stated on this page.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">License</h2>
            <p className="text-gray-700 mb-6">
              Unless otherwise stated, MTI Car Rental and/or its licensors own the intellectual property rights for 
              all material on MTI Car Rental. All intellectual property rights are reserved. You may view and/or print 
              pages from https://www.mticarrental.com for your own personal use subject to restrictions set in these 
              terms and conditions.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information when making bookings</li>
              <li>Maintain the confidentiality of your account and password</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not transmit any worms or viruses or any code of a destructive nature</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Booking Terms</h2>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Making a Booking</h3>
            <p className="text-gray-700 mb-4">
              When you make a booking through our website, you are making an offer to rent a vehicle. All bookings 
              are subject to acceptance by us, and we reserve the right to refuse any booking for any reason.
            </p>
            
            <h3 className="text-xl font-bold mb-2 text-gray-800">Payment</h3>
            <p className="text-gray-700 mb-4">
              Payment for all bookings must be made in full at the time of booking unless otherwise agreed. We accept 
              various payment methods including credit cards, debit cards, and digital wallets.
            </p>
            
            <h3 className="text-xl font-bold mb-2 text-gray-800">Modification and Cancellation</h3>
            <p className="text-gray-700 mb-6">
              Bookings may be modified or canceled subject to our Cancellation & Refund Policy. Please refer to that 
              policy for detailed information on modification and cancellation charges.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Vehicle Use Terms</h2>
            <p className="text-gray-700 mb-4">
              When renting a vehicle from MTI Car Rental, you agree to:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>Use the vehicle only for the purpose stated in the rental agreement</li>
              <li>Not sublet, assign, or transfer the vehicle to any other person</li>
              <li>Not use the vehicle for any illegal purpose</li>
              <li>Not drive under the influence of alcohol or drugs</li>
              <li>Return the vehicle in the same condition as received, reasonable wear and tear excepted</li>
              <li>Comply with all traffic laws and regulations</li>
              <li>Report any accidents or damage to the vehicle immediately</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Liability and Insurance</h2>
            <p className="text-gray-700 mb-6">
              Our vehicles are covered by comprehensive insurance. However, you may be liable for any damage to the 
              vehicle, loss of keys, or other incidents as outlined in your rental agreement. We recommend reviewing 
              the insurance details provided at the time of booking.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              In no event shall MTI Car Rental, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from 
              (i) your access to or use of or inability to access or use the service; (ii) any conduct or content 
              of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized 
              access, use or alteration of your transmissions or content, whether based on warranty, contract, tort 
              (including negligence) or any other legal theory, whether or not we have been informed of the possibility 
              of such damage.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to 
              its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not 
              be considered a waiver of those rights. If any provision of these Terms is held to be invalid or 
              unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms 
              constitute the entire agreement between us regarding our Service, and supersede and replace any prior 
              agreements we might have had between us regarding the Service.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Changes to These Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion. By continuing to access 
              or use our Service after those revisions become effective, you agree to be bound by the revised terms. 
              If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li>By email: terms@mticarrental.com</li>
              <li>By phone: +91 9876543210</li>
              <li>By mail: Legal Department, MTI Car Rental, 123 Business Park, Delhi, India - 110001</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;