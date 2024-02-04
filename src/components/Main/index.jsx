import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Prompts from '../../pages/Prompts'
import Stories from '../../pages/Stories'

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </>
  );
};

export default Main;