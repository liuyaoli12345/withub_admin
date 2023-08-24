import * as React from 'react';
import Title from './Title';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classCard from './ClassCard'
import { ClassItem } from '@/types'
import { getClass } from '@/api/ClassInfo'
import SearchBar from './SearchBar'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Main() {
    return (
        <React.Fragment>
            <Box sx={{ width: '100%' }}>
                <Stack direction="row" spacing={2} sx={{width: '100%'}}>
                    <SearchBar sx={{width: '85%'}} />
                    <Button variant="contained" sx={{width: '15%'}} >手动添加课程</Button>
                </Stack>
            </Box>
            <br></br>
            {classCards()}
        </React.Fragment>
    )
}

function classCards() {
    const [showClassNum, setShowClassNum] = React.useState(5)
    const [isDataReady, setIsDataReady] = React.useState(false);
    const [classItems, setClassItems] = React.useState<ClassItem[]>([])
    const renderRandomClassCards = (num: number) => {
        const classCards: any = []
        for (let i = 0; i < num; i++) {
            classCards.push(
                <Grid item xs={3} lg={9}>
                    {classCard(classItems[i])}
                </Grid>)
        }
        return classCards
    }

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                for (let i = 0; i < showClassNum; i++) {
                    const response = await getClass(1);
                    classItems.push(response)
                }
                setIsDataReady(true)
            } catch (error) {
                console.error('Error fetching class data:', error);
            }
        };

        fetchData();
    }, [showClassNum])

    return (
        <div>
             {isDataReady ? (
                <Grid container spacing={3}>
                    {renderRandomClassCards(showClassNum)}
                </Grid>
            ) : (
                <Title>Loading...</Title>
            )}
        </div>
        )
}