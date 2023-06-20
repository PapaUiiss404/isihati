function showPopup() {
  var nama;
  var test;

  do {
    nama = prompt("Masukan Nama");
    test = confirm("kamu yakin?");
    
    if (test === true) {
      break;
    }
  } while (true);
  
  alert("Hai " + nama);
  alert("aku mau ngomong sesuatu");
  alert("Sebenarnya...");
  alert("Aku tuh...");
  alert("Power Ranger Merah");
  alert("Canda wkwkwkwkwk");
  alert("Sebenarnya...");
  alert("Aku udah lama suka sama kamu ><");
  alert(nama + " mau nggak jadi pacar aku?");
  
  var mau = confirm("Mau?");
  
  if (mau === true) {
    window.location.href = "https://wa.me/6282271429571?text=Mau";
  } else {
    alert("Makasih");
  }
}
