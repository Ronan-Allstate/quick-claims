import logo from './logo.svg';
import './App.css';
import Menu from './Components/Webpages/Menu';
import Search from './Components/Webpages/Search';
import NewClaims from './Components/Webpages/NewClaims';
import ClaimsTable from './Components/ClaimsTable/ClaimsTable';

function App() {
  return (
    <div>
      <Menu />
      <NewClaims />
      <Search />
      <ClaimsTable />
    </div>
  );
}

export default App;
