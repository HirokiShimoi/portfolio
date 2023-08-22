import React from 'react';
import sampleImg from '../image/sample-ball-image.png';
import { Grid, Typography } from '@mui/material';
import coverImg from '../image/cover.jpg';

function Profile() {
  return (
    <div style={{ backgroundImage: `url(${coverImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Grid container spacing={3} alignItems="center" style={{ padding: '20px' }}>
        {/* 画像部分 */}
        <Grid item xs={12} sm={4}>
          <img src={sampleImg} alt="Sample" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>

        {/* プロフィール部分 */}
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom>
            PROFILE
          </Typography>
          <Typography variant="body1">
            ここにプロフィールの文章を書きます。<br />
            自分の経歴や興味を持っていること、<br />
            プログラミングの経験や得意な技術など、<br />
            読者に伝えたい内容を自由に記述してください。<br />
            10行程度の文章を想定していますが、<br />
            必要に応じて行数を調整することができます。<br />
            このサンプルの文章は適当なものなので、<br />
            実際のコンテンツに合わせて変更してください。<br />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
