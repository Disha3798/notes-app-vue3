import { defineStore } from 'pinia'

export const useNoteStore = defineStore('notes',{

  state: () => ({
    notes: []
  }),
  getters: {
    getNote: (state) => {
      return (id)=>{
        return state.notes.filter(note => note.id === id )[0].content
      }
    },
    totalNotesCount:(state)=>{
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  },
  actions: {
    addNote(newNote) {
      let note={
        id:new Date().toTimeString(),
        content:newNote.value
      }
      this.notes.unshift(note)
    },
    editNote(updatedNote,id) {
      for(let i=0;i<this.notes.length;i++)
      {
        if(this.notes[i].id===id)
        {
          this.notes[i].content=updatedNote
        }
      }
    },
    deleteNote(id)
    {
      console.log('in deleted',id)
      for(let i=0;i<this.notes.length;i++)
      {
        if(this.notes[i].id===id)
        {
         this.notes.splice(id,1)
        }
      }
    }
  }
})
