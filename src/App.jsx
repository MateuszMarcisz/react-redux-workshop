import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SearchPage from './features/search/SearchPage.jsx';
import ToWatchPage from './features/toWatchMovies/ToWatchPage.jsx';
import WatchedPage from './features/watchedMovies/WatchedPage.jsx';
import './App.css';
import {Provider} from "react-redux";
import store, {persistor} from "./redux/store.js";
import IndividualMoviePage from "./features/individualMovie/IndividualMoviePage.jsx";
import {PersistGate} from "redux-persist/integration/react";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <Router>
                    <div className="container">
                        <h1>Welcome to My Movie Library</h1>
                        <Navbar/>
                        <Routes>
                            <Route path="/" element={<SearchPage/>}/>
                            <Route path="/to-watch" element={<ToWatchPage/>}/>
                            <Route path="/watched" element={<WatchedPage/>}/>
                            <Route path="/movie/:id" element={<IndividualMoviePage/>}/>
                        </Routes>
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
