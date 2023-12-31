
import { Container, Grid, Typography } from '@mui/material'
import { Formulario, ListadoNoticias } from './components'


function App() {

  return (
    <>
      <Container>
        <header>
          <Typography align='center' marginY={ 5 }
            component='h1' variant='h3'
          >
            Buscador de Noticias
          </Typography>
        </header>

        <Grid 
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias />
      </Container>
    </>
  )
}

export default App
