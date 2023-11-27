
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements1 = document.querySelectorAll('.element-animation1');
let elements2 = document.querySelectorAll('.element-animation2');
let elements3 = document.querySelectorAll('.element-animation3');
let elements4 = document.querySelectorAll('.element-animation4');

for (let elm of elements2) {
  observer.observe(elm);
}
for (let elm of elements1) {
  observer.observe(elm);
}
for (let elm of elements3) {
  observer.observe(elm);
}
for (let elm of elements4) {
  observer.observe(elm);
}

