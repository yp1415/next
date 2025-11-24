import React, { useMemo, useState } from "react";
import AddUserModal from "@/app/components/ui/addUserModal";
import { addStudent } from "@/lib/model/student";

const SAMPLE = Array.from({ length: 60 }).map((_, i) => ({
  id: i + 1,
  name: ["Ali", "Sara", "Reza", "Mina", "Omid"][i % 5],
  lastName: ["Hosseini", "Karimi", "Ahmadi", "Moradi", "Soleimani"][i % 5],
  nationalId: String(1000000000 + i),
  mobile: `09${(100000000 + i).toString().slice(1)}`,
  courses: ["Math", "Physics", "History", "Programming"][i % 4],
}));

export function DataTable({ data = SAMPLE }) {
  const [tableData, setTableData] = useState(data);
  const [query, setQuery] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query) return tableData;
    const q = query.trim().toLowerCase();
    return tableData.filter((row) => {
      return (
        String(row.id).includes(q) ||
        row.name?.toLowerCase().includes(q) ||
        row.lastName?.toLowerCase().includes(q) ||
        row.nationalId?.toLowerCase().includes(q) ||
        row.mobile?.toLowerCase().includes(q) ||
        String(row.courses)?.toLowerCase().includes(q)
      );
    });
  }, [tableData, query]);

  // ✅ Local component that only renders table rows
  const TableRows = ({ rows }) => (
    <>
      {rows.slice(0, perPage).map((row, idx) => (
        <tr
          key={row.id}
          className={`border-b last:border-b-0 hover:bg-gray-50 ${
            idx % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <td className="px-4 py-3 text-right text-sm font-medium text-gray-700">
            {row.id}
          </td>
          <td className="px-4 py-3 text-right text-sm text-gray-700">
            {row.name}
          </td>
          <td className="px-4 py-3 text-right text-sm text-gray-700">
            {row.lastName}
          </td>
          <td className="px-4 py-3 text-right text-sm text-gray-700">
            {row.nationalId}
          </td>
          <td className="px-4 py-3 text-right text-sm text-gray-700">
            {row.mobile}
          </td>
          <td className="px-4 py-3 text-right text-sm text-gray-700">
            {row.courses}
          </td>
        </tr>
      ))}

      {rows.length === 0 && (
        <tr>
          <td
            colSpan={6}
            className="px-4 py-8 text-center text-gray-400"
          >
            هیچ موردی پیدا نشد
          </td>
        </tr>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* --- Header, Search, etc. (unchanged) --- */}

        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold leading-tight ">
              فهرست کاربران
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <label className="relative block">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو بر اساس نام، موبایل، یا کد ملی..."
                className="w-72 sm:w-96 pl-4 pr-10 py-2 rounded-lg border border-gray-200 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 pointer-events-none">
                🔎
              </span>
            </label>

            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="px-3 py-2 rounded-lg border border-gray-200 shadow-sm bg-white text-gray-500"
            >
              <option value={6}>6 / صفحه</option>
              <option value={12}>12 / صفحه</option>
              <option value={24}>24 / صفحه</option>
            </select>
          </div>
        </header>

        <main>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                نتایج: {filtered.length} مورد
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1 rounded-md bg-indigo-600 text-white shadow-sm"
              >
                افزودن کاربر جدید
              </button>
            </div>

            <div className="max-h-[62vh] overflow-y-auto w-full">
              <table className="min-w-full table-fixed">
                <thead className="sticky top-0 bg-gradient-to-r from-indigo-50 to-white/50 z-10">
                  <tr className="text-gray-600 text-xs sm:text-sm">
                    <th className="px-4 py-3 text-right">id</th>
                    <th className="px-4 py-3 text-right">name</th>
                    <th className="px-4 py-3 text-right">lastName</th>
                    <th className="px-4 py-3 text-right">nationalId</th>
                    <th className="px-4 py-3 text-right">mobile</th>
                    <th className="px-4 py-3 text-right">courses</th>
                  </tr>
                </thead>

                <tbody>
                  {/* ✔ rows mapped in another component */}
                  <TableRows rows={filtered} />
                </tbody>
              </table>
            </div>

            <div className="p-4 flex items-center justify-between text-sm text-gray-500 border-t">
              <div>
                نمایش {Math.min(filtered.length, perPage)} از {filtered.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="px-3 py-1 rounded-md border border-gray-200 bg-white shadow-sm"
                >
                  بالا
                </button>
              </div>
            </div>
          </div>

          <AddUserModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAdd={async (user) => {
              const result = await addStudent(user);
              if (result.success) {
                setTableData([...tableData, result.data]);
                setIsModalOpen(false);
              } else {
                alert("خطا: " + (result.data?.errors?.join(", ") || "خطای نامشخص"));
                console.log(result.data?.errors);
                
              }
            }}
          />
        </main>
      </div>
    </div>
  );
}
