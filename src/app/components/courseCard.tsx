import { div } from "framer-motion/client";
import React from "react";

interface CourseCardProps {
  title: string;
  price: string;
  time: string;
  days: string;
  profileImg: string;
  isActive?: boolean;
  startDate: string;
  studentCount: number;
}

export function CourseCard({
  title,
  price,
  time,
  days,
  profileImg,
  isActive = false,
  startDate,
  studentCount,
}: CourseCardProps) {
  return (
    <div
      className={`h-30 m-1 w-full flex items-center justify-between p-4 rounded-lg text-black shadow-md border ${
        isActive ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-white"
      }`}
    >
      {/* Profile & Title */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={profileImg}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
          />
          {isActive && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-500 text-sm">{days} • {time}</p>
        </div>
      </div>

      {/* Price, Start Date, Students */}
      <div className="flex flex-col items-end gap-1">
        
      <button className="text-gray-500 hover:text-gray-700">⋮</button>
        <span className="font-bold text-indigo-600">{price}</span>
        <span className="text-gray-500 text-sm">Start: {startDate}</span>
        <span className="text-gray-500 text-sm">{studentCount} students</span>
      </div>
    </div>
  );
}
