import { useState } from 'react'
import MoviesList from './MoviesList'
import AddMovie from './AddMovie'
import Head from './Head'
import DarkNight from './posters/darkNight.jpg'
import DLU from './posters/DLU.jpg'
import LOTR from './posters/LOTR.jpeg'
import PF from './posters/PF.jpg'
import predest from './posters/predest.jpg'
import SL from './posters/SL.jpg'
import TAM from './posters/TAM.jpg'
import TGF72 from './posters/TGF72.jpg'
import TGF74 from './posters/TGF74.jpg'
import TIG from './posters/TIG.jpg'
import TIT from './posters/TIT.jpg'
import TSR from './posters/TSR.jpg'
import INCEP from './posters/INCEP.jpg'
import FG from './posters/FG.jpg'
import FC from './posters/FC.jpg'
import SEVEN from './posters/SEVEN.jpg'

const Data = [
    {
        title: "Dark Night",
        rate: 4,
        description: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
        posterUrl: DarkNight
    },
    {
        title: "Dont look Up",
        rate: 5,
        description:"Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.",
        posterUrl: DLU,
    },
    {
        title: "The Lord of the rings: the rings of the power",
        rate: 3,
        description:"This epic drama is set thousands of years before the events of J.R.R. Tolkien's The Hobbit and The Lord of the Rings, and takes viewers back to an era in which great power.",
        posterUrl: LOTR,
    },
    {
        title: "Pulp Fiction",
        rate: 1,
        description: "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals.",
        posterUrl: PF,
    },
    {
        title: "Predestination",
        rate: 3,
        description: "As his last assignment, a temporal agent is tasked to travel back in time and prevent a bomb attack in New York in 1975. The hunt, however, turns out to be beyond the bounds of possibility.",
        posterUrl: predest,
    },
    {
        title: "Schindler's List",
        rate: 3,
        description: "Oskar Schindler, a German industrialist and member of the Nazi party, tries to save his Jewish employees after witnessing the persecution of Jews in Poland.",
        posterUrl: SL,
    },
    {
        title: "12 Angry Man",
        rate: 4,
        description: "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
        posterUrl: TAM,
    },
    {
        title: "The God Father (1972)",
        rate: 5,
        description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        posterUrl: TGF72,
    },
    {
        title: "The God Father (1974)",
        rate: 4,
        description: "Michael, Vito Corleone's son, attempts to expand his family's criminal empire. While he strikes a business deal with gangster Hyman Roth, he remains unaware of the lurking danger.",
        posterUrl: TGF74,
    },
    {
        title: "The Imitation Game",
        rate: 3,
        description: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
        posterUrl: TIG
    },
    {
        title: "Titanic",
        rate: 4,
        description: "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
        posterUrl: TIT
    },
    {
        title: "The Shawshank Redemption",
        rate: 5,
        description: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
        posterUrl: TSR
    },
    {
        title: "Inception",
        rate: 4,
        description: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
        posterUrl: INCEP
    },
    {
        title: "Forrest Gump",
        rate: 2,
        description: "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
        posterUrl: FG
    },
    {
        title: "Fight Club",
        rate: 5,
        description: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
        posterUrl: FC
    },
    {
        title: "SEVEN",
        rate: 3,
        description: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
        posterUrl: SEVEN
    },
];

function Home() {
  const [movies, setMovies] = useState(Data)
  const [name, setName] = useState('')
  const [rate, setRate] = useState(0)


  const RateManagement = (x) => {
    setRate(x)
  }

  const NameManagement = (e) => {
    // e.preventDefault()
    setName(e.target.value)
  }

  const NewMovieManagement = (newMovie) => {
    setMovies([...movies, newMovie]) 
  }
  
  return (
    <div className="App">
      <Head NameManagement={NameManagement} RateManagement={RateManagement}/>
      <MoviesList movies={movies} name={name} rate={rate} />
      <AddMovie NewMovieManagement={NewMovieManagement} />

    </div>
  );
}

export default Home;