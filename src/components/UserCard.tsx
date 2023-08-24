import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {UserItem} from '@/types'
import Avatar from '@mui/material/Avatar';

export default function ClassCard(userItem: UserItem) {
    // console.log(classItem)
    const { id, name, avatar } = userItem
    return (
        <Card sx={{ 
            minWidth: 120,
            display: 'flex',
            flexDirection: 'column',
            }}>
            <CardContent>
                <Avatar alt={name} src={avatar} />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {id}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">详细信息</Button>
            </CardActions>
        </Card>
    );
}