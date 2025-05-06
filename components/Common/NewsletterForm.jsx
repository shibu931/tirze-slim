'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setSuccess(false);
    setError(false);
    setMessage('');

    // Replace with your actual API endpoint for newsletter subscription
    const API_ENDPOINT = '/api/subscribe';

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setMessage(data.message || 'Thank you for subscribing! 🎉');
        setEmail('');
      } else {
        setError(true);
        setMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      setError(true);
      setMessage('An unexpected error occurred. Please try again later.');
      console.error('Newsletter subscription error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
        <p className="text-neutral-700 font-semibold mb-2">
          Join our newsletter for the latest news and updates
        </p>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your best email address"
            required
            className="w-full px-2 py-1.5 rounded border text-white border-gray-400 focus:ring-[1px] focus:ring-rose-600 focus:border-transparent focus-within:outline-0 placeholder-gray-500 transition-all duration-200"
            disabled={loading}
          />
          {loading && (
            <div className="absolute right-3 top-3.5">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>
            </div>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={loading || !email}
          whileHover={!loading && email ? { scale: 1.02 } : {}}
          whileTap={!loading && email ? { scale: 0.98 } : {}}
          className={`w-full py-1.5 px-6 rounded font-medium  transition-all duration-200 ${
            loading
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : !email
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r text-white from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-700 shadow-md'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Subscribe Now'
          )}
        </motion.button>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg ${
              success
                ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300'
            }`}
          >
            <div className="flex items-center">
              {success ? (
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )}
              <span>{message}</span>
            </div>
          </motion.div>
        )}
      </form>

      <div className="mt-4 text-center text-xs text-neutral-600">
        We respect your privacy. Unsubscribe at any time.
      </div>
    </div>
  );
};

export default NewsletterForm;