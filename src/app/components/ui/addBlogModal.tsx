type Blog = {
  id: string | number;
  title: string;
  about: string;
  tag: string;
  image?: string;
};

type BlogModalProps = {
  isOpen: boolean;
  onClose: () => void;
  blog: Blog | null;
};

export function BlogModal({ isOpen, onClose, blog }: BlogModalProps) {
  if (!isOpen || !blog) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-lg p-6 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
        >
          ×
        </button>
        {blog.image && (
          <div className="w-full aspect-[16/10] relative mb-4 overflow-hidden rounded-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <span className="text-sm font-semibold text-cyan-600 uppercase">
          {blog.tag}
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">{blog.title}</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">{blog.about}</p>
      </div>
    </div>
  );
}
