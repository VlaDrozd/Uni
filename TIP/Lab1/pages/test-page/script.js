const onCheck = () => {
  const rightSimpleQuestions = document.querySelectorAll('.right:checked').length;
  const rightCheckboxQuestions = document.querySelectorAll('.rightCheckbox:checked').length / 3;
  result.value = `Correct answers count: ${rightCheckboxQuestions + rightSimpleQuestions}`;
}

onCheck();