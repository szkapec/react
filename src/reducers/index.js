const initialState = {
  twitters: [
    {
      id: 1,
      title: 'Wprowadzenie do hooków',
      content:
        'Hooki są nowym dodatkiem w Reakcie 16.8. Pozwalają one używać stanu i innych funkcjonalności Reacta, bez użycia klas.',
        created: '1 day',
        twitterName: 'aaa',
    },
    {
      id: 2,
      title: 'React Redux',
      content:
        'Od samego początku musimy podkreślić, że Redux nie ma związku z React. Możesz pisać aplikacje Redux za pomocą React, Angular, Ember, jQuery lub waniliowego JavaScript.',
        created: '1 day',
        twitterName: 'dan_abramov',
    },
    {
      id: 3,
      title: 'Styled component w React',
      content:
        'Styled-components jest wynikiem zastanawiania się, w jaki sposób możemy ulepszyć CSS do stylizacji systemów komponentów React. Koncentrując się na pojedynczym przypadku użycia, udało nam się zoptymalizować doświadczenie dla programistów, a także wydajność dla użytkowników końcowych.',
        created: '1 day',
        twitterName: 'aaa',
    },
    
  ],
  articles: [
    {
      id: 1,
      title: 'React artykuł',
      content:
        'Nasz duży zespół inżynierów korzysta z tego przewodnika rozwoju',
      articleUrl: 'https://www.freecodecamp.org/news/grabs-front-end-guide-for-large-teams-484d4033cc41/',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Czysty kod w React',
      content:
        'Jak napisać bardzo czytelny kod React - 10 wskazówek dotyczących stylu kodowania',
        created: '1 day',
        articleUrl: 'https://youtube.com/helloroman',
    },
    {
      id: 3,
      title: 'You gave React a bad name',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        articleUrl: 'https://www.freecodecamp.org/news/10-points-to-remember-thatll-help-you-master-coding-in-reactjs-library-d0520d8c73d8/',
    },
    {
      id: 4,
      title: 'Kurs Reacta - udemy',
      content:
        'React 16 - Kompletny przewodnik (w tym React Router 4 i Redux)',
      articleUrl: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-Q3q.KljcfruAzgZwaqyUjw',
      created: '10 days',
    },
    {
      id: 5,
      title: 'Kompletny kurs React Native i Redux',
      content:
        'Tworzenie aplikacji na iOS i Androida od zera - buduj pełne aplikacje mobilne React Native bardzo szybko!',
      articleUrl: 'https://www.udemy.com/course/the-complete-react-native-and-redux-course/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-8suJ_4d.g3Q1mcWkI6wKCA',
      created: '10 days',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'Zapraszam do dodawania notatek!',
      created: '1 day',
      content:
        'Każdy może dodać notatkę przycisk "+" prawy dolny róg. Zapraszam! ',
    },
    {
      id: 2,
      title: 'Zakupy',
      created: '1 day',
      content:
        'Kupić: 1. Banany 2. Pomarańcze 3.Cytryny 4.Cebula 5. Kiwi',
    },
    
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;