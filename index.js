var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var http = require('http');
var app = express();

request('https://overwatchleague.com/en-us/teams', function (error, response, html, res) {
    if (!error && response.statusCode == 200) {
        console.log(html);
        var $ = cheerio.load(html);
        $('nav').each(function() {
            var a = $(this).text();
            console.log(a);
            console.log("Hello");
        });
    };
});
//<span class="IconLabel-item hidden-xs">San Francisco Shock</span>