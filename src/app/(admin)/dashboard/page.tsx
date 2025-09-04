// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface User {
//   name: string;
//   email?: string;
//   role?: string;
// }

// export default function AdminPage() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("token");
//     console.log("storedUser:", storedUser);

//     if (!storedUser) {
//       router.replace("/");
//       return;
//     }

//     try {
//       const parsedUser: User = JSON.parse(storedUser);

//       if (parsedUser.role?.trim().toLowerCase() !== "admin") {
//         router.replace("/");
//         return;
//       }

//       setUser(parsedUser);
//     } catch (error) {
//       console.error("❌ خطا در JSON.parse:", error, storedUser);
//       router.replace("/");
//     } finally {
//       setLoading(false);
//     }
//   }, [router]);

//   if (loading) return <p>در حال بررسی دسترسی...</p>;

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>پنل مدیریت</h1>
//       <p>خوش آمدید 👑</p>
//     </div>
//   );
// }
import Dashboard from "@/app/components/dashboard";
export default function admin(){
  return(
    <Dashboard></Dashboard>
  );
}