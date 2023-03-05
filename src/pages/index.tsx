import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./index.module.css";
import MainLayout from "@/components/MainLayout";

import data from "./mocks/data.json";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export type HomeProps = {
  data: {
    id: string;
    name: string;
    description: string;
    path: string;
  }[];
};

export default function Home({ data }: HomeProps) {
  console.log("data - ", data);
  const cameras = data.map(({ description, name, path, id }) => {
    return (
      <div className={styles.cameraItem} key={id}>
        <Link
          href={{
            pathname: "/camera",
            query: { id, name },
          }}
        >
          <div className={styles.nameWrapper}>
            <span className={styles.nameText}>{name}</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.descriptionText}>{description}</span>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={path} fill alt="Image" />
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <MainLayout>
        <main className={styles.mainPage}>
          <h1 className={styles.header}>Онлайн камеры</h1>
          <div className={styles.cameraBlock}>{cameras}</div>
        </main>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();

  console.log(data);
  // Pass data to the page via props
  return { props: data };
}
