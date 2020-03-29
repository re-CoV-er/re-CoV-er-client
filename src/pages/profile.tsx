import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';
interface ProfileProps extends RouteComponentProps { }

const Profile: FC<ProfileProps> = () => {
    const whoAmI = gql`
        {
            whoAmI {
                username
                email
            }
        }`;

    const { data, loading, error } = useQuery(whoAmI);

    return (
        <>
            <h2>Profile</h2>
        </>

    )
}

export default Profile;

