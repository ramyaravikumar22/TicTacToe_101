
let currentMarker = 'X'

const handleClick = (element) => {

  
  console.log(`The element you clicked on has an id:  ${element.id}`)

  
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}


const addMarker = (id) => {

  
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  
document.getElementById(id).innerHTML = currentMarker
  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 

  changeMarker()
}



const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}



// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  const squares= document.getElementsByTagName("TD")
  console.log("const squares",squares)
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
  squares[0].innerHTML = "X"
}
