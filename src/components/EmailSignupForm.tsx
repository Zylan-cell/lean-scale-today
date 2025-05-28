import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addSubscriber } from '@/lib/firebase/subscribers';
import { toast } from 'sonner';

interface EmailSignupFormProps {
  className?: string;
  buttonText?: string;
  placeholder?: string;
}

export const EmailSignupForm: React.FC<EmailSignupFormProps> = ({
  className = '',
  buttonText = 'Join the waitlist',
  placeholder = 'Enter your email'
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Отправляем данные напрямую в Firebase
      const result = await addSubscriber({
        email,
        source: 'landing_page',
        userAgent: navigator.userAgent,
      });

      if (result.success) {
        toast.success('Thank you! We\'ll keep you updated on our launch.');
        setEmail('');
      } else {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      toast.error(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sage-blue-500 dark:bg-gray-800 dark:text-white"
        disabled={isSubmitting}
        required
      />
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="bg-sage-blue-700 hover:bg-sage-blue-800 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing
          </span>
        ) : (
          buttonText
        )}
      </Button>
    </form>
  );
};

export default EmailSignupForm;
