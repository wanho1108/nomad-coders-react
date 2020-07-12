import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  height: 180px;
  border-radius: 4px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: 50% 50%;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  right: 5px;
  bottom: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPosterSmall.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
