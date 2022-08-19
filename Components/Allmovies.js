import Showexpand from "./infomovie";
import Show from "./Movie";
import Search from "./SearchBar";
import React from "react";
import axios from "axios";

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
      return (
        <div className='h-99 flex flex-col'>
          { this.state.showPopup && 
            <Showexpand
              closePop={this.shutPop}
            name={this.state.curTvload.show.name}
            imgLink={
              this.state.curTvload.show.image == null ?
              '' : 
              this.state.curTvload.show.image.original
            }
            country={this.state.curTvload.show.network == null ?
              '' : this.state.curTvload.show.network.country.name }
            lang={this.state.curTvload.show.language}
            genres={this.state.curTvload.show.genres.join(', ')}
            plot={this.state.curTvload.show.summary}
            network={this.state.curTvload.show.network == null ?
              'N/A' : this.state.curTvload.show.network.name }
            runtime={this.state.curTvload.show.runtime}
            rating={this.state.curTvload.show.rating == null ?
              'N/A' : this.state.curTvload.show.rating.average }
            status={this.state.curTvload.show.status}
            link={this.state.curTvload.show.url}
            />
          }
          
          <Search
            getInputValue={this.storeInputValue} 
            getSubmit={this.fetchShows}
            sendEnter={this.fetchShows}
            />
          <div className="grid gap-3 p-3 pb-12 show-grid">
            { allShows.length === 0 ? <div className='error'>No shows found... <i className="fas fa-film"></i></div> : allShows }
          </div>
        </div>
      )
    }
  }
  
  export default Main;