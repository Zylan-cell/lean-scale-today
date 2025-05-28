
export const FlipSection = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pain Points */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-red-600 mb-8">Don't</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Oversight and execution of tedious operations
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Timely and ineffective hiring
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Multi-tasking that kills your momentum
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-sage-blue-600 mb-8">Do</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-sage-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Delegation and instant task execution
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-sage-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Business-scaling workflows
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-sage-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Time and information for A+ problem-solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
