const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/angelsheavenorg.jfif") {
    myImage.setAttribute("src", "imagens/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "imagens/angelsheavenorg.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
    setUserName();
  };
  
  function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `welcome to my moodboard, ${myName}`;
    }
  }
  