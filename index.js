function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return getFirstSelector('.target');
}

function increaseRankBy(n){
  const rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for(let i=0; i<rankedList.length; i++){
    rankedList[i].innerHTML = rankedList[i] + 1;
  }
}

function deepestChild(){
  var current = document.getElementById('grand-node')
  var first = current.children[0];

  while(first){
    current = first;
    first = current.children[0];
  }
  return current;
}
