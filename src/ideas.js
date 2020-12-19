import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';

import Calendar from "react-material-ui-calendar";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { updateIdea, getNewID } from './helpers/storage';
import { getDateData, getTitlesByTag } from './helpers/helpers';
import Menu from './components/menu';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const initialData = getDateData(new Date().toDateString());

const tagLimit = 15
const ideaLimit = 150
const titleLimit = 75

function Ideas() {

  // primary variables
  const [date, setDate] = useState(new Date(initialData.date));
  const [title, setTitle] = useState(initialData.title);
  const [tags, setTags] = useState(initialData.tags);
  const [ideas, setIdeas] = useState(initialData.ideas);

  // to store and display the search results after user clicks a tag
  const [tagSearchResults, setTagSearchResults] = useState([]);
  const [displayTagSearchResults, setDisplayTagSearchResults] = useState(false);

  // display corresponding textbox if these variables are set to true
  const [editingTag, setEditingTag] = useState(false);
  const [editingIdea, setEditingIdea] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);

  // display icon only if user isn't editing title
  const [editTitleIconDisplay, setEditTitleIconDisplay] = useState(true);

  // to display calendar
  const [displayCalendar, setDisplayCalendar] = useState(false);

  // required while switching views from Calendar to a single title (date)
  const [needsDataUpdate, setNeedsDataUpdate] = useState(true);

  // for import export menu
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    document.title = 'My Ideas';
  }, []);

  useEffect(() => {
    const dateData = {
      date: date.toDateString(),
      title,
      tags,
      ideas
    }

    if(needsDataUpdate) {
      // required while switching views from Calendar to a single title (date)
      updateIdea(dateData);
    }

  }, [ideas, tags, title, date, needsDataUpdate])

  const handleDateEdit = () => {
    setDisplayTagSearchResults(false);
    setDisplayCalendar(true);
  }

  const handleCalendarSelection = value => {
    const newDateData = getDateData(value.toDateString());


    setNeedsDataUpdate(false);
    // to stop useEffect from changing values mid process

    setDate(value);
    setTitle(newDateData.title);
    setTags(newDateData.tags);
    setIdeas(newDateData.ideas);

    setNeedsDataUpdate(true);

    setDisplayTagSearchResults(false);
    setDisplayCalendar(false);
  }

  const handleTagClick = tag => {
    setDisplayCalendar(false);
    setDisplayTagSearchResults(true);

    setTagSearchResults(getTitlesByTag(tag));
  }

  const handleTagDelete = event => {
    const currentTagID = event.target.parentElement.parentElement.id;
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== currentTagID)
    })

    event.preventDefault()
  }

  const handleTagValueKeyDown = event => {
    if (event.key === 'Enter' || event.keyCode === 13){
      setTags(prevTags => {
        let newTags = [];
        prevTags.forEach(tag => {

          // set tagEdit to false to stop displaying the textfield
          if (tag.tagEdit){
            tag.tagEdit = false
          }
          newTags.push(tag)
        })
        return newTags;
      })

      setEditingTag(false)
      event.preventDefault();
    }
  }

  const handleTagValueChange = event => {

    const newValue = event.target.value;
    if (newValue.length > tagLimit){
      alert('Maximum tag length reached. Please try a shorter tag.');
    }
    else {
      setTags(prevTags => {
        let newTags = []
        prevTags.forEach(tag => {
          if (tag.tagEdit) {
            tag.tag = newValue;
          }
          newTags.push(tag)
        })
        return newTags;
      })
    }
  }

  const handleTitleKeyDown = event => {
    if (event.key === 'Enter' || event.keyCode === 13){
      setEditingTitle(false);
      setEditTitleIconDisplay(true);
      event.preventDefault();
    }
  }

  const handleTitleValueChange = event => {
    const newValue = event.target.value;
    if (newValue.length > titleLimit){
      alert('Maximum title length reached. Please try a shorter title.');
    }
    else {
      setTitle(newValue);
    }
  }

  const handleTitleEditKey = () => {
    setEditingTitle(true);
    setEditTitleIconDisplay(false);
  }

  const handleIdeaValueKeyDown = event => {
    if (event.key === 'Enter' || event.keyCode === 13){

      setIdeas(prevIdeas => {
        let newIdeas = [];
        prevIdeas.forEach(idea => {

          // set ideaEdit to false to stop displaying the textfield
          if (idea.ideaEdit){
            idea.ideaEdit = false;
          }
          newIdeas.push(idea)
        })
        return newIdeas;
      })

      setEditingIdea(false);
      event.preventDefault();
    }
  }

  const handleIdeaValueChange = event => {

    const newValue = event.target.value;
    if (newValue.length > ideaLimit){
      alert('Maximum idea length reached. Please try a shorter idea or continue on the next line.');
    }
    else {
      setIdeas(prevIdeas => {
        let newIdeas = []
        prevIdeas.forEach(idea => {
          if (idea.ideaEdit) {
            idea.idea = newValue
          }
          newIdeas.push(idea)
        })
        return newIdeas;
      })
    }
  }

  const handleIdeaDelete = event => {
    const deleteIdeaID = event.target.id;
    setIdeas(prevIdeas => {
      return prevIdeas.filter(idea => idea.id !== deleteIdeaID)
    })
    event.preventDefault();
  }

  const handleIdeaEditKey = event => {
    const editingIdeaID = event.target.id;

    setEditingIdea(true);
    setIdeas(prevIdeas => {
      let newIdeas = []
      prevIdeas.forEach(idea => {

        // set ideaEdit to true to display the textfield
        if (idea.id === editingIdeaID) {
          idea.ideaEdit = true
        }
        newIdeas.push(idea)
      })
      return newIdeas;
    })

    event.preventDefault();
  }

  const getIdeaContent = (idea, index) => {

    // display TextField if idea is being edited
    // else display normal text
    if (idea.ideaEdit){
      return (
        <TextField
          key={idea.id}
          className={`${classes.lines} ${classes.ideaTextField}`}
          label="Your Idea"
          variant="outlined"
          value={idea.idea}
          autoFocus={true}
          id={idea.id}
          onChange={handleIdeaValueChange}
          onKeyDown={handleIdeaValueKeyDown}
        />
      )
    }

    else {
      return (
        <Typography key={idea.id} className={classes.lines}>
          {index+1}. {idea.idea}&nbsp;
          <IconButton size='small' id={idea.id} className={classes.actionItems} onClick={handleIdeaEditKey} aria-label="edit">
            <EditIcon id={idea.id} style={{fontSize:'100%'}} />&nbsp;
          </IconButton>
          <IconButton size='small' id={idea.id} className={classes.actionItems} onClick={handleIdeaDelete} aria-label="delete">
            <DeleteIcon id={idea.id} style={{fontSize:'100%'}} />
          </IconButton>
        </Typography>
      )
    }
  }

  const addNewIdea = event => {
    if(editingIdea){
      alert('Please complete adding/editing another idea first.')
    }

    else if (ideas.length >= 20){
      alert('Maximum idea limit reached for the current day.')
    }

    else {
      setEditingIdea(true);
      setIdeas( prevIdeas => {
        // add new idea with default value and set editing to true
        return [ ...prevIdeas, {id:getNewID('idea'), idea:'', ideaEdit:true} ]
      })
    }

    event.preventDefault()
  }

  const getTitleContent = () => {

    // display TextField if title is being edited
    // else display normal text
    if (editingTitle) {
      return (
        <TextField
          className={classes.ideaTextField}
          label="Your Title"
          variant="outlined"
          autoFocus={true}
          value={title}
          onChange={handleTitleValueChange}
          onKeyDown={handleTitleKeyDown}
        />
      )
    }

    else {
      if (title === ''){
        return (
          <Typography>
            New Title
          </Typography>
        )
      }
      else {
        return (
          <Typography>
            {title}
          </Typography>
        )
      }
    }
  }

  const addNewTag = event => {
    if(editingTag){
      alert('Please complete adding/editing another tag first.')
    }

    else {
      setEditingTag(true);
      setTags( prevTags => {
        // add new tag and set editing to true
        return [ ...prevTags, {id:getNewID('tag'), tag:'', tagEdit:true} ]
      })
    }

    event.preventDefault()
  }

  const getTagChip = tag => {
    // display TextField if tag is being edited
    // else display normal text
    if (tag.tagEdit){
      return (
        <TextField
          key={tag.id}
          label="Your Tag"
          variant="outlined"
          value={tag.tag}
          autoFocus={true}
          id={tag.id}
          onChange={handleTagValueChange}
          onKeyDown={handleTagValueKeyDown}
        />
      )
    }

    else {
      return (
        <Chip
          variant='outlined'
          key={tag.id}
          id={tag.id}
          label={tag.tag}
          className={classes.tags}
          size='small'
          onDelete={handleTagDelete}
          onClick={() => handleTagClick(tag.tag)}
        />
      )
    }
  }

  const getDateString = () => {
    return (
        date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear()
    )
  }

  return (
    <Container maxWidth="md" className={classes.root}>

      <Menu open={menuOpen} onClose={() => { setMenuOpen(false) }} />

      <Typography className={classes.source}>
        <Link
          href="https://jamesaltucher.com/blog/the-ultimate-guide-for-becoming-an-idea-machine/"
          rel="noreferrer"
          target="_blank"
          style={{color: '#666'}}
        >
          The ultimate guide for becoming an idea machine
        </Link> by James Altucher
      </Typography>

      <Paper className={classes.page} square>

        {
          displayCalendar && !displayTagSearchResults &&
          (
            <Calendar
              light={true}
              selection={handleCalendarSelection}
            />
          )
        }

        {

          !displayCalendar && displayTagSearchResults &&
          (
            <Paper elevation={0} className={classes.pageContent} square>
              <Typography variant="h6">Titles in the tag</Typography>
              <List>
                {
                  tagSearchResults.map(idea => (
                    <ListItem
                      button
                      key={idea.date}
                      onClick={() => handleCalendarSelection(new Date(idea.date))}
                    >
                      <ListItemText primary={idea.title} />
                    </ListItem>
                  ))
                }
              </List>
            </Paper>
          )

        }

        {
          !displayCalendar && !displayTagSearchResults &&
          (
            <>

              <IconButton
                size="small"
                onClick={() => { setMenuOpen(true) }}
                aria-label="open-menu"
                className={classes.menuIcon}
              >
                <MenuIcon />
              </IconButton>

              <Container style={{textAlign: 'right'}}>
                <IconButton
                  size='small'
                  onClick={addNewTag}
                  aria-label="add-tag"
                >
                  <AddIcon />
                </IconButton>
              </Container>

              <Grid container justify='space-between' alignItems="flex-end">
                <Grid item>
                  <Typography className={classes.date}>
                    {getDateString()}

                    <IconButton
                      size="small"
                      onClick={handleDateEdit}
                      aria-label="edit-date"
                      style={{marginLeft: 10}}
                    >
                      <EditIcon style={{fontSize:"100%"}} />
                    </IconButton>
                  </Typography>
                </Grid>
                <Grid item>
                  {tags.map(tag => (
                    getTagChip(tag)
                  ))}
                </Grid>
              </Grid>

              <Grid container>
                <Grid item>
                  {getTitleContent()}
                </Grid>
                <Grid item style={{marginLeft: 10}}>
                  {editTitleIconDisplay && (
                    <IconButton
                      size="small"
                      onClick={handleTitleEditKey}
                      aria-label="edit-title"
                    >
                      <EditIcon style={{fontSize:"100%"}} />
                    </IconButton>
                  )}
                </Grid>
              </Grid>

              <Paper elevation={0} className={classes.pageContent} square>
                {ideas.map((idea, index) => (
                    getIdeaContent(idea, index)
                ))}
                <IconButton
                  onClick={addNewIdea}
                  size="small"
                  aria-label="add-idea"
                  className={classes.lines}
                >
                  <AddIcon />
                </IconButton>
              </Paper>
            </>
          )
        }
      </Paper>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:40,
  },
  page: {
    padding:'70px 70px 20px',
    backgroundColor: 'yellow',
    minHeight: 600,
    borderTop: '0px'
  },
  pageContent: {
    marginTop: 25,
  },
  lines: {
    marginTop: 10,
    borderBottom: '1px solid #d4d4d4',
    '&:hover, &.active:hover': {
      '& button': {
        display: 'inline'
      }
    }
  },
  date: {
    fontSize:'75%',
  },
  tags: {
    margin: '0 5px 0 0'
  },
  source: {
    textAlign: 'right',
    fontSize: '75%',
    fontStyle: 'italic'
  },
  ideaTextField: {
    width: '100%'
  },
  actionItems: {
    display: 'none',
    cursor: 'pointer',
  },
  actionButtons: {
    marginTop: 10
  },
  menuIcon: {
    marginTop: '-30px',
    marginBottom: '30px'
  }
}));

export default Ideas;
