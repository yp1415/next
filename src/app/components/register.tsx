"use client";
import { useState, FormEvent } from "react";
import {register} from "@/lib/model/auth";
import styles from "@/app/styles/components/Loginregister.module.css";

interface FormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Step 2: Submit registration
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const result= await register(
      formData.name,
      formData.email,
      formData.password,
      formData.password_confirmation,
    )

  if(result.success){
    setUser(result.data.user);
    setSuccess("ثبت نام با موفقیت انجام شد.");
    
    if (result.data.access_token){
      localStorage.setItem("token",result.data.access_token)

    }
    }else{
    const errorMessage = Array.isArray(result.errors)
  ? result.errors.flat().join(" - ")
  : typeof result.errors === "object"
    ? Object.values(result.errors).flat().join(" - ")
    : result.errors || "خطا در ثبت‌نام";

setError(errorMessage);

  }
    setLoading(false);
}

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>ثبت نام</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="نام"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="تکرار رمز عبور"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "در حال ثبت‌نام..." : "ثبت نام"}
          </button>
        </form>

        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: 10 }}>{success}</p>}

        {user && (
          <div
            style={{
              marginTop: 20,
              border: "1px solid #ccc",
              padding: 15,
              borderRadius: 8,
            }}
          >
            <h3 className={styles.sabt}>ثبت‌نام موفق</h3>
            <p>سلام، {user.name}</p>
            <p>ایمیل: {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}
