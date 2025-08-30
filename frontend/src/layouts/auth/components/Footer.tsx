import { Hospital } from 'lucide-react'
import React from 'react'
import { useThemeClasses } from '../../../theme'

export const Footer = () => {
    const themeClasses = useThemeClasses();
  return (
   <>
     <footer className={`py-12 ${themeClasses.border.primary} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className={`p-2 rounded-lg ${themeClasses.accent.gradient}`}>
                <Hospital className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-xl font-bold ${themeClasses.text.primary}`}
              >
                Medisync
              </span>
            </div>
            <div
              className={`${themeClasses.text.secondary} text-center md:text-right`}
            >
              <p>&copy; 2025 Medisync. All rights reserved.</p>
              <p className="text-sm mt-1">
                Revolutionizing healthcare management across cities.
              </p>
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}
