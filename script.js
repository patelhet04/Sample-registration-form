$(function () {
  $("#datepicker")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
    })
    .datepicker("update", new Date());
});

// Slider
$(document).ready(function () {
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  setProgressBar(current);

  $(".next").click(function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(++current);
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(--current);
  });

  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });
});

// Address Copy
function fillPermanent(f) {
  if (f.checkBox.checked == true) {
    f.paddress.value = f.caddress.value;
  }
  if (f.checkBox.checked == false) {
    f.paddress.value = "";
  }
}

// Skills Tags
var txt = document.getElementById("txt");
var list = document.getElementById("list");
var items = [];

txt.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let val = txt.value;
    if (val !== "") {
      if (items.indexOf(val) >= 0) {
        alert("Tag name is a duplicate");
      } else {
        items.push(val);
        render();
        txt.value = "";
        txt.focus();
      }
    } else {
      alert("Please type a tag Name");
    }
  }
});

function render() {
  list.innerHTML = "";
  items.map((item, index) => {
    list.innerHTML += `<li><span>${item}</span><a href="javascript: remove(${index})">X</a></li>`;
  });
}

function remove(i) {
  items = items.filter((item) => items.indexOf(item) != i);
  render();
}

window.onload = function () {
  render();
  txt.focus();
};

// Image display

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#profile").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
    image.onload = function () {
      var height = this.height;
      var width = this.width;
      if (height > 400 || width > 400) {
        alert("Height and Width must not exceed 400px.");
        return false;
      }
      alert("Uploaded image has valid Height and Width.");
      return true;
    };
  }
}

// Preview Details
function displayForm() {}
