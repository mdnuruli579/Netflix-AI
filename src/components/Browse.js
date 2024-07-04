import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import useTrandingMovie from '../hooks/useTrandingMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import useHorrorMovie from '../hooks/useHorrorMovie';
import useComedyMovie from '../hooks/useComedyMovie';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import SecondryContainer from './SecondryContainer';


const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovie();
  usePopularMovie();
  useTrandingMovie();
  useUpcomingMovie();
  useHorrorMovie();
  useComedyMovie();
  return (
    <div>
      <Header/>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </div>
  )
}

export default Browse