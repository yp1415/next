import { useState } from "react";
import { addCourse } from "@/lib/model/course";

type AddCourseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (course: any) => void; // you can replace `any` with your Course type
};

export function AddCourseModal({ isOpen, onClose, onAdd }: AddCourseModalProps) {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [days, setDays] = useState("");
  const [startOfClass, setStartOfClass] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [sessionsCount, setSessionsCount] = useState("");
  const [studentsCount, setStudentsCount] = useState("");
  const [prerequisite, setPrerequisite] = useState("");

  const handleSubmit = async () => {
    const courseData = {
      title,
      about,
      price,
      time,
      days,
      start_of_class: startOfClass,
      is_active: isActive,
      sessions_count: sessionsCount,
      students_count: studentsCount,
      prerequisite,
    };

    const result = await addCourse(courseData);

    if (result.success) {
      onAdd(result.data); // update parent
      // reset fields
      setTitle("");
      setPrice("");
      setTime("");
      setDays("");
      setIsActive(false);
      setStartOfClass("");
      setStudentsCount("");
      onClose();
    } else {
  console.error("Error adding course:", result.errors || "Unknown error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-lg text-black font-semibold mb-4">افزودن دوره جدید</h2>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="start_of_class"
            value={startOfClass}
            onChange={(e) => setStartOfClass(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="students_count"
            value={studentsCount}
            onChange={(e) => setStudentsCount(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />

          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            فعال بودن دوره
          </label>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-400 text-white"
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
