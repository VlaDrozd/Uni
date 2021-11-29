const onCheck = () => {
  const rightSimpleQuestions = document.querySelectorAll('.right:checked').length;
  const rightCheckboxQuestions = document.querySelectorAll('.rightCheckbox:checked').length / 3;
  testResult.innerText = rightCheckboxQuestions + rightSimpleQuestions;
}

onCheck();