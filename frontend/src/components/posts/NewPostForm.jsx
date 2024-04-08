import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

export default function NewPostForm({
    handleSumbit,
    title,
    content,
    image_path,
    nameButton = 'Agregar'
}) {
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSumbit(e.target);
                }}
            >
                <Grid container spacing={3}
                    sx={{
                        backgroundColor: '#2A3142', padding: '2%',
                        marginRight: '80px'
                    }}>
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
                        <Button type="submit" variant="contained" fullWidth>
                            {nameButton}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
