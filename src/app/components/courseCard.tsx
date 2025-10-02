import React, { useState, useRef, useEffect } from "react";
import { deleteCourse } from "@/lib/model/course";

interface CourseCardProps {
  id: number;
  title: string;
  price: string;
  time: string;
  days: string;
  profileImg: string;
  isActive?: boolean;
  startDate: string;
  studentCount: number;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export function CourseCard({
  id,
  title,
  price,
  time,
  days,
  profileImg,
  isActive = false,
  startDate,
  studentCount,
  onEdit,
  onDelete,
}: CourseCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleDelete = async () => {
    try {
      await deleteCourse(id);
      if (onDelete) onDelete(id);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div
      className={`h-35 m-3 w-97/100 flex items-center justify-between p-4 rounded-lg text-black shadow-md border ${
        isActive ? "" : ""
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
          <p className="text-gray-500 text-sm">
            {days} • {time}
          </p>
        </div>
      </div>

      {/* Price, Start Date, Students */}
      <div className="flex flex-col items-end gap-1 relative" ref={menuRef}>
        {/* 3 dots button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="p-1 rounded hover:bg-gray-200"
        >
          ⋮
        </button>

        {/* Popup menu */}
        {menuOpen && (
          <div className="absolute right-0 top-6 w-28 bg-white shadow-md rounded-lg border z-10">
            <button
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                setMenuOpen(false);
                if (onEdit) onEdit(id);
              }}
            >
              ویرایش
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              onClick={handleDelete}
            >
              حذف
            </button>
          </div>
        )}

        <span className="font-bold text-blue-600">{price}</span>
        <span className="text-gray-500 text-sm">شروع: {startDate}</span>
        <span className="text-gray-500 text-sm">{studentCount} دانش‌آموز</span>
      </div>
    </div>
  );
}
