import React, { useEffect, useState } from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Requests';
function HomeScreen() {
    
    return (
        <div className="homeScreen">
            <Nav/>  
            <Banner/>
            <Row title="Netflix Originals " fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
           {/* Nav
        banner
        rows */}
        </div>
    )
}

export default HomeScreen
