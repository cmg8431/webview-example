"use client";
import styles from "./../page.module.css";
import { stackRouterBack } from "@/utils/stackReouter";

export default function Home() {
  return (
    <main className={styles.main}>
      <button onClick={() => stackRouterBack()}>뒤로 가기</button>
    </main>
  );
}
