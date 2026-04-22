      // Preload images for better performance
      window.addEventListener("load", () => {
        const images = [
          "da276175-21d8-42aa-9f0e-6ab7b485401e.jpg",
          "تم تعديل - WhatsApp Image 2025-06-17 at 22.35.17_fcaf5f99.jpg",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ];

        images.forEach((image) => {
          new Image().src = image;
        });
      });

      window.addEventListener("DOMContentLoaded", function () {
        document.body.classList.add("loaded");
      });
      // هذا الكود لمنع النقر بالزر الأيمن
      document.addEventListener("contextmenu", (event) =>
        event.preventDefault(),
      );

      // هذا الكود لمحاولة منع فتح أدوات المطور (غير فعال بشكل كامل)
      document.onkeydown = function (e) {
        if (e.keyCode == 123) {
          // F12
          return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
          // Ctrl+Shift+I
          return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
          // Ctrl+Shift+J
          return false;
        }
        if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
          // Ctrl+U
          return false;
        }
      };
