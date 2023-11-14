// Lấy các button và phần tử image
var buttons = document.querySelectorAll('.nav-item');
var imageElement = document.getElementById('image');

// Xử lý sự kiện click cho từng button
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Lấy đường dẫn hình ảnh từ button được nhấp
    var imagePath = button.querySelector('img').src;

    // Thay đổi lớp (class) của phần tử image
    imageElement.className = 'image';

    // Thay đổi đường dẫn hình ảnh của phần tử image
    imageElement.src = imagePath;

    // Xoá lớp (class) 'selected' của tất cả các button
    buttons.forEach(function (btn) {
      btn.classList.remove('selected');
    });

    // Thêm lớp (class) 'selected' cho button được nhấp
    button.classList.add('selected');
  });
});

var buttons_color = document.querySelectorAll('.btn-color');


// Xử lý sự kiện click cho từng button
buttons_color.forEach(function (button, index) {
  button.addEventListener('click', function () {
    if (index == 0) {
      imageElement.src = "./img/headphone-1.png";
    } else if (index == 1) {
      imageElement.src = "./img/headphone-2.png";
    } else if (index == 2) {
      imageElement.src = "./img/headphone-3.png";
    } else {
      imageElement.src = "./img/headphone-4.png";
    }

    // Xoá lớp (class) 'selected' của tất cả các button
    buttons_color.forEach(function (btn) {
      btn.classList.remove('selected-color');
    });

    // Thêm lớp (class) 'selected' cho button được nhấp
    button.classList.add('selected-color');
  });
});

// Lấy phần tử đầu tiên và thêm lớp (class) 'selected' ban đầu
var firstButton = buttons[0];
firstButton.classList.add('selected');
var firstColor = buttons_color[0];
firstColor.classList.add('selected-color')


// thêm hoặc giảm số lượng
var quantityInput = document.getElementById("value");
var quantity = quantityInput.value;

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    updateQuantityDisplay();
  }
}

function increaseQuantity() {
  quantity++;
  updateQuantityDisplay();
}

function updateQuantityDisplay() {
  quantityInput.value = quantity;
}

function addToCart() {
  var quantityInput = document.getElementById("value");
  var quantity = parseInt(quantityInput.value);

  // Kiểm tra giá trị số lượng hợp lệ
  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  // Hiển thị cửa sổ thông báo thành công
  var modal = document.getElementById("success-modal");
  modal.style.display = "block";

  // Chạy hiệu ứng hoàn thành 100% trên thanh ngang
  var progressBar = document.getElementById("progress-bar");
  progressBar.style.width = "0";
  setTimeout(function() {
    progressBar.style.width = "100%";
  }, 100);

  // Tắt cửa sổ thông báo và reset thanh ngang sau khi hoàn thành
  setTimeout(function() {
    modal.style.display = "none";
    progressBar.style.width = "0";
  }, 1500);
}

function closeModal() {
  var modal = document.getElementById("success-modal");
  modal.style.display = "none";
}

const tabs = document.querySelectorAll('.tab-item');
        const tabPanes = document.querySelectorAll('.tab-pane');
        const line = document.querySelector('.tab-header .line');
        const tabInit = document.querySelector('.tab-item');
        console.log(tabInit);
        console.log(tabInit.offsetWidth);
        line.style.left = tabInit.offsetLeft + 'px';
        line.style.width = tabInit.offsetWidth + 'px';
        tabs.forEach(function(tab, i) {
            const pane = tabPanes[i];
            tab.onclick = function() {
                document.querySelector('.tab-item.active').classList.remove('active')
                document.querySelector('.tab-pane.active').classList.remove('active')
                line.style.left = this.offsetLeft + 'px';
                line.style.width = this.offsetWidth + 'px';
                tab.classList.add('active')
                pane.classList.add('active');
            }
        })

var titlefull = "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.See less"
var title = "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset ha..."

let title_P = document.getElementById('title-prod');
let see_more = document.getElementById('see-more');



