import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userprofile from './components/Userprofile';
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Userprofile />} />
        <Route path="/users/:userId/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
