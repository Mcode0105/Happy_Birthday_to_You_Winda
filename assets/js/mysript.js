$(document).ready(function () {
   $('#exampleModal').modal('show');
   let waktu = 10;
  const ht =  setInterval(function(){
    waktu--; if (waktu < 1) {
      $('#gambar').show('slow');
      $('#mulai').hide();
       clearInterval(ht);
      let waktu2 = 5;
      const ht2 = setInterval(function(){
          waktu2--; if (waktu2 < 1 ) {
            clearInterval(ht2);
            $('#exampleModal').modal('hide');
// blok kode
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
    (async () => {
     await Swal.fire({
          icon : 'info',
          text: 'Entah Kenapa di saat itu saya merassakan hal yang berbeda dari sebelumnya, kamu hadir dengan membawa sebuah awal kenyamanan yang belum pernah saya rasakan sebelumnya,'
           +' atau mungkin saya yang terlalu menaruh rasa ke kamu, atau mungkin ada hal lain yang bisa menjadikan kita sampai sekarang ini'
           +' tak bisa saya menahan nya,dan juga rasa khawatir yang selalu mengahntui ku... ',
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
                  text : `Dan Sekarang saya sudah terlanjur merasakan kenyamanan atas yang sudah kamu berikan ke padaku'
                   saya mengerti , saya dan kamu sama sama belum mengetahui satu sama lain, setidaknya kita bisa mengetahui nya di kemudian hari,
                   kurasa ini merupakan kejujuran, dan tidak dapat membohongi hati ini, dan saya berharap kamu juga merasakan dan mengetahui apa yang saya rasakan sekarang ini.`,            
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
                      Swal.fire({               
                          showConfirmButton: true, 
                          showDenyButton: true,
                          denyButtonText: `Tidak`,  
                          icon : 'question', 
                          text : `bismillahhirrohmanirrohim, saya ingin jujur dan memberanikan diri , untuk bisa mengisi hatinya kamu, sebagai PENDAMPING MU (kekasih),
                           jawab dengan hati nya kamu, {PILIH IYA, JIKA MENERIMA, PILIH TIDAK JIKA MENOLAKNYA} `,            
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
                                          let menit = dt.getMinutes();
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
                                              window.location.href=`https://api.whatsapp.com/send?phone=6285335650431&text=TANGGAL PENTING ${tanggal} - ${bulan} - ${tahun} , ${jam}:${menit}`;
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
    $('#mulai').text(`Tunggu ${waktu} Detik lagi Ya`);
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
  

