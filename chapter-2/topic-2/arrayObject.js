const data = [
  {
    nama: "kevin marpaung",
    nim: "210504044",
    prodi: "informatika",
  },
  {
    nama: "prayoga",
    nim: "212123",
    prodi: "sistem informasi",
  },
  {
    nama: "anton",
    nim: "21243",
    prodi: "teknik komputer",
  },
];

const datanama = data.map(function (nama) {
  return nama.nama;
});
const dataNim = data.map(function (nim) {
  return nim.nim;
});
console.log(datanama);
console.log(dataNim);
