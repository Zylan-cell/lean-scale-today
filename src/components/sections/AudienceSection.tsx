
import { Users, Rocket, Building } from 'lucide-react';

export const AudienceSection = () => {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-sage-blue-800 mb-16">
          Built for:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-sage-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-sage-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-sage-blue-800 mb-2">
              SME and lean teams
            </h3>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-sage-blue-100 rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-sage-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-sage-blue-800 mb-2">
              Fast-scaling startups
            </h3>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-sage-blue-100 rounded-full flex items-center justify-center">
                <Building className="w-6 h-6 text-sage-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-sage-blue-800 mb-2">
              Business Builders
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
