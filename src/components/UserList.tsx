import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";

const UserList: (props: { arr: any[] }) => JSX.Element = (props: { arr: any[] }) => {

    const printProfile = () => {
        const printArr = [];

        const flatObject = ({obj}: { obj: {} }): {} => {
            function flat(o: { obj: {} } | {}): {}[][] {
                return Object.entries(o).flatMap(([key, val]) => {

                    if (typeof val === 'object') return flat(val);

                    return [
                        [key, val]
                    ];
                });
            }

            return Object.fromEntries(flat(obj));
        };

        for (const [key, value] of Object.entries(flatObject({obj: props.arr}))) {
            printArr.push(`${key}: ${value}`);
        }

        return printArr.map((elem, index) => {
            return (
                <Typography key={index}>
                    {elem}
                </Typography>
            )
        })
    }

    return (
        <Container>
                {printProfile()}
        </Container>
    );
};

export default UserList;
