import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    // Aunque nos miremos tentados de enviar el uid del usuario, nuestros thunks ya tiene acceso.
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae dolor rerum esse sint iusto, non sequi explicabo quia deserunt consequuntur assumenda recusandae ipsum aliquam, fugiat facilis odit quidem minima.</Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9
          },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
