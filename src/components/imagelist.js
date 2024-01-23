import React from 'react';
import {Grid, Typography} from '@mui/material';
import image_1 from '../image/imagelist_1.jpg'
import image_2 from '../image/imagelist_2.webp'
import image_3 from '../image/imagelist_3.webp'
import image_4 from '../image/imagelist_4.webp'
import image_5 from '../image/imagelist_5.jpg'
import image_6 from '../image/imagelist_6.webp'
import image_7 from '../image/imagelist_7.webp'
import image_8 from '../image/imagelist_8.webp'
import image_9 from '../image/imagelist_9.webp'
import image_10 from '../image/imagelist_10.webp'
import image_11 from '../image/imagelist_11.webp'
import image_12 from '../image/imagelist_12.webp'
import image_13 from '../image/imagelist_13.webp'
import image_14 from '../image/imagelist_14.webp'
import image_15 from '../image/imagelist_15.webp'

const imageUrls = [
    image_1,image_2,image_3,image_4,image_5,image_6,image_7,image_8,image_9,image_10,image_11,image_12,image_13,image_14,image_15 
];

function ImageList() {
  return (
    <div>
      <Typography variant="h3" 
                sx={{
                marginTop: '120px',
                marginBottom: '30px',
                letterSpacing: '0.3em', }}>
      PhotoShop 作品集
      </Typography>
      <Typography variant="h5" 
                sx={{
                marginBottom: '120px',
                letterSpacing: '0.3em', }}>
      カメラマンが撮影した画像を加工編集し、HPやLINEなどで使用しております。           
      </Typography>
      <Grid container spacing={2}> {/* コンテナのGrid */}
        {imageUrls.map((url, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}> {/* 各アイテムのGrid */}
            <div style={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%', // 幅は100%に設定
              height: '250px', // 高さは固定
              margin: '10px'
            }} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ImageList;
