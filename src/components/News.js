import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
          "source": { "id": null, "name": "NBC 5 Dallas-Fort Worth" },
          "author": "NBCDFW Staff",
          "title": "Violent night in Fort Worth: Police say 3 dead, more than a dozen injured after two shootings Monday - NBC 5 Dallas-Fort Worth",
          "description": "Fort Worth police are investigating two separate shootings Monday night that left three dead and more than a dozen others injured.",
          "url": "https://www.nbcdfw.com/news/local/violent-night-in-fort-worth-police-say-3-dead-more-than-a-dozen-injured-after-two-shootings-monday-night/3289329/",
          "urlToImage": "https://media.nbcdfw.com/2023/07/FW-Como-Shooting.jpg?quality=85&strip=all&resize=1200%2C675",
          "publishedAt": "2023-07-04T14:20:35Z",
          "content": "Fort Worth police are investigating two separate shootings Monday night that left three dead and more than a dozen injured.\r\nThe first shooting happened just before midnight where several hundred peo… [+2116 chars]"
        },
        {
          "source": { "id": "bleacher-report", "name": "Bleacher Report" },
          "author": "Timothy Rapp",
          "title": "MLB All-Star Rosters Voting Results 2023: Full Selections, Starters, Snubs and Voting - Bleacher Report",
          "description": "Major League Baseball announced the remaining selections for this year's All-Star Game on Sunday evening. The American League pitchers are as follows: Shohei…",
          "url": "https://bleacherreport.com/articles/10081456-mlb-all-star-rosters-voting-results-2023-full-selections-starters-snubs-and-voting",
          "urlToImage": "https://media.bleacherreport.com/image/upload/x_238,y_160,w_1554,h_1039,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1688335496/qxoppf9uos2uv8jwjzyd.jpg",
          "publishedAt": "2023-07-04T14:06:38Z",
          "content": "Ronald Martinez/Getty Images\r\nMajor League Baseball announced the remaining selections for this year's All-Star Game on Sunday evening.\r\nThe American League pitchers are as follows:\r\nShohei Ohtani (L… [+3878 chars]"
        },
        {
            "source": { "id": null, "name": "Minnesota Public Radio News" },
            "author": "Sven Sundgaard",
            "title": "Steamy Independence Day with potential severe storms - MPR News",
            "description": "Scattered morning thunderstorms will rumble across west central and central Minnesota, some could be strong. More storms will develop later in the afternoon in southern Minnesota Tuesday, some of those could become severe.",
            "url": "https://www.mprnews.org/story/2023/07/04/hot-independence-day-with-potential-severe-storms",
            "urlToImage": "https://img.apmcdn.org/3e5285f54979b517c34e2897c1c3740cbf1ce40d/uncropped/16155c-20230704-svr-risk-1-webp2812.webp",
            "publishedAt": "2023-07-04T13:20:00Z",
            "content": "Scattered morning thunderstorms will rumble across west central and central Minnesota, some could be strong. More storms will develop later in the afternoon in southern Minnesota Tuesday, some of tho… [+1630 chars]"
          },
    ]
    constructor(){
        super();
        this.state ={
            articles:this.articles,
            loading : false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>Smart News- Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
            })}
        </div>
      </div>
    )
  }
}

export default News;
//medium device main ye 4 column le gi 12 columns ki grid hoti hai bootstrap main 4*3=12 
