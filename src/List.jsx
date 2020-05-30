import React, { Component } from 'react';

class List extends Component{

    render(){
        const films = this.props.films;
        return (
          <div>
            {
            films.map((f) => {
            console.log(f)
            return  (
                <div key= {f.url} className="movie-container"> 
                    <h2 className="movie-name">{f.title}</h2>
                    <h3 className="release">Release date: {f.release_date}</h3>
                    <h3 className="episode">Episode: {f.episode_id}°</h3>
                </div>
            )
            })
            }
          </div>
        );
    }
}
export default List;