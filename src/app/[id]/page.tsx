import { data } from '../../../data';
import Link from 'next/link';
import styles from './casePage.module.css';

interface IPageProps {
  params: { id: string };
}

const CasePage: React.FC<IPageProps> = ({ params }) => {
  const caseData = data[Number(params.id)];

  return caseData ? (
    <main className={styles.main}>
      <section id={styles.headerSection}>
        <a href={'/'}>
          <svg id={styles.arrow} xmlns='http://www.w3.org/2000/svg'>
            <rect x='4' y='8' width='4' height='4' fill='#0F0F0F' />
            <rect y='12' width='4' height='4' fill='#0F0F0F' />
            <rect x='4' y='16' width='4' height='4' fill='#0F0F0F' />
            <rect x='8' y='20' width='4' height='4' fill='#0F0F0F' />
            <rect x='12' y='24' width='4' height='4' fill='#0F0F0F' />
            <rect x='16' y='12' width='4' height='4' fill='#0F0F0F' />
            <rect x='12' y='12' width='4' height='4' fill='#0F0F0F' />
            <rect x='20' y='12' width='4' height='4' fill='#0F0F0F' />
            <rect x='24' y='12' width='4' height='4' fill='#0F0F0F' />
            <rect x='28' y='12' width='4' height='4' fill='#0F0F0F' />
            <rect x='8' y='4' width='4' height='4' fill='#0F0F0F' />
            <rect x='12' width='4' height='4' fill='#0F0F0F' />
          </svg>
        </a>
        {caseData.videoUrl !== '' ? (
          <iframe
            className={styles.iframe}
            src={caseData.videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
        ) : (
          <img
            className={styles.image}
            src={caseData.imageUrl}
            alt={`case image of case ${caseData.title}`}
          />
        )}
      </section>
      <section id={styles.caseSection}>
        <h1 className={styles.title}>{caseData.title}</h1>
        {caseData.body.map((test, index) => (
          <p className={styles.paragraph} key={index}>
            {test}
          </p>
        ))}
      </section>
    </main>
  ) : (
    <main>
      <h1>404 not found</h1>
    </main>
  );
};
export default CasePage;
