import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ClassItem} from '@/types'

export default function ClassCard(classItem: ClassItem) {
    console.log(classItem)
    const { id, name, teacher, time, rate, location } = classItem
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <Card sx={{ 
            minWidth: 120,
            display: 'flex',
            flexDirection: 'column',
            }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {id}
                </Typography>
                <Typography variant="h5" component="div">
                    {name + "   " + "   " + rate}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {teacher}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {location}
                </Typography>
                <Typography variant="body2">
                    {time.map((timeSlot, index) => (
                        timeSlot + (index === time.length - 1 ? '' : ',')
                    ))}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}