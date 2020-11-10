import Head from 'next/head';
import { useState } from "react";
import Link from 'next/link'

import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  AppBar,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  input: {
    display: 'none',
  },
}));

export default function Home() {
  const classes = useStyle(useTheme());
  const [file, setFile] = useState("");
  return (
    <div className={classes.root}>
      <Head>
        <title>Score Adjustor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <AppBar>
        <Toolbar>
          <Typography variant="h6"><MusicNoteIcon />楽譜の難易度調整します<MusicNoteIcon /></Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={8}>
          <div>アップロードしてください</div>
        </Grid>
      </Grid>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={8}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={e => {
              setFile(e.target.value);
              console.log(e.target.value);
            }}
            value={file}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              open file<FolderOpenIcon />
            </Button>
          </label>
        </Grid>
      </Grid>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={8}>
          <Link href="/preview">
            <IconButton>
              <CloudUploadIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
