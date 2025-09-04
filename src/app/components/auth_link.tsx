import styles from "@/app/styles/components/link_loginregister.module.css";
import Link from "next/link";
export default function LinkLoginRegister() {
    return (
        <div className={styles.container}>
            <Link href={"../register"}><button className={`${styles.btn} ${styles.link_register}`}>ثبت نام</button></Link>
            <Link href={"../login"}><button className={`${styles.btn} ${styles.link_login}`}>ورود</button></Link>
        </div>
    );
}
