const sec = document.querySelector("#S7")
sec.classList.add("seventh-section")
sec.innerHTML = `
<div class="container">
<div class="row">
  <div class="col-12 col-md-6">
    <!-- <h1 data-speed="1.1">Lets start <br data-speed="0.9">&emsp;&emsp;to being <br data-speed="1.6">a friend</h1> -->
    <h1 data-speed="1.1">Lets start</h1>
    <h1 data-speed="1.15">&emsp;&emsp;To being</h1>
    <h1 data-speed="1.2">a friends</h1>
  </div>
  <div class="col-12 col-md-6" data-speed="1.1">
    <div class="contact-box" style="--focus-ring: 254, 254, 254;">
      <h3>Your data</h3>
      <form action="" class="mt-4">
        <div class="form-floating opacity-50" id="inputField">
          <input type="name" class="form-control" id="floatingName" placeholder="Name">
          <label for="floatingName">Name*</label>
        </div>
        <div class="form-floating mt-3 opacity-50" id="inputField">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address*</label>
        </div>
        <div class="mt-4">

          <div class="mt-4">
            <div class="form-floating opacity-50" id="inputField">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 150px"></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>
          </div>
          <div class="mt-4">
            <div class="btn">Submit</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`

const inputField = document.querySelectorAll("input, textarea");

inputField.forEach((e) => {
  e.addEventListener("input", () => {
    if (e.value.length > 0) {
      e.parentElement.classList.remove("opacity-50");
    } else {
      e.parentElement.classList.add("opacity-50");
    }
  });
});
