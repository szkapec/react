const initialState = {
  twitters: [
    {
      id: 1,
      title: 'Wprowadzenie do hooków',
      content:
        'Hooki są nowym dodatkiem w Reakcie 16.8. Pozwalają one używać stanu i innych funkcjonalności Reacta, bez użycia klas.',
      twitterName: 'aaa',
    },
    {
      id: 2,
      title: 'React Redux',
      content:
        'Od samego początku musimy podkreślić, że Redux nie ma związku z React. Możesz pisać aplikacje Redux za pomocą React, Angular, Ember, jQuery lub waniliowego JavaScript.',
      twitterName: 'dan_abramov',
    },
    {
      id: 3,
      title: 'Styled component w React',
      content:
        'Styled-components jest wynikiem zastanawiania się, w jaki sposób możemy ulepszyć CSS do stylizacji systemów komponentów React. Koncentrując się na pojedynczym przypadku użycia, udało nam się zoptymalizować doświadczenie dla programistów, a także wydajność dla użytkowników końcowych.',
      twitterName: 'aaa',
    },
    
  ],
  articles: [
    {
      id: 1,
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Wish you React',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    },
    {
      id: 3,
      title: 'You gave React a bad name',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
    },
    {
      id: 4,
      title: 'Is it React you looking for?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/helloroman',
      created: '10 days',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Como es An Gular?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 3,
      title: 'Du bist Reactish',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
    },
    {
      id: 4,
      title: 'Reactuj się kto moze!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
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