
$(document).ready(function () {
            $("#menuicon").click(function () {
                $(".menuitems").toggleClass("show", true)
            });
        });

$(document).ready(function () {
            $("#closeicon").click(function () {
                $(".menuitems").toggleClass("show", false)
            });
        });

        // $(document).ready(function () {
        //     $('.imageslider').slick({
        //         infinite: true,
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //         dots: false,
        //         arrows: false,
        //         autoplay: true,
        //         autoplaySpeed: 1000
        //     })
        // });

        $('.imageslider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                    dots: false
                }
              }
            ]
          });

        //   =======================

          $('.itemslider').slick({
              slidesToShow:4,
              slidesToScroll: 3,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                  },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                    dots: false
                }
              }
            ]

        });
        
