import NewsCard from "../components/NewsCard";
import {Container, Typography} from "@mui/material";
import axiosApi from "../AxiosApi";
import {useEffect} from "react";
import {useGlobalState, setGlobalState} from "../state";

const Main: () => JSX.Element = () => {
    const news = useGlobalState('news')[0];
    const localNews = useGlobalState('localNews')[0];

    useEffect(() => {
        const getPosts = async () => {
            const response = await axiosApi.get('/posts');
            setGlobalState('news', response.data);
        };

        getPosts();
    }, [news.length])

    const allNews = news.concat(localNews);

    const printNews = () => {
        return allNews.map((elem: { id: number; title: string; body: string }) => {
            return (
                <NewsCard
                    key={elem.id}
                    title={elem.title}
                    body={elem.body}
                />
            )
        })
    };

    return (
        <Container>
            <Typography variant="h4">
                MAIN PAGE
            </Typography>
            <div className='list'>
                {printNews()}
            </div>
        </Container>
    );
};

export default Main;