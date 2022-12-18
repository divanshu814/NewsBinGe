import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] =useState(true);
    const [page, setPage] =useState(1)
    const [totalResults, setTotalResults]=useState(0)

    
   
        // document.title = `NewsBinGe- ${props.category}`
    

    const updatePage=async ()=>{
        props.setProgress(0);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0a217e378762426e950b97f957690bd6&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(30);
        let data= await fetch(url);
        let parsedData= await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
       
        props.setProgress(100);

    }

    useEffect(() => {
      updatePage();
    }, [])
    
    
    
    
    
    
    
    const fetchMoreData=async()=>{
       
        const url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=0a217e378762426e950b97f957690bd6&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1)
        // this.setState({
        //     loading:true
        // })
        setLoading(true);
        let data= await fetch(url);
        let parsedData= await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
       
    };

  
    return (
      <div className='container'>

        <div className="container">

        <h1 className='' style={{margin:'35px 0px', marginTop:'90px'}}>NewsBinGe - Top Headlines</h1>
        </div>
        
        {loading && <Spinner/>}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner/>}
        >
    <div className="container">


        <div className="row">
        { articles.map((element, index)=>{
            
            return <div className="col-md-3" key={index}>
        <NewsItem newsUrl={element.url} title={(element.title?element.title.slice(0,50):"Title") + '...'} description={(element.description?element.description.slice(0,78):"Description") + '...'} imgUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
           
        </div>
        </div>
        </InfiniteScroll>
        
       
      </div>
    )
}

News.defaultProps={
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

}

export default News