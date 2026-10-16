
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span>✳</span> SOBRE A AURORA
        </div>

        <div className={styles.content}>
          <h2>
            Não entregamos apenas projetos.
            <span> Criamos possibilidades.</span>
          </h2>

          <div className={styles.description}>
            <p>
              A Agência Aurora nasceu da união entre criatividade,
              estratégia e tecnologia. Nosso objetivo é ajudar marcas
              a encontrar sua identidade e conquistar novos espaços
              no ambiente digital.
            </p>

            <p>
              Acreditamos que grandes resultados começam com boas ideias,
              planejamento inteligente e experiências que aproximam
              empresas de pessoas.
            </p>
          </div>
        </div>

        <div className={styles.values}>
          <div>
            <span>01</span>
            <h3>Criatividade</h3>
            <p>Ideias originais que destacam sua marca.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Estratégia</h3>
            <p>Decisões guiadas por objetivos claros.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Inovação</h3>
            <p>Tecnologia para criar novas possibilidades.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
