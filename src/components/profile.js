import React, { useState } from 'react';
import sampleImg from '../image/profile_photo.jpg';
import { Grid, Typography } from '@mui/material';
import coverImg from '../image/toppage_cover.jpg';
import Header from './header';
import useOnScreen from '../customhook/useOnScreen';


function Profile() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5});
  return (
    <>
    <Header />
    <div style={{ 
        backgroundImage: `url(${coverImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh'  
    }}>
    </div>
    <div className="shapedividers_com-2537"></div>
    <div ref={ref} style={{animation: isVisible? 'fadeIn 3000ms ease-in-out' : 'none'}}>
    <Typography 
        variant="h3" 
        sx={{
          marginTop: '60px',
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
        PROFILE
    </Typography>
    </div>
      <Grid container spacing={3} alignItems="center" style={{ padding: '20px' }}>
        {/* 画像部分 */}
        <Grid item xs={12} sm={4}>
          <img src={sampleImg} alt="Sample" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>

        {/* プロフィール部分 */}
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" style={{ fontSize: '1.2rem', lineHeight: '2'}} sx={{
          marginTop: '60px',
          animation: 'fadeIn 3000ms ease-in-out',
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
            1993年生まれの奈良県奈良市出身の30歳。<br />
            近畿大学経済学部総合経済政策学科を卒業。<br />プロスノーボーダーになる夢を追いかけるも怪我で挫折。<br />
            飲食業界で5年間勤務した後、現在は和歌山県の酒屋に就職。<br/>
            趣味で学んでいたプログラミングを活かし主にWeb制作を行う。<br/>
          </Typography>
          <Typography style={{marginTop: '20px'}}>
          趣味：プログラミング、ワイン、ウイスキーのコレクション、キノコ狩り、娘との遊び<br />
          </Typography>
        </Grid>
      </Grid>
      <div className='shapedividers_com-8042'></div>
      </>
  );
}

export default Profile;
