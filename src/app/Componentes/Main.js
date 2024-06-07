import Image from "next/image";
import styles from "../page.module.css";

export default async function Main() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();

    return (
        <main className={styles.outroMain}>
          {data.map((produto) =>
            <div className={styles.outroCard} key={produto.id}>
              <p>{produto.title.slice(0, 16) + "..."}</p>
              <img
                width={250}
                height={250}
                src={produto.image}
                alt={produto.title}
              />
            </div>
          )}
        </main>
  );
}
