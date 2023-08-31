import Image from "next/image";
import styles from "./SmallCard.module.scss";
import avatar from "@/assets/avatar.jpg";

type TSmallCard = {
  name: string;
  message: string;
};

export function SmallCard({ name, message }: TSmallCard) {
  return (
    <div className={styles.card}>
      <h4>{name}</h4>
      <p>{message}</p>
    </div>
  );
}
