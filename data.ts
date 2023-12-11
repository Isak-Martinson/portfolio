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
    body: ['test', 'test2', 'test3', 'test4'],
    imageUrl: '/images/fabrikorens.jpg',
    videoUrl: '',
    url: 'https://fabrikorens.se',
  },
  {
    id: 1,
    case: 'Case 2',
    title: 'blodet i oss',
    body: [
      'Jag jobbar i första hand med Digital Design och Frontend-utveckling. Men Jag har också erfarenhet av rörlig bild. 2019 skapade jag en film för ett offentligt konstverk i Göteborg ’blodet i oss’, skapat av den svenska konstnären Ola Åstrand.',
      'Jag hade ganska fria händer, men ville fånga känslan av verket i förhållande till gångtunneln. Jag valde även att filma när det var mörkt ute för att ge en så korrekt bild som möjligt över ljuset som konstverket ger ifrån sig. Med snabb klippning, och inslag av rörlighet i bakgrunden speglar filmen att detta är ett offentligt konstverk fritt att betrakta',
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
