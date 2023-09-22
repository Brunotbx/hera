import Image from "next/image";
import styles from "./Homepage.module.css";
import logo from "@/assets/logo.png";
import pic from "@/assets/hera.jpg";
import { Card } from "@/Ui/Components/Card";
import { SmallCard } from "@/Ui/Components/SmallCard";

export default function HomePage({ size }: { size: boolean }) {
  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={`${styles.one} ${styles.section}`} id="hideLogo">
        <Image src={logo} alt="" className={styles.banner} />
      </section>
      {/* Sobre */}
      <section className={`${styles.section} ${styles.about}`} id="about">
        <div>
          <div className={styles.bg}>
            <Image src={pic} alt="" height={450} className={styles.image} />

            <p className={styles.text}>
              Muito prazer, me chamo Natália ou como eu gosto que me chamem:
              Naty, o rosto por trás da Hera eventos!
              <br />
              <br />
              Tenho 30 anos, sou casada e amo realizar sonhos. Sempre tive um
              amor diferente pelo mundo dos casamentos, então fiz um curso para
              aprender sobre a área e ver se eu gostava mesmo. ME APAIXONEI e
              tive a certeza de que era essa a minha profissão.
              <br />
              <br />
              Comecei na área com a oportunidade que uma assessora de alto
              renome no mercado me deu, onde fui estagiária, assistente e
              coordenadora e foi uma escola. Depois disso, consegui realizar o
              sonho de trabalhar no Grupo Bisutti sendo produtora de execução
              por onde fiquei por dois anos e também desempenhei funções na área
              do corporativo. Após isso voltei para o grupo da primeira
              assessora que trabalhei e virei sócia na sua segunda marca.
              <br />
              <br />
              Com toda essa história, tenho mais de 360 eventos realizados entre
              casamentos, aniversários, bodas, debutante e corporativos. Em
              todos esses anos percebi a dificuldade que muitos noivos tinham no
              processo de planejamento por não ter uma pessoa focada ou por essa
              pessoa não ter o conhecimento necessário para seguir com todas as
              nuances que permeia o processo do casamento, além de não inspirar
              os noivos a trazer sua personalidade para o casamento, para mudar
              isso comecei a minha própria empresa de eventos, a Hera Eventos,
              onde presença, acompanhamento, experiência e orientação é o nosso
              foco!
            </p>
          </div>
        </div>
      </section>
      {/* Cards Planos */}
      <section className={`${styles.three} ${styles.section}`} id="work">
        <div className={styles.cards}>
          <Card title="Prata" mobile={size} />
          <Card title="Ouro" mobile={size} />
          <Card title="Bronze" mobile={size} />
        </div>
      </section>
      {/* Depoimentos */}
      <section className={`${styles.four}`} id="testimonials">
        <div className={styles.cards}>
          <SmallCard
            name="Bianca e Daniel"
            message="Obrigada por tudo, pela paciência, pela atenção pelo cuidado que tiveram com a gente, pela dedicação e entrega! Obrigada por ter feito nosso sonho perfeito! Você é maravilhosa!"
          />
          <SmallCard
            name="Fabiana e Cleber"
            message="Muitíssimo obrigada pelo profissionalismo, dedicação, carinho e cuidado durante todo o processo de planejamento, e o desempenho impecável no grande dia! "
          />
          <SmallCard
            name="Monique e Thales "
            message="Naty, só recebi elogios de tudo. O pessoal amou você e sua equipe e a gente também. Que carinho e cuidado! Nossa, de tudo, vocês foram o melhor investimento."
          />
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Hera eventos - 2023 ®</p>
      </footer>
    </main>
  );
}
