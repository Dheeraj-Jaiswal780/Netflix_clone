import React from 'react'
import Rows from '../Components/Rows/Rows'
import Api from '../api/Api'
import Banner from '../Components/Banner/Banner'
import Nav from '../Components/Nav/Nav'
function NetflixShow() {
  return (
    <div>
      <Nav/>
     <Banner/>
      {/* navbar
      banner
      rows/content */}
      <Rows title="NETFLIX Trending" fetchUrl={Api.fetchTrending} isLargeRow/>
      <Rows title="NETFLIX ORIGINALS" fetchUrl={Api.fetchNetflixOriginals} isLargeRow/>
      <Rows title="NETFLIX Top Rated" fetchUrl={Api.fetchTopRated} isLargeRow/>
      <Rows title="Action Movies" fetchUrl={Api.fetchActionMovies} isLargeRow/>
      <Rows title="Comedy Movies" fetchUrl={Api.fetchComedyMovies} isLargeRow/>
      <Rows title="Horror Movies" fetchUrl={Api.fetchHorrorMovies} isLargeRow/>
      <Rows title="Romance Movies" fetchUrl={Api.fetchRomanceMovies} isLargeRow/>
      <Rows title="Documentries" fetchUrl={Api.fetchDocumentries} isLargeRow/>
    </div>
  )
}

export default NetflixShow
