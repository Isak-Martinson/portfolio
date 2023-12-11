import { data } from '../../../data';
import Link from 'next/link';
import './casePage.css';
// import styles from './casePage.modules.css'

interface IPageProps {
  params: { id: string };
}

const CasePage: React.FC<IPageProps> = ({ params }) => {
  const caseData = data[Number(params.id)];

  return caseData ? (
    <main>
      <section id='header-section'>
        <a href={'/'}>
          <svg id='arrow' xmlns='http://www.w3.org/2000/svg'>
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
            src={caseData.videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
        ) : (
          <img src={caseData.imageUrl} />
        )}
      </section>
      <section id='case-section'>
        <h1>{caseData.title}</h1>
        {caseData.body.map((test, index) => (
          <p className='paragraph' key={index}>
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
