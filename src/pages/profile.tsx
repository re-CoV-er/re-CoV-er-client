import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Header } from '../components/header';
import { connect } from 'react-redux';
type ProfileProps = RouteComponentProps;

const Profile: FC<ProfileProps> = () => {
  const whoAmI = gql`
    {
      whoAmI {
        username
        email
      }
    }
  `;

  const { data, loading, error } = useQuery(whoAmI);

  return (
    <>
      <Header />
      <h2>Profile</h2>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default connect((state) => state)(Profile);
