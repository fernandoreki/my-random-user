import './App.css';
import React from 'react'
import useRandomUser from './components/useRandomUser';

function App() {
  const apiUrl = 'https://randomuser.me/api/?nat=mx';
  const data = useRandomUser(apiUrl);
  const name = data.name;
  //const name = data.results[0].name.first;
  
  /*const getRandomUser = () => {
    const apiUrl = 'https://randomuser.me/api';
    const [user, setUser] = useState();

    const fetchApi = async () => {
      const response = await fetch(apiUrl);
      const responseJSON = await response.json();
      setUser(responseJSON);
      console.log(responseJSON);
      console.log(user.results[0].name.first)
    }
    useEffect(() => {
      fetchApi();
    }, []);
  }*/

  return (
    <div className="App">
      <p>this name: {name}</p>
    </div>
  );
}

export default App;
