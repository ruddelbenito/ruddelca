import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Home page',
        imgPath:
            './assets/images/psa-drafts/psa-home.png',
    },
    {
        label: 'Games page',
        imgPath:
            './assets/images/psa-drafts/psa-games.png',
    },
    {
        label: 'Standings Page',
        imgPath:
            './assets/images/psa-drafts/psa-standings.png',
    },
    {
        label: 'Standings Expanded',
        imgPath:
            './assets/images/psa-drafts/psa-standings-2.png',
    },
    {
        label: 'About Page',
        imgPath:
            './assets/images/psa-drafts/psa-about.png',
    },
];

function PSACarousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1, }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: '#344E41',
                    color: '#DAD7CD',
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                    bgcolor: '#344E41',
                    color: '#DAD7CD'
                }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        sx={{
                            color: '#DAD7CD'
                        }}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeftIcon />
                        ) : (
                            <KeyboardArrowRightIcon />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{
                            color: '#DAD7CD'
                        }}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRightIcon />
                        ) : (
                            <KeyboardArrowLeftIcon />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default PSACarousel;