import React, { useState }from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import workImg from '../image/samplework.jpg'
import bcartImg from '../image/bcart.jpg'
import sakesearchImg from '../image/sakesearchapp.jpg'
import paeriaImg from '../image/paeria_hp.png'
import investory from '../image/investory.png'
import kagimoto from '../image/kagimoto.png'
import product from '../image/product.jpg'
import { Javascript } from '@mui/icons-material';
import useOnScreen from '../customhook/useOnScreen';
import { Link } from 'react-router-dom'
import ImageList from './imagelist';

const sampleWorks = [
    { title: '業務店様専用 ECサイト',
     description: 'BtoB事業の一環としてスタートした飲食店様専用のECサイトです。B-CARTというCMSを採用しフロントエンドのコーディングはすべて1人でやり切りました。', 
     language: 'HTML,CSS,Javascript,Bootstrap,BCart',
     imageUrl: bcartImg,url: 'https://www.kagimoto-b.com/' },
    { title: '在庫・発注管理アプリ', 
      description: '社内の在庫・発注管理ができる社員専用アプリです。店舗、配達業務、発送業務、2つのECサイトなど様々な在庫変動にも対応したアプリです。', 
      language: 'React,TypeScript,Python,Django,AWS ',
      imageUrl: investory , url: 'http://54.248.34.100/'},
      { title: '自社商品検索アプリ', 
      description: 'お客様が店内の商品を探し出せるような検索アプリを開発。接客時間の短縮を目的とした業務改善の一環に繋がっています。', 
      language: 'Javascript,React,Typescript,Node.js,MongoDB,AWS',
      imageUrl: sakesearchImg },
    { title: '有限会社酒やの鍵本 ECサイト', 
      description: 'こちらのサイトは私が更新することはありませんが、コードのエラー解決やコンテンツの追加などを行ったりすることがあります。', 
      language: 'HTML,CSS,MakeShop(CMS) ',
      imageUrl: kagimoto, url: 'https://www.kagimoto.com/' },
    { title: 'Photoshop 加工画像', 
      description: 'LINE配信やECサイトに掲載する画像をPhotoshopで作成しました。週に2回必ず4～8アイテムほど作成しております', 
      language: 'Photoshop ',
      imageUrl:product ,url : '/imagelist' },
      { title: 'チームパエリア  ホームページ', 
      description: '私の嫁さんが講師をしているダンスチームのホームページです。Bootstrapの練習もかねて作成しました。', 
      language: 'HTML CSS Javascript bootstrap ',
      imageUrl: paeriaImg,url: 'https://paeriahp.s3.ap-northeast-1.amazonaws.com/paeria+hp/%E3%83%91%E3%82%A8%E3%83%AA%E3%82%A2%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80/index.html' },
  ];
  

  function Works() {
    const [ref, isVisible] = useOnScreen({ threshold: 0.5});

    const handleCardClick = (url) => {
      window.open(url, '_blank');
    };

    return (
      <>
        <div ref={ref} style={{animation: isVisible? 'fadeIn 3000ms ease-in-out' : 'none'}}>
            <Typography 
                variant="h3" 
                sx={{
                marginTop: '120px',
                marginBottom: '120px',
                letterSpacing: '0.3em', // ここで文字間隔を調整
                '@keyframes fadeIn': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                }
                }}
            >
          The Works
        </Typography>
        </div>
        <Grid container spacing={4}>
          {sampleWorks.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{margin: '10px'}} onClick={() => handleCardClick(work.url)}>
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
      </>
    );
  }
  
  export default Works;
  