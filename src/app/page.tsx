"use client";
import styles from "./page.module.css";
import { stackRouterPush } from "@/utils/stackReouter";

export default function Home() {
  return (
    <main className={styles.main}>
      <button onClick={() => stackRouterPush("/detail")}>{"push 이동"}</button>
    </main>
  );
}
