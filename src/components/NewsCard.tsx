import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const NewsCard: (props: { title: string; body: string }) => JSX.Element = (props: {title: string; body: string}) => {
    return (
        <Card sx={{ minWidth: 275 }} className='NewsCard'>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
