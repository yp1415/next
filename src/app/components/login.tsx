"use client";
import { FormEvent, useState } from "react";
import {login} from "@/lib/model/auth";
import styles from "@/app/styles/components/Loginregister.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email?: string;
  role?: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedRules, setAcceptedRules] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(!acceptedRules){
      setError("لطفا قوانین را تایید کنید!");
      return;
    }

    setLoading(true);
    setError("")

    const result = await login(email,password);
    console.log(result);
    localStorage.setItem("token", result.data.access_token)
    setLoading(false);

    if(!result.success){
      setError(result.errors?.[0] || "خطا در ورود");
      return;
    }    

    router.push("/")

  };

  if (user) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.sabt}>سلام، {user.name}</p>
            <button className={styles.button} disabled={loading}>
                خروج
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>ورود</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.input}
            placeholder="ایمیل خود را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className={styles.input}
            placeholder="رمز خود را وارد کنید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className={styles.customCheckbox}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={acceptedRules}
              onChange={(e) => setAcceptedRules(e.target.checked)}
            />
            <span className={styles.checkmark}></span>
            <p className={styles.matn}>
              من قوانین را خواندم و با شرایط موافق هستم
            </p>
          </label>
          {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "در حال ورود..." : "ورود"}
          </button>
          <div className={styles.content_link}>
              <p className={styles.sign_up}>اکانت ندارید ؟</p>
              <Link href={"../register"}> <p className={styles.link}>ثبت نام</p></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
