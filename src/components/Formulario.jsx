
import { FormControl, InputLabel, Select, MenuItem, } from '@mui/material'
import { useNoticias } from '../hooks/useNoticias'

const CATEGORIAS = [
  { value: 'general', label: 'General'},
  { value: 'business', label: 'Negocios'},
  { value: 'entertainment', label: 'Entretenimiento'},
  { value: 'health', label: 'Salud'},
  { value: 'science', label: 'Ciencia'},
  { value: 'sports', label: 'Deportes'},
  { value: 'technology', label: 'Tecnología'},
]

export const Formulario = () => {

  // const { categoria } = useContext(NoticiasContext)
  const { categoria, handleChangeCategoria } = useNoticias();

  

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>
          Categoria
        </InputLabel>
        <Select label='Categoria' 
          onChange={ handleChangeCategoria }
          value={ categoria }
        >
          {
            CATEGORIAS.map( ({ value, label}) => (
              <MenuItem key={ value } value={ value }>
                { label }
              </MenuItem>
            ))
          }
        </Select>

       {/* <Box sx={{ marginTop: 2}}>
         <Button fullWidth variant='contained' color='primary'>
           Buscar Noticias
         </Button>
       </Box> */}
      </FormControl>
    </form>
  )
}
