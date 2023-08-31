import { Circle } from "@phosphor-icons/react";
import styles from "./Card.module.scss";
import IconTop from "./icon.svg";
import IconBottom from "./iconBotton.svg";
import Image from "next/image";

export function Card({ title, mobile }: { title: string; mobile: boolean }) {
  return (
    <div className={`${styles.card} ${styles[title]}`}>
      <Image src={IconTop} alt="" className={styles.iconTop} />
      <h2>{title}</h2>
      <ul>
        <li>
          <span>
            <Circle size={9} weight="fill" />
          </span>
          <p>Análise dos contratos já fechados</p>
        </li>
        <li>
          <span>
            <Circle size={9} weight="fill" />
          </span>
          <p>Indicação de fornecedores que ainda precisam ser contratados</p>
        </li>
        <li>
          <span>
            <Circle size={9} weight="fill" />
          </span>
          <p>Acompanhamento das reuniões finais</p>
        </li>
        <li>
          <span>
            <Circle size={9} weight="fill" />
          </span>
          <p>Revisão dos contratos já fechados e possíveis contratos</p>
        </li>
        <li>
          <span>
            <Circle size={9} weight="fill" />
          </span>
          <p>Execução no dia do casamento</p>
        </li>
      </ul>
      {!mobile && (
        <Image src={IconBottom} alt="" className={styles.iconBottom} />
      )}
    </div>
  );
}
