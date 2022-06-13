import {Container, Typography} from "@mui/material";
import CreateNewsForm from "../components/CreateNewsForm";

const CreateNews: () => JSX.Element = () => {
    return (
        <Container>
            <Typography variant="h4">
                CREATE NEWS
            </Typography>
            <CreateNewsForm/>
        </Container>
    )
};

export default CreateNews;