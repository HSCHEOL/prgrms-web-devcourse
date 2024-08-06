function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");

  $target.appendChild($form);

  this.render = () => {
    $form.innerHTML = `
    <input type='text' name='todo' />
    <button>Add</button>`;
  };

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $input = $form.querySelector("input[name=todo]");
    const text = $input.value;

    if (text.length > 1) {
      $input.value = ""; //단지 text의 값을 지우는게 아니라 실제 input의 값을 지워야함.

      onSubmit(text);
    }
  });

  this.render();
}
