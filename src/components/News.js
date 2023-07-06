import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize:8,
    category: 'general',
  }
  static PropTypes = {
    country:PropTypes.string,
    category:PropTypes.string,
    //apiKey:"your_api",
    pageSize:PropTypes.number,
    }
    constructor(){
        super();
        this.state ={
            articles:[],
            loading : false,
            page: 1
        }
    }
    handlenext = async () => {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9f0ae2c8163e4c11806a6725af68e366&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          this.setState({
            loading: true
          })
          let data= await fetch(url);
          let parsedData =await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
              }
            )
        }
    handleprev= async ()=>{

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9f0ae2c8163e4c11806a6725af68e366&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      })
      let data= await fetch(url);
      let parsedData =await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
          }
        )
    }

    //componentDidMount runs after render method
    //async function apni body main kuch promises ke resolve hone ka wait kar skta hai
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9f0ae2c8163e4c11806a6725af68e366&page=1&pageSize=${this.props.pageSize}`
      this.setState({
        loading: true
      })
      let data= await fetch(url);
      let parsedData =await data.json();
      this.setState({
        articles: parsedData.articles,
        totalresults: parsedData.totalResults,
        loading:false
      })
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">Smart News- Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"} newsUrl={element.url} />
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalresults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
//medium device main ye 4 column le gi 12 columns ki grid hoti hai bootstrap main 4*3=12 
//element.title.slice(0,50)