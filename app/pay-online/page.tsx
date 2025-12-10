'use client';

import React, { useState } from 'react';

const PayOnlinePage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bank, setBank] = useState('');

  const banks = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Punjab National Bank",
    "Bank of Baroda"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log({
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      cardHolderName,
      upiId,
      bank
    });
    alert('Payment processed successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-indigo-800">Pay Online</h1>
          <p className="text-gray-600 text-center mb-12">Secure and convenient payment options</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Details</h2>
              
              {/* Payment Method Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 text-gray-700">Select Payment Method</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-4 border rounded-lg ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-2xl">💳</div>
                      <div className="text-left">
                        <div className="font-bold">Credit/Debit Card</div>
                        <div className="text-xs text-gray-500">Visa, Mastercard, Rupay</div>
                      </div>
                    </div>
                  </button>
                  <button
                    className={`p-4 border rounded-lg ${paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    onClick={() => setPaymentMethod('upi')}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-2xl">📱</div>
                      <div className="text-left">
                        <div className="font-bold">UPI</div>
                        <div className="text-xs text-gray-500">Google Pay, PhonePe, etc.</div>
                      </div>
                    </div>
                  </button>
                  <button
                    className={`p-4 border rounded-lg ${paymentMethod === 'netbanking' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    onClick={() => setPaymentMethod('netbanking')}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-2xl">🏦</div>
                      <div className="text-left">
                        <div className="font-bold">Net Banking</div>
                        <div className="text-xs text-gray-500">All Indian Banks</div>
                      </div>
                    </div>
                  </button>
                  <button
                    className={`p-4 border rounded-lg ${paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    onClick={() => setPaymentMethod('wallet')}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-2xl">💼</div>
                      <div className="text-left">
                        <div className="font-bold">Wallet</div>
                        <div className="text-xs text-gray-500">Paytm, Amazon Pay</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Payment Forms */}
              <form onSubmit={handleSubmit}>
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="password"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          placeholder="123"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Holder Name</label>
                      <input
                        type="text"
                        value={cardHolderName}
                        onChange={(e) => setCardHolderName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'upi' && (
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@upi"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700">
                        After clicking "Pay Now", you'll be redirected to your UPI app to complete the payment.
                      </p>
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'netbanking' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank</label>
                    <select
                      value={bank}
                      onChange={(e) => setBank(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Choose your bank</option>
                      {banks.map((bank, index) => (
                        <option key={index} value={bank}>{bank}</option>
                      ))}
                    </select>
                  </div>
                )}
                
                {paymentMethod === 'wallet' && (
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      {['Paytm', 'Amazon Pay', 'PhonePe', 'Google Pay'].map((wallet, index) => (
                        <button
                          key={index}
                          className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50"
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-2">💼</div>
                            <div className="font-bold">{wallet}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Pay Now Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                  >
                    Pay Now ₹1,250
                  </button>
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold">Delhi to Agra One Day Tour</h3>
                      <p className="text-sm text-gray-600">Sedan • 4 Passengers</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₹3,800</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Rental Charges</span>
                      <span>₹3,500</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Taxes & Fees</span>
                      <span>₹300</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span>₹3,800</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Security Badges */}
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Secure Payment</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🔒</div>
                    <p className="text-sm font-bold">256-bit SSL Encryption</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🛡️</div>
                    <p className="text-sm font-bold">PCI DSS Compliant</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">💳</div>
                    <p className="text-sm font-bold">Verified by Visa</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <p className="text-sm font-bold">Mastercard SecureCode</p>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="text-green-500 mr-3 text-xl">✅</div>
                    <p className="text-green-700">
                      Your payment information is securely encrypted and will never be shared with third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayOnlinePage;