import {Container, Typography} from "@mui/material";
import UserList from "../components/UserList";
import axiosApi from "../AxiosApi";
import {useEffect} from "react";
import {useGlobalState, setGlobalState} from "../state";

const Profile: () => JSX.Element = () => {

    useEffect(() => {
        const getProfile = async () => {
            const response = await axiosApi.get('/users/1');
            setGlobalState('profile', response.data)
        };

        getProfile();
    }, [])

    const profile = useGlobalState('profile');

    return (
        <Container>
            <Typography variant="h4">
                PROFILE
            </Typography>
            <UserList arr={profile[0]}/>
        </Container>
    )
};

export default Profile;