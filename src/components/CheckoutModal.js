import React, { useState } from 'react';

const CheckoutModal = ({ isOpen, onClose, total, onConfirm }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const paymentMethods = [
    { id: 'bca', name: 'BCA Virtual Account' },
    { id: 'mandiri', name: 'Mandiri Virtual Account' },
    { id: 'bni', name: 'BNI Virtual Account' },
    { id: 'gopay', name: 'GoPay' },
    { id: 'ovo', name: 'OVO' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    setIsLoading(true);
    // Simulasi proses checkout
    setTimeout(() => {
      onConfirm(paymentMethod);
      setIsLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Checkout Confirmation</h2>
        
        <div className="mb-6">
          <p className="text-gray-300 mb-2">Total Payment:</p>
          <p className="text-green-400 text-2xl font-bold">
            Rp {total.toLocaleString()}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="text-white mb-2 block">Select Payment Method:</label>
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <label 
                  key={method.id}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-600 cursor-pointer hover:border-cyan-500 transition-colors"
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-cyan-500"
                  />
                  <span className="text-white">{method.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors disabled:bg-cyan-800"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                'Confirm Payment'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal; 