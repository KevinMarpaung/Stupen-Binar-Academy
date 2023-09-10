const data = [
  {
    nama: "kevin marpaung",
    nim: "210504044",
    age: 20,
    prodi: "informatika",
  },
  {
    nama: "prayoga",
    nim: "212123",
    age: 21,
    prodi: "sistem informasi",
  },
  {
    nama: "anton",
    nim: "21243",
    age: 19,
    prodi: "teknik komputer",
  },
];

const dataLengkap = data.filter(function (age) {
  if (age.age >= 20) {
    return true;
  } else {
    console.log("tidakn ada umur segitu");
  }
});

console.log(dataLengkap);

const dataNama = data.map((nama) => {
  return nama.nama;
});

console.log(dataNama);
