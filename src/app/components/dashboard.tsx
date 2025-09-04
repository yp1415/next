// "use client";

// import { useEffect, useState } from "react";
// import { getData } from "@/lib/model/admin";

// export default function Dashboard() {
//     const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         const result = await getData(token);
//         setUser(result);
//       }
//       setLoading(false);
//     };

//     fetchUser();
//   }, []);

//   console.log(user);

//   return (
//     <>
//       <h1>سلام خوبی</h1>
//       {user && <p>خوش آمدی {user.data.user.name}</p>}
//     </>
//   );
// }
