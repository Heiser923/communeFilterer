const [
  countrySelector,
  provinceSelector,
  districtSelector,
  communeSelector,
  villageSelector,
] = (list = Array.from(
  document.querySelectorAll(
    "#countries, #provinces, #districts, #communes, #villages"
  )
));

countries.forEach((country) => {
  let option = document.createElement("option");
  option.text = country.name;
  countrySelector.add(option);
});

list
  .slice(1)
  .forEach((element) => (element.innerHTML = "<option>Whatever</option>"));

countrySelector.addEventListener("change", function () {
  console.log(countrySelector.value);
});
