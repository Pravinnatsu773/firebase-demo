
var checkedBoxInput = document.querySelectorAll('.locationType');
const nextButton = document.getElementById('next');

nextButton.onclick = () =>{
    var locationList = [];
    console.log(checkedBoxInput)
    for (var i = 0; i < checkedBoxInput.length; i++){
       
      if (checkedBoxInput[i].checked == true){
          locationList.push(checkedBoxInput[i].value);
      }
    
    }
    console.log(locationList);
    window.location.replace('/home.html');
}