import React from "react";
import { Tooltip, Grid } from '@mui/material';
import htmlImage from '../image/html.jpg';
import cssImage from '../image/css.jpg';
import javascriptImage from '../image/Javascript.jpg';
import pythonImage from '../image/python.jpg';
import nodeImage from '../image/node.jpg';
import djangoImage from '../image/django.jpg';

const languages = [
    { imgSrc: htmlImage, name: 'HTML', years: 3, comment: 'フロントエンド開発に使用' }, 
    { imgSrc: cssImage, name: 'css', years: 3, comment: 'フロントエンド開発に使用' }, 
    { imgSrc: javascriptImage, name: 'javascript', years: 2, comment: 'フロントエンド開発に使用' }, 
    { imgSrc: pythonImage, name: 'python', years: 1, comment: 'フロントエンド開発に使用' }, 
];

const flamework = [
    {imgSrc: nodeImage, name: 'Node', years: 3, comment: 'フロントエンド開発に使用'},
    {imgSrc: djangoImage, name: 'Node', years: 3, comment: 'フロントエンド開発に使用'},
]

function LanguageItem({ imgSrc, name, years, comment }) {
  return (
    <Tooltip title={`${name}\n使用年数: ${years}年\n${comment}`}>
      <div style={{ width: '25vw', height: '25vw', maxWidth: '200px', maxHeight: '200px' }}>
        <img src={imgSrc} alt={name} style={{ width: '100%', height: '100%' }} />
      </div>
    </Tooltip>
  );
}

function LanguageGrid() {
  return (
    <div style={{ position: 'relative' }}>
        <h2>使用できる言語</h2>
        <Grid container spacing={2}>
          {languages.map((lang) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={lang.name}>
              <LanguageItem {...lang} />
            </Grid>
          ))}
        </Grid>
        <h2>使用できるフレームワーク</h2>
        <Grid container spacing={2}>
          {flamework.map((lang) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={lang.name}>
              <LanguageItem {...lang} />
            </Grid>
          ))}
        </Grid>
    </div>
  );
}

export default LanguageGrid;

