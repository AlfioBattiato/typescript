import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './component/MyNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import { useEffect, useState } from 'react';
import { ResultInterface } from './interfaces/Article';
import Details from './component/Details';

function App() {


  const [AllArticle, setAllArticle] = useState<ResultInterface[]>([])

  const fetchArticle = function () {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('problema nella chiamata API')
        }
      })
      .then((element) => {
      
        setAllArticle(element.results);
      })
      .catch((e) => console.log('ERRORE', e))
  }

  useEffect(() => {
    fetchArticle()
  }, [])



  return (
    <div >
      <BrowserRouter>
      <MyNavBar/>

      <Routes>
        <Route path="/" element={<Main allArticle={AllArticle} />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
      
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
