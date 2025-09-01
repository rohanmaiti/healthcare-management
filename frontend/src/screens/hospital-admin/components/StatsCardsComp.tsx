import React from "react";
import { Users, Heart, Calendar, DollarSign } from "lucide-react";
import { useThemeClasses } from "../../../theme";

// in place of this we will have to use useEffect and get the data 
const statsCards = [
  {
    title: "Total Revenue",
    value: "$125,430",
    change: "+15% from last month",
    icon: DollarSign,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    changeColor: "bg-green-100",
  },
  {
    title: "Total Patients",
    value: "1,234",
    change: "+12% from last month",
    icon: Users,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    changeColor: "bg-blue-100",
  },
  {
    title: "Active Staff",
    value: "89",
    change: "+3 new this week",
    icon: Heart,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    changeColor: "bg-purple-100",
  },
  {
    title: "Today's Appointments",
    value: "45",
    change: "8 pending",
    icon: Calendar,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    changeColor: "bg-orange-100",
  },
];

export const StatsCardsComp = () => {
    const themeClasses = useThemeClasses();
  return (
    <>
      {statsCards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div
            key={index}
            className={`
                rounded-xl shadow-sm border transition-all duration-200 overflow-hidden
                hover:shadow-md hover:scale-105 cursor-pointer flex flex-col
                ${themeClasses.bg.card} ${themeClasses.border.primary}
              `}
          >
            {/* Main Content Section */}
            <div className={`p-4 flex-1 ${themeClasses.bg.card}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xs font-medium uppercase tracking-wide ${themeClasses.text.secondary} mb-2`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-xl lg:text-2xl font-bold ${themeClasses.text.primary} break-words`}
                  >
                    {card.value}
                  </p>
                </div>
                <div
                  className={`
                    p-2 lg:p-3 rounded-lg transition-transform duration-200 flex-shrink-0 ml-2
                    hover:scale-110 ${card.bgColor}
                  `}
                >
                  <IconComponent
                    className={`h-5 w-5 lg:h-6 lg:w-6 ${card.iconColor}`}
                  />
                </div>
              </div>
            </div>

            {/* Colored Bottom Section */}
            <div className={`px-4 py-3 mt-auto ${card.changeColor}`}>
              <p
                className={`text-xs font-medium ${themeClasses.text.cardChange} break-words`}
              >
                {card.change}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
