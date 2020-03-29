import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import { connect } from 'react-redux';
interface ProfileProps extends RouteComponentProps { }

const Profile: FC<ProfileProps> = (props: any) => {
    return (
        <>
            <h2>Profile</h2>
            <p>{props.authentication.accessToken}</p>
        </>

    )
}

export default connect(state => state)(Profile);
