
import { useEffect, useState } from 'react';
import { NoticiasContext } from '.';
import axios from 'axios';


export const NoticiasProvider = ({ children}) => {

  const [ categoria, setCategoria ] = useState('general');
  const [ noticias, setNoticias ] = useState([]);

  const consultarApi = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=100&apikey=${import.meta.env.VITE_API_KEY}`;

    const { data } = await axios(url)

    console.log(data.articles)
    setNoticias(data.articles);
  }
  useEffect(() => {
    consultarApi()
  }, [categoria])
  

  const handleChangeCategoria = ({ target }) => {
    setCategoria(target.value)
  }

  return (
    <NoticiasContext.Provider value={{
      categoria, handleChangeCategoria, noticias
    }}>
      { children }
    </NoticiasContext.Provider>
  )
}
