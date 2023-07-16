/** Data  URL iframe & Mode URL
 * Untuk pengujian atau development gunakan data dummy.
 * Hati - hati Jika menggunakan data URL asli dari Google Calendar
 * Jika terlalu banyak request, Google akan memblokir sementara IP anda.
 * */

/* URL iframe
===========================
Title		&showTitle=0
Nav			&showNav=1
Date		&showPrint=0
Print		&showPrint=0
Tabs		&showTabs=0
Calender	&showCalendars=0
Timezone	&showTz=0
			&ctz=UTC
			&ctz=Asia%2FJakarta
Mode View	&mode=AGENDA | MONTH | WEEK
Week start	&wkst=1 | 1 sun - 7 sat
*/

/* Data URL iframe
===========================
Beri nilai 1 jika ingin menggunakan data dummy
Beri nilai 0 jika ingin menggunakan data asli dari Google Calendar
*/
const devMode = 1;

// Inisialisasi variabel berdasarkan devMode
let overviewURL, userURL, userSecondaryURL, overviewModeDay, overviewModeWeek, userModeDay;
if (devMode === 0) {
	// Data dummy untuk pengujian
	overviewURL 		= '/data/?&wkst=1&bgcolor=%23e3e9ff&ctz=Asia%2FJakarta&showTitle=0&showNav=1&showCalendars=0';
	userURL 			= '/data/?&wkst=1&bgcolor=%23e3e9ff&ctz=Asia%2FJakarta&showTitle=0&showNav=1&showCalendars=0';
	userSecondaryURL 	= '/data/?&wkst=1&bgcolor=%23e3e9ff&ctz=Asia%2FJakarta&showTitle=0&showNav=1&showCalendars=0&showTabs=0&showTz=';
	overviewModeDay = '&mode=AGENDA';
	overviewModeWeek = '&mode=WEEK';
	userModeDay = '&mode=AGENDA';

	// Tampilkan data di console beberapa data dummy sekaligus dengan menggunakan koma dan baris baru sebagai pemisah
	console.log(overviewURL + '\n' + userURL + '\n' + userSecondaryURL + '\n' + overviewModeDay + '\n' + overviewModeWeek + '\n' + userModeDay);

} else {
	// Data asli dari Google Calendar

	overviewURL 		= 'https://calendar.google.com/calendar/embed?&wkst=1&bgcolor=%23e3e9ff&ctz=Asia%2FJakarta&showTitle=0&showNav=1&showCalendars=0&showTabs=0&showPrint=0&showTz=0';
	userURL 			= 'https://calendar.google.com/calendar/embed?&wkst=1&bgcolor=%23e3e9ff&ctz=Asia%2FJakarta&showTitle=0&showNav=1&showCalendars=0';
	userSecondaryURL 	= 'https://calendar.google.com/calendar/embed?&wkst=1&bgcolor=%23e3e9ff&ctz=Asia%2FJakarta&showTitle=0&showNav=1&showCalendars=0&showTabs=0&showTz=0';

	overviewModeDay = '&mode=AGENDA';
	overviewModeWeek = '&mode=WEEK';
	userModeDay = '&mode=AGENDA';
}

// Data User
const userData = {
	// Tambahkan data untuk menu-user lainnya.
	"kundan": {
	  name: "Pak Kundan",
	  email: "kundan@bra-indo.com",
	  image: "assets/profile/kundan.jpg",
	  // BRA 93
	  src : "&src=cHRicmE5M0BnbWFpbC5jb20"
	},
	"nury": {
	  name: "Bu Nury Kadir",
	  email: "nury@bra-indo.com",
	  image: "assets/profile/nury.jpg",
	  // IDD BUSANA
	  src : "&src=aWRkYnVzYW5hQGdtYWlsLmNvbQ"
	},
	"angie": {
	  name: "Ms Angie Arbas",
	  email: "angie@bra-indo.com",
	  image: "assets/profile/angie.jpg",
	  // PT BRA WEB
	  src : "&src=cHRicmF3ZWJAZ21haWwuY29t"
	},
	"satya": {
	  name: "Satya Nadella",
	  email: "satya@microsoft.com",
	  image: "assets/profile/satya.jpg",
	  src : "&src=ZGVzaWduY2VudGVyYnJhQGdtYWlsLmNvbQ"
	},
	"sundar": {
	  name: "Sundar Pichai",
	  email: "sundar@microsoft.com",
	  image: "assets/profile/sundar.jpg",
	  /* DESIGN CENTER HOLIDAY INDO */
	  src : "&src=ZW4uaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
	},
	"arvind": {
	  name: "Arvind Krishna",
	  email: "arvind@ibm.com",
	  image: "assets/profile/arvind.jpg",
	  /* MINNOVADD MOON */
	  src : "&src=bWlubm92YWRkQGdtYWlsLmNvbQ&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
	},
	"kim": {
	  name: "Kardashian Kim",
	  email: "kim@skims.com",
	  image: "assets/profile/kim.jpg",
	  // CREATIVE DESIGN BRA
	  src : "&src=ZGlnaXRhbGNyZWF0aXZlYnJhQGdtYWlsLmNvbQ&src=MWE1ZTU5ZTc2MjJkMTNlYTFjYTliY2MyNDYzOTUxOTVmYTk3NGE2ZGZlODA3N2FhNzZjYzc2MTEzNTM5Y2FhNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NzcwN2Q3NDUzNDViY2M0NTQzMTBmMTllZjI1MWQ5ZjFkZTQ4MWIwMDIxYzA2MTAxYjVlOTA4NDlhNjNjZDUzYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t"
	},
	"fran": {
	  name: "Bettencourt Fran",
	  email: "fran@loreal.com",
	  image: "assets/profile/fran.jpg",
	  // BRA 93 HOLIDAY US
	  src : "&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t"
	},
	"parag": {
	  name: "Parag Agrawal",
	  email: "parag@twitter.com",
	  image: "assets/profile/parag.jpg",
	  //IDD BUSANA BIRTH
	  src : "&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t"
	},
	"shan": {
	  name: "Shantanu Narayen",
	  email: "shan@adobe.com",
	  image: "assets/profile/shan.jpg",
	  // PTBRAINDO
	  src : "&src=cHRicmFpbmRvQGdtYWlsLmNvbQ"
	},
};