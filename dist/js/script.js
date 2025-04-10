"use strict";
var _a;
(_a = document.getElementById("trailerBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var trailerSection = document.getElementById("trailer");
    trailerSection === null || trailerSection === void 0 ? void 0 : trailerSection.scrollIntoView({ behavior: "smooth" });
});
