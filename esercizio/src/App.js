import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import Booklist from './components/BookList';
import books from "./books/fantasy.json"


function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <Booklist libri={books} />
      <MyFooter />
    </div>
  );
}

export default App;
