import React, { useState } from "react";

export default function AddUserModal({ isOpen, onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    nationalId: "",
    mobile: "",
    courses: "",
  });

  const handleSubmit = () => {
    onAdd(form);
    setForm({
      name: "",
      lastName: "",
      nationalId: "",
      mobile: "",
      courses: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-lg text-black font-semibold mb-4">افزودن کاربر جدید</h2>
        <div className="flex flex-col gap-2">
          {["name", "lastName", "nationalId", "mobile", "courses"].map(
            (field) => (
              <input
                key={field}
                type="text"
                placeholder={field}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="border px-3 py-2  text-gray-500 rounded border-gray-500"
              />
            )
          )}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-indigo-600 text-white"
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
