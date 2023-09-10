const diskon = 500; //variabel global bisa diakses dari mana aja
if (true) {
  const diskon = 300; // locak variabel hanya bisa diakses discope
  console.log("diskon:", diskon);
}
console.log(diskon);

const earth = "bulan";

// earth = "bintang"; //kalo const dideklarasikan lagi akan jadi eror

// menambah objet location
const data = { id: 1, name: "kevin" };
data.location = "sumut";
console.log(data);

const angka = [1, 213, 12, 3];
const angkaBaru = angka.sort(function (a, b) {
  return a - b;
});

console.log(angkaBaru);
