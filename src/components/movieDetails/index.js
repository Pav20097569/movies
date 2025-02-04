import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import MovieReviews from "../movieReviews"
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";  // To navigate programmatically


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const navigate = useNavigate();  // Hook for navigation
   

  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const goToRecommendations = () => {
    navigate(`/recommendations/${movie.id}`);  
  };

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{ ...root }}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                <Chip icon={<MonetizationIcon />} label={`${movie.revenue.toLocaleString()}`} />
                <Chip icon={<StarRate />} label={`${movie.vote_average} (${movie.vote_count})`} />
                <Chip label={`Released: ${movie.release_date}`} />

                {/* Label for Production Countries */}
                <li>
                    <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
                </li>
                {movie.production_countries && movie.production_countries.length > 0 ? (
                    movie.production_countries.map((country) => (
                        <li key={country.name}>
                            <Chip label={country.name} sx={{ ...chip }} />
                        </li>
                    ))
                ) : (
                    <Typography variant="body2" component="p" sx={{ padding: 1 }}>
                        No production countries listed.
                    </Typography>
                )}
            </Paper>

            <Button
        variant="contained"
        color="primary"
        onClick={goToRecommendations}  // On click, go to the recommendations page
      >
        See Recommendations
      </Button>
 
      </>
  );
};
export default MovieDetails ;