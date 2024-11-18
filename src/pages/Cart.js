import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';

const Cart = () => {
  const { cartItems, removeFromCart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCheckoutConfirm = (paymentMethod) => {
    // Di sini Anda bisa menambahkan logika untuk memproses pembayaran
    setShowCheckoutModal(false);
    setShowSuccessModal(true);
    
    // Simulasi sukses checkout
    setTimeout(() => {
      clearCart();
      setShowSuccessModal(false);
      navigate('/home');
    }, 2000);
  };

  // Modal sukses checkout
  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 text-center">
        <div className="text-green-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Payment Successful!</h3>
        <p className="text-gray-300">Thank you for your purchase.</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-400 py-8">
          <p>Your cart is empty</p>
          <button 
            onClick={() => navigate('/home')}
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg p-4 flex items-center">
              <img src={item.thumbnail} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
              <div className="ml-4 flex-grow">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-green-400">{item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="mt-6 bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white">Total:</span>
              <span className="text-green-400 text-xl font-bold">
                Rp {getTotal().toLocaleString()}
              </span>
            </div>
            <button 
              onClick={() => setShowCheckoutModal(true)}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      <CheckoutModal 
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        total={getTotal()}
        onConfirm={handleCheckoutConfirm}
      />

      {showSuccessModal && <SuccessModal />}
    </div>
  );
};

export default Cart; 