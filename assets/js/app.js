const $numberBtn = document.querySelectorAll(".numberbtn");
const $result = document.getElementById("result");
const $operations = document.querySelectorAll(".operations__item");

$numberBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    $result.value == "0"
      ? ($result.value = elem.textContent)
      : ($result.value += elem.textContent);
  });
});

$operations.forEach((element) => {
  element.addEventListener("click", () => {
    element.textContent == "C"
      ? ($result.value = "")
      : element.textContent == "="
      ? ($result.value = eval($result.value))
      : $result.value == "0"
      ? ($result.value = element.textContent)
      : ($result.value += element.textContent);
  });
});

// leer del body el evento teclado para usar la app
const $body = document.body;
$body.addEventListener("keydown", (e) => {
  $numberBtn.forEach((elem) => {
    if (elem.textContent == e.key && $result.value != "0") {
      $result.value += e.key;
      elem.classList.add("touch");
      setTimeout(() => {
        elem.classList.remove("touch");
      }, 100);
    } else if ($result.value == "0") {
      $result.value = e.key;
    }
  });

  $operations.forEach((ele) => {
    if (
      $result.value != "" &&
      (e.key != "=" || e.key != "C") &&
      e.key == ele.textContent
    ) {
      $result.value += e.key;
      ele.classList.add("touch");
      setTimeout(() => {
        ele.classList.remove("touch");
      }, 100);
    } else if (e.keyCode == 13 && $result.value != "") {
      $result.value = eval($result.value);
    }
  });
  if (e.keyCode == 8) {
    $result.value = $result.value.slice(0, $result.value.length - 1);} // no funciona
// prueba
});
