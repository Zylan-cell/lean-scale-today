
import { Button } from '@/components/ui/button';
import EmailSignupForm from '@/components/EmailSignupForm';

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-sage-blue-800 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to delegate?
        </h2>
        <p className="text-xl text-sage-blue-100 mb-8">
          Join the early access list and be one of the first early users.
        </p>
        <div className="max-w-md mx-auto">
          <EmailSignupForm 
            buttonText="Join the waitlist"
            placeholder="Your email address"
            className="w-full"
          />
          <p className="text-sm text-sage-blue-100 mt-3">
            We respect your privacy. Your email will only be used for product updates.
          </p>
        </div>
      </div>
    </section>
  );
};
