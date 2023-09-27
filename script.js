const form = document.querySelector("#form");
form.addEventListener("submit", generateForm);
let history = [];
const checkboxes = document.querySelector(".checkboxes");
let maxChecked;
let listLen = 0;

function generateForm(e)
{
  e.preventDefault();
  let form = e.target;
  maxChecked = +form.maxChecked.value;
  const checkboxesText = form.options.value.split("\n");
  listLen = checkboxesText.length;
    let template = document.querySelector("template").innerHTML;
    for (let checkboxText of checkboxesText)
    {
      let renderedHtml = Mustache.render(template, {checkbox_text: checkboxText});
      checkboxes.innerHTML += renderedHtml;
    }
    form.hidden = true;
}


  checkboxes.addEventListener("click", (e) =>
  {
    let clicked = e.target;
    if (!clicked.classList.contains("checkbox")) return;

    if (clicked.checked)
    {
      history.push(clicked);
      if (history.length == maxChecked + 1)
      {
        history.shift().checked = false;
      }
      console.log(history);
    }
    else
    {
      const index = history.indexOf(clicked);
      history.splice(index, 1);
    }
    console.log(clicked.checked);
  });

  // function checkedCount()
  // {
  //   let result = 0;
  //   for (const child of checkboxes.children)
  //   {
  //     let childCheckBox = child.querySelector(".checkbox");
  //     if (childCheckBox.checked)
  //       result++;
  //   }
  //   return result;
  // }
