$(document).ready(function () {
    
   $('#exampleModal').modal('show');
   let waktu = 10;
  const ht =  setInterval(function(){
    const waktu_sekarang = new Date().getTime()
    const waktu_tujuan = new Date('May 18 2021 00:00:00').getTime();
    const selisih = waktu_tujuan - waktu_sekarang;
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60 ));
    const detik = Math.floor(selisih % (1000 * 60) / 1000 );
    let waktu = new Date();
    let menit1 = waktu.getMinutes();
    let jam1 = waktu.getHours();
    let tanggal1 = waktu.getDate();
    let bulan1 = waktu.getMonth();
    let tahun1 = waktu.getFullYear();
    console.log(waktu);
    if (selisih <= 0) {
      $('#gambar').show('slow');
      $('#mulai').hide();
       clearInterval(ht);
      let waktu2 = 10;
      const ht2 = setInterval(function(){
          waktu2--; if (waktu2 < 1 ) {
            clearInterval(ht2);
            $('#exampleModal').modal('hide');
// blok kode
// ulang tahun
Swal.fire({
  title: 'Assalamaualaikum Winda, Selamat Malam..!',
  showConfirmButton: true,
  confirmButtonText: `Next`,
  imageUrl: 'assets/img/winda.jpg',
  imageWidth: 400,
  imageHeight: 400,
  imageAlt: 'Custom image',
  showClass: {
      popup: 'animate__animated animate__rollIn'
    },
    hideClass: {
      popup: 'animate__animated animate__rollOut'
    }
})
.then((next) => {
  if(next.isConfirmed){
    let audio = new Audio('tahun.mp3');
    audio.play();
    (async () => {
     await Swal.fire({
          title : 'Yang pertama',
          icon : 'info',
          text: `Selamat Ulang tahun yang ke 21 mbak, semoga di tahun ini akan menjadi lebih baik lagi kedepanya lebih di mantapkan lagi untuk
          masa depanya dann di permudah segala urusanya, dan semoga apa yang di impikan akan cepet tercapai, dan juga bisa menjadi pribadi yang kuat, siap akan menghadapi
          cobaan dan rintangan kedepanya, yang selalu sabar dan bertawakkal kepada Allah SWT, dan juga selalu berada di lindungan Allah SWT,
          hanya ini yang saya berikan kepada kamu sangat lah sederhana, yang saya harapkan hanya lah doa yang terbaik buat kita,. ISTAJAB LANA YA RABB.. AMIINN.  `,
          showClass: {
              popup: 'animate__animated animate__flipInX'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
          showConfirmButton : true,
          confirmButtonText : 'Next'
        })
        .then((a) => {
          if(a.isConfirmed){
              Swal.fire({               
                  showConfirmButton: true,    
                  icon : 'info',
                  title : 'Yang Ke-2',
                  text : `di hari ulang tahun ini, saya ingin memberikan suatu hal yang mungkin bisa menjadi hal terbaik atau terindah di hari ini, dimana saya awal nya sudah
                  membuka lebih awal ke samean yaitu tentang mimpi ku,memang disitu penuh dengan tanda tanya yang sangat membingungkan, tapi saya sendiri yakin insyallah bisa
                  saya sampaikan lewat dunia nyata, dan semoga apa yang saya rasakan dari kemarenya , dari komunikasi kita, dll itu menjadi jembatan yang mampu menyatukan
                  jalan yang terpisah, mungkin di kala itu, mbak nya waktu menjalani kesibukan, saya hanya bisa menunggu setaip waktu, saya selipkan waktu senggang hanya melihat status whatsapp nya,
                  saya hanya berfikir positif, agar hati ini tidak merasakan keraguan, saya hanya bisa diam, dan tak berani bertanya tanya apa apa.
                  maaf mbak, jika saya itu kadang crewet selalu mengingatkan mbak tentang ini lah, itu lah, tapi tanpa mbak sadari, itu saya lakukan demi kebaikan dan juga melaksanakan kewajiban
                  kepada Allah SWT..
                  dari semua itu, bukan membuat saya MENYERAH atau MUNDUR, akan tetapi  saya berfikir ini lah yang dinamakan PERJUANGANN AWAL

                   `,            
                  confirmButtonText: `Next`,
                  showClass: {
                      popup: 'animate__animated animate__flipInY'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                .then((b) => {
                  if(b.isConfirmed){
                    let audio = new Audio('tahun.mp3');
                    audio.play();
                      Swal.fire({               
                          showConfirmButton: true, 
                          showDenyButton: true,
                          denyButtonText: `Tidak`,  
                          icon : 'question', 
                          text : `saya rasa ini menjadi lembaran yang terakhir untuk berbicara tentang hal ta'ruf dan saya ingin jujur selama ini dan saya tidak sanggup menahan beban khawaitr atau keraguan.
                          saya hanya mempunya rasa tanggung jawab, kasih sayang , perduli, kesabaran dan saya akan berusaha bisa mnuntun kita bersama di jalan yang benar,
                          saya mengagumi dan suka sama samean mbak, ingin sekali saya bisa mengisi hati nya kamu dan bisa bersama kamu,
                          BISMILLAH jika mbak menerima nya , bisa lanjutkan dengan tekan (IYA), jika mbak menolak bisa menkan (TIDAK)`,            
                          confirmButtonText: `Iya`,
                          showClass: {
                              popup: 'animate__animated animate__rotateIn'
                            },
                            hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                        .then((c) => {
                          if(c.isConfirmed){
                              Swal.fire({
                                  icon: 'question',
                                  title: 'Apakah Mbak Sudah yakin..?',
                                  showConfirmButton: true, 
                                  confirmButtonText: `Iya Yakin`,
                  
                                  showClass: {
                                    popup: 'animate__animated animate__rotateIn'
                                  },
                                  hideClass: {
                                    popup: 'animate__animated animate__bounceOutDown'
                                  }
                                })
                                .then((d) => {
                                  if(d.isConfirmed){
                                        (async () => {
                                        const { value: alas } = await Swal.fire({
                                          icon : 'success',
                                          title: 'Alhamdulillah',
                                          input: 'text',
                                          inputLabel: 'apa alasan mbak, bisa menerima saya. ??',
                                          inputPlaceholder: 'Jawab dengan jujur Ya Mbak',
                                          showConfirmButton: true, 
                                          confirmButtonText: `Send To`, 
                                          showClass: {
                                            popup: 'animate__animated animate__zoomIn'
                                          },
                                          hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                          }
                                        })
                                        const url = `https://api.telegram.org/bot1695891958:AAF9nshsMlM6eTfZUFZPMfGVsBAn5qHuJXs/sendMessage?chat_id=-441996994&text=${alas}`;
                                        $.ajax({
                                            type: "GET",
                                            url: url,
                                            dataType: "json",
                                            success: function (response) {
                                                console.log(response);
                                            }
                                        });
                                        if (alas) {
                                          let dt = new Date();
                                          let menit1 = dt.getMinutes();
                                          let jam = dt.getHours();
                                          let tanggal = dt.getDate();
                                          let bulan = dt.getMonth();
                                          let tahun = dt.getFullYear();
                                          Swal.fire({
                                              icon: 'success',
                                              title: 'klik tombol di bawah untuk melanjutkan',
                                              showConfirmButton: true, 
                                              confirmButtonText: `Lanjutkan ke Whatsapp`,
                                              showClass: {
                                                popup: 'animate__animated animate__rotateIn'
                                              },
                                              hideClass: {
                                                popup: 'animate__animated animate__bounceOutDown'
                                              }
                                            }) 
                                           .then((l) => {
                                             if(l.isConfirmed){
                                              window.location.href=`https://api.whatsapp.com/send?phone=6285335650431&text=TANGGAL PENTING ${dt}`;
                                             }
                                           })
                                        }
                                        })()
                                  }
                                })
                          }else if(c.isDenied){
                            (async () => {
                              const { value: al } = await Swal.fire({
                                title: 'alasan nya kenapa smean menolak mbak..?',
                                icon : 'question',
                                input: 'text',
                                inputLabel: '',
                                inputPlaceholder: 'isi disini, Jawab dengan jujur',
                                showConfirmButton : true,
                                confirmButtonText : 'Send'
                              })
                              if(al){
                                  window.location.href=`https://api.whatsapp.com/send?phone=6285335650431&text=Maaf Mas karena , ${al} `;
                              }
                              })()
                          }
                        })
                      }
                    })
        }
        })
        }) ()
  }
})
// akhir blok kode

          }
          $('#mulai2').text(`Eittsss..! ${waktu2} Detik lagi Ya..`);

      },1000)
    }
    $("#waktu").text(`tunggu sampai jam 00:00:00 18-Mei-2021`);
    $('#mulai').text(`Tunggu ${jam} Jam ${menit} Menit ${detik} detik`);
  },1000);
});

window.setInterval("waktu()", 1000);
    function waktu() {
        let waktu = new Date();
        setTimeout("waktu", 1000);
        document.getElementById('date').innerHTML =
         waktu.getHours() + ':' + waktu.getMinutes() + ':'
          + waktu.getSeconds()+ ', ' + waktu.getDate() +
           '-'+ waktu.getMonth()+ '-' + waktu.getFullYear()  ;
    }
  

