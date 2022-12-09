export const initialState = {
  mainPosts: [
  // {
  //   id: 1,
  //   category: "Web",
  //   title: "E-commerce Cart 데모",
  //   subTitle: "Backend Build",
  //   content: "첫 번째 게시글",
  //   user: "사용자",
  //   date: "2022-10-31",
  //   hashtags: ["#e-commerce", "#backend", "#cart"]
  // }, 
  // {
  //   id: 2,
  //   category: "Server",
  //   title: "GraphQL",
  //   subTitle: "GraphQL은 페이스북에 의해 REST API의 문제를 해결하기 위해 만들어졌습니다.",
  //   content: "두 번째 게시글",
  //   user: "사용자",
  //   date: "2022-10-31",
  //   hashtags: ["#server", "#graphql"]
  // },
  // {
  //   id: 3,
  //   category: "Web",
  //   title: "TopRank 앵귤러 분석",
  //   subTitle: "앵귤러에서의 양방향 바인딩 ",
  //   content: "세 번째 게시글",
  //   user: "사용자",
  //   date: "2022-11-02",
  //   hashtags: ["#toprank", "#angular", "#양방향바인딩"]
  // }
  ],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  hasMorePosts: true,
  imagePaths: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const ADD_POST_STATE_RESET = 'ADD_POST_STATE_RESET';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
export const REMOVE_POST_RESET = 'REMOVE_POST_RESET';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

// const dummyPost = (data) => ({
//   id: 4,
//   category: "Design",
//   title: data.title,
//   subTitle: data.subTitle,
//   content: data.content,
//   user: {
//     id: 4,
//     nickname: data.user
//   },
//   date: "2022-11-06",
//   hashtags: ["#toprank", "#angular", "#양방향바인딩"]
// });

const dummyComment = (data) => ({
  id: 1,
  content: data,
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
        mainPosts: [action.data, ...state.mainPosts],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_POST_STATE_RESET:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: false,
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      console.log(action.data);
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
    case REMOVE_POST_RESET:
      return {
        ...state,
        removePostDone: false,
        mainPosts: [],
      };
    case LOAD_POST_REQUEST:
      return {
        ...state,
        loadPostLoading: true,
        loadPostDone: false,
        loadPostError: null,
      };
    case LOAD_POST_SUCCESS:
      // console.log(action.data);
      return {
        ...state,
        loadPostLoading: false,
        loadPostDone: true,
        mainPosts: state.mainPosts.concat(action.data),
        hasMorePosts: action.data.length === 10,
      };
    case LOAD_POST_FAILURE:
      return {
        ...state,
        loadPostLoading: false,
        loadPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.PostId);
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [action.data, ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        loadPostLoading: false,
        addCommentError: action.error,
      };
    case UPLOAD_IMAGES_REQUEST:
      return {
        ...state,
        uploadImagesLoading: true,
        uploadImagesDone: false,
        uploadImagesError: null,
      };
    case UPLOAD_IMAGES_SUCCESS:
      console.log(action.data);

      return {
        ...state,
        uploadImagesLoading: false,
        uploadImagesDone: true,
        imagePaths: action.data,
      };
    case UPLOAD_IMAGES_FAILURE:
      return {
        ...state,
        uploadImagesLoading: false,
        uploadImagesError: action.error,
      };
    default:
      return state;
  }
}

export default reducer;