import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "components/Loader";
import Section from "components/Section";
import Poster from "components/Poster";
import Message from "components/Message";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 28px;
`;

const SearchPresenter = ({
  tvResults,
  movieResults,
  searchTerm,
  handleSubmit,
  updateTerm,
  error,
  loading,
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomard Coders React</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {movieResults &&
          tvResults &&
          movieResults.length === 0 &&
          tvResults.length === 0 && (
            <Message text="Nothing found" color="#95a5a6" />
          )}
        {error && <Message text={error} color="#e74c3c" />}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  tvResults: PropTypes.array,
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SearchPresenter;
