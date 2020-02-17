import { ADD_ITEM, REMOVE_ITEM, AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE,
  FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index'



const initialState = {

    twitters: [
        {
          id: 1,
          title: 'Hello',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '1 day',
          twitterName: 'aaa',
        },
        {
          id: 2,
          title: 'Redux guy',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '1 day',
          twitterName: 'aaa',
        },
        {
          id: 3,
          title: 'React router stuff',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '5 days',
          twitterName: 'aaa',
          articleUrl: 'https://www.google.pl'
        },
        {
          id: 4,
          title: 'Anime!',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '10 days',
          twitterName: 'aaa',
        },
      ],


      articles: [
        {
          id: 1,
          title: 'React on my minda',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '1 day',
        },
        {
          id: 2,
          title: 'Wish you React',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '1 day',
        },
        {
          id: 3,
          title: 'You gave React a bad name',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '5 days',
        },
        {
          id: 4,
          title: 'Is it React you looking for?',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '10 days',
        },
      ],
      notes: [
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
      

};

// const initialState = {};
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SUCCESS: 
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data]
      };
      case AUTH_SUCCESS: 
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case REMOVE_ITEM: 
      return {
        ...state, //wprowadzamy poprzedni state zeby miec pewnosc ze niczenie nie nadpisujemy
        [action.payload.itemType]: [ //nodes,twiters,aricles
          ...state[action.payload.itemType].filter(item=>item.id !== action.payload.id), //zwraca nowa tablice bez tego id np state.twiters.filter...
         
        ],
      };
      case ADD_ITEM: 
      return {
        ...state, //wprowadzamy poprzedni state zeby miec pewnosc ze niczenie nie nadpisujemy
        [action.payload.itemType]: [ //nodes,twiters,aricles
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      }
      default:
        return state;
  }
}


export default rootReducer;