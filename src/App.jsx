import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SearchPage from './features/search/SearchPage.jsx';
import ToWatchPage from './features/toWatchMovies/ToWatchPage.jsx';
import WatchedPage from './features/watchedMovies/WatchedPage.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <h1>Welcome to My Movie Library</h1>
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="/to-watch" element={<ToWatchPage/>}/>
                    <Route path="/watched" element={<WatchedPage/>}/>
                </Routes>
            </div>

        </Router>
    );
}

export default App;
