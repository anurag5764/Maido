import React, { useState } from "react";
import { X } from "lucide-react";

interface PaymentFormProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

const PaymentForm = ({ isOpen, onClose, amount }: PaymentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log("Processing payment:", formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-xl p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Your Booking
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Complete Address *
              </label>
              <textarea
                id="address"
                required
                rows={3}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  PIN Code *
                </label>
                <input
                  type="text"
                  id="pincode"
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({ ...formData, pincode: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Amount to Pay:</span>
                <span className="text-xl font-semibold text-yellow-900">
                  ₹{amount.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-xl font-medium 
                       hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 
                       focus:ring-yellow-500 focus:ring-offset-2"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
