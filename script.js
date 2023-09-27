const maxChecked = 2;
const checkboxesText = ["Я вчуся на програміста.",
"У мене є дівчина/хлопець.",
"Моя психіка - стабільна."];
const len = checkboxesText.len;
let history = [];

document.addEventListener('DOMContentLoaded', function() {
  let template = document.querySelector("template").innerHTML;
  const checkboxes = document.querySelector(".checkboxes");
  for (let checkboxText of checkboxesText)
  {
    let renderedHtml = Mustache.render(template, {checkbox_text: checkboxText});
    checkboxes.innerHTML += renderedHtml;
  }

  checkboxes.addEventListener("click", (e) =>
  {
    let clicked = e.target;
    if (!clicked.classList.contains("checkbox")) return;

    if (clicked.checked)
    {
      history.push(clicked);
      if (history.len === len)
        history.shift()
    }
    console.log(clicked.checked);
    if (checkedCount() > maxChecked)
    {
      last.checked = false;
    }
  });

  function checkedCount()
  {
    let result = 0;
    for (const child of checkboxes.children)
    {
      let childCheckBox = child.querySelector(".checkbox");
      if (childCheckBox.checked)
        result++;
    }
    return result;
  }
});
