import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Homepage.css";

// const API_KEY = process.env.REACT_APP_API_KEY || "0ab3d029ac3f457cb1fb93bd741a64bb";
// const BASE_URL = "https://newsapi.org/v2/top-headlines";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const categories = ["business", "sports", "technology", "health", "entertainment"];

const App = () => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("business");
    const [search, setSearch] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNews(category);
    }, [category]);

    const fetchNews = async (category) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`
            );
            setNews(response.data.articles);
        } catch (error) {
            setError("Failed to fetch news. Please try again later.");
        }
        setLoading(false);
    };

    const filteredNews = news.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container my-4">
            <h1 className="navbar-brand text-center mb-5">
                <span className='badge bg-white border border-info text-info fw-bold fs-3'>News</span>  <span className='badge bg-black border border-info text-info fw-bold fs-3'>Feed</span>
            </h1>
            
            {/* Category Buttons */}
            <div className="d-flex flex-wrap justify-content-center mb-4">
                {categories.map((e) => (
                    <button 
                        key={e}
                        className={`btn mx-2 my-2 ${category === e ? "btn-info" : "btn-outline-info"}`}
                        onClick={() => setCategory(e)}
                    >
                        {e.charAt(0).toUpperCase() + e.slice(1)}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="d-flex justify-content-center mb-4">
                <input
                    type="text"
                    className="form-control w-100 w-md-50"
                    placeholder="Search news by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Loading Indicator */}
            {loading && (
                <div className="text-center">
                    <div className="spinner-border text-secondary" role="status"></div>
                    <p className="mt-2 fw-bold text-secondary">Loading... Please wait!</p>
                </div>
            )}

            {error && <p className="text-center text-danger">{error}</p>}
            {!loading && !error && news.length === 0 && <p className="text-center">No news available...</p>}

            {/* News Cards */}
            <div className="row">
                {filteredNews.length > 0 ? (
                    filteredNews.map((article, index) => (
                        <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={article.urlToImage || "https://via.placeholder.com/300"}
                                    className="card-img-top"
                                    alt="News"
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text flex-grow-1">{article.description}</p>
                                    <a
                                        href={article.url}
                                        className="btn btn-dark btn-outline-info mt-auto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Read More...
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    !loading && <h5 className="text-center">No news found...</h5>
                )}
            </div>
        </div>
    );
};

export default App;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Homepage.css";


// const API_KEY = "0ab3d029ac3f457cb1fb93bd741a64bb"; 
// const BASE_URL = "https://newsapi.org/v2/top-headlines";

// const categories = ["business", "sports", "technology", "health", "entertainment"];

// const App = () => {
//     const [news, setNews] = useState([]);
//     const [category, setCategory] = useState("business");
//     const [search, setSearch] = useState(""); 
//     const [loading, setLoading] = useState(false); 
//     const [error,setError]=useState(null)

//     useEffect(() => {
//         fetchNews(category);
//     }, [category]);

//     const fetchNews = async (category) => {
//         setLoading(true); // Start loading
//         try {
//             const response = await axios.get(
//                 `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`
//             );
//             setNews(response.data.articles);
//         } catch (error) {
//             console.error("Error fetching news:", error);
//         }
//         setLoading(false); // Stop loading
//     };

//     // Filter news based on search query
//     const filteredNews = news.filter(article =>
//         article.title.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="container my-4">
//                 <h1 class="navbar-brand text-center mb-5" href="/"><span class='badge bg-white border border-info text-info fw-7 fs-3'>News</span >  <span class='badge bg-black border border-info text-info fw-7 fs-3'>Feed</span></h1>


//             {/* Category Buttons */}
//             <div className="d-flex justify-content-center mb-4 ">
//                 {categories.map((e) => (
//                     <button 
//                         key={e}
//                         className={`btn mx-2 ${category === e ? "btn-info" : "btn-outline-info"}`}
//                         onClick={() => setCategory(e)}
//                     >
//                         {e.charAt(0).toUpperCase() + e.slice(1)}
//                     </button>
//                 ))}
//             </div>

//             {/* Search Bar */}
//             <div className="d-flex justify-content-center mb-4">
//                 <input
//                     type="text"
//                     className="form-control w-50"
//                     placeholder="Search news by title..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </div>


//             {/* Loading Indicator */}
            

//                       {loading && (
//     <div className="text-center">
//         <div className="spinner-border text-secondary" role="status">
//         </div>
//         <p className="mt-2 fw-bold text-secondary">Loading..... Please wait!!</p>
//     </div>
// )}

//             {error && <p className="text-center text-danger">{error}</p>}
//             {!loading && !error && news.length === 0 && <p className="text-center">No news available...</p>}







//             {/* News Cards */}
//             <div className="row">
//                 {filteredNews.length > 0 ? (
//                     filteredNews.map((article, index) => (
//                         <div className="col-md-4 mb-4" key={index}>
//                             <div className="card h-100">
//                                 <img
//                                     src={article.urlToImage || "https://via.placeholder.com/300"}
//                                     className="card-img-top"
//                                     alt="News"
//                                 />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{article.title}</h5>
//                                     <p className="card-text">{article.description}</p>
//                                     <a
//                                         href={article.url}
//                                         className="btn btn-dark btn-outline-info"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         Read More...
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     !loading && <h5 className="text-center">No news found...</h5>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default App;




