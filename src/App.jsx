import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SearchPage from './features/search/SearchPage.jsx';
import ToWatchPage from './features/toWatchMovies/ToWatchPage.jsx';
import WatchedPage from './features/watchedMovies/WatchedPage.jsx';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store.js";

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
