import styles from './page.module.css';

const AboutPage = () => {
  const pdfURL = '/images/CV.pdf';
  return (
    <section className={styles.section}>
      <img className={styles.image} src='/images/me.jpeg' alt='' />
      <a className={styles.download} href='/images/CV.pdf' download>
        <p className={styles.p}>Download CV</p>
      </a>
      <p>
        I am a Gothenburg-based frontend developer with a strong design
        sensibility, focused on crafting user-friendly and visually appealing
        web experiences. My expertise encompasses HTML, CSS, and
        Javascript/Typescript, with a preference for frameworks like React and
        Vue. Beyond that, I am proficient in Bash, Git, Node, PostgreSQL, and
        MongoDB. I am also adept at using design tools such as Figma, Photoshop,
        and Illustrator. Before embarking on my journey as a developer, I worked
        as a Digital Designer. In that role, I played a significant part in both
        designing and coding a diverse range of projects, developing
        programmatic/dynamic banners and websites to the production and editing
        of commercial videos.
      </p>
    </section>
  );
};
export default AboutPage;
