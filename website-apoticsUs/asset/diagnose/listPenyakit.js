//database penyakit yang ada di rumah sakit tersebut.
const db_penyakit = {
    flu: {
      ciri: [
        "lemas",
        "sesak nafas",
        "ngilu",
        "tidak enak badan",
        "mual",
        "diare",
        "demam",
        "nyeri otot",
        "batuk kering",
        "gangguan pernafasan akut",
        "cairan di paru-paru",
        "sakit bagian abdominal",
        "tidak nafsu makan",
      ],
      obat: [
        ["kunyit", 10000],
        ["jahe merah", 5000],
        ["jahe kuning", 4000],
      ],
      konsultasi: 1000000,
    },
    antrax: {
      ciri: [
        "Sakit tenggorokan",
        "sulit bernafas",
        "demam",
        "tidak nyaman di dada",
        "nyeri otot",
        "nyeri saat menelan",
        "mual",
        "batuk darah",
        "lemas",
      ],
      obat: [
        ["ciprofloxacin", 45000],
        ["doxycycline", 20000],
        ["penicilin", 35000],
      ],
      konsultasi: 50000,
    },
  };
  
  function cariPenyakit(pasien, database) {
    // Your code here
    let flu = 0
    let antrax = 0
    for (let i = 0; i < pasien.keluhan.length; i++) {
      let keluhan = pasien.keluhan[i];
      for (let j = 0; j < database.flu.ciri.length; j++) {
        let perCiri  = database.flu.ciri[j];
        if(keluhan === perCiri)
        flu ++
      }
  
      for (let j = 0; j < database.antrax.ciri.length; j++) {
        let perCiri = database.antrax.ciri[j];
        if(keluhan ===perCiri){
          antrax++
        }
    }
    }
  if (flu > antrax){
    return "flu"
  }else if(flu < antrax){
    return "antrax"
  }else{
    return "ambigu"
  }
  
  }
  
  
  
  
  function cariObat(penyakit, database) {
    // Your code here
  if(!database[penyakit]){
    return "tidak ada obat"
  }
  else{
    let min = Infinity
    let result = []
    for (let i = 0; i < database[penyakit].obat.length; i++) {
      let perObat = database[penyakit].obat[i];
      if(min > perObat [1]){
        min = perObat [1]
        result = perObat
      }
    }
    return result
  }
  
  }
  
  function cariHargaKonsultasi(penyakit, database) {
    // Your code here
  if(!database[penyakit]){
    return "tidak perlu dokter"
  }
  return database[penyakit].konsultasi
  }
  // console.log(cariHargaKonsultasi("flu", db_penyakit)); // 1000000
  // console.log(cariHargaKonsultasi("antrax", db_penyakit)); // 50000
  // console.log(cariHargaKonsultasi("ambigu", db_penyakit)); // 'tidak perlu dokter'
  
  function diagnosaSemuaPasien(list_pasien, database) {
    // Your code here
  
    let result = {}
    for (let i = 0; i < list_pasien.length; i++) {
      let penyakit = cariPenyakit(list_pasien[i], database)
      let obat = cariObat(penyakit, database)
      let konsultasi = cariHargaKonsultasi(penyakit, database)
  
      if(result[penyakit] === undefined){
        result[penyakit] = []
      }
      
      let person = {
        nama : list_pasien[i].nama,
        obat : obat[0],
        biaya : konsultasi + obat[1]
      }
      if ( penyakit === "ambigu"){
        person.obat = obat
        person.biaya = "tidak ada biaya"
      }
      result[penyakit].push(person)
    }
    return result
  }
  
  //Test case
  console.log(
    diagnosaSemuaPasien(
      [
        {
          nama: "heri wahyudianto",
          keluhan: ["mata berair", "berkunang kunang"],
        },
        {
          nama: "joker",
          keluhan: ["nyeri otot", "lemas", "mual", "batuk kering"],
        },
        {
          nama: "thanos",
          keluhan: ["sulit bernafas", "lemas", "demam", "batuk darah"],
        },
        {
          nama: "bad boy",
          keluhan: ["cairan di paru-paru", "sakit bagian abdominal"],
        },
      ],
      db_penyakit
    )
  );
  
  /*
    {
        ambigu : [
            {
                nama: 'heri wahyudianto',
                obat: 'tidak ada obat',
                biaya: 'tidak ada biaya'
              }
        ],
        flu : [
            {
                nama: 'joker',
                obat: 'jahe kuning',
                biaya: 1004000
              },
              {
                nama: 'bad boy',
                obat: 'jahe kuning',
                biaya: 1004000
              }
        ],
        antrax : [
            {
                nama: 'thanos',
                obat: 'doxycycline',
                biaya: 70000
              }
        ]
    }
    */
  
  console.log(
    diagnosaSemuaPasien(
      [
        {
          nama: "andi",
          keluhan: ["batuk kering", "demam", "batuk darah"],
        },
        {
          nama: "budi",
          keluhan: ["tidak nyaman di dada", "lemas", "nyeri saat menelan"],
        },
        {
          nama: "charlie",
          keluhan: ["lemas", "demam"],
        },
        {
          nama: "delta",
          keluhan: ["Sakit tenggorokan", "tidak nyaman di dada", "ngilu"],
        },
        {
          nama: "echo",
          keluhan: ["tidak enak badan", "nyeri otot", "sulit bernafas"],
        },
      ],
      db_penyakit
    )
  );
  /*
    {
      ambigu: [
        { nama: 'andi', obat: 'tidak ada obat', biaya: 'tidak ada biaya' },
        {
          nama: 'charlie',
          obat: 'tidak ada obat',
          biaya: 'tidak ada biaya'
        },
        { nama: 'echo', obat: 'tidak ada obat', biaya: 'tidak ada biaya' }
      ],
      antrax: [
        { nama: 'budi', obat: 'doxycycline', biaya: 70000 },
        { nama: 'delta', obat: 'doxycycline', biaya: 70000 }
      ]
    }
    */
  
//   module.exports = {
//     cariPenyakit,
//     cariObat,
//     cariHargaKonsultasi,
//     diagnosaSemuaPasien,
//   };
  