const app = new Vue (
      
      {

      el: "#root",
      data: {
            imgs: {
                  url: ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"],
                  alt: ["Paesaggio1", "Paesaggio2", "Paesaggio3", "Paesaggio4"]
            },
            imgIndex: 0
      },
      methods: {
            prevImage: function() {
                  this.imgIndex--;
                  if (this.imgIndex < 0) {
                        this.imgIndex = this.imgs.url.length - 1;
                  }

            },
            nextImage: function() {
                  this.imgIndex++;
                  if (this.imgIndex == this.imgs.url.length) {
                        this.imgIndex = 0;
                  }
            }
      }

      }
);
