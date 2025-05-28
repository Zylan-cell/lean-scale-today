
import { Button } from '@/components/ui/button';
import EmailSignupForm from '@/components/EmailSignupForm';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: 'Jan', growth: 20, timeSpent: 80 },
  { month: 'Feb', growth: 35, timeSpent: 75 },
  { month: 'Mar', growth: 45, timeSpent: 65 },
  { month: 'Apr', growth: 60, timeSpent: 55 },
  { month: 'May', growth: 75, timeSpent: 45 },
  { month: 'Jun', growth: 90, timeSpent: 30 },
];

const chartConfig = {
  growth: {
    label: "Company Growth",
    color: "#0066cc",
  },
  timeSpent: {
    label: "Time on Tasks",
    color: "#dc2626",
  },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50 px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage-blue-800 leading-tight">
            Build lean. Move fast.{' '}
            <span className="text-sage-blue-600">Scale relentlessly today.</span>
          </h1>
          
          <h2 className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium">
            We take care of operations, you take care of business.
          </h2>
          
          <div className="space-y-4 max-w-md">
            <EmailSignupForm 
              buttonText="Join the waitlist"
              placeholder="Your email address"
              className="w-full"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We respect your privacy. Your email will only be used for product updates.  
            </p>
          </div>
        </div>

        {/* Interactive Growth Chart */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] sm:hover:scale-[1.02] hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-sage-blue-800 mb-2">Growth vs Time Optimization</h3>
                </div>

                <ChartContainer config={chartConfig} className="h-48 sm:h-56 md:h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="growth"
                        stroke="#0066cc"
                        strokeWidth={3}
                        dot={{ fill: '#0066cc', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#0066cc', strokeWidth: 2, fill: '#fff' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="timeSpent"
                        stroke="#dc2626"
                        strokeWidth={3}
                        dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#dc2626', strokeWidth: 2, fill: '#fff' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>

                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-sage-blue-600 rounded-full"></div>
                    <span className="text-gray-600">Company Growth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-gray-600">Time on Tasks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
