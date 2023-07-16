// url query sample: ?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=0&showTitle=0&src=ZGlnaXRhbGNyZWF0aXZlYnJhQGdtYWlsLmNvbQ&src=MWE1ZTU5ZTc2MjJkMTNlYTFjYTliY2MyNDYzOTUxOTVmYTk3NGE2ZGZlODA3N2FhNzZjYzc2MTEzNTM5Y2FhNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NzcwN2Q3NDUzNDViY2M0NTQzMTBmMTllZjI1MWQ5ZjFkZTQ4MWIwMDIxYzA2MTAxYjVlOTA4NDlhNjNjZDUzYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23F09300&color=%2333B679&color=%23E67C73&color=%23D50000&color=%232336a1

// Mengambil URL dari address bar
var url = window.location.href;

// Mencari tanda tanya "?" dalam URL untuk memeriksa apakah ada data query
var queryStartIndex = url.indexOf('?');

// Membuat objek untuk menyimpan data query
var queryData = {};

// Memisahkan data query menggunakan karakter "&" atau "?"
if (queryStartIndex > -1) {
  var queryString = url.substring(queryStartIndex + 1);
  var queryStrings = queryString.split(/[&;]/);

  // Memisahkan kunci dan nilai data query
  queryStrings.forEach(function (query) {
    var parts = query.split('=');
    var key = decodeURIComponent(parts[0]);
    var value = decodeURIComponent(parts[1] || '');

    // Menyimpan data query dalam objek
    if (queryData[key]) {
      if (Array.isArray(queryData[key])) {
        queryData[key].push(value);
      } else {
        queryData[key] = [queryData[key], value];
      }
    } else {
      queryData[key] = value;
    }
  });
}

// Menampilkan data query dalam console log
//console.log(queryData);

// Membuat elemen ul
var ul = document.createElement('ul');


var mode = "";

// Iterasi melalui data query dan membuat elemen li
for (var key in queryData) {
  var li = document.createElement('li');
  var strong = document.createElement('strong');
  strong.textContent = key + ': ';
  li.appendChild(strong);

  // menympan nilai key mode ke dalam variabel mode
  var mode = queryData['mode'];

  // Memeriksa apakah nilai query merupakan array atau tidak
  if (Array.isArray(queryData[key])) {
    var ol = document.createElement('ol');

    // Iterasi melalui nilai array dan membuat elemen li dalam elemen ol
    for (var i = 0; i < queryData[key].length; i++) {
      var olLi = document.createElement('li');
      olLi.textContent = queryData[key][i];
      ol.appendChild(olLi);
    }

    li.appendChild(ol);
  } else {
	// Jika nilai query bukan array, maka buat elemen li biasa
    li.textContent += queryData[key];
  }
	// append li ke ul
  ul.appendChild(li);
}


// jika btn dengan id hideQuery di klik, maka sembunyikan data query dan teks tombol berubah menjadi "Show Query" dan sebaliknya jika tombol "Show Query" di klik maka tampilkan data query dan teks tombol berubah menjadi "Hide Query" 
var hideQuery = document.getElementById('hideQuery');
hideQuery.addEventListener('click', function () {
	if (queryList.style.display === 'none') {
		queryList.style.display = 'block';
		hideQuery.textContent = 'Hide Query';
	} else {
		queryList.style.display = 'none';
		hideQuery.textContent = 'Show Query';
	}
});