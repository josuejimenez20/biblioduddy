import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import form from '../themes/add';

export default function NewPostForm({
    handleSumbit,
    title,
    content,
    image_path,
    nameButton = 'Agregar'
}) {
    return (
        <ThemeProvider theme={form}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSumbit(e.target);
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField id="title" title="Titulo" fullWidth
                            label="Titulo" variant="outlined" defaultValue={title}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="content" name="content" fullWidth
                            label="Contenido" variant="outlined" defaultValue={content} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField id="image_path" name="image_path"
                            fullWidth label="Imagen" variant="outlined" defaultValue={image_path} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" fullWidth>
                            {nameButton}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </ThemeProvider>
    )
}
