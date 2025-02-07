import React from "react";

interface Feature {
  icon: "clock" | "image" | "gift" | "pencil" | "users";
  text: string;
}

interface PricingCardProps {
  title: string;
  price: number;
  color: string;
  features: Feature[];
}

const SVGIcon: React.FC<{ type: Feature["icon"]; className: string }> = ({
  type,
  className,
}) => {
  const icons = {
    clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    gift: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    ),
    pencil: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
        />
      </svg>
    ),
    users: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  };

  return icons[type];
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  color,
  features,
}) => {
  const getColorClasses = (colorName: string) => {
    const colorMap: {
      [key: string]: { bg: string; text: string };
    } = {
      blue: {
        bg: "bg-blue-300",
        text: "text-blue-500",
      },
      amber: {
        bg: "bg-amber-200",
        text: "text-amber-400",
      },
      slate: {
        bg: "bg-slate-300",
        text: "text-slate-500",
      },
      rose: {
        bg: "bg-rose-300",
        text: "text-rose-500",
      },
      emerald: {
        bg: "bg-emerald-300",
        text: "text-emerald-500",
      },
      purple: {
        bg: "bg-purple-300",
        text: "text-purple-500",
      },
    };
    return colorMap[colorName] || colorMap.blue;
  };

  const colorClasses = getColorClasses(color);

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className={`${colorClasses.bg} text-white p-8 text-center`}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="text-4xl font-bold">
          {price}
          <span className="text-lg ml-1">RON</span>
        </div>
      </div>

      <div className="flex-grow p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className={`p-1.5 rounded-full bg-gray-100`}>
                <SVGIcon
                  type={feature.icon}
                  className={`w-5 h-5 ${colorClasses.text}`}
                />
              </div>
              <span className="text-gray-700">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
