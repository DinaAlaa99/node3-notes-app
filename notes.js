const fs =require ('fs')
const chalk = require('chalk')

const getNotes = ()=>{
    return 'your notes......'
}
const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title == title)
     
    debugger 
    
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    saveNotes(notes)
    console.log(chalk.green.inverse('New Note is Added'))
    } else{
        console.log(chalk.red.inverse('Note Title is Taken'))
    }
}
const removeNote = (title)=> {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note)=> note.title !== title )
  
  if (notes.length > notesToKeep.length)
  {saveNotes(notesToKeep)
  console.log(chalk.green.inverse('Title is Removed'))}
  else
  console.log(chalk.red.inverse('No Note Found!!!!'))
} 
const listNote = ()=>{
   const notes = loadNotes()

   console.log(chalk.inverse('Your notes...'))

   notes.forEach((note) => {
      console.log('Title: '+ note.title + ' Body: '+note.body) 
   })
}
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note)
    console.log(chalk.green('title: ')+note.title+chalk.green(' body: ')+note.body)
    else
    console.log (chalk.red.inverse('No Note Found'))
}
const saveNotes =  (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = ()=> {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
   
}


module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}