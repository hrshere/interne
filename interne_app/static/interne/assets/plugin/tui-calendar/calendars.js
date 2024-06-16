'use strict';

/* eslint-disable require-jsdoc, no-unused-vars */

var CalendarList = [];

function CalendarInfo() {
    this.id = null;
    this.name = null;
    this.checked = true;
    this.color = null;
    this.bgColor = null;
    this.borderColor = null;
    this.dragBgColor = null;
}

function addCalendar(calendar) {
    CalendarList.push(calendar);
}

function findCalendar(id) {
    var found;

    CalendarList.forEach(function(calendar) {
        if (calendar.id === id) {
            found = calendar;
        }
    });

    return found || CalendarList[0];
}

function hexToRGBA(hex) {
    var radix = 16;
    var r = parseInt(hex.slice(1, 3), radix),
        g = parseInt(hex.slice(3, 5), radix),
        b = parseInt(hex.slice(5, 7), radix),
        a = parseInt(hex.slice(7, 9), radix) / 255 || 1;
    var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

    return rgba;
}

(function() {
    var calendar;
    var id = 0;


    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Public Holiday';
    calendar.color = 'var(--white-color)';
    calendar.bgColor = 'var(--chart-color9)';
    calendar.dragBgColor = 'var(--chart-color9)';
    calendar.borderColor = 'var(--chart-color9)';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Approved Leaves';
    calendar.color = 'var(--white-color)';
    calendar.bgColor = 'var(--chart-color6)';
    calendar.dragBgColor = 'var(--chart-color6)';
    calendar.borderColor = 'var(--chart-color6)';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Pending Leaves';
    calendar.color = 'var(--white-color)';
    calendar.bgColor = 'var(--chart-color10)';
    calendar.dragBgColor = 'var(--chart-color10)';
    calendar.borderColor = 'var(--chart-color10)';
    addCalendar(calendar);
})();