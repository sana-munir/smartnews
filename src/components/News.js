import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state ={
            articles:[],
            loading : false
        }
    }
    //componentDidMount runs after render method
    //async function apni body main kuch promises ke resolve hone ka wait kar skta hai
    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9f0ae2c8163e4c11806a6725af68e366"
      let data= await fetch(url);
      let parsedData =await data.json();
      this.setState({articles: parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
        <h1>Smart News- Top Headlines</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,100):""} imageUrl={element.urlToImage?element.urlToImage:"https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"} newsUrl={element.url} />
                </div>
            })}
        </div>
      </div>
    )
  }
}

export default News;
//medium device main ye 4 column le gi 12 columns ki grid hoti hai bootstrap main 4*3=12 
