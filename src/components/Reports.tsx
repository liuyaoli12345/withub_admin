import * as React from 'react';
import Title from './Title';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

export default function Main() {
    return (
        <React.Fragment>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 180,
                    width: 240,
                }}
            >
                <Title>报告界面生成每日，每周，每月的网站数据报告</Title>
            </Paper>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Title>我还没想报告界面该放些什么呢</Title>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Title>我还没想报告界面该放些什么呢</Title>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Title>我还没想报告界面该放些什么呢</Title>
                    </Paper>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}