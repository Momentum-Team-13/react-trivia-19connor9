import './App.css';
import React, { useEffect, useState } from 'react'
import { categoryFetch } from './components/Fetches.js';
import { questionFetch } from './components/Fetches.js';
import ListCategories from './components/ListCategories';
import ListQuestions from './components/ListQuestions';

function App() {
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState('');



  useEffect(() => {

    categoryFetch()
      .then((response) => setCategories(response))

    setChosenCategory('')
  }, [])

  return (
    <div className="App">
      <>{chosenCategory !== '' ? <ListQuestions onClick={setChosenCategory} chosenCategory={chosenCategory}></ListQuestions>

        : <ListCategories onClick={setChosenCategory} categories={categories}></ListCategories>}
      </>



      <div></div>
    </div >
  );
}

export default App;
