import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth'

export const NavBar = ({ drawerWidth }) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    // Esta no es una tarea sincrona del todo, porque tiene que llegar a Firebase revisar el código y luego regresa.
    // Adicionalmente voy a tener que limpiar otras partes de mi store.
    // Solo tenemos ahora la propiedad de Auth, pero vamos a tener mas luego.
    console.log('logout')
    dispatch(startLogout())
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div'> JournalApp</Typography>

          <IconButton
            color='error'
            onClick={ onLogout }
          >
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
