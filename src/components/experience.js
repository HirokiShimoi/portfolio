import React, { useState } from 'react';
import useOnScreen from "../customhook/useOnScreen";
import { Grid, Typography,Paper, MobileStepper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

function Experience() {
    const [ref, isVisible] = useOnScreen({threshold: 0.5});
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = 3; // 仮に2つの経験があるとします

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // JSX を返す際は括弧 () で囲む
    return (
        <>
            <div ref={ref} style={{animation: isVisible ? 'fadeIn 3000ms ease-in-out' : 'none',}}>
                <Typography 
                    variant="h3" 
                    sx={{
                        marginTop: '100px',
                        marginBo: '100px',
                        letterSpacing: '0.2em', // 文字間隔の調整
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
                    Work Experience
                </Typography>
                </div>
                <Paper style={{marginTop : '30px'}}>
                    {activeStep === 0 && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <Paper style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                                <Typography style={{ fontSize: '1.2rem', lineHeight: '2'}}sx={{marginTop: '60px'}}>
                                    <Typography variant="h6" component="h2">
                                        飲食店様専用ECサイト開発 - Web制作
                                    </Typography>
                                    <Typography>
                                        2022年5月 - 現在
                                    </Typography>
                                    <ul style={{listStyleType: 'none', padding : 0}}>
                                        <li>HTML,CSS,JavaScriptを使用した全てのページをコーディング。</li>
                                        <li>Adobe Photoshopを活用して、サイトのビジュアル要素をデザイン。</li>
                                        <li>要件定義において、クライアントのニーズを正確に理解し、機能仕様を策定。</li>
                                        <li>サイトの運用とメンテナンスを行い、定期的なアップデートとバグの修正を実施。</li>
                                    </ul>
                                </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Paper style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                                <Typography style={{ fontSize: '1.2rem', lineHeight: '2'}}sx={{marginTop: '60px'}}>
                                    <Typography variant="h6" component="h2">
                                        在庫管理アプリ開発 - Webアプリ制作
                                    </Typography>
                                    <Typography>
                                        2023年4月 - 現在
                                    </Typography>
                                    <ul style={{listStyleType: 'none', padding : 0}}>
                                        <li>React,TypeScript,Python,Django,PostgreSQL,AWS</li>
                                        <li>自身のスキルアップのため個人で開発し現場に仮導入。</li>
                                        <li>AWSにてデプロイを行い、現在フィードバックを得てテストを行いながら運用。</li>
                                        <li>紙ベースの在庫管理からデジタル化へ社内DX化に貢献</li>
                                    </ul>
                                </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    )}
                </Paper>
                <Paper>
                    {activeStep === 1 && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <Paper style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                                <Typography style={{ fontSize: '1.2rem', lineHeight: '2'}}sx={{marginTop: '60px'}}>
                                    <Typography variant="h6" component="h2">
                                        CRM - Kintone
                                    </Typography>
                                    <Typography>
                                        2022年5月 - 現在
                                    </Typography>
                                    <ul style={{listStyleType: 'none', padding : 0}}>
                                        <li>BtoBおよびCRM事業の一環としてKINTONEを導入。</li>
                                        <li>顧客台帳や対応履歴、商品マスタなどを紐づけたアプリを作成。</li>
                                        <li>営業だけが持っていた情報の共有化や脱属人化に貢献。</li>
                                        <li>飲食店様専用サイトオープンを機に本格的に軌道に乗せることに成功。</li>
                                    </ul>
                                </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Paper style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                                <Typography style={{ fontSize: '1.2rem', lineHeight: '2'}}sx={{marginTop: '60px'}}>
                                    <Typography variant="h6" component="h2">
                                        商品検索アプリ - Webアプリ制作
                                    </Typography>
                                    <Typography>
                                        2023年4月 - 現在
                                    </Typography>
                                    <ul style={{listStyleType: 'none', padding : 0}}>
                                        <li>React,TypeScript,Node.js,Mongodb</li>
                                        <li>一般のお客様が店内の商品を気軽に検索できるアプリを作成。</li>
                                        <li>接客時間の短縮を目的とした業務改善の一環に繋がっています</li>
                                        <li>(現在はメンテナンス中のため閉鎖中)</li>
                                    </ul>
                                </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    )}
                </Paper>
                <Paper>
                    {activeStep === 2 && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <Paper style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                                <Typography style={{ fontSize: '1.2rem', lineHeight: '2'}}sx={{marginTop: '60px'}}>
                                    <Typography variant="h6" component="h2">
                                        データ成型 - Python,Pandas
                                    </Typography>
                                    <Typography>
                                        2021年5月 - 現在
                                    </Typography>
                                    <ul style={{listStyleType: 'none', padding : 0}}>
                                        <li>部門別売上データ、過去の同じ曜日での売上比較、商品マスタ作成など</li>
                                        <li>Python,Pandasを使いコードを作成し業務分析・営業事務に使用。</li>
                                        <li>既存の販売システムアプリで落としたCSVデータだけでは非常に面倒だった</li>
                                        <li>データ成型をコードを再利用することにより業務効率化に貢献。</li>
                                    </ul>
                                </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Paper style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                                <Typography style={{ fontSize: '1.2rem', lineHeight: '2'}}sx={{marginTop: '60px'}}>
                                    <Typography variant="h6" component="h2">
                                        画像編集 - PhotoShop
                                    </Typography>
                                    <Typography>
                                        2021年5月 - 現在
                                    </Typography>
                                    <ul style={{listStyleType: 'none', padding : 0}}>
                                        <li>新商品案内画像や、LINEを利用した販売促進やDM用のチラシ作成など</li>
                                        <li>幅広い用途に使われる画像の編集を行う。</li>
                                        <li>画像の魅せ方、フォントの使い方、キャッチコピーなど</li>
                                        <li>エンドユーザーに興味を持って頂けるかを日々勉強中。</li>
                                    </ul>
                                </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    )}
                </Paper>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />
        </>
    );
}

export default Experience;
