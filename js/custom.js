//panel animation
setListeners();
function setListeners() {
  let menus = document.querySelectorAll(".clps-button");
  for (let i = 0; i < menus.length; i++) {
    menus.item(i).addEventListener("click", collapseToggle);
  }
}
function collapseToggle(evt) {
  if (evt.target.closest(".clps-menu").classList.contains("collapsed")) {
    foldRecursively(evt.target.closest(".collapsed"));
  } else {
    let collapsedSiblings = evt.target.closest(".clps-menu").parentNode.querySelector(".collapsed");
    if (collapsedSiblings) {
      foldRecursively(collapsedSiblings);
    }
    collapseElement(evt.target)
  }
}
function collapseElement(element) {
  let section = element.closest(".clps-menu").querySelector("ul");
  let numberBehind;
  let sectionHeight = section.scrollHeight;
  document.documentElement.style.setProperty(`--height-of-${element.closest(".clps-menu").classList[1]}`, sectionHeight + "px");
  element.closest(".clps-menu").classList.add("collapsed");
}
function foldElement(element) {
  element.closest(".clps-menu").classList.remove("collapsed");
  document.documentElement.style.setProperty(`--height-of-${element.closest(".clps-menu").classList[1]}`, 0 + "px");
}
function foldRecursively(element) {
  foldElement(element);
  if (element.querySelector(".collapsed")) {
    foldRecursively(element.querySelector(".collapsed"));
  }
}

// active class
const walletList = document.querySelectorAll('.wallet-list');
walletList.forEach((x) => {
  const wallList = x.querySelectorAll('.gray-elem');
  wallList.forEach((z) => {
    z.addEventListener('click', (thisWallet) => {
      const walletTarget = thisWallet.currentTarget;
      wallList.forEach((removeActive) => {
        removeActive.classList.remove("active")
      })
      walletTarget.classList.add("active");
    })
  })
})

// range slider input 
const slider = document.getElementById("fee-input-range")
const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right, #74B64A 0%, #74B64A ${(value-min)/(max-min)*100}%, #fff ${(value-min)/(max-min)*100}%, #fff 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, #74B64A 0%, #74B64A ${(this.value-this.min)/(this.max-this.min)*100}%, #fff ${(this.value-this.min)/(this.max-this.min)*100}%, #fff 100%)`
};
