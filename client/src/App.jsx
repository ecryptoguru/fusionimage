import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <div className="flex flex-1 flex-row justify-start">
      <Link to="/">
        <img 
         src={logo}
         alt="logo" 
         className="w-14 object-contain" />
      </Link>
      <Link to="/">
       <p className="text-black font-semibold text-lg ml-1 mt-3">FusionImage</p>
      </Link>
    </div> 
    <div className="flex justify-end gap-2 mt-1">
      <Link to="https://www.fusionwaveai.com" 
       target="_blank"  // Add this line to open the link in a new page
       className="text-white object-right bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l
        focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Mint NFT  
      </Link>
      <Link to="/create-post" 
       className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l
       focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
       Create AI Image
       </Link>
     </div>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;

