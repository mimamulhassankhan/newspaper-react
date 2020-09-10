import React, { useEffect, useState } from 'react';
import News from '../MatNews/News';

const TopHeadlines = () => {
    const [newsBundles, setNewsBundles] = useState([]);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=35f72c7ef9994cabac78d574d9dee68f';
        fetch(url)
        .then(res => res.json())
        .then(data => setNewsBundles(data.articles));
    },[]);
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                newsBundles.map(singleNews => <News data={singleNews}></News>)
            }
        </div>
    );
};

export default TopHeadlines;