const myRadioFunc = (e) => {
  e.preventDefault();
  let radioData = document.myRadio.content;
  console.log("Data: ", radioData);
  for (let i = 0; i < radioData.length; i++) {
    if (radioData[i].checked === true) {
      return true;
    }
  }
  document.getElementById("message").innerHTML = "Please Select Anyone";
  return false;
};
