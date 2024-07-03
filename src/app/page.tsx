"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { stackRouterBack, stackRouterPush } from "@/utils/stackReouter";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <button onClick={() => stackRouterPush(router, "/detail")}>
        {"push 이동"}
      </button>
    </main>
  );
}
