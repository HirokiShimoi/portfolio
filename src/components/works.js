import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import workImg from '../image/samplework.jpg'
import bcartImg from '../image/bcart.jpg'
import sakesearchImg from '../image/sakesearchapp.jpg'
import paeriaImg from '../image/paeria_hp.png'
import { Javascript } from '@mui/icons-material';

const sampleWorks = [
    { title: '業務店様専用 自社ECサイト',
     description: 'BtoB事業の一環としてスタートした飲食店様専用のECサイトです。B-CARTというCMSを採用しフロントエンドのコーディングはすべて1人でやり切りました。', 
     language: 'HTML,CSS,Javascript,Bootstrap',
     imageUrl: bcartImg },
    { title: '自社商品検索アプリ', 
      description: 'お客様が店内の商品を探し出せるような検索アプリを開発。接客時間の短縮を目的とした業務改善の一環に繋がっています。', 
      language: 'Javascript,React,Typescript,Node.js,MongoDB,Bootstrap,AWS amplify',
      imageUrl: sakesearchImg },
    { title: 'チームパエリア　ホームページ', 
      description: '私の嫁さんが講師をしているダンスチームのホームページです。Bootstrapの練習もかねて作成しました。', 
      language: 'HTML CSS Javascript bootstrap ',
      imageUrl: paeriaImg },
  ];
  

  function Works() {
    return (
      <div>
        <Typography variant="h3" style={{ margin: '100px 0' }}>
          作品
        </Typography>
        <Grid container spacing={4}>
          {sampleWorks.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{margin: '10px'}}>
                <CardMedia
                  component="img"
                  height="300"
                  image={work.imageUrl}
                  alt={work.title}
                />
                <CardContent style={{height: '150px', padding: '16px'}}>
                  <Typography variant="h5" style={{margin: '10px'}}>{work.title}</Typography>
                  <Typography variant="body1" color="textSecondary" style={{marginBottom: '15px'}} >
                    {work.description }<br/>
                  </Typography>
                  <Typography variant="body1" color="textSecondary" >
                  {work.language}
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
  