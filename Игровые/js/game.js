const asusImg = document.querySelectorAll(".asus1");
asusImg.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.05,1.05)";
  });
});
asusImg.forEach((item) => {
  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1,1)";
  });
});

const hpLap = document.querySelectorAll(".hp1");
hpLap.forEach((hepi) => {
  hepi.addEventListener("mouseover", function () {
    hepi.style.transform = "scale(1.05,1.05";
  });
});
hpLap.forEach((hepi) => {
  hepi.addEventListener("mouseout", () => {
    hepi.style.transform = "scale(1,1)";
  });
});


const msiLap = document.querySelectorAll(".msi1");
msiLap.forEach((msay) => {
  msay.addEventListener("mouseover", () => {
    msay.style.transform = "scale(1.05,1.05)";
  });
});

msiLap.forEach((msay) => {
  msay.addEventListener("mouseout", () => {
    msay.style.transform = "scale(1,1)";
  });
});
