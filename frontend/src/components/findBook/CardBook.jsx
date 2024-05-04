import React from "react";
import { Card, Typography, Stack, Button } from "@mui/material";

export default function CardBook({
  title,
  author,
  description,
  imagePath,
  buyLink,
}) {

  const truncatedDescription =
    description.length > 450 ? description.substring(0, 450) + "..." : description;

  return (
    <Card sx={{ m: 2, boxShadow: 3 }}>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Stack>
          <Typography
            variant="h4"
            sx={{ color: "#333", fontSize: "20px", margin: "2rem", textAlign: "center" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#666", fontSize: "18px", textAlign: "center" }}
          >
            {author}
          </Typography>
        </Stack>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={imagePath}
            style={{
              width: "100px",
              height: "150px",
              objectFit: "cover",
              alignSelf: "center",
            }}
          />
        </div>

        <Typography
          variant="h6"
          sx={{
            color: "#999",
            fontSize: "16px",
            margin: "2rem",
            alignContent: "center",
          }}
        >
          {truncatedDescription}
        </Typography>
        <Button
          disabled={buyLink === undefined}
          variant="contained"
          sx={{ backgroundColor: "green", color: "#fff", width: "20em", height: "5em" }}
          component="a"
          href={buyLink}
          target="_blank" // abre el enlace en una nueva pestaña
        >
          Comprar
        </Button>
      </Stack>
    </Card>
  );
}
