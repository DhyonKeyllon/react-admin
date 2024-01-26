import { Topbar } from "@/scenes/global/Topbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.content}>
        <Topbar />
      </main>
    </>
  );
}
