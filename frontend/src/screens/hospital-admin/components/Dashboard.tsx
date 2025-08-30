import { useThemeClasses } from '../../../theme';
import { Users, Heart, Calendar } from 'lucide-react';

export const Dashboard = () => {
  const themeClasses = useThemeClasses();
  
  return (
    <div className="p-6">
      <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text.primary}`}>Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${themeClasses.bg.card} p-6 rounded-xl shadow-sm border ${themeClasses.border.primary} hover:shadow-md transition-shadow`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`text-sm font-medium ${themeClasses.text.accent} uppercase tracking-wide`}>Total Patients</h3>
              <p className={`text-3xl font-bold ${themeClasses.text.primary} mt-2`}>1,234</p>
              <p className={`text-xs ${themeClasses.text.muted} mt-1`}>+12% from last month</p>
            </div>
            <div className={`p-3 ${themeClasses.accent.light} rounded-lg`}>
              <Users className={`h-6 w-6 ${themeClasses.text.accent}`} />
            </div>
          </div>
        </div>
        <div className={`${themeClasses.bg.card} p-6 rounded-xl shadow-sm border ${themeClasses.border.primary} hover:shadow-md transition-shadow`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`text-sm font-medium ${themeClasses.text.accent} uppercase tracking-wide`}>Active Staff</h3>
              <p className={`text-3xl font-bold ${themeClasses.text.primary} mt-2`}>89</p>
              <p className={`text-xs ${themeClasses.text.muted} mt-1`}>+3 new this week</p>
            </div>
            <div className={`p-3 ${themeClasses.accent.light} rounded-lg`}>
              <Heart className={`h-6 w-6 ${themeClasses.text.accent}`} />
            </div>
          </div>
        </div>
        <div className={`${themeClasses.bg.card} p-6 rounded-xl shadow-sm border ${themeClasses.border.primary} hover:shadow-md transition-shadow`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`text-sm font-medium ${themeClasses.text.accent} uppercase tracking-wide`}>Today's Appointments</h3>
              <p className={`text-3xl font-bold ${themeClasses.text.primary} mt-2`}>45</p>
              <p className={`text-xs ${themeClasses.text.muted} mt-1`}>8 pending</p>
            </div>
            <div className={`p-3 ${themeClasses.accent.light} rounded-lg`}>
              <Calendar className={`h-6 w-6 ${themeClasses.text.accent}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-8 ${themeClasses.bg.card} rounded-xl shadow-sm border ${themeClasses.border.primary} p-6`}>
        <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4`}>Recent Activity</h3>
        <div className="space-y-3">
          <div className={`flex items-center space-x-3 p-3 ${themeClasses.bg.tertiary} rounded-lg`}>
            <div className={`w-2 h-2 ${themeClasses.isDark ? 'bg-blue-500' : 'bg-green-500'} rounded-full`}></div>
            <span className={`text-sm ${themeClasses.text.secondary}`}>New patient registered: John Doe</span>
            <span className={`text-xs ${themeClasses.text.muted} ml-auto`}>5 min ago</span>
          </div>
          <div className={`flex items-center space-x-3 p-3 ${themeClasses.bg.tertiary} rounded-lg`}>
            <div className={`w-2 h-2 ${themeClasses.isDark ? 'bg-indigo-500' : 'bg-blue-500'} rounded-full`}></div>
            <span className={`text-sm ${themeClasses.text.secondary}`}>Appointment scheduled for tomorrow</span>
            <span className={`text-xs ${themeClasses.text.muted} ml-auto`}>15 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};