import React from "react";
import {Card} from "react-bootstrap"
import View from "./View.jsx"

const MovieCard = ({ movie }) => {
    const clicking = () => {
        return (
            <>
                <View name={movie.title} description={movie.description} rate={movie.rate} post={movie.posterUrl} /> 
                console.log("movie card have been clicked ON !!!!")
            </>
        );
    }

    return (
        <div>
            <Card style={{ width: "18rem", marginBottom:"30px", cursor: "pointer" }} onClick={clicking} >
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <Card.Text>
                        <span className="Rate"> {movie.rate}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MovieCard;
