
updateText = ()=>{
  let inputText = document.getElementById('text-input').value;
  //console.log(inputText);
  document.getElementById('text-output').innerText = inputText;
  //console.log(document.getElementById('text-output').value);
}

makeBold = (elem)=>{
 
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem)=>{
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
  //console.log('italic')
}

/**
 * Toggle the underline class for the output text
 */
makeUnderline = (elem)=>{   
    elem.classList.toggle('active');
    let outputTextbox = document.getElementById('text-output');
    if (outputTextbox.classList.contains('underline')) outputTextbox.classList.remove('underline');
    else outputTextbox.classList.add('underline')

    //console.log('underline')
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons

 */
alignText = (elem, alignType) =>{
  //deactivate all align buttons
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName('align');
  for (let button of buttonsList){
   button.classList.remove('active');
  }
  elem.classList.add('active');
}