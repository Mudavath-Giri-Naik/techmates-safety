import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>Techmates</div>
          </nav>
        </div>
      </header>

      <main className={`${styles.main} ${styles.container}`}>
        <h1 className={styles.pageTitle}>Child Safety & CSAE Prevention Policy</h1>

        <div className={styles.card}>
          <p>
            At Techmates, we are committed to providing a safe environment for students to
            explore opportunities. The safety and well-being of minors on our platform is our
            highest priority.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Zero Tolerance Policy</h2>
          <div className={styles.alertBox}>
            <p style={{ marginBottom: 0 }}>
              <strong>Techmates has a zero-tolerance policy for Child Sexual Abuse Material (CSAM).</strong>
            </p>
          </div>
          <p>
            We strictly prohibit any content that depicts, promotes, or normalizes sexual abuse or
            exploitation of children. Any user found sharing, soliciting, or engaging in such
            activities will be immediately banned, and the incident will be reported to the
            appropriate law enforcement agencies and the National Center for Missing & Exploited
            Children (NCMEC).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Safety Measures & Content Moderation</h2>
          <p>To ensure our platform remains safe:</p>
          <ul className={styles.highlightList}>
            <li>We employ automated scanning tools to detect harmful content.</li>
            <li>Our moderation team reviews reported content within 24 hours.</li>
            <li>We do not allow unsupervised private messaging between minors and adults.</li>
            <li>All user-generated content is subject to community guidelines.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Reporting Mechanism</h2>
          <p>
            If you encounter any content or behavior that violates our safety policies, please report
            it immediately through:
          </p>
          <ul className={styles.highlightList}>
            <li>The in-app "Report" button on any post or profile.</li>
            <li>Direct email to our safety team at <a href="mailto:yourgirinaik@gmail.com" className={styles.contactLink}>yourgirinaik@gmail.com</a>.</li>
          </ul>
          <p>All reports are kept confidential and are reviewed with urgency.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Law Enforcement Cooperation</h2>
          <p>
            Techmates cooperates fully with local and international law enforcement agencies in
            investigations related to child safety. We are legally obligated to report any suspected
            cases of child exploitation to the authorities, including providing user data when required
            by law.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Age Guidelines</h2>
          <p>
            Techmates is intended for use by students and individuals aged 13 and older. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p>
            For any questions regarding our safety policies or to report a concern, please contact:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:yourgirinaik@gmail.com" className={styles.contactLink}>yourgirinaik@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} Techmates. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
