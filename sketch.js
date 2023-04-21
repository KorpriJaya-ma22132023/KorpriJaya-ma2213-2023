//OpenWeather untuk cuaca
let urlAPI ="https://api.openweathermap.org/data/2.5/weather?lat=-5.371833141046321&lon=105.30085676984645&appid=e393edc7b02a738b01a57ba42786fa5e&units=metric";
let dataAPI;

//Diagram Lingkaran
let dataJenisKelamin;
let urljeniskelamin = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcTOn9GXeSk0iems8jRgf4fp_GzYQNRDy_2Ulp-d09dZklu_znkh_47HluA_yY50hLE9WJks5AFGTk/pub?gid=526016363&single=true&output=csv"

let dataAgama ;
let urlAgama = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTu1cVUXVj1Gbo1T3y9GIeU6QghA-8VBv9SM1DVeGasdXIZquoKPEeTacSZEnYvXa5PvjapMqnkAKzn/pub?gid=0&single=true&output=csv"

let dataPendidikan;
let urlpendidikan = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRvoN-0jnrTA4JDD2ewLSIn3caxib8KgFOjrNM4wwkcUQlXqw_FsYSwQ8LcXtO-IIhwrQMyMi9vHgCm/pub?gid=0&single=true&output=csv"

let dataPekerjaan;
let urlpekerjaan = 
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQQLkqtnl8yvMj8_4Swec2hC4JHhvIISYB_WD1cXg8XfeOk-sSdRAvxq51yGYlx325bGzs97ZW7lKgk/pub?gid=0&single=true&output=csv"


let latar;
let logo;
let logoitera;
let logomtkitera;
let organigram;
let PoppinsSemiBold;
let PoppinsMedium;
let PoppinsExtraLight;
r = 15


function infoCuaca (p, q, data, fontSize){
  textSize (fontSize);
  fill('white')
  noStroke()
textFont(PoppinsExtraLight)

  text ('Korpri Jaya', //Desa
        posP = p + 1060,
        posQ = q + 1140,
        textSize (20))
// Cuaca
  text(data.weather [0].main,
      posP= p + 1300,
      posQ= q + 1100,
      textSize (30))
  text('Cuaca',
      posP = p + 1300,
      posQ = q + 1120,
      textSize(13))
// Suhu
  text(data.main.temp+"°c",
      posP =p + 1060,
      posQ =q + 1180,
      textSize(40))

// Wind Speed
  text('Kecepatan Angin',
      posP = p + 1300,
      posQ = q + 1200,
      textSize(13))
  text(data.wind.speed +" km/h ",
      posP =p + 1300 ,
      posQ =q +1180, 
      textSize (30))
// Humidity
  text (data.main.humidity + " % ",
      posP = p + 1300,
      posQ = q + 1260 ,
      textSize (30))
  text('Kelembaban',
      posP = p + 1300,
      posQ = q +1260+20,
      textSize(13))
  }

function preload(){
  dataAPI = loadJSON(urlAPI);
  latar = loadImage('latar.png');
  logo = loadImage('logo_balam.png');
  logoitera = loadImage('logo_itera.png')
  logomtkitera = loadImage('logomtkitera.png')
  organigram = loadImage('Organigram.png');
  PoppinsSemiBold = loadFont('PoppinsSemiBold.ttf')
  PoppinsMedium = loadFont('PoppinsMedium.ttf')
  PoppinsExtraLight = loadFont('PoppinsExtraLight.ttf')
  dataJenisKelamin = loadTable(urljeniskelamin, 'csv', 'header');
  dataAgama = loadTable(urlAgama, 'csv', 'header');
  dataPendidikan = loadTable(urlpendidikan, 'csv', 'header');
  dataPekerjaan = loadTable(urlpekerjaan, 'csv', 'header');
}

function setup() {
  createCanvas(1600, 3500);
  
}

function draw() {
  background('white');
  noStroke()
  
//Latar
  image(latar,0,0,1600,900);
  fill(51,66,87,200);
  rect(0,0,1600,900);
  
//Logo Kota
  image(logo,750,187,150,150);
  
//Logo ITERA 
  image(logoitera,1400,50,160,160);

//Logo Matematika ITERA
  image(logomtkitera,1230,50,160,160);

  //Text Judul 
  fill('white');
  textFont(PoppinsSemiBold);
  textSize(40);
  text("Desa Korpri Jaya",660, 400);
  textFont(PoppinsExtraLight);
  textSize(30);
  text("Kecamatan Sukarame",670, 450);
  text("Kota Bandar Lampung", 670, 480);
  text("Provinsi Lampung", 700, 510);
  text("Kode Pos 35131", 720,540)
  
//Organigram Desa Korpri Jaya
  image(organigram,10,1400,1000,625)
  
//Gambaran Umum Desa Korpri Jaya 
  fill('white')
  rect(100,952,800,500);
  textSize(20)
  textFont(PoppinsMedium)
  fill('black')
  text("Gambaran Umum Desa Korpri Jaya",360,980)
  
  textSize(18)
  textFont(PoppinsExtraLight)
  text("Awal mula seluruh lokasi pada desa ini bernama Desa Harapan Jaya yang berasal dari  .",110,1020)
  text("bagian wilayah Sukarame. Desa ini memliliki luas 491 Ha di tetapkan menjadi 2 lingkungan. ",110,1040+r)
  text("Lingkungan 1 terdiri dari 10 RT dan lingkungan 2 terdiri dari 19 RT .",110,1060+2*r)
  text("Berdasarkan Peraturan Daerah Kota Bandar Lampung No.04 tahun 2012 desa ini  ",110,1080+3*r)
  text("dipecah lagi menjadi 2 desa, yaitu :  ",110,1110+4*r)
  text("1. Lingkungan 1 = 10 RT menjadi Desa Korpri Jaya",110,1130+5*r)
  text("2. Lingkungan 2 = 19 RT menjadi Desa Korpri Raya.",110,1150+6*r)
  text("Desa Korpri Jaya di kembangkan menjadi 2 lingkungan yaitu:",110,1170+7*r)
  text("Lingkungan 1 terdiri dari 8 RT ",110,1190+8*r)
  text("Lingkungan 2 terdiri dari 6 RT",110,1210+9*r)
  
//Judul Dashboard 
  fill('white');
  textFont(PoppinsSemiBold);
  textSize(40);
  text("Website Desa Korpri Jaya",30,60);

  
//Informasi terkait Cuaca Desa Korpri Jaya
  rect(1000,950,500,400)
  fill('black')
  textFont(PoppinsMedium)
  textSize (25)
  judul = ('Informasi Cuaca Desa Korpri Jaya')
  text (judul,1040,1000)
  
  fill (51,66,87,200);
  rect (1045,1060,422,250,20);

  infoCuaca (0, 0, dataAPI, 500/20)
  
  textFont(PoppinsExtraLight)
  fill(0);
  noStroke();
  textSize(18);
  
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);

  text(currentDate, 1050, 1050);
  //waktu
  text(currentTime, 1350,1050);
  
//Data Usia Penduduk Desa Korpri Jaya
  fill('white')
  rect(100,2051,800,400)
  fill('black')
  
  textFont(PoppinsMedium)
  textSize(30)
  text("Data Statistik Penduduk Desa Korpri Jaya",150,2000)
  textSize(20)
  text("Grafik Data Usia Penduduk",300,2080)
  
  textFont(PoppinsExtraLight)
  rect(180,2070,1,330)
  rect(180,2400,550,1)
  fill('#ffcc99')
  rect(215,2363,75,37)
  fill('#ffbb26')
  rect(340,2225,75,175)
  fill('#ff9933')
  rect(465,2310,75,90)
  fill('#ff8000')
  rect(590,2170,75,230)

  textSize(16)
    fill ('black');
    text(0,170,2400);
    text(500,150,2350);
    text(1000,146,2300);
    text(1500,146,2250);
    text(2000,141,2200);
    text(2500,141,2150);
    text(3000,141,2100);
  
  text('0-5 Tahun', 216,2420);
  text('6-17 Tahun', 340,2420);
  text('18-24 Thn', 465,2420);
  text('> 25 Tahun', 590,2420);
  
  anglesjeniskelamin = dataJenisKelamin.getColumn('x')
  pieChartjeniskelamin(200, anglesjeniskelamin);
  
  anglesagama = dataAgama.getColumn('x')
  pieChartagama(200, anglesagama);
  
  anglespendidikan = dataPendidikan.getColumn('x')
  pieChartpendidikan(200, anglespendidikan);
  
  anglespekerjaan = dataPekerjaan.getColumn('x')
  pieChartpekerjaan(200, anglespekerjaan);
  
}

function pieChartjeniskelamin(diameterjeniskelamin, dataJenisKelamin) {
  let lastAnglejeniskelamin = 0;
  var piecolorjeniskelamin = ['#00CCCC ','#FF9999 '];
  for (var i = 0; i < dataJenisKelamin.length; i++) {
    fill(piecolorjeniskelamin[i]);
    arc(
      275,
      2670,
      diameterjeniskelamin,
      diameterjeniskelamin,
      lastAnglejeniskelamin,
      lastAnglejeniskelamin + radians(anglesjeniskelamin[i])
    );
    lastAnglejeniskelamin += radians(anglesjeniskelamin[i]);
  }
  
  //Data Jenis Kelamin Penduduk Desa Korpri Jaya
  fill('white')
  fill('black')
  
  textSize(19)
  textFont(PoppinsMedium)
  text("Grafik Data Jenis Kelamin Desa Korpri Jaya",90,2548)
  textFont(PoppinsExtraLight)
  text("Laki-Laki            = 2377",170,2808)
  text("Perempuan      = 2482",170,2828)
  
  //Simbol Warna untuk Grafik 
  fill(piecolorjeniskelamin[0]) ;
  circle(295,2801,18);
  fill(piecolorjeniskelamin[1]) ;
  circle(295,2823,18);
}

function pieChartagama(diameter, dataAgama) {
  let lastAngle = 0;
  var piecoloragama = ['#b266ff ','#FFFF66 ','#66FF66 ','#808080 '];
  for (var i = 0; i < dataAgama.length; i++) {
    fill(piecoloragama[i])
    arc(
      720,
      2670,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglesagama[i])
    );
    lastAngle += radians(anglesagama[i]);
  }
  //Data Agama Penduduk Desa Korpri Jaya
  fill('white')
  //rect(545,2503,350,400)
  
  fill('black')
  textFont(PoppinsMedium)
  text("Grafik Data Agama Desa Korpri Jaya",555,2548)
  
  textFont(PoppinsExtraLight)
  text("Islam          = 4720",635,2800)
  text("Katholik      = 32",635,2820)
  text("Kristen        = 85",635,2840)
  text("Hindu         = 22",635,2860)
  
  
  fill(piecoloragama[0]) ;
  circle(720,2795,16);
  fill(piecoloragama[1]);
  circle(720,2815,16);
  fill(piecoloragama[2]);
  circle(720,2835,16);
  fill(piecoloragama[3]) ;
  circle(720,2855,16);
  
}

function pieChartpendidikan(diameterpendidikan, dataPendidikan) {
  let lastAngle = 0;
  var piecolorpendidikan = ['#ff6666','#ffb266 ','#ffff99 ','#66ff66 ','#66ffff ', '#ff66b2','#a0a0a0']
  for (var i = 0; i < dataPendidikan.length; i++) {
    fill(piecolorpendidikan[i])
    arc(
      275,3120,
      diameterpendidikan,
      diameterpendidikan,
      lastAngle,
      lastAngle + radians(anglespendidikan[i])
    );
    lastAngle += radians(anglespendidikan[i]);
  }
  // Data Pendidikan Penduduk Desa Korpri Jaya
  fill('white')
  //rect(100,2953,350,450)
 
  textFont(PoppinsMedium)
  fill('black')
  text("Grafik Data Pendidikan Desa Korpri Jaya",90,2990)
  
  textFont(PoppinsExtraLight)
  text("Sarjana                  = 650",170,3250)
  text("Sarjana Muda       = 130",170,3270)
  text("SLTA/SMA               = 2021",170,3290)
  text("SLTP/SMP                = 836",170,3310)
  text("SD                          = 880",170,3330)
  text("TK                           = 222",170,3350)
  text("Belum Sekolah      = 115",170,3370)
  
  fill(piecolorpendidikan[0]) ;
  circle(320,3245,10);
  fill(piecolorpendidikan[1]) ;
  circle(320,3265,10);
   fill(piecolorpendidikan[2]) ;
  circle(320,3285,10);
   fill(piecolorpendidikan[3]) ;
  circle(320,3305,10);
   fill(piecolorpendidikan[4]) ;
  circle(320,3325,10);
   fill(piecolorpendidikan[5]) ;
  circle(320,3345,10);
   fill(piecolorpendidikan[6]) ;
  circle(320,3365,10)
}

function pieChartpekerjaan(diameterpekerjaan, dataPekerjaan) {
  let lastAnglepekerjaan = 0;
  var piecolorpekerjaan = ['#3399ff','#3333ff ','#9933ff ','#ff33ff ','#cc0066 ', '#00cc00','#ff8000','#009900','#00000']
  for (var i = 0; i < dataPekerjaan.length; i++) {
    fill(piecolorpekerjaan[i])
    arc(
      750,3120,
      diameterpekerjaan,
      diameterpekerjaan,
      lastAnglepekerjaan,
      lastAnglepekerjaan + radians(anglespekerjaan[i])
    );
    lastAnglepekerjaan += radians(anglespekerjaan[i]);
  }
  //Data Pekerjaan Penduduk Desa Korpri Jaya
  fill('white')
  //rect(545,2953,350,450)

  textFont(PoppinsMedium)
  fill('black')
  text("Grafik Data Pekerjaan Desa Korpri Jaya",570,2990)
  
  textFont(PoppinsExtraLight)
  text("PNS                    = 614",655,3250)
  text("ABRI                   = 217",655,3270)
  text("Pedagang        = 1363",655,3290)
  text("Petani               = 534",655,3310)
  text("Tukang              = 184",655,3330)
  text("Buruh                = 1265",655,3350)
  text("Pensiunan         = 62",655,3370)
  text("Karyawan         = 470",655,3390)
  text("Lainnya             = 28",655,3410)
 
  //penanda warna
  fill(piecolorpekerjaan[0]) ;
  ellipse(780,3245,10,10);
  fill(piecolorpekerjaan[1]) ;
  ellipse(780,3265,10,10);
   fill(piecolorpekerjaan[2]) ;
  ellipse(780,3285,10,10);
   fill(piecolorpekerjaan[3]) ;
  ellipse(780,3305,10,10);
   fill(piecolorpekerjaan[4]) ;
  ellipse(780,3325,10,10);
   fill(piecolorpekerjaan[5]) ;
  ellipse(780,3345,10,10);
   fill(piecolorpekerjaan[5]) ;
  ellipse(780,3365,10,10);
   fill(piecolorpekerjaan[6]) ;
  ellipse(780,3385,10,10);
   fill(piecolorpekerjaan[7]) ;
  ellipse(780,3405,10,10);
   fill(piecolorpekerjaan[8]) ;
  ellipse(780,3425,10,10);
}
