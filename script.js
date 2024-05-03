const text = document.querySelector("#text").innerHTML;

var clutter = "";

const deconstructText = (text) => {
  let textArray = text.split("");
  let halfLength = Math.floor(textArray.length / 2);

  textArray.forEach((element, idx) => {
    console.log(idx);
    if (idx <= halfLength) {
      clutter += `<span class='a'>${element}</span>`;
    } else if (idx) {
      clutter += `<span class='b'>${element}</span>`;
    }
  });
  document.querySelector("#text").innerHTML = clutter;
};

deconstructText(text);

gsap.from(".a", {
    y: 50,
    stagger: 0.1,
    duration: 1,
    delay:0.2,
    opacity: 0,     
})
gsap.from(".b", {
    y: -50,
    stagger: 0.1,
    duration: 1,
    delay:0.2,
    opacity: 0,     
}) 
