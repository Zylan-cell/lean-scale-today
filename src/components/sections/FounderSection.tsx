
export const FounderSection = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-sage-blue-800 mb-8">
            Founder note
          </h2>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-gray-100">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm John — founder of Sage. Our mission is to ensure generational knowledge 
              transfer to founders, that directly impacts businesses for greater revenue growth, 
              and higher global scalability, without killing founders with operational hustling methods.
            </p>
            <p className="text-xl font-semibold text-sage-blue-700">
              Do it better, faster, today!
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a 
                  href="mailto:jansons.ljp@gmail.com" 
                  className="text-sage-blue-600 hover:text-sage-blue-700 font-medium transition-colors"
                >
                  jansons.ljp@gmail.com
                </a>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                <a 
                  href="#" 
                  className="text-sage-blue-600 hover:text-sage-blue-700 font-medium transition-colors"
                >
                  Connect with John
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
