import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { findBooksByName } from "../../redux/actions/findBooks/findBookByName";
import CardBook from "../findBook/CardBook";

export default function FindBook() {
  const [books, setBooks] = useState(null);
  const [errorBooks, setErrorBooks] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const result = await findBooksByName(searchQuery);
      console.log(result);
      setBooks(result);
    } catch (error) {
      setErrorBooks(errorBooks);
    }
  };

  return (
    <>
      <Paper
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        component="form"
        sx={{
          marginTop: "3rem",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          marginBottom: "3em",
          backgroundColor: "#f0f0f0", // Nuevo color de fondo
          border: "1px solid #ccc", // Nuevo estilo de borde
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            fontSize: "18px", // Nuevo tamaño de fuente
            color: "#333", // Nuevo color de fuente
          }}
          placeholder="Buscar Libro"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        ></IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          onClick={handleSearch}
          color="primary"
          sx={{ p: "10px", color: "#fff" }}
          aria-label="directions"
        >
          <span>&#128269;</span>
        </IconButton>
      </Paper>

      {books !== null ?
        books.map((element, index) => {
          return <CardBook
            key={index}
            title={element.volumeInfo.title}
            author={element.volumeInfo.authors[0]}
            buyLink={element.saleInfo.buyLink}
            description={element.volumeInfo.description}
            imagePath={element.volumeInfo.imageLinks.smallThumbnail}
          />
        })
        : <></>}
    </>
  );
}
