import React, { useState } from "react";
import { Stack } from "@mui/material";
import { getLocalStorageData } from "../../helpers/localstorage/getData";
import { newCommentAction } from "../../redux/actions/comment/newCommentAction";
import { Button } from '@mui/material';

import { ThemeProvider } from "@mui/material/styles";
import form from "../themes/add";

export default function NewComment({ postId, callBack }) {
  const [comment, setComment] = useState(null);

  const handlePrintComment = async () => {
    if (comment.length > 10) {
      console.log(comment);
    } else {
      alert("El comentario debe tener más de 10 caracteres.");
    }

    const userId = await getLocalStorageData("USERID");

    await newCommentAction({ postId: postId, userId: userId, comment });

    callBack();
  };

  return (
    <ThemeProvider theme={form}>
      <Stack marginTop={3} marginBottom={6}>
        <textarea
          rows="4"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
        />
        <br />

        <Button onClick={handlePrintComment} fullWidth>
                            Enviar comentario
                        </Button>
      </Stack>
    </ThemeProvider>
  );
}
