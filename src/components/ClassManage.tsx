import * as React from 'react';
import Title from './Title';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import classCard from './ClassCard'
import { ClassItem } from '@/types'
import { getClass } from '@/api/ClassInfo'
import SearchBar from './SearchBar'

export default function Main() {
    return (
        <React.Fragment>
            <Title>课程管理界面可以提供管理课程</Title>
            <SearchBar/>
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