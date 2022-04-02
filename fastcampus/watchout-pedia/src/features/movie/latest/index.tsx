import React from "react";
import styled from "@emotion/styled";
import useLatestMovie from "./useLatestMovie";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;


const LatestMovieSection: React.FC = () => {

  const { data, isLoading } = useLatestMovie();

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>{data?.data.title}</div>
        )
      }
    </Base>
  )
}

export default LatestMovieSection;