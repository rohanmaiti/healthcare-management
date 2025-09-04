import { useThemeClasses } from '../../../theme';
import { QuickActionsComp } from './components/QuickActionsComp';
import { StatsCardsComp } from './components/StatsCardsComp';


export const Dashboard = () => {    
  const themeClasses = useThemeClasses();
 
  
  const recentActivities = [
    {
      message: 'New patient registered: John Doe',
      time: '5 min ago',
      color: 'bg-green-500'
    },
    {
      message: 'Appointment scheduled for tomorrow',
      time: '15 min ago',
      color: 'bg-blue-500'
    },
    {
      message: 'Staff member added to Cardiology',
      time: '30 min ago',
      color: 'bg-purple-500'
    },
    {
      message: 'Equipment maintenance completed',
      time: '1 hour ago',
      color: 'bg-orange-500'
    }
  ];
  
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-bold ${themeClasses.text.primary}`}>
          Dashboard
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* stats cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <StatsCardsComp/>
      </div>


       {/* quick actions */}
      <div className={`
        rounded-xl shadow-sm border p-6 transition-shadow duration-200
        hover:shadow-md ${themeClasses.bg.card} ${themeClasses.border.primary}
      `}>
        <QuickActionsComp/>
      </div>

      {/* Recent Activity Section */}
      <div className={`
        rounded-xl shadow-sm border p-6 transition-shadow duration-200
        hover:shadow-md ${themeClasses.bg.card} ${themeClasses.border.primary}
      `}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-semibold ${themeClasses.text.primary}`}>
            Recent Activity
          </h3>
          <button className={`
            text-sm font-medium transition-colors duration-200
            hover:underline ${themeClasses.text.accent}
          `}>
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className={`
                flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200
                hover:bg-gray-50 dark:hover:bg-gray-800/50
                ${themeClasses.bg.tertiary}
              `}
            >
              <div className={`w-3 h-3 rounded-full ${activity.color}`} />
              <div className="flex-1">
                <span className={`text-sm ${themeClasses.text.secondary}`}>
                  {activity.message}
                </span>
              </div>
              <span className={`text-xs ${themeClasses.text.muted} whitespace-nowrap`}>
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};