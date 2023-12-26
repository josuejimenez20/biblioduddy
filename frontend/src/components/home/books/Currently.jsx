import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Currently() {

  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={10}>
          <Typography variant="h2" mt={2} textAlign='center'>
            Libros Actualmente Leyendo
          </Typography>
        </Grid>
        <Grid xs={2} mt={4}>
          <Button variant="contained" fullWidth
            onClick={() => {
              navigate('/Home/Currently/Form')
            }}>Agregar</Button>
        </Grid>
      </Grid>
    </>
  );
}
