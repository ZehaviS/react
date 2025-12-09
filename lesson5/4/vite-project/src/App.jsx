import './App.css';
import { ShowBookList } from './componnent/ShowBookList';
import { ShowAuthorList } from './componnent/ShowAuthorList';
import { useState } from 'react';

function App() {
  const [shoeBooks, setShowBooks] = useState(true);
  const [librarianName, setLibrarianName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);

  const change = () => {
    setShowBooks(!shoeBooks);
  }
  const ShowInput=()=>{
      setShowInput(true);
  }
  const handleInputChange = (e) => {
    setLibrarianName(e.target.value);
};
const handleSubmit = () => {
  if (librarianName) {
      setIsNameSubmitted(true);
  }
};
  return (
    <div className='app'>
      {shoeBooks?<ShowBookList /> : <ShowAuthorList />}
      <button onClick={change}> {shoeBooks?'לרשימת הסופרים':'לרשימת הספרים'}</button>
      {isNameSubmitted ? (
                <h1>hello {librarianName}</h1>
            ) : (
                <div>
                    <input 
                        type="text" 
                        placeholder="הכנס את שם הספרנית" 
                        value={librarianName} 
                        onChange={handleInputChange} 
                    />
                    <button onClick={handleSubmit}>שלח</button>
                </div>
            )}
    </div>
  )
}

export default App


