import Head from 'next/head';

import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  AppBar,
  Grid,
} from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  input: {
    display: 'none',
  },
}));

export default function Preview() {
  const classes = useStyle(useTheme());
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
          <div>プレビュー</div>
        </Grid>
      </Grid>
    </div>
  );
}
