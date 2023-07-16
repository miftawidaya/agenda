// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
const menuItems = document.querySelector(".menu_items");

// Function to toggle the lock state of the sidebar
const toggleLock = () => { // Fungsi untuk mengubah status kunci sidebar
  sidebar.classList.toggle("locked"); // Menambahkan atau menghapus class 'locked' pada elemen sidebar
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) { // Jika sidebar tidak terkunci
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.add("pinned");
  } else { // Jika sidebar terkunci
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.remove("pinned");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
    sidebar.classList.remove("open");
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
    sidebar.classList.add("open");
  }
};


// Function to handle window resize
function handleWindowResize() {
  if (window.innerWidth < 768) {
    sidebar.classList.add("close");
    sidebar.classList.remove("open");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  } else if (window.innerWidth < 992) {
    sidebar.classList.add("close");
    sidebar.classList.remove("open");
    sidebar.classList.remove("locked");
  } else {
    if (!sidebar.classList.contains("locked")) {
      sidebar.classList.add("hoverable");
    }
  }
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// Panggil fungsi handleWindowResize() saat halaman dimuat
handleWindowResize();

// Tambahkan event listener untuk peristiwa resize
window.addEventListener("resize", handleWindowResize);

// Penanganan peristiwa saat pengguna melakukan scroll pada elemen .menu-items
menuItems.addEventListener("scroll", function() {
  if (menuItems.scrollTop > 0) {
    menuItems.classList.add("menu-scroll");
  } else {
    menuItems.classList.remove("menu-scroll");
  }
});

// Mebeuat link menu user berdasarkan userData yang ada di file data.js
function generateUserLinks() {
	let userLinks = '';
  
	// Mendapatkan userId yang pertama
	const firstUserId = Object.keys(userData)[0];
  
	for (const user in userData) {
	  const userDataItem = userData[user];
	  const link = document.createElement('li');
	  link.className = 'item';
  
	  // jika hash home maka Menambahkan class 'active' pada elemen li untuk userId yang pertama
	  if (user === firstUserId && (window.location.hash === '#home')) {
		link.classList.add('active');
	  }
	  
	  //menambahkan anchor
	  const anchor = document.createElement('a');
	  anchor.href = `#${user}`;
	  anchor.className = 'link flex';
  
	  const navImage = document.createElement('span');
	  navImage.className = 'nav_image';
  
	  const image = document.createElement('img');
	  image.src = userDataItem.image;
  
	  const span = document.createElement('span');
	  span.className = 'links_name';
	  span.textContent = userDataItem.name;
  
	  anchor.appendChild(navImage);
	  navImage.appendChild(image);
	  anchor.appendChild(span);
	  link.appendChild(anchor);
	  userLinks += link.outerHTML;
	}
  
	userContainer.innerHTML = userLinks;
}
