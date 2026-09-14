// ================= SMART COOL WEBSITE =================


// ================= CURRENT YEAR =================

const year = new Date().getFullYear();

const footerText = document.querySelector(".footer-copy");

if (footerText) {

  footerText.innerHTML =
    `© ${year} Smart Cool & Refrigerator<br>
     AC • Refrigerator • Water Dispenser`;

}


// ================= MOBILE MENU =================

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mainMenu =
  document.getElementById("mainMenu");


if (mobileMenuBtn && mainMenu) {

  mobileMenuBtn.addEventListener("click", function () {

    mobileMenuBtn.classList.toggle("active");

    mainMenu.classList.toggle("active");

    const isOpen =
      mainMenu.classList.contains("active");

    mobileMenuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

  });


  // Close menu after clicking a link

  mainMenu.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      mobileMenuBtn.classList.remove("active");

      mainMenu.classList.remove("active");

    });

  });

}


// ================= SMOOTH SCROLL =================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId =
        this.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


// ================= WHATSAPP BOOKING =================

const bookingForm =
  document.getElementById("bookingForm");


if (bookingForm) {

  bookingForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const name =
        document
          .getElementById("customerName")
          .value
          .trim();


      const phone =
        document
          .getElementById("customerPhone")
          .value
          .trim();


      const service =
        document
          .getElementById("serviceType")
          .value;


      const area =
        document
          .getElementById("customerArea")
          .value
          .trim();


      const problem =
        document
          .getElementById("problem")
          .value
          .trim();


      const date =
        document
          .getElementById("bookingDate")
          .value;


      const time =
        document
          .getElementById("bookingTime")
          .value;


      const message =

        "Assalam o Alaikum, mujhe service book karwani hai.\n\n" +

        "👤 Name: " + name + "\n" +

        "📞 Phone: " + phone + "\n" +

        "🔧 Service: " + service + "\n" +

        "📍 Area: " + area + "\n" +

        "📅 Date: " + (date || "Not specified") + "\n" +

        "⏰ Time: " + (time || "Not specified") + "\n" +

        "📝 Problem: " +
        (problem || "Not specified");


      const whatsappURL =

        "https://wa.me/923208463110?text=" +

        encodeURIComponent(message);


      window.open(
        whatsappURL,
        "_blank"
      );


      // Small confirmation message

      const oldMessage =
        document.querySelector(".booking-confirmation");

      if (oldMessage) {
        oldMessage.remove();
      }


      const confirmation =
        document.createElement("div");

      confirmation.className =
        "booking-confirmation";


      confirmation.innerHTML =
        "✓ Booking details WhatsApp par bhej diye gaye.";


      bookingForm.appendChild(
        confirmation
      );


      setTimeout(function () {

        confirmation.remove();

      }, 5000);

    }
  );

}


// ================= SCROLL REVEAL =================

const revealItems =
  document.querySelectorAll(
    ".service-card, .quick-card, .why-card, .rate-card"
  );


const observer =
  new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealItems.forEach(function (item) {

  item.classList.add("reveal");

  observer.observe(item);

});


// ================= DATE MINIMUM =================

const bookingDate =
  document.getElementById("bookingDate");


if (bookingDate) {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  bookingDate.setAttribute(
    "min",
    today
  );

}
