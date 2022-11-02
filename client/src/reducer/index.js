export const initialState = {
  mainPosts: [
  {
    id: 1,
    category: "Web",
    title: "게시글 타이틀",
    subTitle: "subTitle1",
    content: "첫 번째 게시글",
    User: {
      id: 1,
      nickname: "사용자"
    },
    date: "2022-10-31",
  }, 
  {
    id: 2,
    category: "Server",
    subTitle: "subTitle2",
    title: "게시글 타이틀2",
    content: "두 번째 게시글",
    User: {
      id: 2,
      nickname: "사용자2"
    },
    date: "2022-10-31",
  },
  {
    id: 3,
    category: "Server",
    subTitle: "subTitle3",
    title: "게시글 타이틀3",
    content: "세 번째 게시글",
    User: {
      id: 3,
      nickname: "사용자3"
    },
    date: "2022-11-02",
  }
],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 123123123,
  User: {
    id: 123123123,
    nickname: "사용자"
  },
  content: "더미 데이터입니다.",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
}

export default reducer;