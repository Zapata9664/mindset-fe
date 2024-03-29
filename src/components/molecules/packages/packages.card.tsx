import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Button } from '../../atoms/button.component';
import { packagesThree } from '../../../assets';

interface PackagesComponentProps {
    title: string;
    sessions: number;
     description: string;
      path: string;
    }

export const PackagesCard = ({title, sessions, description, path}: PackagesComponentProps) => {  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140px"
          image={packagesThree}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{ backgroundColor: '#8AA6A3', color: 'white', borderColor: '#8AA6A3' }} variant='outlined'>COMPRAR</Button>

      </CardActions>
    </Card>
  );
}