import React from 'react'
import { useThemeClasses, useThemeContext } from '../../../theme';

export const QuickActionsComp = () => {
     const { isDark } = useThemeContext();
     const themeClasses = useThemeClasses();

  return (
    <>
        <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-4`}>
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
    </>
  )
}
