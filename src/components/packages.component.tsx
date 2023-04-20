import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Button } from './button.component';
import { packagesOne, packagesTwo, packagesThree } from '../assets';

interface PackagesComponentProps {
    title: string;
    sessions: number;
     description: string;
      path: string;
    }

export const PackagesComponent = ({title, sessions, description, path}: PackagesComponentProps) => {
  const images = {
    image1: packagesOne, 
    image2: packagesTwo, 
    image3: packagesThree,
  }
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140px"
          image={images.image3}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Number of sessions {sessions}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{ backgroundColor: '#10403b', color: 'white', borderColor: '#8AA6A3' }} variant='outlined'>DETAILS</Button>

      </CardActions>
    </Card>
  );
}