import { getAllIdeas, updateIdea, getNewID } from './storage';

function getTitlesByTag(reqTag) {
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

  alert('Importing will wipe your current data. Click Cancel on the Upload window to stop the process.')

  const handleFileUpload = event => {
    const uploadedFile = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsText(uploadedFile, 'UTF-8');
    fileReader.onload = e => {
      const ideas = JSON.parse(e.target.result);

      ideas.forEach(idea => {

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
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data))
  const downloadAnchorNode = document.createElement('a');

  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', filename + '.json');
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function exportAsJSON(exportName){
  const allIdeas = getAllIdeas();
  allIdeas.forEach(idea => {

    idea.tags = idea.tags.map(tag => tag.tag);
    idea.ideas = idea.ideas.map(ideaObj => ideaObj.idea);

  });

  downloadFile('export', allIdeas);
}

function getDateData(dateString){

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
