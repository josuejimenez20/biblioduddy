import React from 'react';
import { TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function NewBookForm({
    handleSumbit,
    name,
    author,
    gender,
    publication_date,
    editorial,
    image_path,
    nameButton = 'Agregar' }) {
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSumbit(e.target);
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField id="name" name="name" fullWidth
                            label="Nombre" variant="outlined" defaultValue={name} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="author" name="author" fullWidth
                            label="Autor" variant="outlined" defaultValue={author} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="gender" name="gender" fullWidth
                            label="Genero" variant="outlined" defaultValue={gender} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="publication_date"
                            name="publication_date"
                            fullWidth
                            label="Fecha De Publicacion"
                            variant="outlined"
                            defaultValue={publication_date}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="editorial" name="editorial"
                            fullWidth label="Editorial" variant="outlined" defaultValue={editorial} />
                    </Grid>
                    <Grid item xs={6}>
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
    );
}
