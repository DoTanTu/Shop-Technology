
document.addEventListener("DOMContentLoaded", function () {
    function handleCheckbox(checkbox) {
        var checkboxes = document.getElementsByName("option");

        checkboxes.forEach(function (currentCheckbox) {
            if (currentCheckbox !== checkbox) {
                currentCheckbox.checked = false;
            }
        });
    }
    var block = document.getElementById("item-block");
    var list1 = document.getElementById("list-item");
    // Đăng ký sự kiện click cho phần tử
    block.addEventListener("click", function () {
        // Thay đổi lớp CSS của phần tử
        list1.classList.add("new-list-item");

    });

    var flex = document.getElementById("item-flex");
    flex.addEventListener("click", function () {
        list1.classList.remove("new-list-item")

    });

    var defaultSortingLink = document.getElementById("default-sorting");
    var lowToHighLink = document.getElementById("low-to-high");
    var highToLowLink = document.getElementById("high-to-low");
    var newAddedLink = document.getElementById("new-added");
    var onSaleLink = document.getElementById("on-sale");
    var navSelectLink = document.getElementById("nav-select-link");

    defaultSortingLink.addEventListener("click", function () {
        navSelectLink.innerText = "Default Sorting";
    });

    lowToHighLink.addEventListener("click", function () {
        navSelectLink.innerText = "Low to High";
    });

    highToLowLink.addEventListener("click", function () {
        navSelectLink.innerText = "High to Low";
    });

    newAddedLink.addEventListener("click", function () {
        navSelectLink.innerText = "New Added";
    });

    onSaleLink.addEventListener("click", function () {
        navSelectLink.innerText = "On Sale";
    });

    var showPagination = document.getElementById("Showing-pagination");
    var pagination1 = document.getElementById("pagination1");
    var pagination2 = document.getElementById("pagination2");
    var pagination3 = document.getElementById("pagination3");
    var pagination4 = document.getElementById("pagination4");

    var paginationText1 = document.getElementById("paginationText1");
    var paginationText2 = document.getElementById("paginationText2");
    var paginationText3 = document.getElementById("paginationText3");
    var paginationText4 = document.getElementById("paginationText4");


    pagination1.addEventListener("click", function() {
        showPagination.innerText = "Showing 1–12 of 48 results";
        pagination1.style = "background-color: var(--color-btn);";
        paginationText1.style = "color : var(--color-white); ";
        pagination2.style ="background-color: var(--color-white);";
        paginationText2.style = "color : black; ";
        pagination3.style ="background-color: var(--color-white);";
        paginationText3.style = "color : black; ";
        pagination4.style ="background-color: var(--color-white);";
        paginationText4.style = "color : black; ";

          pagination2.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination2.style = "background-color: var(--color-btn);";
            paginationText2.style = "color : var(--color-white); ";
          });
        pagination2.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination2.style ="background-color: var(--color-white);";
            paginationText2.style = "color : black; ";
          });

          pagination3.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination3.style = "background-color: var(--color-btn);";
            paginationText3.style = "color : var(--color-white); ";
          });
        pagination3.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination3.style ="background-color: var(--color-white);";
            paginationText3.style = "color : black; ";
          });

          pagination4.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination4.style = "background-color: var(--color-btn);";
            paginationText4.style = "color : var(--color-white); ";
          });
        pagination4.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination4.style ="background-color: var(--color-white);";
            paginationText4.style = "color : black; ";
          });

    });
   

    pagination2.addEventListener("click", function() {
        showPagination.innerText = "Showing 13–24 of 48 results";
        pagination2.style = "background-color: var(--color-btn);";
        paginationText2.style = "color : var(--color-white); ";
        pagination1.style ="background-color: var(--color-white);";
        paginationText1.style = "color : black; ";
        pagination3.style ="background-color: var(--color-white);";
        paginationText3.style = "color : black; ";
        pagination4.style ="background-color: var(--color-white);";
        paginationText4.style = "color : black; ";

        pagination1.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination1.style = "background-color: var(--color-btn);";
            paginationText1.style = "color : var(--color-white); ";
          });
        pagination1.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination1.style ="background-color: var(--color-white);";
            paginationText1.style = "color : black; ";
          });

          pagination3.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination3.style = "background-color: var(--color-btn);";
            paginationText3.style = "color : var(--color-white); ";
          });
        pagination3.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination3.style ="background-color: var(--color-white);";
            paginationText3.style = "color : black; ";
          });

          pagination4.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination4.style = "background-color: var(--color-btn);";
            paginationText4.style = "color : var(--color-white); ";
          });
        pagination4.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination4.style ="background-color: var(--color-white);";
            paginationText4.style = "color : black; ";
          });
        
    });

   
      pagination3.addEventListener("click", function() {
        showPagination.innerText = "Showing 25–36 of 48 results";
        pagination3.style = "background-color: var(--color-btn);";
        paginationText3.style = "color : var(--color-white); ";
        pagination1.style ="background-color: var(--color-white);";
        paginationText1.style = "color : black; ";
        pagination2.style ="background-color: var(--color-white);";
        paginationText2.style = "color : black; ";
        pagination4.style ="background-color: var(--color-white);";
        paginationText4.style = "color : black; ";

        pagination2.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination2.style = "background-color: var(--color-btn);";
            paginationText2.style = "color : var(--color-white); ";
          });
        pagination2.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination2.style ="background-color: var(--color-white);";
            paginationText2.style = "color : black; ";
          });

          pagination1.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination1.style = "background-color: var(--color-btn);";
            paginationText1.style = "color : var(--color-white); ";
          });
        pagination1.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination1.style ="background-color: var(--color-white);";
            paginationText1.style = "color : black; ";
          });

          pagination4.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination4.style = "background-color: var(--color-btn);";
            paginationText4.style = "color : var(--color-white); ";
          });
        pagination4.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination4.style ="background-color: var(--color-white);";
            paginationText4.style = "color : black; ";
          });
        
    });

   

      pagination4.addEventListener("click", function() {
        showPagination.innerText = "Showing 37–48 of 48 results";
        pagination4.style = "background-color: var(--color-btn);";
        paginationText4.style = "color : var(--color-white); ";
        pagination1.style ="background-color: var(--color-white);";
        paginationText1.style = "color : black; ";
        pagination2.style ="background-color: var(--color-white);";
        paginationText2.style = "color : black; ";
        pagination3.style ="background-color: var(--color-white);";
        paginationText3.style = "color : black; ";

        pagination2.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination2.style = "background-color: var(--color-btn);";
            paginationText2.style = "color : var(--color-white); ";
          });
        pagination2.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination2.style ="background-color: var(--color-white);";
            paginationText2.style = "color : black; ";
          });

          pagination3.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination3.style = "background-color: var(--color-btn);";
            paginationText3.style = "color : var(--color-white); ";
          });
        pagination3.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination3.style ="background-color: var(--color-white);";
            paginationText3.style = "color : black; ";
          });

          pagination1.addEventListener("mouseenter", function() {
            // Thay đổi thuộc tính CSS khi hover vào phần tử
            pagination1.style = "background-color: var(--color-btn);";
            paginationText1.style = "color : var(--color-white); ";
          });
        pagination4.addEventListener("mouseleave", function() {
            // Thay đổi thuộc tính CSS khi rời khỏi phần tử
            pagination1.style ="background-color: var(--color-white);";
            paginationText1.style = "color : black; ";
          });
        
    });

    // ẩn hiện filter
    let btn_filter = document.getElementById('btn-filter');
    let filter = document.getElementById('filter');
    let bg = document.getElementById('bg');
    let close = document.getElementById('close');
    
    btn_filter.addEventListener('click',function(){
      filter.classList.add('hidden-filter-selected');
      bg.classList.add('bg');
      close.classList.add('hidden-filter-close')
    } )

    bg.addEventListener('click',function(){
      filter.classList.remove('hidden-filter-selected');
      bg.classList.remove('bg');
      close.classList.remove('hidden-filter-close')
    })
    
    close.addEventListener('click',function(){
      filter.classList.remove('hidden-filter-selected');
      bg.classList.remove('bg');
      close.classList.remove('hidden-filter-close')
    })
   
  

});


