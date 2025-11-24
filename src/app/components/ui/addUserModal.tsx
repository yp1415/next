import React, { useState } from "react";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (user: any) => Promise<void>; // فرض کردیم async هست
}

export default function AddUserModal({
  isOpen,
  onClose,
  onAdd,
}: AddUserModalProps) {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    national_id: "",
    role: "STUDENT",
    password: "12345678",
    password_confirmation: "12345678",
    mobile: "",
    courses: "",
  });

  const handleSubmit = async () => {
    try {
      await onAdd(form); // منتظر API call باشه
      setForm({
        name: "",
        lastname: "",
        national_id: "",
        role: "STUDENT",
        password: "12345678",
        mobile: "",
        courses: "",
      });
      onClose();
    } catch (err) {
      console.error("خطا در ثبت کاربر:", err);
    }
  };

  if (!isOpen) return null;

  const fields = [
    { key: "name", label: "نام" },
    { key: "lastname", label: "نام خانوادگی" },
    { key: "national_id", label: "کد ملی" },
    { key: "mobile", label: "موبایل" },
    { key: "courses", label: "دوره‌ها" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-lg text-black font-semibold mb-4">
          افزودن کاربر جدید
        </h2>
        <div className="flex flex-col gap-2">
          {fields.map(({ key, label }) => (
            <input
              key={key}
              type="text"
              placeholder={label}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              className="border px-3 py-2 text-gray-700 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          ))}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 text-black"
          >
            لغو
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-indigo-600 text-white"
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
}