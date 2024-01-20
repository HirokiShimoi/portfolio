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
            <div ref={ref} style={{animation: isVisible ? 'fadeIn 3000ms ease-in-out' : 'none'}}>
                <Typography 
                    variant="h3" 
                    sx={{
                        marginTop: '60px',
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
                <Paper>
                    {activeStep === 0 && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography style={{ fontSize: '1.2rem', lineHeight: '2'}}sx={{marginTop: '60px'}}>
                                    <Typography variant="h6" component="h2">
                                        飲食店様専用ECサイト開発 - Web制作
                                    </Typography>
                                    <Typography>
                                        2022年5月 - 現在
                                    </Typography>
                                    <ul>
                                        <li>HTML,CSS,JavaScriptを使用した全てのページをコーディング。</li>
                                        <li>Adobe Photoshopを活用して、サイトのビジュアル要素をデザイン。</li>
                                        <li>要件定義において、クライアントのニーズを正確に理解し、機能仕様を策定。</li>
                                        <li>サイトの運用とメンテナンスを行い、定期的なアップデートとバグの修正を実施。</li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography style={{ fontSize: '1.2rem', lineHeight: '2'}}sx={{marginTop: '60px'}}>
                                    <Typography variant="h6" component="h2">
                                        在庫管理アプリ開発 - Webアプリ制作
                                    </Typography>
                                    <Typography>
                                        2023年4月 - 現在
                                    </Typography>
                                    <ul>
                                        <li>React,TypeScript,Python,Django,PostgreSQL,AWS</li>
                                        <li>自身のスキルアップのため個人で開発し現場に仮導入。</li>
                                        <li>AWSにてデプロイを行い、現在フィードバックを得てテストを行いながら運用。</li>
                                        <li>紙ベースの在庫管理からデジタル化へ社内DX化に貢献</li>
                                    </ul>
                                </Typography>
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
            </div>
        </>
    );
}

export default Experience;
