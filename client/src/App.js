import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={<Home />} />
            <Route path='/wirtePage' element={<WritePage />} />
            <Route path='/:id' element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
