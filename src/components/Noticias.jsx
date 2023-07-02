import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material";



export const Noticias = ({ noticia }) => {
  const { author, description, publishedAt, title, url, urlToImage, source } = noticia;
  console.log(author)
  return (
    <Grid item md={ 6 } lg={ 4 }>
      <Card>
        {
          urlToImage && (
            <CardMedia 
              component='img'
              alt={`Imagen de la Noticia ${title}`}
              image={ urlToImage } 
              height={'250'}
            />
          )
        }

        <CardContent>
          <Typography variant='body1' color='primary'>
            { source.name }
          </Typography>
          <Typography variant='h5' component='div'>
            { title }
          </Typography>
          <Typography variant='body2'>
            { description }
          </Typography>
        </CardContent>

        <CardActions>
          <Link href={url} target="_blank" variant='button' 
            width={'100%'} color='secondary' textAlign={'center'} sx={{ textDecoration: 'none'}}>
            Leer Noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
