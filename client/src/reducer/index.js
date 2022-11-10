export const initialState = {
  mainPosts: [
  {
    id: 1,
    category: "Web",
    title: "E-commerce Cart 데모",
    subTitle: "Backend Build",
    content: "첫 번째 게시글",
    User: {
      id: 1,
      nickname: "사용자"
    },
    date: "2022-10-31",
    hashtags: ["#e-commerce", "#backend", "#cart"]
  }, 
  {
    id: 2,
    category: "Server",
    title: "GraphQL",
    subTitle: "GraphQL은 페이스북에 의해 REST API의 문제를 해결하기 위해 만들어졌습니다.",
    content: "두 번째 게시글",
    User: {
      id: 2,
      nickname: "사용자2"
    },
    date: "2022-10-31",
    hashtags: ["#server", "#graphql"]
  },
  {
    id: 3,
    category: "Web",
    title: "TopRank 앵귤러 분석",
    subTitle: "앵귤러에서의 양방향 바인딩 ",
    content: "세 번째 게시글",
    User: {
      id: 3,
      nickname: "사용자3"
    },
    date: "2022-11-02",
    hashtags: ["#toprank", "#angular", "#양방향바인딩"]
  }
  ],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

const dummyPost = (data) => ({
  id: 4,
  category: "Design",
  title: data.title,
  subTitle: data.subTitle,
  content: data.content,
  User: {
    id: 4,
    nickname: data.user
  },
  date: "2022-11-06",
  hashtags: ["#toprank", "#angular", "#양방향바인딩"]
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        removePostLoading: false,
        removePostDone: true,
        mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      };
    default:
      return state;
  }
}

export default reducer;