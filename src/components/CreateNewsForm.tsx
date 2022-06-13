import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {setGlobalState, useGlobalState} from "../state";
import {nanoid} from 'nanoid';

const CreateNewsForm: () => JSX.Element = () => {
    const newsTitle = useGlobalState('newsTitle')[0];
    const newsBody = useGlobalState('newsBody')[0];
    const localNews = useGlobalState('localNews')[0];

    const submitForm = (e: any) => {
        e.preventDefault();

        setGlobalState('localNews', () => {
            return [...localNews].concat([{title: newsTitle, body: newsBody, id: nanoid()}])
        });
        setGlobalState('newsTitle', '');
        setGlobalState('newsBody', '');
    }

    return (
        <form onSubmit={submitForm} className='form'>
            <TextField style={{marginBottom: '20px'}} value={newsTitle} onChange={(e) => setGlobalState('newsTitle', e.target.value)}
                       id="outlined-basic" label="Title" variant="outlined"/>
            <TextField style={{marginBottom: '20px'}} value={newsBody} onChange={(e) => setGlobalState('newsBody', e.target.value)}
                       id="outlined-basic" label="Body" variant="outlined"/>
            <Button disabled={!(newsTitle.length && newsBody.length)} type='submit'
                    variant="contained">Contained</Button>
        </form>
    );
};

export default CreateNewsForm;
