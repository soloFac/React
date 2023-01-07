import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae dolor rerum esse sint iusto, non sequi explicabo quia deserunt consequuntur assumenda recusandae ipsum aliquam, fugiat facilis odit quidem minima.</Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />

    </JournalLayout>
  )
}
