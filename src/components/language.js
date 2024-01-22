import React from "react";
import { Tooltip, Grid, Typography } from '@mui/material';
import htmlImage from '../image/html.jpg';
import cssImage from '../image/css.jpg';
import javascriptImage from '../image/Javascript.jpg';
import pythonImage from '../image/python.jpg';
import nodeImage from '../image/node.jpg';
import djangoImage from '../image/django.jpg';
import bootstrap from '../image/bootstrap.jpg';
import sqlImg from '../image/sql.jpg';
import AWS_logo from '../image/AWS_logo.png'
import React_logo from '../image/React_logo.png'
import useOnScreen from "../customhook/useOnScreen";

const languages = [
    { imgSrc: htmlImage, name: 'HTML', years: 3, }, 
    { imgSrc: cssImage, name: 'css', years: 3, }, 
    { imgSrc: javascriptImage, name: 'javascript', years: 2, }, 
    { imgSrc: pythonImage, name: 'python', years: 1.5, }, 
    {imgSrc: nodeImage, name: 'Node', years: 3,},
    {imgSrc: djangoImage, name: 'Node', years: 3,},
    {imgSrc: bootstrap, name: 'Node', years: 3,},
    {imgSrc: sqlImg, name: 'Node', years: 3,},
    {imgSrc: AWS_logo, name: 'aws', years: 1, comment: ''},
    {imgSrc: React_logo, name: 'react', years: 1, comment: ''},

];

function LanguageItem({ imgSrc, name, years, comment }) {
  return (
    <Tooltip title={`${name}\n使用年数: ${years}年\n`}>
      <div style={{ width: '20vw', height: '20vw', maxWidth: '180px', maxHeight: '180px' }}>
        <img src={imgSrc} alt={name} style={{ width: '100%', height: '100%' }} />
      </div>
    </Tooltip>
  );
}

function LanguageGrid() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5});

  return (
    <div style={{ position: 'relative' }}>
      <div ref={ref} style={{animation: isVisible? 'fadeIn 3000ms ease-in-out' : 'none'}}>
      <Typography variant="h3" 
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
                }}>
        Languages
      </Typography>
      </div>
        <Grid container spacing={2}>
          {languages.map((lang) => (
            <Grid item xs={6} sm={6} md={6} lg={2} key={lang.name}>
              <LanguageItem {...lang} />
            </Grid>
          ))}
        </Grid>
    </div>
  );
}

export default LanguageGrid;

