interface Idata {
  id: number;
  case: string;
  title: string;
  body: Array<String>;
  imageUrl: string;
  videoUrl: string;
  url: string;
}

export const data: Idata[] = [
  {
    id: 0,
    case: 'Case 1',
    title: 'Fabrikörens',
    body: [
      'Throughout my internship at Oh My Interactive, a Stockholm-based agency, I played a key role in developing Fabrikörens company website. My primary focus was on crafting a user-friendly platform that allowed users to effortlessly add their own data.',
      'Our objective was to integrate functionality with a unique and appealing design. The technological tools employed included Javascript, Vue.js, Tailwind CSS, PHP, and WordPress.',
    ],
    imageUrl: '/images/fabrikorens.jpg',
    videoUrl: '',
    url: 'https://fabrikorens.se',
  },
  {
    id: 1,
    case: 'Case 2',
    title: 'blodet i oss',
    body: [
      'While Digital Design and Frontend Development take the lead in my professional focus, I also bring experience in the realm of motion graphics. In 2019, the Swedish artist Ola Åstrand reached out to me, asking me to film his public art installation titled “blodet i oss”.',
      'My objective was to capture the essence of the artwork, while reflecting its public nature, open for anyone to experience. By shooting while it was dark outside, I aspired to capture the feeling of the red glow emitted by the artwork. Through fast-paced cuts and subtle background movement, I sought to breathe life into the artwork, even in the realm of film.',
    ],
    imageUrl: '/images/bio.jpeg',
    videoUrl:
      'https://www.youtube-nocookie.com/embed/YbvSqYlbkEM?si=ab2_3qruyQ6ng2_6&amp;controls=0',
    url: '',
  },
  {
    id: 2,
    case: 'Case 3',
    title: 'Oops...',
    body: ['nothing here yet, work coming soon.'],
    imageUrl: '/images/under-construction.jpg',
    videoUrl: '',
    url: '',
  },
];
