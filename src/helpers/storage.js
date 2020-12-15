function getNewID(element){
  /***
    Retrieves new ID for tag and idea based on input
  */
  if (element !== 'tag' && element !== 'idea'){
    return null;
  }

  let meta = localStorage.getItem('meta')
  if (meta === null){
    meta = {
      lastInsertTagID: 0,
      lastInsertIdeaID: 0,
    }
    localStorage.setItem('meta', JSON.stringify(meta))
  }

  else {
    meta = JSON.parse(meta)
  }

  const idToReturn = meta['lastInsert' + element.charAt(0).toUpperCase() + element.slice(1) + 'ID']

  meta['lastInsert' + element.charAt(0).toUpperCase() + element.slice(1) + 'ID'] = parseInt(idToReturn) + 1;
  localStorage.setItem('meta', JSON.stringify(meta));

  return idToReturn.toString();

}

function updateIdea(dateData){
  /******
    Takes all the data for a single date and adds it to the storage.

    Param: dateData - object
    Param example: {
      date: dateString,
      title: title,
      tags: [//array of tags],
      ideas: [//array of ideas]
    }
  */

  const ideas = getAllIdeas();

  const currentDate = ideas.filter(idea => idea.date === dateData.date)
  if (currentDate.length === 1){
    ideas.forEach(idea => {
      if (idea.date === dateData.date){
        idea.title = dateData.title;
        idea.tags = dateData.tags;
        idea.ideas = dateData.ideas;
      }
    })
    localStorage.setItem('ideas', JSON.stringify(ideas))
  }

  else if (currentDate.length === 0){
    ideas.push(dateData);
    localStorage.setItem('ideas', JSON.stringify(ideas))
  }

}

function getAllIdeas(){
  const ideas = localStorage.getItem('ideas')
  if (ideas == null){
    return [];
  }

  else {
    return JSON.parse(ideas);
  }
}

export { getAllIdeas, updateIdea, getNewID }
