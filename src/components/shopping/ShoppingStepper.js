import * as React from 'react';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import EastIcon from '@mui/icons-material/East';
import { BsCheckSquareFill } from 'react-icons/bs';

import LensIcon from '@mui/icons-material/Lens';

import Steps from './Steps';
import ShoppingMainTitle from './ShoppingMainTitle'

const steps = ['Cart', 'Shipping & payment', 'Review'];

export default function ShoppingStepper({setIsUser}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const navigate = useNavigate();

  const isStepOptional = (step) => {
    return step === "";
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (e) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    if (e.target.textContent === 'Finish') {
      navigate('/ordersuccess')
    }
    // e.target.textContent === 'Finish' ? navigate('/ordersuccess') : ""
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled('div')(({  ownerState }) => ({
    backgroundColor: '#fff',
    zIndex: 1,
    color: '#C4CDD5',
    // width: 50,
    // height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#454F5B'
    }),
    ...(ownerState.completed && {
    color: '#5C6AC4',
    borderRadius: 'unset',
    }),
  }));

  const StepIcon = ({ label }) => (
    <div style={{ position: 'relative' }}>
      <LensIcon />
      <div style={{ color: 'white', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', textAlign: 'center', lineHeight: '24px', fontSize: '12px' }}>{label}</div>
    </div>
  );


  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    console.log(active);
    console.log(completed);
    let icon = <StepIcon label={props.icon} />
    if (completed) {
      icon =  <BsCheckSquareFill />
    }
    const icons = {
      1: icon,
      2: icon,
      3: icon,
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  return (
    <>
      {activeStep === 0 ? 
        <ShoppingMainTitle
          text="Shopping Cart"
          description="This is your cart based on your item you want to buy."
          setIsUser={setIsUser}
        />
      : activeStep === 1 ? 
        <ShoppingMainTitle text="Shipping & Payment" setIsUser={setIsUser} />
      : activeStep === 2 ?
        <ShoppingMainTitle text="Review Order" setIsUser={setIsUser} />
      : ""
      }
      <Box sx={{ width: '100%' }}>
        <Stepper 
          activeStep={activeStep}
          sx={{ background: 'white', padding: '18px', borderRadius: '8px', m: '70px 0 36px' }}
          connector={<EastIcon style={{width: '12px', margin: '0 25px 0 35px', color: '#919EAB'}} />} 
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step 
                key={label} 
                {...stepProps}
                sx={{
                  '& .MuiStepLabel-label':
                    {
                      color: '#959EAD', // Just text label (not active)
                    },
                  '& .MuiStepLabel-label.Mui-completed':
                    {
                      color: '#5C6AC4', // Just text label (COMPLETED)
                    },
                  '& .MuiStepLabel-label.Mui-active':
                    {
                      color: '#161D25', // Just text label (ACTIVE)
                    },
                }}
              >
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              <Steps activeStep={activeStep} handleNext={handleNext} />
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}
