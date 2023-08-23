import React from 'react';
import sampleImg from '../image/profile_photo.jpg';
import { Grid, Typography } from '@mui/material';
import coverImg from '../image/toppage_cover.jpg';
import Header from './header';

function Profile() {
  return (
    <>
    <Header />
    <div style={{ 
        backgroundImage: `url(${coverImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh'  
    }}>
    </div>
    <Typography variant="h3" style={{ marginTop: '60px' }}>
        PROFILE
    </Typography>
      <Grid container spacing={3} alignItems="center" style={{ padding: '20px' }}>
        {/* 画像部分 */}
        <Grid item xs={12} sm={4}>
          <img src={sampleImg} alt="Sample" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>

        {/* プロフィール部分 */}
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" style={{ fontSize: '1.2rem', lineHeight: '2'}}>
            1993年生まれの奈良県奈良市出身の29歳。<br />
            近畿大学経済学部を卒業したもののプロスノーボーダーになる夢を追いかけるも怪我で挫折。<br />
            飲食業界で5年間勤務した後、現在は和歌山県の酒屋に就職。<br/>
            CMSを利用したECサイトのコーディングやLINEを使用したSNSマーケティング、<br />
            キントーンを使用したCRMや社内アプリを作成し業務改善などを行っております。<br />
            小売業ですのでもちろん店舗の接客や業務店対応、納品作業、事務処理まで色々とやっております。<br />
            趣味：レアなワイン、ウイスキーのコレクション、キノコ狩り<br />
          </Typography>
        </Grid>
      </Grid>
      </>
  );
}

export default Profile;
