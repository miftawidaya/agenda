// Element yang digunakan
const userContainer = document.getElementById('user-menu');
const overviewMenu = document.getElementById('overview-menu');
const primaryFrame = document.getElementById('primary-frame').querySelector('.frame');
const secondaryFrame = document.getElementById('secondary-frame').querySelector('.frame');
const headerTitles = document.querySelectorAll('.header-title');
const emailLink = document.querySelector('.email');
const secondaryImage = document.querySelector('.secondary .nav_image img');
const navbarImage = document.querySelector('.navbar .nav_image img');
const overviewMonth = document.getElementById('overview-month');
const overviewWeek = document.getElementById('overview-week');
const overviewDay = document.getElementById('overview-day');
const navbarLogoImage = document.querySelector('.navbar .nav_image img');

// Fungsi getAnim untuk menambahkan animasi pada elemen
// lihat parameter anim pada css untuk daftar animasi yang tersedia
// contoh cara menggunaan:
// getAnim(".frame", 2000, "blinking");
function getAnim(el, duration=2000, anim='fadeIn'){
	// jika parameter el tidak ada, maka gunakan elemen dengan class fade
	if (!el) {
		el = document.querySelectorAll('.fade');
	} else {
		el = document.querySelectorAll(el);
	}
	
// Loop melalui setiap elemen
el.forEach((el) => {
	// Tambahkan kelas animasi ke setiap elemen
	el.classList.add(anim);
  });
  
  // Hapus kelas animasi setelah durasi
  setTimeout(function() {
	el.forEach((el) => {
		el.classList.remove(anim);
	});
  }, duration);
}

// Fungsi changeMenu
function changeMenu(event) {
	event.preventDefault();

	const target = event.target.closest('a');
	if (target) {
	  const targetHref = target.getAttribute('href');
	  if (targetHref === '#month' || targetHref === '#week' || targetHref === '#events') {
		document.body.className = 'overview';
		const main = document.querySelector('.main-content');
		main.id = targetHref.substring(1);
  
		const activeItem = document.querySelector('.item.active');
		if (activeItem) {
		  activeItem.classList.remove('active');
		}
		target.parentNode.classList.add('active');
  
		// Mengubah judul header
		const navbarHeaderTitle = document.querySelector('.navbar .header-title');
		navbarHeaderTitle.textContent = `Overview: ${target.textContent}`;
		// Mengubah judul teks pada tag <title>
		document.title = `Overview: ${target.textContent}`;
  
		// Mengubah gambar logo pada navbar
		const navbarImage = document.querySelector('.navbar .nav_image img');
		navbarImage.src = 'assets/ui/logo.png';
  
		// Menghapus semua konten dalam overviewMonth, overviewWeek, dan overviewDay
		overviewMonth.innerHTML = '';
		overviewWeek.innerHTML = '';
		overviewDay.innerHTML = '';

		generateOverviewItems(targetHref, userData);
  
		// Mengubah hash pada URL
		window.location.hash = targetHref.substring(1);

		// Menutup sidebar
		if ( sidebar.classList.contains("hoverable") || (!sidebar.classList.contains("locked")) ) {
			sidebar.classList.add("close");
			sidebar.classList.remove("open");
		}

		// Memanggil fungsi getAnim untuk menghilangkan elemen
		getAnim();
		getAnim(".frame", 2000, "blinking");

	  } else {

		const userId = targetHref.substring(1);
		const selectedUser = userData[userId];
  
		document.body.className = 'personnel';
		const main = document.querySelector('.main-content');
		main.id = userId;
  
		const primaryFrameSrc = `${userURL}${selectedUser.src}`;
		primaryFrame.innerHTML = `<iframe src="${primaryFrameSrc}" style="border:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>`;
  
		const secondaryFrameSrc = `${userSecondaryURL}${selectedUser.src}${userModeDay}`;
		secondaryFrame.innerHTML = `<iframe src="${secondaryFrameSrc}" style="border:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>`;
  
		headerTitles.forEach((title) => {
		  title.textContent = selectedUser.name;
		});
  
		emailLink.href = `mailto:${selectedUser.email}`;
		emailLink.textContent = selectedUser.email;
  
		secondaryImage.src = selectedUser.image;
		navbarImage.src = selectedUser.image;
  
		const activeItem = document.querySelector('.item.active');
		if (activeItem) {
		  activeItem.classList.remove('active');
		}
		target.parentNode.classList.add('active');

		// Mengubah judul header
		const navbarHeaderTitle = document.querySelector('.navbar .header-title');
		navbarHeaderTitle.textContent = selectedUser.name;
		// Mengubah judul teks pada tag <title>
		document.title = selectedUser.name;
  
		// Mengubah hash pada URL
		window.location.hash = targetHref.substring(1);

		// Menutup sidebar
		if ( sidebar.classList.contains("hoverable") || (!sidebar.classList.contains("locked")) ) {
			sidebar.classList.add("close");
			sidebar.classList.remove("open");
		}

		// Memanggil fungsi getAnim untuk menghilangkan elemen
		getAnim();
		getAnim(".frame", 2500, "blinking");
	  }
	}
  }
  
// Fungsi updateViewFromHash
function updateViewFromHash() {
	const hash = window.location.hash.substring(1);

	if (!hash || hash === 'home') {
		updateViewToHome();
		return;
	}

	const target = document.querySelector(`a[href="#${hash}"]`);
	if (target) {
		changeMenu({
			target: target,
			preventDefault: function () {},
		});
	}
}


// Fungsi untuk memperbarui tampilan ke halaman home
function updateViewToHome() {
	const firstUserId = Object.keys(userData)[0];
	const firstUser = userData[firstUserId];
	
	document.body.className = 'personnel';
  
	// Ubah id pada tag <main>
	const main = document.querySelector('.main-content');
	main.id = 'home';
  
	// Perbarui teks header
	headerTitles.forEach((title) => {
	  title.textContent = firstUser.name;
	});
  
	// Perbarui title pada elemen <head>
	document.title = 'Agenda';
  
	// Perbarui frame utama
	const primaryFrameSrc = `${userURL}${firstUser.src}`;
	primaryFrame.innerHTML = `<iframe src="${primaryFrameSrc}" style="border:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>`;
  
	// Perbarui frame sekunder
	const secondaryFrameSrc = `${userSecondaryURL}${firstUser.src}${userModeDay}`;
	secondaryFrame.innerHTML = `<iframe src="${secondaryFrameSrc}" style="border:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>`;
  
	// Perbarui tautan email
	emailLink.href = `mailto:${firstUser.email}`;
	emailLink.textContent = firstUser.email;
  
	// Perbarui secondaryImage
	secondaryImage.src = firstUser.image;
  
	// Perbarui gambar navbar
	navbarImage.src = firstUser.image;
  
	// Tambahkan kelas 'active' ke tautan item menu yang aktif
	const activeItem = document.querySelector('.item.active');
	if (activeItem) {
	  activeItem.classList.remove('active');
	}
	const homeLink = document.querySelector('a[href="#home"]');
	if (homeLink) {
	  homeLink.parentNode.classList.add('active');
	}
  }
  
  
// Fungsi untuk mengecek hash saat halaman dimuat
function checkHashOnLoad() {
	if (!window.location.hash) {
		window.location.hash = 'home';
		updateViewToHome();
	}
}

// Fungsi untuk mengubah hash pada URL tanpa memuat ulang halaman
function changeHash(hash) {
history.pushState(null, null, hash);
updateViewFromHash();
}

// Fungsi untuk menghasilkan konten overview-items berdasarkan hash
function generateOverviewItems(targetHref, userData) {
	const overviewItems = [];

	for (const user in userData) {
		const userDataItem = userData[user];
		let frameSrc;

		if (targetHref === '#month') {
		frameSrc = `${overviewURL}${userDataItem.src}`;
		} else if (targetHref === '#week') {
		frameSrc = `${overviewURL}${userDataItem.src}${overviewModeWeek}`;
		} else if (targetHref === '#events') {
		frameSrc = `${overviewURL}${userDataItem.src}${overviewModeDay}`;
		}

		const itemHTML = `<div class="overview-item">
							<div class="overview-header fade flex">
							<span class="nav_image">
								<img src="${userDataItem.image}"/>
							</span>
							<h3 class="header-title">${userDataItem.name}</h3>
							</div>
							<div class="frame">
							<iframe src="${frameSrc}" loading="lazy" style="border:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
							</div>
						</div>`;
		overviewItems.push(itemHTML);
	}

	if (targetHref === '#month') {
		overviewMonth.innerHTML = overviewItems.join('');
		} else if (targetHref === '#week') {
		overviewWeek.innerHTML = overviewItems.join('');
		} else if (targetHref === '#events') {
		overviewDay.innerHTML = overviewItems.join('');
		}
}

// Panggil fungsi updateViewFromHash saat halaman dimuat
window.addEventListener('DOMContentLoaded', updateViewFromHash);

// Panggil fungsi changeMenu pada event click
userContainer.addEventListener('click', changeMenu);
overviewMenu.addEventListener('click', changeMenu);

// Event listener untuk mendeteksi perubahan hash pada URL
window.addEventListener('hashchange', updateViewFromHash);
// Event listener untuk menangkap perubahan state pada history (back/forward button)
window.addEventListener('popstate', updateViewFromHash);

// Panggil fungsi updateViewFromHash saat halaman dimuat
document.addEventListener('DOMContentLoaded', checkHashOnLoad);

// Inisialisasi tampilan berdasarkan hash pada URL saat ini
updateViewFromHash();
generateUserLinks();
generateOverviewItems();

	