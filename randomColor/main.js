function setColor() {
    var result = "#";
    var characters = "abcdef0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  function setDeg() {
    var rangrad = Math.floor(Math.random() * 360 + 1);
    return rangrad;
  }
  
  function ramdomColor() {
    const btn = document.querySelector("button");
    const body = document.querySelector("body");
    body.style.backgroundImage = `linear-gradient(${setDeg()}deg,${setColor()},${setColor()})`;
  
    const decr = document.querySelector(".property");
    decr.textContent = `background-image: linear-gradient(${setDeg()}deg, ${setColor()}, ${setColor()})`;
  }
  