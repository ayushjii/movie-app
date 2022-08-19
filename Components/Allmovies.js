import Showexpand from "./infomovie";
import Show from "./Movie";
import Search from "./SearchBar";
import React from "react";
import axios from "axios";
import {FcFilmReel,FcFilm } from 'react-icons/fc';


// https://via.placeholder.com/210x295/111217/FFFFFF/?text=No%20Image

class Main extends React.Component {
    state = {
      tvload: [],
      curTvload: {
        show:{
          id:1,
          language: 'Language',
          genres: [],
          image: {
            original: ''
          },
          network: {
            name: 'Network',
            country: {name: 'Country'}
          }
        }
      },
      searchTerm: '',
      showPopup: false,
    }
    
    componentDidMount(){
      axios.get(`https://api.tvmaze.com/search/shows?q=a`)
      .then(response => {
        console.clear();
        console.log(response.data);
        this.setState({
          ...this.state,
          tvload: response.data,
        });
        
        console.log(this.state.tvload);
      });
    }
    
    fetchShows = () => {
      const term = this.state.searchTerm;
      
      axios.get(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(term)}`)
      .then(response => {
        console.clear();
        console.log(response.data);
        this.setState({
          ...this.state,
          tvload: response.data,
        });
        
        console.log(this.state.tvload);
      });
      
      this.printShows();
    }
    
    storeInputValue = (value) => {
      this.setState((state) => ({
        ...state,
        searchTerm: value
      }));
      
      console.log(this.state.searchTerm);
    }
    
    printShows = () => {
      let allShows = [];
      this.state.tvload.map(title => {
        allShows.push(<Show
                        key={title.show.id} 
                        id={title.show.id} 
                        showClicked={this.getClick}
                        imgLink={title.show.image === null ? '' : title.show.image.medium}
                        />);
      });
      
      return allShows;
    }
    
    getClick = (id) => {
      console.log('Clicked ' + id);
      let curShow = this.state.tvload.find(title => title.show.id == id);
      this.setState({
        ...this.state,
        showPopup: true,
        curTvload: curShow
      });
      console.log(this.state.curTvload);
    }
    
    shutPop = () => {
      this.setState({
        ...this.state,
        showPopup: false,
      })
    }
    
    render() {
      let allShows = this.printShows();
 
      let allmove = this.state.curTvload.show;

      return (
        <div className='h-99 flex flex-col'>
          { this.state.showPopup && 
            <Showexpand
              closePop={this.shutPop}
            name={allmove.name}
            imgLink={
              allmove.image == null ?
              '' : 
              allmove.image.original
            }
            country={allmove.network == null ?
              '' : allmove.network.country.name }
            lang={allmove.language}
            genres={allmove.genres.join(', ')}
            plot={allmove.summary}
            network={allmove.network == null ?
              'N/A' : allmove.network.name }
            runtime={allmove.runtime}
            rating={allmove.rating == null ?
              'N/A' : allmove.rating.average }
            status={allmove.status}
            link={allmove.url}
            />
          }
          
          <Search
            getInputValue={this.storeInputValue} 
            getSubmit={this.fetchShows}
            sendEnter={this.fetchShows}
            />
          <div className="grid gap-3 p-3 pb-12 show-grid">
            { allShows.length === 0 ? <div className='error flex'><div><FcFilm size={30}/></div>No Show Found<div><FcFilmReel size={30}/></div></div> : allShows }
          </div>
        </div>
      )
    }
  }
  
  export default Main;