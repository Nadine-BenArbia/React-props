import MovieCard from './MovieCard';
import './StyleMoviecards.css';


const Movies = ({moviesData}) => {
 
  
  
    return (
      <div className="movies">
        {moviesData.map((el) => ( <MovieCard movie={el}  />
          
        ))}
      </div>
    );
  };
  export default  Movies