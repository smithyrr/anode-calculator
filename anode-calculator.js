function calculateAnodes() {
  // Get input values
  var boatMaterial = document.getElementById("boatMaterial").value;
  var boatLength = parseFloat(document.getElementById("boatLength").value);
  var boatWidth = parseFloat(document.getElementById("boatWidth").value);
  var boatDepth = parseFloat(document.getElementById("boatDepth").value);
  var waterType = document.getElementById("waterType").value;
  var currentAnodesWeight = parseFloat(document.getElementById("currentAnodesWeight").value);
  var unit = document.getElementById("unit").value;

  // Convert input values to meters if necessary
  if (unit === "feet") {
    boatLength *= 0.3048;
    boatWidth *= 0.3048;
    boatDepth *= 0.3048;
  }

  // Calculate the underwater surface area
  var underwaterSurfaceArea = (boatLength * boatDepth * 2) + (boatLength * boatWidth);

  // Calculate anode requirements based on the table provided
  var minAnodeWeight, maxAnodeWeight;

  if (underwaterSurfaceArea <= 28) {
    minAnodeWeight = 4.5;
    maxAnodeWeight = 9;
  } else if (underwaterSurfaceArea > 28 && underwaterSurfaceArea <= 42) {
    minAnodeWeight = 11;
    maxAnodeWeight = 13;
  } else if (underwaterSurfaceArea > 42 && underwaterSurfaceArea <= 56) {
    minAnodeWeight = 14;
    maxAnodeWeight = 20;
  } else if (underwaterSurfaceArea > 56 && underwaterSurfaceArea <= 70) {
    minAnodeWeight = 21;
    maxAnodeWeight = 26;
  } else if (underwaterSurfaceArea > 70 && underwaterSurfaceArea <= 112) {
    minAnodeWeight = 27;
    maxAnodeWeight = 35;
  } else {
    minAnodeWeight = "N/A";
    maxAnodeWeight = "N/A";
  }

  // Adjust the recommended anode weight based on the current anodes weight
  minAnodeWeight -= currentAnodesWeight;
  maxAnodeWeight -= currentAnodesWeight;

  // Determine recommended anode material based on water type
  var recommendedAnodeMaterial = '';
  if (waterType === 'freshwater') {
    recommendedAnodeMaterial = 'Magnesium';
  } else if (waterType === 'saltwater' || waterType === 'brackish') {
    recommendedAnodeMaterial = 'Zinc';
  }

  // Calculate average anode weight and the estimated number of anodes
  var averageAnodeWeight = (1.5 + 2.5 + 3.5) / 3;
  var minAnodes = Math.ceil(minAnodeWeight / averageAnodeWeight);
  var maxAnodes = Math.ceil(maxAnodeWeight / averageAnodeWeight);

  // Display the result and anode material recommendation, along with the estimated number of anodes
  document.getElementById("result").innerHTML = "Underwater Surface Area: " + underwaterSurfaceArea.toFixed(2) + " m²<br>Recommended Anode Weight: " + minAnodeWeight + " kg - " + maxAnodeWeight + " kg<br>Recommended Anode Material: " + recommendedAnodeMaterial + "<br>Estimated Number of Anodes: " + minAnodes + " - " + maxAnodes;
}
