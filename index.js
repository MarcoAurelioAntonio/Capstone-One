const cardsContent = [
  {
    cardId: 'one',
    picture: '/Capstone-One/speacker-imgs/Bruno-Abril.png',
    name: 'Bruno Abril',
    title: 'Global Head of Insurance Everis, an NTT Data Company',
    description: 'Co-founded Imagen Insights, a startup based in Shoreditch in London. He’s now CEO of the company. Imagen shares ideas and insights with its agency and brand customers gathered from an entire community of Gen Z consultants.',
  },
  {
    cardId: 'two',
    picture: '/Capstone-One/speacker-imgs/Sara-Benslaiman.png',
    name: 'Sara Benslaiman',
    title: 'Vice President Global Insurance, ForceManager',
    description: 'Is currently Associate Lecturer at Goldsmiths, University of London. She is an authority on Caribbean migration, specialising in inter-generational kinship and genealogy and the on the contribution to culture, belonging, and legacy in British society today.',
  },
  {
    cardId: 'hide-card',
    picture: '/Capstone-One/speacker-imgs/Ricardo-Monroy.png',
    name: 'Ricardo Monroy',
    title: 'Head of Digital Transformation, BBVA Insurance',
    description: 'Former senior British diplomat and corporate executive whose primary specialisation is at the interface of business and (geo) politics. David Landsman asks what global political and strategic developments mean for the future of businesses and for investors. ',
  },
  {
    cardId: 'hide-card',
    picture: '/Capstone-One/speacker-imgs/Beatriz-Valentii.png',
    name: 'Beatriz Valenti',
    title: 'Director of Zurich Commercial, Insurance in Spain',
    description: 'Whether in Europe, Brazil, China, India or Pakistan, commands a stage or a screen, audiences are instantly engaged. Her extensive topical knowledge and understanding combined with an inexhaustible good mood and clear voice makes her a perfect presenter.',
  },
  {
    cardId: 'hide-card',
    picture: '/Capstone-One/speacker-imgs/Alfonso-Parrella.png',
    name: 'Alfonso Parrella',
    title: 'CEO Netijam Technologies, SISnet',
    description: 'He founded Innate Leaders in 2008 to work with businesses on solving some of their most intractable challenges. Since that time he’s worked with Lockheed Martin, Coca-Cola, and the Organization for the Prohibition of Chemical Weapons to name just a few.',
  },
  {
    cardId: 'hide-card',
    picture: '/Capstone-One/speacker-imgs/Marina-Oberholzer.png',
    name: 'Marina Oberholzer',
    title: 'Behavioral Research Consultant, Swiss Re',
    description: 'For almost two centuries the Evening Standard has published in London as a daily newspaper. In June 2020 during the Covid pandemic Emily Sheffield took up the post of editor previously held by George Osborne. ',
  },

];

const divParent = document.querySelector('.speak-container');
const dynamicSpeakersCards = () => {
  let speakersDiv = '';

  if (divParent !== null) {
    for (let i = 0; i < cardsContent.length; i += 1) {
      const speakersCard = `
      <div class="speaker ${cardsContent[i].cardId}">
        <div class="speaker-img">
          <img src="${cardsContent[i].picture}" alt="" />
        </div>
        <div class="speaker-container">
          <h2 class="speaker-name">${cardsContent[i].name}</h3>
          <p class="speaker-title">${cardsContent[i].title}</p>
          <p class="speaker-info">${cardsContent[i].description}</p>
        </div>
      </div>`;
      speakersDiv += speakersCard;
    }
    divParent.innerHTML = speakersDiv;
  }
};
dynamicSpeakersCards();

/* Click See more */
const show = document.getElementById('btnshow');

if (show !== null) {
  show.addEventListener('click', () => {
    divParent.classList.toggle('morebtn');
    /* Change content of button */
    if (show.innerHTML === 'SHOW MORE') {
      show.innerHTML = 'SHOW LESS';
    } else if (show.innerHTML === 'SHOW LESS') {
      show.innerHTML = 'SHOW MORE';
    }
  });
}

/* Mobile nav-bar */
const menuHamburguer = document.querySelector('.hamburger');
const myNav = document.querySelector('.items');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('active');
  myNav.classList.toggle('active');
});

/* clicking in every item of the menu, the menu desapear */
document.querySelectorAll('.item').forEach((n) => n.addEventListener('click', () => {
  menuHamburguer.classList.remove('active');
  myNav.classList.remove('active');
}));