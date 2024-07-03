"use client";
import styles from "./../page.module.css";
import { stackRouterBack, stackRouterPush } from "@/utils/stackReouter";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <button onClick={() => stackRouterBack(router)}>뒤로 가기</button>
    </main>
  );
}
