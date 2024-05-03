import React from "react";
import { Card, Typography, Stack, Button } from "@mui/material";

export default function CardBook({
  title,
  author,
  description,
  imagePath,
  buyLink,
}) {
  return (
    <Card sx={{ m: 2, boxShadow: 3 }}>
      <Stack direction="row">
        <Stack>
          <Typography variant="h4" sx={{ color: "#333", fontSize: "20px", margin:'2rem', textAlign:'center'}}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: "#666", fontSize: "18px", textAlign:'center' }}>
            {author}
          </Typography>
        </Stack>
        <img src={imagePath} style={{ width: '100px', height: '150px', objectFit: 'cover' }} />

        <Typography variant="h6" sx={{ color: "#999", fontSize: "16px", margin:'2rem'}}>
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#007bff", color: "#fff" }}
        >
          Comprar
        </Button>
      </Stack>
    </Card>
  );
}
