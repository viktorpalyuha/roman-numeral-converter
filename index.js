(function () {
  function convertToRoman(num) {
    let numbers = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      20: "XX",
      30: "XXX",
      40: "XL",
      50: "L",
      60: "LX",
      70: "LXX",
      80: "LXXX",
      90: "XC",
      100: "C",
      200: "CC",
      300: "CCC",
      400: "CD",
      500: "D",
      600: "DC",
      700: "DCC",
      800: "DCCC",
      900: "CM",
      1000: "M",
      2000: "MM",
      3000: "MMM",
      4000: "MMMM",
      5000: "MMMMM",
    };
    let numRest = parseInt(num.toString().slice(1));
    let numRest1 = parseInt(num.toString().slice(2));
    let numRest2 = parseInt(num.toString().slice(3));
    let converted = "";

    if (num.toString()[0] == 0 || num > 5000 || num <= 0 || /\D/.test(num)) {
      document.getElementById("roman-number").value = "";
      return (document.querySelector(".converted-number").innerText =
        "Please, enter the number between 1 and 5000");
    } else if (num.toString().length === 1) {
      converted += numbers[num];
    } else if (num.toString().length === 2) {
      converted += numbers[num - numRest];
      converted += numbers[numRest];
    } else if (num.toString().length === 3) {
      converted += numbers[num - numRest];
      converted += numbers[numRest - numRest1];
      converted += numbers[numRest1];
    } else {
      converted += numbers[num - numRest];
      converted += numbers[numRest - numRest1];
      converted += numbers[numRest1 - numRest2];
      converted += numbers[numRest2];
    }

    document.getElementById("roman-number").value = "";
    return (document.querySelector(
      ".converted-number"
    ).innerText = converted.replace(/undefined/g, ""));
  }

  document.querySelector("button").addEventListener("click", () => {
    convertToRoman(document.getElementById("roman-number").value);
  });
})();
