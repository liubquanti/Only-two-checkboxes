const maxChecked = 3;
const checkboxesText = ["Я вчуся на програміста.", "У мене є дівчина/хлопець.", "Моя психіка - стабільна.", "Я у мами молодець"];


document.addEventListener('DOMContentLoaded', function() {
  let template = document.querySelector("template").innerHTML;
  const checkboxes = document.querySelector(".checkboxes");
  for (let checkboxText of checkboxesText)
  {
    let renderedHtml = Mustache.render(template, {checkbox_text: checkboxText});
    checkboxes.innerHTML += renderedHtml;
  }
  let last;

  checkboxes.addEventListener("click", (e) =>
  {
    let clicked = e.target;
    if (!clicked.classList.contains("checkbox")) return;

    if (checkedCount() > maxChecked)
    {
      last.checked = false;
    }
    last = clicked;
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
