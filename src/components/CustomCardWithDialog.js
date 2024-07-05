import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomDialog from './customDialog';

const CustomCardWithDialog = ({ title, id, children }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card id={id} className="custom-card section-box" style={{ backgroundColor: '#333', textAlign: 'center', cursor: 'pointer' }} onClick={handleCardClick}>
        <CardContent>
          <Typography variant="h7" component="div" style={{ color: '#fff', fontFamily: 'Open Sans, sans-serif', fontWeight:'bold' }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
      <CustomDialog open={dialogOpen} handleClose={handleCloseDialog} title={title} content={children}/>
    </>
  );
};

export default CustomCardWithDialog;