// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  // return arr.filter((num) => num % 2 !== 0).toString(); # Ini merupkan kode asli yang belum diganti #
  return arr.filter((num) => num % 2 === 0);
};
/**
 * Write your description here, why the function is not working?
 * 
 Fungsi tersebut tidak berjalan karena implementasi yang digunakan dalam fungsi filterOddNumber memilih angka-angka ganjil bukan angka-angka genap. Ini terjadi karena kondisi yang digunakan dalam fungsi filter tersebut tidak tepat. 
 Seharusnya, fungsi tersebut menggunakan kondisi num % 2 === 0 untuk memilih angka-angka genap yang ada didalam sebuah array. Kondisi num % 2 !== 0 (pada kode asli) akan mengembalikan angka-angka ganjil yang terdapat pada array (angka mod 2 tidak sama dengan 0, yang seharusnya sama dengan 0).
 Selain itu, pada kode aslinya, hasil dari filter akan diubah menjadi string menggunakan metode .toString(). Penggunaan metode .toString() ini akan menyebabkan hasil akhirnya menjadi string yang berisi angka-angka yang dipisahkan oleh koma, bukan array dari angka-angka genap seperti yang diharapkan. Karena itu, penggunaan .toString() juga perlu dihapus agar fungsi bisa mengembalikan array angka genap, bukan string.
 Jadi, untuk memperbaiki fungsi filterOddNumber, perlu dilakukan perubahan pada kondisi filter agar memilih angka-angka genap dengan menggunakan num % 2 === 0 dan menghapus penggunaan .toString(), sehingga fungsi ini dapat mengembalikan array (bukan string) yang berisi angka-angka genap dari array input, sesuai dengan tujuan fungsi ini.
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
