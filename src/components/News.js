import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize:9,
    category: 'general',
  }
  static propTypes = {
    country:PropTypes.string,
    category:PropTypes.string,
    //apiKey:"your_api",
    pageSize:PropTypes.number,
    }
    constructor(props){
        super(props);
        this.state ={
            articles:[],
            loading : true,
            page: 1,
            totalResults:0,
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)} - SmartNews`;
    }
    capitalizeFirstLetter = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    handlenext = async () => {
            this.setState({page:this.state.page + 1});
            this.updateNews();
        }
    handleprev= async ()=>{
        this.setState({page:this.state.page - 1});
        this.updateNews();
    }

    //componentDidMount runs after render method
    //async function apni body main kuch promises ke resolve hone ka wait kar skta hai
    async componentDidMount(){
      this.updateNews();
    }
    async updateNews(){
      this.props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      let data= await fetch(url);
      this.props.setProgress(30);
      let parsedData =await data.json();
      this.props.setProgress(70);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading:false
      })
      this.props.setProgress(100);
    }
    fetchMoreData = async () => {
      this.setState({page:this.state.page + 1});
      this.setState({
        loading:true,
      })
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      let data= await fetch(url);
      let parsedData =await data.json();
      if(this.state.page > Math.ceil(parsedData.totalResults/this.props.pageSize)){
        this.setState({
          loading:false,
        })
      }
      else{
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          loading:false
        })
      }
    }

  render() {
    return (
      <>
        <h1 className="text-center my-3">Smart News- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container">
        <div className="row">
            {this.state.articles.map((element)=>{
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
}

export default News;
//medium device main ye 4 column le gi 12 columns ki grid hoti hai bootstrap main 4*3=12 
//element.title.slice(0,50)