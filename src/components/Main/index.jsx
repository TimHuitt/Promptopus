import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Cards from '../../pages/Cards'
import Stories from '../../pages/Stories'

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </>
  );
};

export default Main;