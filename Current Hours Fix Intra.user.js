// ==UserScript==
// @name         hours_script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NotoriousGTW
// @match        https://profile.intra.42.fr/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @grant        none
// ==/UserScript==
$(document).ready(function() {
    'use strict';
    let element = $("#user-locations g:last-child");
    let reg = /(\d{1,2})h(\d{2})/;
    let logtime = reg.exec(element.attr("data-original-title"));
    //alert(logtime);
    element.attr("data-original-title", ((parseInt(logtime[1])) - 7) + "h" + logtime[2]);
    let color_mod = (((parseFloat(logtime[1]) - 7) * 60 + parseFloat(logtime[2])) / 1440);
    color_mod = Math.floor(color_mod * 100) / 100;
    element.children("rect").attr("fill", "rgba(0, 186, 188, " + color_mod + ")");
});
