// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Apr 2022
// This file contains xxx

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-05-JS/sw.js", {
    scope: "/ICS2O-Unit-5-05-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  const sideA = parseFloat(document.getElementById("sideA").value)
  const sideB = parseFloat(document.getElementById("sideB").value)
  const sideC = parseFloat(document.getElementById("sideC").value)
  // process
  if ("sideA" == "sideB" || "sideB" == "sideC" || "sideA" == "sideC") {
      document.getElementById("answer").innerHTML= "This is an isosceles triangle."
  } else if (sideA == sideB == sideC) {
      document.getElementById("answer").innerHTML= "This is an equilateral triangle."
  } else if (sideA != sideB != sideC) {
      document.getElementById("answer").innerHTML= "This is a scalene triangle."
  } else {
      document.getElementById("answer").innerHTML= "This is not a triangle."
  }
}
