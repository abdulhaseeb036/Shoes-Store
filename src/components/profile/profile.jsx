import React, { useContext } from 'react';
import { UserContext } from '../api/contextapi'
import { signout } from '../api/firebaseCon'
import { Button } from '@material-ui/core'
import Signin from '../sigin/signin'
function Profile() {

    const user = useContext(UserContext);
    if (user) {
    var { photoURL, displayName, email } = user;
    }

    return (
        user ? (
        
            <div>
                <h1>{displayName}</h1>
                <h3>{email}</h3>
                <Button type="submit" fullWidth variant="contained" color="primary" onClick={(event) => { signout(event) }}> Sign Out </Button>
            </div>
        ) : <Signin />
    )
}



export default Profile;