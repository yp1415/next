import { useState } from "react";
import { addCourse } from "@/lib/model/course";

type AddCourseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (course: any) => void;
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
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("about", about);
  formData.append("price", price.toString());  formData.append("time", time);
  formData.append("days", days);
  formData.append("start_of_class", startOfClass);
  formData.append("is_active", isActive ? "1" : "0");
  formData.append("sessions_count", sessionsCount.toString());  formData.append("students_count", studentsCount);
  formData.append("prerequisite", prerequisite);

  if (image) {
    formData.append("image", image);
  }

  try {
    const data = await addCourse(formData); // 👈 pass FormData instead of object
    console.log(data);
    
    console.log("Course created:", data);
    onAdd(data); // call parent callback
    onClose();
  } catch (err) {
    console.error("Form Error:", err);
  }
};


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-lg text-black font-semibold mb-4">افزودن دوره جدید</h2>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="نام دوره"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <textarea
            name="about"
            placeholder="درباره دوره"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="border h-30 px-3 py-2 text-gray-500 rounded border-gray-500"
            >
          </textarea>
          <input
            type="text"
            placeholder="قیمت"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="ساعت کلاس"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="روزهای کلاس"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="تاریخ شروع کلاس"
            value={startOfClass}
            onChange={(e) => setStartOfClass(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="تعداد دانش آموزان"
            value={studentsCount}
            onChange={(e) => setStudentsCount(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="تعداد جلسات"
            value={sessionsCount}
            onChange={(e) => setSessionsCount(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="text"
            placeholder="پیش‌نیازهای دوره"
            value={prerequisite}
            onChange={(e) => setPrerequisite(e.target.value)}
            className="border px-3 py-2 text-gray-500 rounded border-gray-500"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]); // keep the File object
              }
            }}
            className="border bg-blue-600 px-3 py-2 text-gray-500 rounded border-gray-500"
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
