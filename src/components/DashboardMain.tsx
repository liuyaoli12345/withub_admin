import * as React from 'react';
import Title from './Title';
import Paper from '@mui/material/Paper'
import Chart from './Chart'

export default function Main() {
    return (
        <React.Fragment>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480,
                }}
            >
                <Title>计划在这里放一个监控大屏，展示浏览量等等</Title>
                <Chart/>
            </Paper>
        </React.Fragment>
    )
}