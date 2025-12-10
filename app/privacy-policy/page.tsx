'use client';

import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-indigo-800">Privacy Policy</h1>
          <p className="text-gray-600 text-center mb-12">Last Updated: June 1, 2023</p>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <p className="text-gray-700 mb-6">
              MTI Car Rental ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              and use our services. Please read this privacy policy carefully. If you do not agree with the terms 
              of this privacy policy, please do not access the site or use our services.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Information We Collect</h2>
            
            <h3 className="text-xl font-bold mb-2 text-gray-800">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personally identifiable information, such as your name, email address, phone number, 
              mailing address, and payment information when you register on the site, place an order, subscribe 
              to our newsletter, respond to a survey, fill out a form, or enter information on our site.
            </p>
            
            <h3 className="text-xl font-bold mb-2 text-gray-800">Usage Data</h3>
            <p className="text-gray-700 mb-4">
              We may also collect information about how you access and use our service ("Usage Data"). This Usage 
              Data may include information such as your computer's Internet Protocol address (e.g. IP address), 
              browser type, browser version, the pages of our service that you visit, the time and date of your visit, 
              the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            
            <h3 className="text-xl font-bold mb-2 text-gray-800">Tracking & Cookies Data</h3>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. 
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent 
              to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, 
              and scripts to collect and track information and to improve and analyze our service.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Use of Data</h2>
            <p className="text-gray-700 mb-4">
              MTI Car Rental uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events 
              which we offer that are similar to those that you have already purchased or enquired about unless we have 
              your consent to do so</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Disclosure of Data</h2>
            <p className="text-gray-700 mb-4">
              We may disclose personal information that we collect, or you provide:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">
              <li><span className="font-bold">Business Transaction:</span> If we are involved in a merger, acquisition or asset sale, your personal data may be transferred.</li>
              <li><span className="font-bold">Other Cases:</span> We may disclose your information also:
                <ul className="list-circle pl-8 mt-2 space-y-1">
                  <li>To comply with a legal obligation</li>
                  <li>To protect and defend the rights or property of MTI Car Rental</li>
                  <li>To prevent or investigate possible wrongdoing in connection with the service</li>
                  <li>To protect the personal safety of users of the service or the public</li>
                  <li>To protect against legal liability</li>
                </ul>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Security of Data</h2>
            <p className="text-gray-700 mb-6">
              The security of your data is important to us, but remember that no method of transmission over the Internet, 
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
              your Personal Data, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Service Providers</h2>
            <p className="text-gray-700 mb-6">
              We may employ third party companies and individuals to facilitate our service ("Service Providers"), 
              to provide the service on our behalf, to perform service-related services or to assist us in analyzing 
              how our service is used. These third parties have access to your Personal Data only to perform these 
              tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Analytics</h2>
            <p className="text-gray-700 mb-6">
              We may use third-party Service Providers to monitor and analyze the use of our service.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Links to Other Sites</h2>
            <p className="text-gray-700 mb-6">
              Our service may contain links to other sites that are not operated by us. If you click on a third party link, 
              you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every 
              site you visit. We have no control over and assume no responsibility for the content, privacy policies or 
              practices of any third party sites or services.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our service does not address anyone under the age of 18 ("Children"). We do not knowingly collect 
              personally identifiable information from anyone under the age of 18. If you are a parent or guardian 
              and you are aware that your Children has provided us with Personal Data, please contact us. If we 
              become aware that we have collected Personal Data from children without verification of parental consent, 
              we take steps to remove that information from our servers.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our service, 
              prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li>By email: privacy@mticarrental.com</li>
              <li>By phone: +91 9876543210</li>
              <li>By mail: Privacy Officer, MTI Car Rental, 123 Business Park, Delhi, India - 110001</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;