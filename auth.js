(function () {
  const DEMO_LOGIN = "said";
  const DEMO_PASS = "1234";

  const form = document.getElementById("authForm");
  const loginInput = document.getElementById("authLogin");
  const passInput = document.getElementById("authPass");
  const errorMsg = document.getElementById("authError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (
      loginInput.value.trim() === DEMO_LOGIN &&
      passInput.value === DEMO_PASS
    ) {
      sessionStorage.setItem("sb7-authed", "true");
      window.location.href = "index.html";
    } else {
      errorMsg.classList.add("show");
      passInput.value = "";
      passInput.focus();
    }
  });
})();
