import { getAllIdeas, updateIdea, getNewID } from './storage';

function getTitlesByTag(reqTag) {
  /**
  * Returns a list of all the Idea Objects (with date, title, tags, and ideas)
  * containing a specific tag.
  *
  * params - reqTag:string
  *
  * Output format: array(
  *   {
  *     date:string,
  *     title:string,
  *     tags:array({id:string, tag:string, tagEdit:boolean}),
  *     ideas: arrat(id:string, idea:string, ideaEdit:boolean)
  *   }
  * )
  */
  const ideas = getAllIdeas();

  return ideas.filter(idea => {
    let flag = false;
    idea.tags.forEach(tag => {
      if(tag.tag === reqTag){
        flag = true;
      }
    })

    return flag;
  })
}

function importJSON(){
  /**
  * Creates an input file element, triggers it, and stores all the data
  * in the input file in the application
  *
  * params - None
  *
  * Output format - None
  */

  alert('Importing will wipe your current data. Click Cancel on the Upload window to stop the process.')

  const handleFileUpload = event => {
    const uploadedFile = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsText(uploadedFile, 'UTF-8');
    fileReader.onload = e => {
      const ideas = JSON.parse(e.target.result);

      ideas.forEach(idea => {

        // for each idea, create the idea object and add to the storage
        updateIdea({
          date: idea.date,
          title: idea.title,
          tags: idea.tags.map(tag => {
            return {
              id: getNewID('tag'),
              tag: tag,
              tagEdit: false
            }
          }),
          ideas: idea.ideas.map(idea => {
            return {
              id: getNewID('idea'),
              idea: idea,
              ideaEdit: false
            }
          })
        })
      })
    }
    window.location.reload();
  }

  const inputNode = document.createElement('input')
  inputNode.setAttribute('type', 'file')
  inputNode.addEventListener('change', handleFileUpload)

  document.body.appendChild(inputNode);
  inputNode.click();
  inputNode.remove();

}

function downloadFile(filename, data){
  /**
  * Download given data
  *
  * params:
  *   filename - output file name
  *   data - data to add to the file
  */
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data))
  const downloadAnchorNode = document.createElement('a');

  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', filename + '.json');
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function exportAsJSON(exportName){
  /**
  * export all the ideas in the storage
  */
  const allIdeas = getAllIdeas();
  allIdeas.forEach(idea => {

    idea.tags = idea.tags.map(tag => tag.tag);
    idea.ideas = idea.ideas.map(ideaObj => ideaObj.idea);

  });

  downloadFile('export', allIdeas);
}

function getDateData(dateString){
  /**
  * return idea object for the provided date
  *
  * params:
  *   dateString - JS Date object converted to string using toDateString()
  */

  const dataToReturn = getAllIdeas().filter(idea => idea.date === dateString)
  if (dataToReturn.length === 0){
    return {
      date: new Date().toDateString(),
      title: '',
      tags: [],
      ideas: []
    }
  }
  else {
    return dataToReturn[0]
  }
}

export { getDateData, exportAsJSON, importJSON, getTitlesByTag }
