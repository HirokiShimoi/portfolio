import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import workImg from '../image/samplework.jpg'

const sampleWorks = [
    { title: '作品1', description: '作品1の説明', imageUrl: workImg },
    { title: '作品2', description: '作品2の説明', imageUrl: workImg },
    // 他の作品データ...
  ];
  

  function Works() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          作品
        </Typography>
        <Grid container spacing={4}>
          {sampleWorks.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={work.imageUrl}
                  alt={work.title}
                />
                <CardContent>
                  <Typography variant="h5">{work.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {work.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  
  export default Works;
  