
  const submitButton = document.querySelector('#card_1 .btn');
  const checkboxes = document.querySelectorAll('#card_1 input[type="checkbox"]');

  submitButton.addEventListener('click', (event) => {
    let isAnyCheckboxChecked = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isAnyCheckboxChecked = true;
        return;
      }
    });

    if (!isAnyCheckboxChecked) {
      alert('Please check at least one checkbox.');
      event.preventDefault();
    }
  });
