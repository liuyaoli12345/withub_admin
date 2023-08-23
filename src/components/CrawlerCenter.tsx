import React from 'react';
import Deposits from './Deposits';
import CrawingHistory from './CrawingHistory';
import Paper from '@mui/material/Paper';
import Title from './Title';
import 'recharts';

export default function ClawlerCenter() {
    return (
        <React.Fragment>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                <Deposits />
            </Paper>
            <br></br>
            <Title>爬取历史记录</Title>
            <CrawingHistory/>
        </React.Fragment>
    )
}