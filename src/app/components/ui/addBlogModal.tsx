import { useState  } from "react";
import { addBlog } from "@/lib/model/blog";

type AddBlogModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (blog: any) => void;
};

export function AddBlogModal({ isOpen, onClose, onAdd }: AddBlogModalProps) {
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [tag, setTag] = useState("");
    const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("about", about);
  formData.append("tag", tag);

 if (image) {
    formData.append("image", image);
  }

  try {
    const data = await addBlog(formData);
    console.log(data);
    
    console.log("Blog created:", data);
    onAdd(data);
    onClose();
  } catch (err) {
    console.error("Form Error:", err);
  }
  }

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
          <h2 className="text-lg text-black font-semibold mb-4">افزودن دوره جدید</h2>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="دسته‌بندی بلاگ"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="border px-3 py-2 text-gray-500 rounded border-gray-500"
            />
            <input
              type="text"
              placeholder="عنوان بلاگ"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border px-3 py-2 text-gray-500 rounded border-gray-500"
            />
            <textarea
              name="about"
              placeholder="متن بلاگ"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="border h-30 px-3 py-2 text-gray-500 rounded border-gray-500"
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
