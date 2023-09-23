document.addEventListener('DOMContentLoaded', function() {
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox2 = document.getElementById('checkbox2');
  const checkbox3 = document.getElementById('checkbox3');

  let last = 0;

  checkbox1.addEventListener('change', function() {
      if (this.checked) {
        if (checkbox3.checked) {
          checkbox2.checked = false;
        } else {
            
        }
      } else {
        if (checkbox2.checked) {
          checkbox3.checked = false;
        } else {
            
        }
      }
  });

  checkbox2.addEventListener('change', function() {
      if (this.checked) {
        if (checkbox1.checked) {
          checkbox3.checked = false;
        } else {

        }
      } else {
        if (checkbox3.checked) {
          checkbox1.checked = false;
        } else {
            
        }
      }
  });

  checkbox3.addEventListener('change', function() {
      if (this.checked) {
        if (checkbox2.checked) {
          checkbox1.checked = false;
        } else {
            
        }
      } else {
        if (checkbox1.checked) {
          checkbox2.checked = false;
        } else {
            
        }
      }
  });
});
