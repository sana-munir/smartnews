import React, { useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] =useState([]);
    const [loading, setLoading] =useState(true);
    const [page, setPage] =useState(1);
    const [totalResults, settotalResults] =useState(0);
    
    const capitalizeFirstLetter = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const handlenext = async () => {
            setPage(page + 1);
            updateNews();
        }
    const handleprev= async ()=>{
        setPage(page - 1);
        updateNews();
    }

    //componentDidMount runs after render method
    //async function apni body main kuch promises ke resolve hone ka wait kar skta hai
    useEffect(() => {
      updateNews();
      document.title=`${capitalizeFirstLetter(props.category)} - SmartNews`;
    }, []);

    const updateNews = async () =>{
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
      let data= await fetch(url);
      props.setProgress(30);
      let parsedData =await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      settotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
    const fetchMoreData = async () => {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`
      setPage(page + 1);
      let data= await fetch(url);
      let parsedData =await data.json();
      if(page > Math.ceil(parsedData.totalResults/props.pageSize)){
          setLoading(false);
      }
      else{
          setArticles(articles.concat(parsedData.articles));
          settotalResults(parsedData.totalResults);
          setLoading(false);
        }
      }

    return (
      <>
        <h1 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>Smart News- Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container-xxl">
        <div className="row">
            {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}
                 imageUrl={element.urlToImage?element.urlToImage:"https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"} 
                 newsUrl={element.url} author={element.author?element.author:'Unknown'} date={element.publishedAt} source={element.source.name}/>
                </div>
            })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
}
News.defaultProps ={
  country: 'in',
  pageSize:9,
  category: 'general',
}
News.propTypes = {
  country:PropTypes.string,
  category:PropTypes.string,
  //apiKey:"your_api",
  pageSize:PropTypes.number,
  }
export default News;
//medium device main ye 4 column le gi 12 columns ki grid hoti hai bootstrap main 4*3=12 
//element.title.slice(0,50)