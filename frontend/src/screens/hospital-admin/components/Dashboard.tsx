import { useThemeClasses, useThemeContext } from '../../../theme';
import { Users, Heart, Calendar, DollarSign } from 'lucide-react';

export const Dashboard = () => {    
  const themeClasses = useThemeClasses();
  const { isDark } = useThemeContext();
  
  const statsCards = [
    {
      title: 'Total Revenue',
      value: '$125,430',
      change: '+15% from last month',
      icon: DollarSign,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      changeColor: 'bg-green-100'
    },
    {
      title: 'Total Patients',
      value: '1,234',
      change: '+12% from last month',
      icon: Users,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      changeColor: 'bg-blue-100'
    },
    {
      title: 'Active Staff',
      value: '89',
      change: '+3 new this week',
      icon: Heart,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      changeColor: 'bg-purple-100'
    },
    {
      title: "Today's Appointments",
      value: '45',
      change: '8 pending',
      icon: Calendar,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      changeColor: 'bg-orange-100'
    }
  ];

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

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className={`
                rounded-xl shadow-sm border transition-all duration-200 overflow-hidden
                hover:shadow-md hover:scale-105 cursor-pointer
                ${themeClasses.bg.card} ${themeClasses.border.primary}
              `}
            >
              {/* White Top Section */}
              <div className={`p-6 ${themeClasses.bg.card}`}>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className={`text-sm font-medium uppercase tracking-wide ${themeClasses.text.secondary}`}>
                      {card.title}
                    </h3>
                    <p className={`text-2xl font-bold ${themeClasses.text.primary}`}>
                      {card.value}
                    </p>
                  </div>
                  <div className={`
                    p-3 rounded-lg transition-transform duration-200
                    hover:scale-110 ${card.bgColor}
                  `}>
                    <IconComponent className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                </div>
              </div>
              
              {/* Colored Bottom Section */}
              <div className={`bottom-0 px-6 py-3 ${card.changeColor}`}>
                <p className={`text-xs font-medium ${themeClasses.text.cardChange}`}>
                  {card.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>


       {/* Quick Actions */}
      <div className={`
        rounded-xl shadow-sm border p-6 transition-shadow duration-200
        hover:shadow-md ${themeClasses.bg.card} ${themeClasses.border.primary}
      `}>
        <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4`}>
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Add Department', action: 'Add new department to system' },
            { label: 'Inventory Status', action: 'See medicine, inventory stocks' },
            { label: 'Schedule OPD', action: 'Assign doctors in OPD duty' },
            { label: 'Generate Report', action: 'Create monthly report' }
          ].map((action, index) => (
            <button
              key={index}
              className={`
                ${isDark? 'dark' : ''}
                p-4 text-left rounded-lg border transition-all duration-200
                hover:shadow-md hover:bg-amber-50 dark:hover:bg-slate-600 focus:outline-none 
                cursor-pointer
                ${themeClasses.bg.secondary} ${themeClasses.border.primary}
              `}
            >
              <div className={`font-medium ${themeClasses.text.primary} mb-1`}>
                {action.label}
              </div>
              <div className={`text-sm ${themeClasses.text.muted}`}>
                {action.action}
              </div>
            </button>
          ))}
        </div>
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