import React from 'react';
import { TextField, Button} from '@mui/material';
import Grid from '@mui/material/Grid';

//import { DateField } from '@mui/x-date-pickers/DateField';

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
                        <TextField id="name" name="name" fullWidth color='secondary'
                            label="Nombre" variant="outlined" defaultValue={name}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="author" name="author" fullWidth color='secondary'
                            label="Autor" variant="outlined" defaultValue={author} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="gender" name="gender" fullWidth color='secondary'
                            label="Género" variant="outlined" defaultValue={gender} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            color='secondary'
                            id="publication_date"
                            name="publication_date"
                            fullWidth
                            label="Fecha de publicación"
                            variant="outlined"
                            defaultValue={publication_date}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="editorial" name="editorial" color='secondary'
                            fullWidth label="Editorial" variant="outlined" defaultValue={editorial} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="image_path" name="image_path" color='secondary'
                            fullWidth label="Imagen" variant="outlined" defaultValue={image_path} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" sx={{width:'3rem'}}>
                            {nameButton}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
