
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>
            ✦ Agência criativa digital
          </span>

          <h1>
            Ideias que inspiram.
            <span> Marcas que evoluem.</span>
          </h1>

          <p className={styles.description}>
            Unimos estratégia, design e tecnologia para transformar
            negócios em marcas fortes, experiências memoráveis e
            resultados reais.
          </p>

          <div className={styles.actions}>
            <a href="#contato" className={styles.primaryButton}>
              Vamos conversar <span>↗</span>
            </a>

            <a href="#servicos" className={styles.secondaryButton}>
              Conheça nossos serviços
            </a>
          </div>

          <div className={styles.trust}>
            <span className={styles.trustIcon}>✦</span>
            <p>
              Criatividade com propósito.
              <strong> Estratégia com resultado.</strong>
            </p>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.glow} />

          <div className={styles.card}>
            <span className={styles.cardLabel}>IDEIAS EM MOVIMENTO</span>
            <div className={styles.art}>
              <div className={styles.orb} />
              <div className={styles.ring} />
              <div className={styles.square} />
            </div>
            <div className={styles.cardFooter}>
              <span>Design</span>
              <span>Estratégia</span>
              <span>Inovação</span>
            </div>
          </div>

          <div className={styles.floatingBadge}>
            <span>✳</span>
            Criatividade sem limites
          </div>
        </div>
      </div>
    </section>
  );
}
