import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

interface ProfileProps extends RouteComponentProps { }

const Profile: FC<ProfileProps> = () => {
    return (
        <>
            <h2>Profile</h2>
        </>

    )
}

export default Profile;

