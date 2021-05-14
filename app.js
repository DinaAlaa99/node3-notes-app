
const chalk = require ('chalk')
const { command } = require('yargs')
const  yargs = require('yargs')
const notes = require('./notes.js')

 console.log(process.argv)

yargs.version('1.0.0')
// Create add comand
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
     title:
     {
        describe: 'Note title',
        demandOptions: true,
        type: 'string'
      },
      body:{
        describe: 'Note body',
        demandOptions: true,
        type: 'string'

    }
    },
 
    handler: (argv)=> {
        notes.addNote(argv.title,argv.body)
    }

})
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:
        {
           describe: 'Note title',
           demandOptions: true,
           type: 'string'
         }
       },
    
       handler: (argv) => {
           notes.removeNote(argv.title)
       }

})
// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:
        {
           describe: 'Note title',
           demandOptions: true,
           type: 'string'
         }
       },
    handler: (argv) =>{
        notes.readNote(argv.title)
    }

})
// Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: (argv) =>{
        notes.listNote(argv.title)
    }

})
//add, remove, read, list
//console.log(yargs.argv)
yargs.parse()