!function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), require("moment")) : a(jQuery, moment)
}(function (a, b) {
    !function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ar-ma", {
                months        : "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort   : "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays      : "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort : "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin   : "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[اليوم على الساعة] LT",
                    nextDay : "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay : "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "في %s",
                    past  : "منذ %s",
                    s     : "ثوان",
                    m     : "دقيقة",
                    mm    : "%d دقائق",
                    h     : "ساعة",
                    hh    : "%d ساعات",
                    d     : "يوم",
                    dd    : "%d أيام",
                    M     : "شهر",
                    MM    : "%d أشهر",
                    y     : "سنة",
                    yy    : "%d سنوات"
                },
                week          : {dow: 6, doy: 12}
            });
            return a
        }(), a.fullCalendar.datepickerLang("ar-ma", "ar", {
            closeText         : "إغلاق",
            prevText          : "&#x3C;السابق",
            nextText          : "التالي&#x3E;",
            currentText       : "اليوم",
            monthNames        : ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort   : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames          : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort     : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin       : ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader        : "أسبوع",
            dateFormat        : "dd/mm/yy",
            firstDay          : 6,
            isRTL             : !0,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("ar-ma", {
            buttonText    : {month: "شهر", week: "أسبوع", day: "يوم", list: "أجندة"},
            allDayText    : "اليوم كله",
            eventLimitText: "أخرى"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}, c = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }, d = (b.defineLocale || b.lang).call(b, "ar-sa", {
                months        : "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort   : "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays      : "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort : "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin   : "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse : /ص|م/,
                isPM          : function (a) {
                    return "م" === a
                },
                meridiem      : function (a, b, c) {
                    return 12 > a ? "ص" : "م"
                },
                calendar      : {
                    sameDay : "[اليوم على الساعة] LT",
                    nextDay : "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay : "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "في %s",
                    past  : "منذ %s",
                    s     : "ثوان",
                    m     : "دقيقة",
                    mm    : "%d دقائق",
                    h     : "ساعة",
                    hh    : "%d ساعات",
                    d     : "يوم",
                    dd    : "%d أيام",
                    M     : "شهر",
                    MM    : "%d أشهر",
                    y     : "سنة",
                    yy    : "%d سنوات"
                },
                preparse      : function (a) {
                    return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
                        return c[a]
                    }).replace(/،/g, ",")
                },
                postformat    : function (b) {
                    return b.replace(/\d/g, function (b) {
                        return a[b]
                    }).replace(/,/g, "،")
                },
                week          : {dow: 6, doy: 12}
            });
            return d
        }(), a.fullCalendar.datepickerLang("ar-sa", "ar", {
            closeText         : "إغلاق",
            prevText          : "&#x3C;السابق",
            nextText          : "التالي&#x3E;",
            currentText       : "اليوم",
            monthNames        : ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort   : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames          : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort     : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin       : ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader        : "أسبوع",
            dateFormat        : "dd/mm/yy",
            firstDay          : 6,
            isRTL             : !0,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("ar-sa", {
            buttonText    : {month: "شهر", week: "أسبوع", day: "يوم", list: "أجندة"},
            allDayText    : "اليوم كله",
            eventLimitText: "أخرى"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ar-tn", {
                months        : "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort   : "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays      : "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort : "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin   : "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[اليوم على الساعة] LT",
                    nextDay : "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay : "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "في %s",
                    past  : "منذ %s",
                    s     : "ثوان",
                    m     : "دقيقة",
                    mm    : "%d دقائق",
                    h     : "ساعة",
                    hh    : "%d ساعات",
                    d     : "يوم",
                    dd    : "%d أيام",
                    M     : "شهر",
                    MM    : "%d أشهر",
                    y     : "سنة",
                    yy    : "%d سنوات"
                },
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("ar-tn", "ar", {
            closeText         : "إغلاق",
            prevText          : "&#x3C;السابق",
            nextText          : "التالي&#x3E;",
            currentText       : "اليوم",
            monthNames        : ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort   : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames          : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort     : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin       : ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader        : "أسبوع",
            dateFormat        : "dd/mm/yy",
            firstDay          : 6,
            isRTL             : !0,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("ar-tn", {
            buttonText    : {month: "شهر", week: "أسبوع", day: "يوم", list: "أجندة"},
            allDayText    : "اليوم كله",
            eventLimitText: "أخرى"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}, c = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }, d = function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5
            }, e = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, f = function (a) {
                return function (b, c, f, g) {
                    var h = d(b), i = e[a][d(b)];
                    return 2 === h && (i = i[c ? 0 : 1]), i.replace(/%d/i, b)
                }
            }, g = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"], h = (b.defineLocale || b.lang).call(b, "ar", {
                months: g,
                monthsShort: g,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "D/‏M/‏YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function (a) {
                    return "م" === a
                },
                meridiem: function (a, b, c) {
                    return 12 > a ? "ص" : "م"
                },
                calendar: {
                    sameDay : "[اليوم عند الساعة] LT",
                    nextDay : "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay : "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past  : "منذ %s",
                    s     : f("s"),
                    m     : f("m"),
                    mm    : f("m"),
                    h     : f("h"),
                    hh    : f("h"),
                    d     : f("d"),
                    dd    : f("d"),
                    M     : f("M"),
                    MM    : f("M"),
                    y     : f("y"),
                    yy    : f("y")
                },
                preparse: function (a) {
                    return a.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
                        return c[a]
                    }).replace(/،/g, ",")
                },
                postformat: function (b) {
                    return b.replace(/\d/g, function (b) {
                        return a[b]
                    }).replace(/,/g, "،")
                },
                week: {dow: 6, doy: 12}
            });
            return h
        }(), a.fullCalendar.datepickerLang("ar", "ar", {
            closeText         : "إغلاق",
            prevText          : "&#x3C;السابق",
            nextText          : "التالي&#x3E;",
            currentText       : "اليوم",
            monthNames        : ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort   : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames          : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort     : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin       : ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader        : "أسبوع",
            dateFormat        : "dd/mm/yy",
            firstDay          : 6,
            isRTL             : !0,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("ar", {
            buttonText    : {month: "شهر", week: "أسبوع", day: "يوم", list: "أجندة"},
            allDayText    : "اليوم كله",
            eventLimitText: "أخرى"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "bg", {
                months        : "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort   : "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays      : "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort : "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin   : "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "D.MM.YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar      : {
                    sameDay : "[Днес в] LT",
                    nextDay : "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay : "[Вчера в] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "след %s",
                    past  : "преди %s",
                    s     : "няколко секунди",
                    m     : "минута",
                    mm    : "%d минути",
                    h     : "час",
                    hh    : "%d часа",
                    d     : "ден",
                    dd    : "%d дни",
                    M     : "месец",
                    MM    : "%d месеца",
                    y     : "година",
                    yy    : "%d години"
                },
                ordinalParse  : /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal       : function (a) {
                    var b = a % 10, c = a % 100;
                    return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти"
                },
                week          : {dow: 1, doy: 7}
            });
            return a
        }(), a.fullCalendar.datepickerLang("bg", "bg", {
            closeText         : "затвори",
            prevText          : "&#x3C;назад",
            nextText          : "напред&#x3E;",
            nextBigText       : "&#x3E;&#x3E;",
            currentText       : "днес",
            monthNames        : ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort   : ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
            dayNames          : ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            dayNamesShort     : ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin       : ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            weekHeader        : "Wk",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("bg", {
            buttonText    : {month: "Месец", week: "Седмица", day: "Ден", list: "График"},
            allDayText    : "Цял ден",
            eventLimitText: function (a) {
                return "+още " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ca", {
                months        : "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                monthsShort   : "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
                weekdays      : "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort : "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin   : "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY H:mm",
                    LLLL: "dddd D MMMM YYYY H:mm"
                },
                calendar      : {
                    sameDay    : function () {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, nextDay : function () {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, nextWeek: function () {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, lastDay : function () {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, lastWeek: function () {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, sameElse: "L"
                },
                relativeTime  : {
                    future: "en %s",
                    past  : "fa %s",
                    s     : "uns segons",
                    m     : "un minut",
                    mm    : "%d minuts",
                    h     : "una hora",
                    hh    : "%d hores",
                    d     : "un dia",
                    dd    : "%d dies",
                    M     : "un mes",
                    MM    : "%d mesos",
                    y     : "un any",
                    yy    : "%d anys"
                },
                ordinalParse  : /\d{1,2}(r|n|t|è|a)/,
                ordinal       : function (a, b) {
                    var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è";
                    return ("w" === b || "W" === b) && (c = "a"), a + c
                },
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("ca", "ca", {
            closeText         : "Tanca",
            prevText          : "Anterior",
            nextText          : "Següent",
            currentText       : "Avui",
            monthNames        : ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
            monthNamesShort   : ["gen", "feb", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
            dayNames          : ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
            dayNamesShort     : ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            dayNamesMin       : ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            weekHeader        : "Set",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("ca", {
            buttonText    : {month: "Mes", week: "Setmana", day: "Dia", list: "Agenda"},
            allDayText    : "Tot el dia",
            eventLimitText: "més"
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a) {
                return a > 1 && 5 > a && 1 !== ~~(a / 10)
            }

            function c(b, c, d, e) {
                var f = b + " ";
                switch (d) {
                    case"s":
                        return c || e ? "pár sekund" : "pár sekundami";
                    case"m":
                        return c ? "minuta" : e ? "minutu" : "minutou";
                    case"mm":
                        return c || e ? f + (a(b) ? "minuty" : "minut") : f + "minutami";
                    case"h":
                        return c ? "hodina" : e ? "hodinu" : "hodinou";
                    case"hh":
                        return c || e ? f + (a(b) ? "hodiny" : "hodin") : f + "hodinami";
                    case"d":
                        return c || e ? "den" : "dnem";
                    case"dd":
                        return c || e ? f + (a(b) ? "dny" : "dní") : f + "dny";
                    case"M":
                        return c || e ? "měsíc" : "měsícem";
                    case"MM":
                        return c || e ? f + (a(b) ? "měsíce" : "měsíců") : f + "měsíci";
                    case"y":
                        return c || e ? "rok" : "rokem";
                    case"yy":
                        return c || e ? f + (a(b) ? "roky" : "let") : f + "lety"
                }
            }

            var d = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), e = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), f = (b.defineLocale || b.lang).call(b, "cs", {
                months: d,
                monthsShort: e,
                monthsParse: function (a, b) {
                    var c, d = [];
                    for (c = 0; 12 > c; c++)d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
                    return d
                }(d, e),
                shortMonthsParse: function (a) {
                    var b, c = [];
                    for (b = 0; 12 > b; b++)c[b] = new RegExp("^" + a[b] + "$", "i");
                    return c
                }(e),
                longMonthsParse: function (a) {
                    var b, c = [];
                    for (b = 0; 12 > b; b++)c[b] = new RegExp("^" + a[b] + "$", "i");
                    return c
                }(d),
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay    : "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    }, lastDay : "[včera v] LT", lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past  : "před %s",
                    s     : c,
                    m     : c,
                    mm    : c,
                    h     : c,
                    hh    : c,
                    d     : c,
                    dd    : c,
                    M     : c,
                    MM    : c,
                    y     : c,
                    yy    : c
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            });
            return f
        }(), a.fullCalendar.datepickerLang("cs", "cs", {
            closeText         : "Zavřít",
            prevText          : "&#x3C;Dříve",
            nextText          : "Později&#x3E;",
            currentText       : "Nyní",
            monthNames        : ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            monthNamesShort   : ["led", "úno", "bře", "dub", "kvě", "čer", "čvc", "srp", "zář", "říj", "lis", "pro"],
            dayNames          : ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
            dayNamesShort     : ["ne", "po", "út", "st", "čt", "pá", "so"],
            dayNamesMin       : ["ne", "po", "út", "st", "čt", "pá", "so"],
            weekHeader        : "Týd",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("cs", {
            buttonText    : {month: "Měsíc", week: "Týden", day: "Den", list: "Agenda"},
            allDayText    : "Celý den",
            eventLimitText: function (a) {
                return "+další: " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "da", {
                months        : "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort   : "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays      : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort : "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin   : "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[I dag kl.] LT",
                    nextDay : "[I morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay : "[I går kl.] LT",
                    lastWeek: "[sidste] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "om %s",
                    past  : "%s siden",
                    s     : "få sekunder",
                    m     : "et minut",
                    mm    : "%d minutter",
                    h     : "en time",
                    hh    : "%d timer",
                    d     : "en dag",
                    dd    : "%d dage",
                    M     : "en måned",
                    MM    : "%d måneder",
                    y     : "et år",
                    yy    : "%d år"
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("da", "da", {
            closeText         : "Luk",
            prevText          : "&#x3C;Forrige",
            nextText          : "Næste&#x3E;",
            currentText       : "Idag",
            monthNames        : ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames          : ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort     : ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin       : ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            weekHeader        : "Uge",
            dateFormat        : "dd-mm-yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("da", {
            buttonText    : {month: "Måned", week: "Uge", day: "Dag", list: "Agenda"},
            allDayText    : "Hele dagen",
            eventLimitText: "flere"
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, c, d) {
                var e = {
                    m : ["eine Minute", "einer Minute"],
                    h : ["eine Stunde", "einer Stunde"],
                    d : ["ein Tag", "einem Tag"],
                    dd: [a + " Tage", a + " Tagen"],
                    M : ["ein Monat", "einem Monat"],
                    MM: [a + " Monate", a + " Monaten"],
                    y : ["ein Jahr", "einem Jahr"],
                    yy: [a + " Jahre", a + " Jahren"]
                };
                return b ? e[c][0] : e[c][1]
            }

            var c = (b.defineLocale || b.lang).call(b, "de-at", {
                months        : "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort   : "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                weekdays      : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin   : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay : "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay : "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime  : {
                    future: "in %s",
                    past  : "vor %s",
                    s     : "ein paar Sekunden",
                    m     : a,
                    mm    : "%d Minuten",
                    h     : a,
                    hh    : "%d Stunden",
                    d     : a,
                    dd    : a,
                    M     : a,
                    MM    : a,
                    y     : a,
                    yy    : a
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 4}
            });
            return c
        }(), a.fullCalendar.datepickerLang("de-at", "de", {
            closeText         : "Schließen",
            prevText          : "&#x3C;Zurück",
            nextText          : "Vor&#x3E;",
            currentText       : "Heute",
            monthNames        : ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort   : ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames          : ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort     : ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin       : ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader        : "KW",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("de-at", {
            buttonText   : {
                month: "Monat",
                week : "Woche",
                day  : "Tag",
                list : "Terminübersicht"
            }, allDayText: "Ganztägig", eventLimitText: function (a) {
                return "+ weitere " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, c, d) {
                var e = {
                    m : ["eine Minute", "einer Minute"],
                    h : ["eine Stunde", "einer Stunde"],
                    d : ["ein Tag", "einem Tag"],
                    dd: [a + " Tage", a + " Tagen"],
                    M : ["ein Monat", "einem Monat"],
                    MM: [a + " Monate", a + " Monaten"],
                    y : ["ein Jahr", "einem Jahr"],
                    yy: [a + " Jahre", a + " Jahren"]
                };
                return b ? e[c][0] : e[c][1]
            }

            var c = (b.defineLocale || b.lang).call(b, "de", {
                months        : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort   : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                weekdays      : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin   : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay : "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay : "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime  : {
                    future: "in %s",
                    past  : "vor %s",
                    s     : "ein paar Sekunden",
                    m     : a,
                    mm    : "%d Minuten",
                    h     : a,
                    hh    : "%d Stunden",
                    d     : a,
                    dd    : a,
                    M     : a,
                    MM    : a,
                    y     : a,
                    yy    : a
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 4}
            });
            return c
        }(), a.fullCalendar.datepickerLang("de", "de", {
            closeText         : "Schließen",
            prevText          : "&#x3C;Zurück",
            nextText          : "Vor&#x3E;",
            currentText       : "Heute",
            monthNames        : ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort   : ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames          : ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort     : ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin       : ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader        : "KW",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("de", {
            buttonText    : {month: "Monat", week: "Woche", day: "Tag", list: "Terminübersicht"},
            allDayText    : "Ganztägig",
            eventLimitText: function (a) {
                return "+ weitere " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a) {
                return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
            }

            var c = (b.defineLocale || b.lang).call(b, "el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl  : "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months            : function (a, b) {
                    return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
                },
                monthsShort       : "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays          : "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort     : "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin       : "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem          : function (a, b, c) {
                    return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ"
                },
                isPM              : function (a) {
                    return "μ" === (a + "").toLowerCase()[0]
                },
                meridiemParse     : /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat    : {
                    LT  : "h:mm A",
                    LTS : "h:mm:ss A",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl        : {
                    sameDay : "[Σήμερα {}] LT",
                    nextDay : "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay : "[Χθες {}] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar          : function (b, c) {
                    var d = this._calendarEl[b], e = c && c.hours();
                    return a(d) && (d = d.apply(c)), d.replace("{}", e % 12 === 1 ? "στη" : "στις")
                },
                relativeTime      : {
                    future: "σε %s",
                    past  : "%s πριν",
                    s     : "λίγα δευτερόλεπτα",
                    m     : "ένα λεπτό",
                    mm    : "%d λεπτά",
                    h     : "μία ώρα",
                    hh    : "%d ώρες",
                    d     : "μία μέρα",
                    dd    : "%d μέρες",
                    M     : "ένας μήνας",
                    MM    : "%d μήνες",
                    y     : "ένας χρόνος",
                    yy    : "%d χρόνια"
                },
                ordinalParse      : /\d{1,2}η/,
                ordinal           : "%dη",
                week              : {dow: 1, doy: 4}
            });
            return c
        }(), a.fullCalendar.datepickerLang("el", "el", {
            closeText         : "Κλείσιμο",
            prevText          : "Προηγούμενος",
            nextText          : "Επόμενος",
            currentText       : "Σήμερα",
            monthNames        : ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthNamesShort   : ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            dayNames          : ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            dayNamesShort     : ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin       : ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            weekHeader        : "Εβδ",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("el", {
            buttonText    : {month: "Μήνας", week: "Εβδομάδα", day: "Ημέρα", list: "Ατζέντα"},
            allDayText    : "Ολοήμερο",
            eventLimitText: "περισσότερα"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-au", {
                months          : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort     : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec".split("_"),
                monthsParse     : [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
                longMonthsParse : [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
                shortMonthsParse: [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
                weekdays        : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort   : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin     : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat  : {
                    LT  : "h:mm A",
                    LTS : "h:mm:ss A",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar        : {
                    sameDay : "[Today at] LT",
                    nextDay : "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay : "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime    : {
                    future: "in %s",
                    past  : "%s ago",
                    s     : "a few seconds",
                    m     : "a minute",
                    mm    : "%d minutes",
                    h     : "an hour",
                    hh    : "%d hours",
                    d     : "a day",
                    dd    : "%d days",
                    M     : "a month",
                    MM    : "%d months",
                    y     : "a year",
                    yy    : "%d years"
                },
                ordinalParse    : /\d{1,2}(st|nd|rd|th)/,
                ordinal         : function (a) {
                    var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                },
                week            : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("en-au", "en-AU", {
            closeText         : "Done",
            prevText          : "Prev",
            nextText          : "Next",
            currentText       : "Today",
            monthNames        : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames          : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort     : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin       : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader        : "Wk",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("en-au")
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-ca", {
                months          : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort     : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec".split("_"),
                monthsParse     : [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
                longMonthsParse : [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
                shortMonthsParse: [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
                weekdays        : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort   : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin     : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat  : {
                    LT  : "h:mm A",
                    LTS : "h:mm:ss A",
                    L   : "YYYY-MM-DD",
                    LL  : "D MMMM, YYYY",
                    LLL : "D MMMM, YYYY h:mm A",
                    LLLL: "dddd, D MMMM, YYYY h:mm A"
                },
                calendar        : {
                    sameDay : "[Today at] LT",
                    nextDay : "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay : "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime    : {
                    future: "in %s",
                    past  : "%s ago",
                    s     : "a few seconds",
                    m     : "a minute",
                    mm    : "%d minutes",
                    h     : "an hour",
                    hh    : "%d hours",
                    d     : "a day",
                    dd    : "%d days",
                    M     : "a month",
                    MM    : "%d months",
                    y     : "a year",
                    yy    : "%d years"
                },
                ordinalParse    : /\d{1,2}(st|nd|rd|th)/,
                ordinal         : function (a) {
                    var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                }
            });
            return a
        }(), a.fullCalendar.lang("en-ca")
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-gb", {
                months          : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort     : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec".split("_"),
                monthsParse     : [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
                longMonthsParse : [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
                shortMonthsParse: [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
                weekdays        : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort   : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin     : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat  : {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar        : {
                    sameDay : "[Today at] LT",
                    nextDay : "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay : "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime    : {
                    future: "in %s",
                    past  : "%s ago",
                    s     : "a few seconds",
                    m     : "a minute",
                    mm    : "%d minutes",
                    h     : "an hour",
                    hh    : "%d hours",
                    d     : "a day",
                    dd    : "%d days",
                    M     : "a month",
                    MM    : "%d months",
                    y     : "a year",
                    yy    : "%d years"
                },
                ordinalParse    : /\d{1,2}(st|nd|rd|th)/,
                ordinal         : function (a) {
                    var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                },
                week            : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("en-gb", "en-GB", {
            closeText         : "Done",
            prevText          : "Prev",
            nextText          : "Next",
            currentText       : "Today",
            monthNames        : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames          : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort     : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin       : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader        : "Wk",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("en-gb")
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-ie", {
                months          : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort     : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsParse     : [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
                longMonthsParse : [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
                shortMonthsParse: [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
                weekdays        : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort   : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin     : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat  : {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD-MM-YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar        : {
                    sameDay : "[Today at] LT",
                    nextDay : "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay : "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime    : {
                    future: "in %s",
                    past  : "%s ago",
                    s     : "a few seconds",
                    m     : "a minute",
                    mm    : "%d minutes",
                    h     : "an hour",
                    hh    : "%d hours",
                    d     : "a day",
                    dd    : "%d days",
                    M     : "a month",
                    MM    : "%d months",
                    y     : "a year",
                    yy    : "%d years"
                },
                ordinalParse    : /\d{1,2}(st|nd|rd|th)/,
                ordinal         : function (a) {
                    var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                },
                week            : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.lang("en-ie")
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-nz", {
                months          : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort     : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec".split("_"),
                monthsParse     : [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
                longMonthsParse : [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
                shortMonthsParse: [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
                weekdays        : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort   : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin     : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat  : {
                    LT  : "h:mm A",
                    LTS : "h:mm:ss A",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar        : {
                    sameDay : "[Today at] LT",
                    nextDay : "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay : "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime    : {
                    future: "in %s",
                    past  : "%s ago",
                    s     : "a few seconds",
                    m     : "a minute",
                    mm    : "%d minutes",
                    h     : "an hour",
                    hh    : "%d hours",
                    d     : "a day",
                    dd    : "%d days",
                    M     : "a month",
                    MM    : "%d months",
                    y     : "a year",
                    yy    : "%d years"
                },
                ordinalParse    : /\d{1,2}(st|nd|rd|th)/,
                ordinal         : function (a) {
                    var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                },
                week            : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("en-nz", "en-NZ", {
            closeText         : "Done",
            prevText          : "Prev",
            nextText          : "Next",
            currentText       : "Today",
            monthNames        : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames          : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort     : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin       : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader        : "Wk",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("en-nz")
    }(), function () {
        !function () {
            "use strict";
            var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), c = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), d = (b.defineLocale || b.lang).call(b, "es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (b, d) {
                    return /-MMM-/.test(d) ? c[b.month()] : a[b.month()]
                },
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D [de] MMMM [de] YYYY",
                    LLL : "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay    : function () {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, nextDay : function () {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, nextWeek: function () {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, lastDay : function () {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, lastWeek: function () {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past  : "hace %s",
                    s     : "unos segundos",
                    m     : "un minuto",
                    mm    : "%d minutos",
                    h     : "una hora",
                    hh    : "%d horas",
                    d     : "un día",
                    dd    : "%d días",
                    M     : "un mes",
                    MM    : "%d meses",
                    y     : "un año",
                    yy    : "%d años"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            });
            return d
        }(), a.fullCalendar.datepickerLang("es", "es", {
            closeText         : "Cerrar",
            prevText          : "&#x3C;Ant",
            nextText          : "Sig&#x3E;",
            currentText       : "Hoy",
            monthNames        : ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort   : ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            dayNames          : ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort     : ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin       : ["D", "L", "M", "X", "J", "V", "S"],
            weekHeader        : "Sm",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("es", {
            buttonText    : {month: "Mes", week: "Semana", day: "Día", list: "Agenda"},
            allDayHtml    : "Todo<br/>el día",
            eventLimitText: "más"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"}, c = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            }, d = (b.defineLocale || b.lang).call(b, "fa", {
                months        : "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort   : "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays      : "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort : "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin   : "ی_د_س_چ_پ_ج_ش".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse : /قبل از ظهر|بعد از ظهر/,
                isPM          : function (a) {
                    return /بعد از ظهر/.test(a)
                },
                meridiem      : function (a, b, c) {
                    return 12 > a ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar      : {
                    sameDay : "[امروز ساعت] LT",
                    nextDay : "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay : "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "در %s",
                    past  : "%s پیش",
                    s     : "چندین ثانیه",
                    m     : "یک دقیقه",
                    mm    : "%d دقیقه",
                    h     : "یک ساعت",
                    hh    : "%d ساعت",
                    d     : "یک روز",
                    dd    : "%d روز",
                    M     : "یک ماه",
                    MM    : "%d ماه",
                    y     : "یک سال",
                    yy    : "%d سال"
                },
                preparse      : function (a) {
                    return a.replace(/[۰-۹]/g, function (a) {
                        return c[a]
                    }).replace(/،/g, ",")
                },
                postformat    : function (b) {
                    return b.replace(/\d/g, function (b) {
                        return a[b]
                    }).replace(/,/g, "،")
                },
                ordinalParse  : /\d{1,2}م/,
                ordinal       : "%dم",
                week          : {dow: 6, doy: 12}
            });
            return d
        }(), a.fullCalendar.datepickerLang("fa", "fa", {
            closeText         : "بستن",
            prevText          : "&#x3C;قبلی",
            nextText          : "بعدی&#x3E;",
            currentText       : "امروز",
            monthNames        : ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
            monthNamesShort   : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames          : ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
            dayNamesShort     : ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin       : ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            weekHeader        : "هف",
            dateFormat        : "yy/mm/dd",
            firstDay          : 6,
            isRTL             : !0,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("fa", {
            buttonText    : {month: "ماه", week: "هفته", day: "روز", list: "برنامه"},
            allDayText    : "تمام روز",
            eventLimitText: function (a) {
                return "بیش از " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, d, e) {
                var f = "";
                switch (d) {
                    case"s":
                        return e ? "muutaman sekunnin" : "muutama sekunti";
                    case"m":
                        return e ? "minuutin" : "minuutti";
                    case"mm":
                        f = e ? "minuutin" : "minuuttia";
                        break;
                    case"h":
                        return e ? "tunnin" : "tunti";
                    case"hh":
                        f = e ? "tunnin" : "tuntia";
                        break;
                    case"d":
                        return e ? "päivän" : "päivä";
                    case"dd":
                        f = e ? "päivän" : "päivää";
                        break;
                    case"M":
                        return e ? "kuukauden" : "kuukausi";
                    case"MM":
                        f = e ? "kuukauden" : "kuukautta";
                        break;
                    case"y":
                        return e ? "vuoden" : "vuosi";
                    case"yy":
                        f = e ? "vuoden" : "vuotta"
                }
                return f = c(a, e) + " " + f
            }

            function c(a, b) {
                return 10 > a ? b ? e[a] : d[a] : a
            }

            var d = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "), e = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", d[7], d[8], d[9]], f = (b.defineLocale || b.lang).call(b, "fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT  : "HH.mm",
                    LTS : "HH.mm.ss",
                    L   : "DD.MM.YYYY",
                    LL  : "Do MMMM[ta] YYYY",
                    LLL : "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l   : "D.M.YYYY",
                    ll  : "Do MMM YYYY",
                    lll : "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay : "[tänään] [klo] LT",
                    nextDay : "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay : "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past  : "%s sitten",
                    s     : a,
                    m     : a,
                    mm    : a,
                    h     : a,
                    hh    : a,
                    d     : a,
                    dd    : a,
                    M     : a,
                    MM    : a,
                    y     : a,
                    yy    : a
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            });
            return f
        }(), a.fullCalendar.datepickerLang("fi", "fi", {
            closeText         : "Sulje",
            prevText          : "&#xAB;Edellinen",
            nextText          : "Seuraava&#xBB;",
            currentText       : "Tänään",
            monthNames        : ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort   : ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"],
            dayNamesShort     : ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNames          : ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesMin       : ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            weekHeader        : "Vk",
            dateFormat        : "d.m.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("fi", {
            buttonText   : {
                month: "Kuukausi",
                week : "Viikko",
                day  : "Päivä",
                list : "Tapahtumat"
            }, allDayText: "Koko päivä", eventLimitText: "lisää"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "fr-ca", {
                months        : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort   : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekdays      : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin   : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "YYYY-MM-DD",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[Aujourd'hui à] LT",
                    nextDay : "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay : "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "dans %s",
                    past  : "il y a %s",
                    s     : "quelques secondes",
                    m     : "une minute",
                    mm    : "%d minutes",
                    h     : "une heure",
                    hh    : "%d heures",
                    d     : "un jour",
                    dd    : "%d jours",
                    M     : "un mois",
                    MM    : "%d mois",
                    y     : "un an",
                    yy    : "%d ans"
                },
                ordinalParse  : /\d{1,2}(er|e)/,
                ordinal       : function (a) {
                    return a + (1 === a ? "er" : "e")
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("fr-ca", "fr-CA", {
            closeText         : "Fermer",
            prevText          : "Précédent",
            nextText          : "Suivant",
            currentText       : "Aujourd'hui",
            monthNames        : ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthNamesShort   : ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            dayNames          : ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort     : ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin       : ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader        : "Sem.",
            dateFormat        : "yy-mm-dd",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("fr-ca", {
            buttonText   : {
                month: "Mois",
                week : "Semaine",
                day  : "Jour",
                list : "Mon planning"
            }, allDayHtml: "Toute la<br/>journée", eventLimitText: "en plus"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "fr-ch", {
                months        : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort   : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekdays      : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin   : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[Aujourd'hui à] LT",
                    nextDay : "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay : "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "dans %s",
                    past  : "il y a %s",
                    s     : "quelques secondes",
                    m     : "une minute",
                    mm    : "%d minutes",
                    h     : "une heure",
                    hh    : "%d heures",
                    d     : "un jour",
                    dd    : "%d jours",
                    M     : "un mois",
                    MM    : "%d mois",
                    y     : "un an",
                    yy    : "%d ans"
                },
                ordinalParse  : /\d{1,2}(er|e)/,
                ordinal       : function (a) {
                    return a + (1 === a ? "er" : "e")
                },
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("fr-ch", "fr-CH", {
            closeText         : "Fermer",
            prevText          : "&#x3C;Préc",
            nextText          : "Suiv&#x3E;",
            currentText       : "Courant",
            monthNames        : ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthNamesShort   : ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            dayNames          : ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort     : ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin       : ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader        : "Sm",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("fr-ch", {
            buttonText   : {
                month: "Mois",
                week : "Semaine",
                day  : "Jour",
                list : "Mon planning"
            }, allDayHtml: "Toute la<br/>journée", eventLimitText: "en plus"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "fr", {
                months        : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort   : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekdays      : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin   : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[Aujourd'hui à] LT",
                    nextDay : "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay : "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "dans %s",
                    past  : "il y a %s",
                    s     : "quelques secondes",
                    m     : "une minute",
                    mm    : "%d minutes",
                    h     : "une heure",
                    hh    : "%d heures",
                    d     : "un jour",
                    dd    : "%d jours",
                    M     : "un mois",
                    MM    : "%d mois",
                    y     : "un an",
                    yy    : "%d ans"
                },
                ordinalParse  : /\d{1,2}(er|)/,
                ordinal       : function (a) {
                    return a + (1 === a ? "er" : "")
                },
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("fr", "fr", {
            closeText         : "Fermer",
            prevText          : "Précédent",
            nextText          : "Suivant",
            currentText       : "Aujourd'hui",
            monthNames        : ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthNamesShort   : ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            dayNames          : ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort     : ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin       : ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader        : "Sem.",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("fr", {
            buttonText    : {month: "Mois", week: "Semaine", day: "Jour", list: "Mon planning"},
            allDayHtml    : "Toute la<br/>journée",
            eventLimitText: "en plus"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "he", {
                months        : "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort   : "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays      : "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort : "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin   : "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D [ב]MMMM YYYY",
                    LLL : "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l   : "D/M/YYYY",
                    ll  : "D MMM YYYY",
                    lll : "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[היום ב־]LT",
                    nextDay : "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay : "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "בעוד %s",
                    past  : "לפני %s",
                    s     : "מספר שניות",
                    m     : "דקה",
                    mm    : "%d דקות",
                    h     : "שעה",
                    hh    : function (a) {
                        return 2 === a ? "שעתיים" : a + " שעות"
                    },
                    d     : "יום",
                    dd    : function (a) {
                        return 2 === a ? "יומיים" : a + " ימים"
                    },
                    M     : "חודש",
                    MM    : function (a) {
                        return 2 === a ? "חודשיים" : a + " חודשים"
                    },
                    y     : "שנה",
                    yy    : function (a) {
                        return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים"
                    }
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("he", "he", {
            closeText         : "סגור",
            prevText          : "&#x3C;הקודם",
            nextText          : "הבא&#x3E;",
            currentText       : "היום",
            monthNames        : ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthNamesShort   : ["ינו", "פבר", "מרץ", "אפר", "מאי", "יוני", "יולי", "אוג", "ספט", "אוק", "נוב", "דצמ"],
            dayNames          : ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            dayNamesShort     : ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
            dayNamesMin       : ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
            weekHeader        : "Wk",
            dateFormat        : "dd/mm/yy",
            firstDay          : 0,
            isRTL             : !0,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("he", {
            defaultButtonText: {month: "חודש", week: "שבוע", day: "יום", list: "סדר יום"},
            weekNumberTitle  : "שבוע",
            allDayText       : "כל היום",
            eventLimitText   : "אחר"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}, c = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            }, d = (b.defineLocale || b.lang).call(b, "hi", {
                months        : "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort   : "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                weekdays      : "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort : "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin   : "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT  : "A h:mm बजे",
                    LTS : "A h:mm:ss बजे",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                calendar      : {
                    sameDay : "[आज] LT",
                    nextDay : "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay : "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "%s में",
                    past  : "%s पहले",
                    s     : "कुछ ही क्षण",
                    m     : "एक मिनट",
                    mm    : "%d मिनट",
                    h     : "एक घंटा",
                    hh    : "%d घंटे",
                    d     : "एक दिन",
                    dd    : "%d दिन",
                    M     : "एक महीने",
                    MM    : "%d महीने",
                    y     : "एक वर्ष",
                    yy    : "%d वर्ष"
                },
                preparse      : function (a) {
                    return a.replace(/[१२३४५६७८९०]/g, function (a) {
                        return c[a]
                    })
                },
                postformat    : function (b) {
                    return b.replace(/\d/g, function (b) {
                        return a[b]
                    })
                },
                meridiemParse : /रात|सुबह|दोपहर|शाम/,
                meridiemHour  : function (a, b) {
                    return 12 === a && (a = 0), "रात" === b ? 4 > a ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0
                },
                meridiem      : function (a, b, c) {
                    return 4 > a ? "रात" : 10 > a ? "सुबह" : 17 > a ? "दोपहर" : 20 > a ? "शाम" : "रात"
                },
                week          : {dow: 0, doy: 6}
            });
            return d
        }(), a.fullCalendar.datepickerLang("hi", "hi", {
            closeText         : "बंद",
            prevText          : "पिछला",
            nextText          : "अगला",
            currentText       : "आज",
            monthNames        : ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthNamesShort   : ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
            dayNames          : ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
            dayNamesShort     : ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayNamesMin       : ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            weekHeader        : "हफ्ता",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("hi", {
            buttonText    : {month: "महीना", week: "सप्ताह", day: "दिन", list: "कार्यसूची"},
            allDayText    : "सभी दिन",
            eventLimitText: function (a) {
                return "+अधिक " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, c) {
                var d = a + " ";
                switch (c) {
                    case"m":
                        return b ? "jedna minuta" : "jedne minute";
                    case"mm":
                        return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
                    case"h":
                        return b ? "jedan sat" : "jednog sata";
                    case"hh":
                        return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
                    case"dd":
                        return d += 1 === a ? "dan" : "dana";
                    case"MM":
                        return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
                    case"yy":
                        return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
                }
            }

            var c = (b.defineLocale || b.lang).call(b, "hr", {
                months        : {
                    format    : "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort   : "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                weekdays      : "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort : "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin   : "ne_po_ut_sr_če_pe_su".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD. MM. YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar      : {
                    sameDay : "[danas u] LT",
                    nextDay : "[sutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay : "[jučer u] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "za %s",
                    past  : "prije %s",
                    s     : "par sekundi",
                    m     : a,
                    mm    : a,
                    h     : a,
                    hh    : a,
                    d     : "dan",
                    dd    : a,
                    M     : "mjesec",
                    MM    : a,
                    y     : "godinu",
                    yy    : a
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 7}
            });
            return c
        }(), a.fullCalendar.datepickerLang("hr", "hr", {
            closeText         : "Zatvori",
            prevText          : "&#x3C;",
            nextText          : "&#x3E;",
            currentText       : "Danas",
            monthNames        : ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort   : ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            dayNames          : ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort     : ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin       : ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            weekHeader        : "Tje",
            dateFormat        : "dd.mm.yy.",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("hr", {
            buttonText    : {month: "Mjesec", week: "Tjedan", day: "Dan", list: "Raspored"},
            allDayText    : "Cijeli dan",
            eventLimitText: function (a) {
                return "+ još " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, c, d) {
                var e = a;
                switch (c) {
                    case"s":
                        return d || b ? "néhány másodperc" : "néhány másodperce";
                    case"m":
                        return "egy" + (d || b ? " perc" : " perce");
                    case"mm":
                        return e + (d || b ? " perc" : " perce");
                    case"h":
                        return "egy" + (d || b ? " óra" : " órája");
                    case"hh":
                        return e + (d || b ? " óra" : " órája");
                    case"d":
                        return "egy" + (d || b ? " nap" : " napja");
                    case"dd":
                        return e + (d || b ? " nap" : " napja");
                    case"M":
                        return "egy" + (d || b ? " hónap" : " hónapja");
                    case"MM":
                        return e + (d || b ? " hónap" : " hónapja");
                    case"y":
                        return "egy" + (d || b ? " év" : " éve");
                    case"yy":
                        return e + (d || b ? " év" : " éve")
                }
                return ""
            }

            function c(a) {
                return (a ? "" : "[múlt] ") + "[" + d[this.day()] + "] LT[-kor]"
            }

            var d = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "), e = (b.defineLocale || b.lang).call(b, "hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "YYYY.MM.DD.",
                    LL  : "YYYY. MMMM D.",
                    LLL : "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function (a) {
                    return "u" === a.charAt(1).toLowerCase()
                },
                meridiem: function (a, b, c) {
                    return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU"
                },
                calendar: {
                    sameDay    : "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                        return c.call(this, !0)
                    }, lastDay : "[tegnap] LT[-kor]", lastWeek: function () {
                        return c.call(this, !1)
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past  : "%s",
                    s     : a,
                    m     : a,
                    mm    : a,
                    h     : a,
                    hh    : a,
                    d     : a,
                    dd    : a,
                    M     : a,
                    MM    : a,
                    y     : a,
                    yy    : a
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 7}
            });
            return e
        }(), a.fullCalendar.datepickerLang("hu", "hu", {
            closeText         : "bezár",
            prevText          : "vissza",
            nextText          : "előre",
            currentText       : "ma",
            monthNames        : ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort   : ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            dayNames          : ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort     : ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"],
            dayNamesMin       : ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
            weekHeader        : "Hét",
            dateFormat        : "yy.mm.dd.",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !0,
            yearSuffix        : ""
        }), a.fullCalendar.lang("hu", {
            buttonText    : {month: "Hónap", week: "Hét", day: "Nap", list: "Napló"},
            allDayText    : "Egész nap",
            eventLimitText: "további"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "id", {
                months        : "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort   : "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays      : "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort : "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin   : "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT  : "HH.mm",
                    LTS : "HH.mm.ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse : /pagi|siang|sore|malam/,
                meridiemHour  : function (a, b) {
                    return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
                },
                meridiem      : function (a, b, c) {
                    return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
                },
                calendar      : {
                    sameDay : "[Hari ini pukul] LT",
                    nextDay : "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay : "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "dalam %s",
                    past  : "%s yang lalu",
                    s     : "beberapa detik",
                    m     : "semenit",
                    mm    : "%d menit",
                    h     : "sejam",
                    hh    : "%d jam",
                    d     : "sehari",
                    dd    : "%d hari",
                    M     : "sebulan",
                    MM    : "%d bulan",
                    y     : "setahun",
                    yy    : "%d tahun"
                },
                week          : {dow: 1, doy: 7}
            });
            return a
        }(), a.fullCalendar.datepickerLang("id", "id", {
            closeText         : "Tutup",
            prevText          : "&#x3C;mundur",
            nextText          : "maju&#x3E;",
            currentText       : "hari ini",
            monthNames        : ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agus", "Sep", "Okt", "Nop", "Des"],
            dayNames          : ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
            dayNamesShort     : ["Min", "Sen", "Sel", "Rab", "kam", "Jum", "Sab"],
            dayNamesMin       : ["Mg", "Sn", "Sl", "Rb", "Km", "jm", "Sb"],
            weekHeader        : "Mg",
            dateFormat        : "dd/mm/yy",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("id", {
            buttonText    : {month: "Bulan", week: "Minggu", day: "Hari", list: "Agenda"},
            allDayHtml    : "Sehari<br/>penuh",
            eventLimitText: "lebih"
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a) {
                return a % 100 === 11 ? !0 : a % 10 === 1 ? !1 : !0
            }

            function c(b, c, d, e) {
                var f = b + " ";
                switch (d) {
                    case"s":
                        return c || e ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case"m":
                        return c ? "mínúta" : "mínútu";
                    case"mm":
                        return a(b) ? f + (c || e ? "mínútur" : "mínútum") : c ? f + "mínúta" : f + "mínútu";
                    case"hh":
                        return a(b) ? f + (c || e ? "klukkustundir" : "klukkustundum") : f + "klukkustund";
                    case"d":
                        return c ? "dagur" : e ? "dag" : "degi";
                    case"dd":
                        return a(b) ? c ? f + "dagar" : f + (e ? "daga" : "dögum") : c ? f + "dagur" : f + (e ? "dag" : "degi");
                    case"M":
                        return c ? "mánuður" : e ? "mánuð" : "mánuði";
                    case"MM":
                        return a(b) ? c ? f + "mánuðir" : f + (e ? "mánuði" : "mánuðum") : c ? f + "mánuður" : f + (e ? "mánuð" : "mánuði");
                    case"y":
                        return c || e ? "ár" : "ári";
                    case"yy":
                        return a(b) ? f + (c || e ? "ár" : "árum") : f + (c || e ? "ár" : "ári")
                }
            }

            var d = (b.defineLocale || b.lang).call(b, "is", {
                months        : "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort   : "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays      : "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort : "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin   : "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar      : {
                    sameDay : "[í dag kl.] LT",
                    nextDay : "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay : "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "eftir %s",
                    past  : "fyrir %s síðan",
                    s     : c,
                    m     : c,
                    mm    : c,
                    h     : "klukkustund",
                    hh    : c,
                    d     : c,
                    dd    : c,
                    M     : c,
                    MM    : c,
                    y     : c,
                    yy    : c
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 4}
            });
            return d
        }(), a.fullCalendar.datepickerLang("is", "is", {
            closeText         : "Loka",
            prevText          : "&#x3C; Fyrri",
            nextText          : "Næsti &#x3E;",
            currentText       : "Í dag",
            monthNames        : ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
            dayNames          : ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"],
            dayNamesShort     : ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"],
            dayNamesMin       : ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
            weekHeader        : "Vika",
            dateFormat        : "dd.mm.yy",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("is", {
            buttonText    : {month: "Mánuður", week: "Vika", day: "Dagur", list: "Dagskrá"},
            allDayHtml    : "Allan<br/>daginn",
            eventLimitText: "meira"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "it", {
                months        : "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort   : "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays      : "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
                weekdaysShort : "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                weekdaysMin   : "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[Oggi alle] LT",
                    nextDay : "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay : "[Ieri alle] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: function (a) {
                        return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
                    },
                    past  : "%s fa",
                    s     : "alcuni secondi",
                    m     : "un minuto",
                    mm    : "%d minuti",
                    h     : "un'ora",
                    hh    : "%d ore",
                    d     : "un giorno",
                    dd    : "%d giorni",
                    M     : "un mese",
                    MM    : "%d mesi",
                    y     : "un anno",
                    yy    : "%d anni"
                },
                ordinalParse  : /\d{1,2}º/,
                ordinal       : "%dº",
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("it", "it", {
            closeText         : "Chiudi",
            prevText          : "&#x3C;Prec",
            nextText          : "Succ&#x3E;",
            currentText       : "Oggi",
            monthNames        : ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort   : ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            dayNames          : ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            dayNamesShort     : ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            dayNamesMin       : ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            weekHeader        : "Sm",
            dateFormat        : "dd/mm/yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("it", {
            buttonText    : {month: "Mese", week: "Settimana", day: "Giorno", list: "Agenda"},
            allDayHtml    : "Tutto il<br/>giorno",
            eventLimitText: function (a) {
                return "+altri " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ja", {
                months        : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort   : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays      : "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort : "日_月_火_水_木_金_土".split("_"),
                weekdaysMin   : "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT  : "Ah時m分",
                    LTS : "Ah時m分s秒",
                    L   : "YYYY/MM/DD",
                    LL  : "YYYY年M月D日",
                    LLL : "YYYY年M月D日Ah時m分",
                    LLLL: "YYYY年M月D日Ah時m分 dddd"
                },
                meridiemParse : /午前|午後/i,
                isPM          : function (a) {
                    return "午後" === a
                },
                meridiem      : function (a, b, c) {
                    return 12 > a ? "午前" : "午後"
                },
                calendar      : {
                    sameDay : "[今日] LT",
                    nextDay : "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay : "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "%s後",
                    past  : "%s前",
                    s     : "数秒",
                    m     : "1分",
                    mm    : "%d分",
                    h     : "1時間",
                    hh    : "%d時間",
                    d     : "1日",
                    dd    : "%d日",
                    M     : "1ヶ月",
                    MM    : "%dヶ月",
                    y     : "1年",
                    yy    : "%d年"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("ja", "ja", {
            closeText         : "閉じる",
            prevText          : "&#x3C;前",
            nextText          : "次&#x3E;",
            currentText       : "今日",
            monthNames        : ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort   : ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayNames          : ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            dayNamesShort     : ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin       : ["日", "月", "火", "水", "木", "金", "土"],
            weekHeader        : "週",
            dateFormat        : "yy/mm/dd",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !0,
            yearSuffix        : "年"
        }), a.fullCalendar.lang("ja", {
            buttonText    : {month: "月", week: "週", day: "日", list: "予定リスト"},
            allDayText    : "終日",
            eventLimitText: function (a) {
                return "他 " + a + " 件"
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ko", {
                months        : "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort   : "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays      : "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort : "일_월_화_수_목_금_토".split("_"),
                weekdaysMin   : "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT  : "A h시 m분",
                    LTS : "A h시 m분 s초",
                    L   : "YYYY.MM.DD",
                    LL  : "YYYY년 MMMM D일",
                    LLL : "YYYY년 MMMM D일 A h시 m분",
                    LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
                },
                calendar      : {
                    sameDay : "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "%s 후",
                    past  : "%s 전",
                    s     : "몇초",
                    ss    : "%d초",
                    m     : "일분",
                    mm    : "%d분",
                    h     : "한시간",
                    hh    : "%d시간",
                    d     : "하루",
                    dd    : "%d일",
                    M     : "한달",
                    MM    : "%d달",
                    y     : "일년",
                    yy    : "%d년"
                },
                ordinalParse  : /\d{1,2}일/,
                ordinal       : "%d일",
                meridiemParse : /오전|오후/,
                isPM          : function (a) {
                    return "오후" === a
                },
                meridiem      : function (a, b, c) {
                    return 12 > a ? "오전" : "오후"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("ko", "ko", {
            closeText         : "닫기",
            prevText          : "이전달",
            nextText          : "다음달",
            currentText       : "오늘",
            monthNames        : ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort   : ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            dayNames          : ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            dayNamesShort     : ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin       : ["일", "월", "화", "수", "목", "금", "토"],
            weekHeader        : "Wk",
            dateFormat        : "yy-mm-dd",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !0,
            yearSuffix        : "년"
        }), a.fullCalendar.lang("ko", {
            buttonText    : {month: "월", week: "주", day: "일", list: "일정목록"},
            allDayText    : "종일",
            eventLimitText: "개"
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, c, d) {
                return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes"
            }

            function c(a, b, c, d) {
                return b ? e(c)[0] : d ? e(c)[1] : e(c)[2]
            }

            function d(a) {
                return a % 10 === 0 || a > 10 && 20 > a
            }

            function e(a) {
                return g[a].split("_")
            }

            function f(a, b, f, g) {
                var h = a + " ";
                return 1 === a ? h + c(a, b, f[0], g) : b ? h + (d(a) ? e(f)[1] : e(f)[0]) : g ? h + e(f)[1] : h + (d(a) ? e(f)[1] : e(f)[2])
            }

            var g = {
                m : "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h : "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d : "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M : "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y : "metai_metų_metus",
                yy: "metai_metų_metus"
            }, h = (b.defineLocale || b.lang).call(b, "lt", {
                months        : {
                    format    : "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_")
                },
                monthsShort   : "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays      : {
                    format    : "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat  : /dddd HH:mm/
                },
                weekdaysShort : "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin   : "S_P_A_T_K_Pn_Š".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "YYYY-MM-DD",
                    LL  : "YYYY [m.] MMMM D [d.]",
                    LLL : "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l   : "YYYY-MM-DD",
                    ll  : "YYYY [m.] MMMM D [d.]",
                    lll : "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar      : {
                    sameDay : "[Šiandien] LT",
                    nextDay : "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay : "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "po %s",
                    past  : "prieš %s",
                    s     : a,
                    m     : c,
                    mm    : f,
                    h     : c,
                    hh    : f,
                    d     : c,
                    dd    : f,
                    M     : c,
                    MM    : f,
                    y     : c,
                    yy    : f
                },
                ordinalParse  : /\d{1,2}-oji/,
                ordinal       : function (a) {
                    return a + "-oji"
                },
                week          : {dow: 1, doy: 4}
            });
            return h
        }(), a.fullCalendar.datepickerLang("lt", "lt", {
            closeText         : "Uždaryti",
            prevText          : "&#x3C;Atgal",
            nextText          : "Pirmyn&#x3E;",
            currentText       : "Šiandien",
            monthNames        : ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort   : ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
            dayNames          : ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
            dayNamesShort     : ["sek", "pir", "ant", "tre", "ket", "pen", "šeš"],
            dayNamesMin       : ["Se", "Pr", "An", "Tr", "Ke", "Pe", "Še"],
            weekHeader        : "SAV",
            dateFormat        : "yy-mm-dd",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !0,
            yearSuffix        : ""
        }), a.fullCalendar.lang("lt", {
            buttonText    : {month: "Mėnuo", week: "Savaitė", day: "Diena", list: "Darbotvarkė"},
            allDayText    : "Visą dieną",
            eventLimitText: "daugiau"
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, c) {
                return c ? b % 10 === 1 && 11 !== b ? a[2] : a[3] : b % 10 === 1 && 11 !== b ? a[0] : a[1]
            }

            function c(b, c, d) {
                return b + " " + a(f[d], b, c)
            }

            function d(b, c, d) {
                return a(f[d], b, c)
            }

            function e(a, b) {
                return b ? "dažas sekundes" : "dažām sekundēm"
            }

            var f = {
                m : "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h : "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d : "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M : "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y : "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            }, g = (b.defineLocale || b.lang).call(b, "lv", {
                months        : "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort   : "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays      : "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort : "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin   : "Sv_P_O_T_C_Pk_S".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY.",
                    LL  : "YYYY. [gada] D. MMMM",
                    LLL : "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar      : {
                    sameDay : "[Šodien pulksten] LT",
                    nextDay : "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay : "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "pēc %s",
                    past  : "pirms %s",
                    s     : e,
                    m     : d,
                    mm    : c,
                    h     : d,
                    hh    : c,
                    d     : d,
                    dd    : c,
                    M     : d,
                    MM    : c,
                    y     : d,
                    yy    : c
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 4}
            });
            return g
        }(), a.fullCalendar.datepickerLang("lv", "lv", {
            closeText         : "Aizvērt",
            prevText          : "Iepr.",
            nextText          : "Nāk.",
            currentText       : "Šodien",
            monthNames        : ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames          : ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"],
            dayNamesShort     : ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
            dayNamesMin       : ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "Ss"],
            weekHeader        : "Ned.",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("lv", {
            buttonText   : {
                month: "Mēnesis",
                week : "Nedēļa",
                day  : "Diena",
                list : "Dienas kārtība"
            }, allDayText: "Visu dienu", eventLimitText: function (a) {
                return "+vēl " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "nb", {
                months        : "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort   : "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                weekdays      : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort : "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin   : "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar      : {
                    sameDay : "[i dag kl.] LT",
                    nextDay : "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay : "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "om %s",
                    past  : "for %s siden",
                    s     : "noen sekunder",
                    m     : "ett minutt",
                    mm    : "%d minutter",
                    h     : "en time",
                    hh    : "%d timer",
                    d     : "en dag",
                    dd    : "%d dager",
                    M     : "en måned",
                    MM    : "%d måneder",
                    y     : "ett år",
                    yy    : "%d år"
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("nb", "nb", {
            closeText         : "Lukk",
            prevText          : "&#xAB;Forrige",
            nextText          : "Neste&#xBB;",
            currentText       : "I dag",
            monthNames        : ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthNamesShort   : ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            dayNamesShort     : ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
            dayNames          : ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
            dayNamesMin       : ["sø", "ma", "ti", "on", "to", "fr", "lø"],
            weekHeader        : "Uke",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("nb", {
            buttonText    : {month: "Måned", week: "Uke", day: "Dag", list: "Agenda"},
            allDayText    : "Hele dagen",
            eventLimitText: "til"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), c = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), d = (b.defineLocale || b.lang).call(b, "nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function (b, d) {
                    return /-MMM-/.test(d) ? c[b.month()] : a[b.month()]
                },
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD-MM-YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay : "[vandaag om] LT",
                    nextDay : "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay : "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past  : "%s geleden",
                    s     : "een paar seconden",
                    m     : "één minuut",
                    mm    : "%d minuten",
                    h     : "één uur",
                    hh    : "%d uur",
                    d     : "één dag",
                    dd    : "%d dagen",
                    M     : "één maand",
                    MM    : "%d maanden",
                    y     : "één jaar",
                    yy    : "%d jaar"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (a) {
                    return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
                },
                week: {dow: 1, doy: 4}
            });
            return d
        }(), a.fullCalendar.datepickerLang("nl", "nl", {
            closeText         : "Sluiten",
            prevText          : "←",
            nextText          : "→",
            currentText       : "Vandaag",
            monthNames        : ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthNamesShort   : ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            dayNames          : ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            dayNamesShort     : ["zon", "maa", "din", "woe", "don", "vri", "zat"],
            dayNamesMin       : ["zo", "ma", "di", "wo", "do", "vr", "za"],
            weekHeader        : "Wk",
            dateFormat        : "dd-mm-yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("nl", {
            buttonText    : {month: "Maand", week: "Week", day: "Dag", list: "Agenda"},
            allDayText    : "Hele dag",
            eventLimitText: "extra"
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a) {
                return 5 > a % 10 && a % 10 > 1 && ~~(a / 10) % 10 !== 1
            }

            function c(b, c, d) {
                var e = b + " ";
                switch (d) {
                    case"m":
                        return c ? "minuta" : "minutę";
                    case"mm":
                        return e + (a(b) ? "minuty" : "minut");
                    case"h":
                        return c ? "godzina" : "godzinę";
                    case"hh":
                        return e + (a(b) ? "godziny" : "godzin");
                    case"MM":
                        return e + (a(b) ? "miesiące" : "miesięcy");
                    case"yy":
                        return e + (a(b) ? "lata" : "lat")
                }
            }

            var d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), f = (b.defineLocale || b.lang).call(b, "pl", {
                months: function (a, b) {
                    return "" === b ? "(" + e[a.month()] + "|" + d[a.month()] + ")" : /D MMMM/.test(b) ? e[a.month()] : d[a.month()]
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay : "[Dziś o] LT",
                    nextDay : "[Jutro o] LT",
                    nextWeek: "[W] dddd [o] LT",
                    lastDay : "[Wczoraj o] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past  : "%s temu",
                    s     : "kilka sekund",
                    m     : c,
                    mm    : c,
                    h     : c,
                    hh    : c,
                    d     : "1 dzień",
                    dd    : "%d dni",
                    M     : "miesiąc",
                    MM    : c,
                    y     : "rok",
                    yy    : c
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            });
            return f
        }(), a.fullCalendar.datepickerLang("pl", "pl", {
            closeText         : "Zamknij",
            prevText          : "&#x3C;Poprzedni",
            nextText          : "Następny&#x3E;",
            currentText       : "Dziś",
            monthNames        : ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort   : ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
            dayNames          : ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort     : ["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
            dayNamesMin       : ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
            weekHeader        : "Tydz",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("pl", {
            buttonText    : {month: "Miesiąc", week: "Tydzień", day: "Dzień", list: "Plan dnia"},
            allDayText    : "Cały dzień",
            eventLimitText: "więcej"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "pt-br", {
                months        : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort   : "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays      : "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
                weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin   : "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D [de] MMMM [de] YYYY",
                    LLL : "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar      : {
                    sameDay : "[Hoje às] LT",
                    nextDay : "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay : "[Ontem às] LT",
                    lastWeek: function () {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "em %s",
                    past  : "%s atrás",
                    s     : "poucos segundos",
                    m     : "um minuto",
                    mm    : "%d minutos",
                    h     : "uma hora",
                    hh    : "%d horas",
                    d     : "um dia",
                    dd    : "%d dias",
                    M     : "um mês",
                    MM    : "%d meses",
                    y     : "um ano",
                    yy    : "%d anos"
                },
                ordinalParse  : /\d{1,2}º/,
                ordinal       : "%dº"
            });
            return a
        }(), a.fullCalendar.datepickerLang("pt-br", "pt-BR", {
            closeText         : "Fechar",
            prevText          : "&#x3C;Anterior",
            nextText          : "Próximo&#x3E;",
            currentText       : "Hoje",
            monthNames        : ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort   : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames          : ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort     : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin       : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            weekHeader        : "Sm",
            dateFormat        : "dd/mm/yy",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("pt-br", {
            buttonText    : {month: "Mês", week: "Semana", day: "Dia", list: "Compromissos"},
            allDayText    : "dia inteiro",
            eventLimitText: function (a) {
                return "mais +" + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "pt", {
                months        : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort   : "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays      : "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
                weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin   : "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D [de] MMMM [de] YYYY",
                    LLL : "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[Hoje às] LT",
                    nextDay : "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay : "[Ontem às] LT",
                    lastWeek: function () {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "em %s",
                    past  : "há %s",
                    s     : "segundos",
                    m     : "um minuto",
                    mm    : "%d minutos",
                    h     : "uma hora",
                    hh    : "%d horas",
                    d     : "um dia",
                    dd    : "%d dias",
                    M     : "um mês",
                    MM    : "%d meses",
                    y     : "um ano",
                    yy    : "%d anos"
                },
                ordinalParse  : /\d{1,2}º/,
                ordinal       : "%dº",
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("pt", "pt", {
            closeText         : "Fechar",
            prevText          : "Anterior",
            nextText          : "Seguinte",
            currentText       : "Hoje",
            monthNames        : ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort   : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames          : ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort     : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin       : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            weekHeader        : "Sem",
            dateFormat        : "dd/mm/yy",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("pt", {
            buttonText    : {month: "Mês", week: "Semana", day: "Dia", list: "Agenda"},
            allDayText    : "Todo o dia",
            eventLimitText: "mais"
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, c) {
                var d = {mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"}, e = " ";
                return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c]
            }

            var c = (b.defineLocale || b.lang).call(b, "ro", {
                months        : "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort   : "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                weekdays      : "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort : "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin   : "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar      : {
                    sameDay : "[azi la] LT",
                    nextDay : "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay : "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "peste %s",
                    past  : "%s în urmă",
                    s     : "câteva secunde",
                    m     : "un minut",
                    mm    : a,
                    h     : "o oră",
                    hh    : a,
                    d     : "o zi",
                    dd    : a,
                    M     : "o lună",
                    MM    : a,
                    y     : "un an",
                    yy    : a
                },
                week          : {dow: 1, doy: 7}
            });
            return c
        }(), a.fullCalendar.datepickerLang("ro", "ro", {
            closeText         : "Închide",
            prevText          : "&#xAB; Luna precedentă",
            nextText          : "Luna următoare &#xBB;",
            currentText       : "Azi",
            monthNames        : ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort   : ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames          : ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort     : ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
            dayNamesMin       : ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            weekHeader        : "Săpt",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("ro", {
            buttonText   : {
                prev : "precedentă",
                next : "următoare",
                month: "Lună",
                week : "Săptămână",
                day  : "Zi",
                list : "Agendă"
            }, allDayText: "Toată ziua", eventLimitText: function (a) {
                return "+alte " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b) {
                var c = a.split("_");
                return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
            }

            function c(b, c, d) {
                var e = {
                    mm: c ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === d ? c ? "минута" : "минуту" : b + " " + a(e[d], +b)
            }

            var d = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i], e = (b.defineLocale || b.lang).call(b, "ru", {
                months: {
                    format: "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря".split("_"),
                    standalone: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_")
                },
                monthsShort: {
                    format    : "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_"),
                    standalone: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_")
                },
                weekdays: {
                    standalone: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),
                    format    : "Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу".split("_"),
                    isFormat  : /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
                weekdaysMin: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
                monthsParse: d,
                longMonthsParse: d,
                shortMonthsParse: d,
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D MMMM YYYY г.",
                    LLL : "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay : "[Сегодня в] LT",
                    nextDay : "[Завтра в] LT",
                    lastDay : "[Вчера в] LT",
                    nextWeek: function (a) {
                        if (a.week() === this.week())return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd [в] LT"
                        }
                    },
                    lastWeek: function (a) {
                        if (a.week() === this.week())return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past  : "%s назад",
                    s     : "несколько секунд",
                    m     : c,
                    mm    : c,
                    h     : "час",
                    hh    : c,
                    d     : "день",
                    dd    : c,
                    M     : "месяц",
                    MM    : c,
                    y     : "год",
                    yy    : c
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function (a) {
                    return /^(дня|вечера)$/.test(a)
                },
                meridiem: function (a, b, c) {
                    return 4 > a ? "ночи" : 12 > a ? "утра" : 17 > a ? "дня" : "вечера"
                },
                ordinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function (a, b) {
                    switch (b) {
                        case"M":
                        case"d":
                        case"DDD":
                            return a + "-й";
                        case"D":
                            return a + "-го";
                        case"w":
                        case"W":
                            return a + "-я";
                        default:
                            return a
                    }
                },
                week: {dow: 1, doy: 7}
            });
            return e
        }(), a.fullCalendar.datepickerLang("ru", "ru", {
            closeText         : "Закрыть",
            prevText          : "&#x3C;Пред",
            nextText          : "След&#x3E;",
            currentText       : "Сегодня",
            monthNames        : ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort   : ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            dayNames          : ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort     : ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin       : ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader        : "Нед",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("ru", {
            buttonText    : {month: "Месяц", week: "Неделя", day: "День", list: "Повестка дня"},
            allDayText    : "Весь день",
            eventLimitText: function (a) {
                return "+ ещё " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a) {
                return a > 1 && 5 > a
            }

            function c(b, c, d, e) {
                var f = b + " ";
                switch (d) {
                    case"s":
                        return c || e ? "pár sekúnd" : "pár sekundami";
                    case"m":
                        return c ? "minúta" : e ? "minútu" : "minútou";
                    case"mm":
                        return c || e ? f + (a(b) ? "minúty" : "minút") : f + "minútami";
                    case"h":
                        return c ? "hodina" : e ? "hodinu" : "hodinou";
                    case"hh":
                        return c || e ? f + (a(b) ? "hodiny" : "hodín") : f + "hodinami";
                    case"d":
                        return c || e ? "deň" : "dňom";
                    case"dd":
                        return c || e ? f + (a(b) ? "dni" : "dní") : f + "dňami";
                    case"M":
                        return c || e ? "mesiac" : "mesiacom";
                    case"MM":
                        return c || e ? f + (a(b) ? "mesiace" : "mesiacov") : f + "mesiacmi";
                    case"y":
                        return c || e ? "rok" : "rokom";
                    case"yy":
                        return c || e ? f + (a(b) ? "roky" : "rokov") : f + "rokmi"
                }
            }

            var d = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), e = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), f = (b.defineLocale || b.lang).call(b, "sk", {
                months: d,
                monthsShort: e,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay    : "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    }, lastDay : "[včera o] LT", lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past  : "pred %s",
                    s     : c,
                    m     : c,
                    mm    : c,
                    h     : c,
                    hh    : c,
                    d     : c,
                    dd    : c,
                    M     : c,
                    MM    : c,
                    y     : c,
                    yy    : c
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            });
            return f
        }(), a.fullCalendar.datepickerLang("sk", "sk", {
            closeText         : "Zavrieť",
            prevText          : "&#x3C;Predchádzajúci",
            nextText          : "Nasledujúci&#x3E;",
            currentText       : "Dnes",
            monthNames        : ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames          : ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
            dayNamesShort     : ["Ned", "Pon", "Uto", "Str", "Štv", "Pia", "Sob"],
            dayNamesMin       : ["Ne", "Po", "Ut", "St", "Št", "Pia", "So"],
            weekHeader        : "Ty",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("sk", {
            buttonText    : {month: "Mesiac", week: "Týždeň", day: "Deň", list: "Rozvrh"},
            allDayText    : "Celý deň",
            eventLimitText: function (a) {
                return "+ďalšie: " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b, c, d) {
                var e = a + " ";
                switch (c) {
                    case"s":
                        return b || d ? "nekaj sekund" : "nekaj sekundami";
                    case"m":
                        return b ? "ena minuta" : "eno minuto";
                    case"mm":
                        return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : 5 > a ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";
                    case"h":
                        return b ? "ena ura" : "eno uro";
                    case"hh":
                        return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : 5 > a ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";
                    case"d":
                        return b || d ? "en dan" : "enim dnem";
                    case"dd":
                        return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";
                    case"M":
                        return b || d ? "en mesec" : "enim mesecem";
                    case"MM":
                        return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : 5 > a ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";
                    case"y":
                        return b || d ? "eno leto" : "enim letom";
                    case"yy":
                        return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : 5 > a ? b || d ? "leta" : "leti" : b || d ? "let" : "leti"
                }
            }

            var c = (b.defineLocale || b.lang).call(b, "sl", {
                months        : "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort   : "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                weekdays      : "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort : "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin   : "ne_po_to_sr_če_pe_so".split("_"),
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD. MM. YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar      : {
                    sameDay : "[danes ob] LT",
                    nextDay : "[jutri ob] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay : "[včeraj ob] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "čez %s",
                    past  : "pred %s",
                    s     : a,
                    m     : a,
                    mm    : a,
                    h     : a,
                    hh    : a,
                    d     : a,
                    dd    : a,
                    M     : a,
                    MM    : a,
                    y     : a,
                    yy    : a
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 7}
            });
            return c
        }(), a.fullCalendar.datepickerLang("sl", "sl", {
            closeText         : "Zapri",
            prevText          : "&#x3C;Prejšnji",
            nextText          : "Naslednji&#x3E;",
            currentText       : "Trenutni",
            monthNames        : ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            dayNames          : ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
            dayNamesShort     : ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
            dayNamesMin       : ["Ne", "Po", "To", "Sr", "Če", "Pe", "So"],
            weekHeader        : "Teden",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("sl", {
            buttonText    : {month: "Mesec", week: "Teden", day: "Dan", list: "Dnevni red"},
            allDayText    : "Ves dan",
            eventLimitText: "več"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = {
                words                    : {
                    m : ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h : ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                }, correctGrammaticalCase: function (a, b) {
                    return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
                }, translate             : function (b, c, d) {
                    var e = a.words[d];
                    return 1 === d.length ? c ? e[0] : e[1] : b + " " + a.correctGrammaticalCase(b, e)
                }
            }, c = (b.defineLocale || b.lang).call(b, "sr-cyrl", {
                months        : ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                monthsShort   : ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
                weekdays      : ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
                weekdaysShort : ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
                weekdaysMin   : ["не", "по", "ут", "ср", "че", "пе", "су"],
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD. MM. YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar      : {
                    sameDay : "[данас у] LT",
                    nextDay : "[сутра у] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    },
                    lastDay : "[јуче у] LT",
                    lastWeek: function () {
                        var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                        return a[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "за %s",
                    past  : "пре %s",
                    s     : "неколико секунди",
                    m     : a.translate,
                    mm    : a.translate,
                    h     : a.translate,
                    hh    : a.translate,
                    d     : "дан",
                    dd    : a.translate,
                    M     : "месец",
                    MM    : a.translate,
                    y     : "годину",
                    yy    : a.translate
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 7}
            });
            return c
        }(), a.fullCalendar.datepickerLang("sr-cyrl", "sr", {
            closeText         : "Затвори",
            prevText          : "&#x3C;",
            nextText          : "&#x3E;",
            currentText       : "Данас",
            monthNames        : ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort   : ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            dayNames          : ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort     : ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin       : ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            weekHeader        : "Сед",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("sr-cyrl", {
            buttonText    : {month: "Месец", week: "Недеља", day: "Дан", list: "Планер"},
            allDayText    : "Цео дан",
            eventLimitText: function (a) {
                return "+ још " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = {
                words                    : {
                    m : ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h : ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                }, correctGrammaticalCase: function (a, b) {
                    return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
                }, translate             : function (b, c, d) {
                    var e = a.words[d];
                    return 1 === d.length ? c ? e[0] : e[1] : b + " " + a.correctGrammaticalCase(b, e)
                }
            }, c = (b.defineLocale || b.lang).call(b, "sr", {
                months        : ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
                monthsShort   : ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
                weekdays      : ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
                weekdaysShort : ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
                weekdaysMin   : ["ne", "po", "ut", "sr", "če", "pe", "su"],
                longDateFormat: {
                    LT  : "H:mm",
                    LTS : "H:mm:ss",
                    L   : "DD. MM. YYYY",
                    LL  : "D. MMMM YYYY",
                    LLL : "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar      : {
                    sameDay : "[danas u] LT",
                    nextDay : "[sutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay : "[juče u] LT",
                    lastWeek: function () {
                        var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return a[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "za %s",
                    past  : "pre %s",
                    s     : "nekoliko sekundi",
                    m     : a.translate,
                    mm    : a.translate,
                    h     : a.translate,
                    hh    : a.translate,
                    d     : "dan",
                    dd    : a.translate,
                    M     : "mesec",
                    MM    : a.translate,
                    y     : "godinu",
                    yy    : a.translate
                },
                ordinalParse  : /\d{1,2}\./,
                ordinal       : "%d.",
                week          : {dow: 1, doy: 7}
            });
            return c
        }(), a.fullCalendar.datepickerLang("sr", "sr", {
            closeText         : "Затвори",
            prevText          : "&#x3C;",
            nextText          : "&#x3E;",
            currentText       : "Данас",
            monthNames        : ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort   : ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            dayNames          : ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort     : ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin       : ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            weekHeader        : "Сед",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("sr", {
            buttonText    : {month: "Месец", week: "Недеља", day: "Дан", list: "Планер"},
            allDayText    : "Цео дан",
            eventLimitText: function (a) {
                return "+ још " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "sv", {
                months        : "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort   : "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays      : "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort : "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin   : "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "YYYY-MM-DD",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[Idag] LT",
                    nextDay : "[Imorgon] LT",
                    lastDay : "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "om %s",
                    past  : "för %s sedan",
                    s     : "några sekunder",
                    m     : "en minut",
                    mm    : "%d minuter",
                    h     : "en timme",
                    hh    : "%d timmar",
                    d     : "en dag",
                    dd    : "%d dagar",
                    M     : "en månad",
                    MM    : "%d månader",
                    y     : "ett år",
                    yy    : "%d år"
                },
                ordinalParse  : /\d{1,2}(e|a)/,
                ordinal       : function (a) {
                    var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
                    return a + c
                },
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("sv", "sv", {
            closeText         : "Stäng",
            prevText          : "&#xAB;Förra",
            nextText          : "Nästa&#xBB;",
            currentText       : "Idag",
            monthNames        : ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort   : ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNamesShort     : ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
            dayNames          : ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesMin       : ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            weekHeader        : "Ve",
            dateFormat        : "yy-mm-dd",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("sv", {
            buttonText    : {month: "Månad", week: "Vecka", day: "Dag", list: "Program"},
            allDayText    : "Heldag",
            eventLimitText: "till"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "th", {
                months        : "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort   : "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
                weekdays      : "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort : "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin   : "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                longDateFormat: {
                    LT  : "H นาฬิกา m นาที",
                    LTS : "H นาฬิกา m นาที s วินาที",
                    L   : "YYYY/MM/DD",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY เวลา H นาฬิกา m นาที",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
                },
                meridiemParse : /ก่อนเที่ยง|หลังเที่ยง/,
                isPM          : function (a) {
                    return "หลังเที่ยง" === a
                },
                meridiem      : function (a, b, c) {
                    return 12 > a ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar      : {
                    sameDay : "[วันนี้ เวลา] LT",
                    nextDay : "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay : "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "อีก %s",
                    past  : "%sที่แล้ว",
                    s     : "ไม่กี่วินาที",
                    m     : "1 นาที",
                    mm    : "%d นาที",
                    h     : "1 ชั่วโมง",
                    hh    : "%d ชั่วโมง",
                    d     : "1 วัน",
                    dd    : "%d วัน",
                    M     : "1 เดือน",
                    MM    : "%d เดือน",
                    y     : "1 ปี",
                    yy    : "%d ปี"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("th", "th", {
            closeText         : "ปิด",
            prevText          : "&#xAB;&#xA0;ย้อน",
            nextText          : "ถัดไป&#xA0;&#xBB;",
            currentText       : "วันนี้",
            monthNames        : ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort   : ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            dayNames          : ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            dayNamesShort     : ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin       : ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            weekHeader        : "Wk",
            dateFormat        : "dd/mm/yy",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("th", {
            buttonText    : {month: "เดือน", week: "สัปดาห์", day: "วัน", list: "แผนงาน"},
            allDayText    : "ตลอดวัน",
            eventLimitText: "เพิ่มเติม"
        })
    }(), function () {
        !function () {
            "use strict";
            var a = {
                1  : "'inci",
                5  : "'inci",
                8  : "'inci",
                70 : "'inci",
                80 : "'inci",
                2  : "'nci",
                7  : "'nci",
                20 : "'nci",
                50 : "'nci",
                3  : "'üncü",
                4  : "'üncü",
                100: "'üncü",
                6  : "'ncı",
                9  : "'uncu",
                10 : "'uncu",
                30 : "'uncu",
                60 : "'ıncı",
                90 : "'ıncı"
            }, c = (b.defineLocale || b.lang).call(b, "tr", {
                months        : "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort   : "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays      : "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort : "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin   : "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D MMMM YYYY",
                    LLL : "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[bugün saat] LT",
                    nextDay : "[yarın saat] LT",
                    nextWeek: "[haftaya] dddd [saat] LT",
                    lastDay : "[dün] LT",
                    lastWeek: "[geçen hafta] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "%s sonra",
                    past  : "%s önce",
                    s     : "birkaç saniye",
                    m     : "bir dakika",
                    mm    : "%d dakika",
                    h     : "bir saat",
                    hh    : "%d saat",
                    d     : "bir gün",
                    dd    : "%d gün",
                    M     : "bir ay",
                    MM    : "%d ay",
                    y     : "bir yıl",
                    yy    : "%d yıl"
                },
                ordinalParse  : /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal       : function (b) {
                    if (0 === b)return b + "'ıncı";
                    var c = b % 10, d = b % 100 - c, e = b >= 100 ? 100 : null;
                    return b + (a[c] || a[d] || a[e])
                },
                week          : {dow: 1, doy: 7}
            });
            return c
        }(), a.fullCalendar.datepickerLang("tr", "tr", {
            closeText         : "kapat",
            prevText          : "&#x3C;geri",
            nextText          : "ileri&#x3e",
            currentText       : "bugün",
            monthNames        : ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort   : ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            dayNames          : ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort     : ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            dayNamesMin       : ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            weekHeader        : "Hf",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("tr", {
            buttonText   : {
                next : "ileri",
                month: "Ay",
                week : "Hafta",
                day  : "Gün",
                list : "Ajanda"
            }, allDayText: "Tüm gün", eventLimitText: "daha fazla"
        })
    }(), function () {
        !function () {
            "use strict";
            function a(a, b) {
                var c = a.split("_");
                return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
            }

            function c(b, c, d) {
                var e = {
                    mm: c ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: c ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === d ? c ? "хвилина" : "хвилину" : "h" === d ? c ? "година" : "годину" : b + " " + a(e[d], +b)
            }

            function d(a, b) {
                var c = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive  : "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                }, d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
                return c[d][a.day()]
            }

            function e(a) {
                return function () {
                    return a + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }

            var f = (b.defineLocale || b.lang).call(b, "uk", {
                months        : {
                    format    : "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort   : "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays      : d,
                weekdaysShort : "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin   : "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD.MM.YYYY",
                    LL  : "D MMMM YYYY р.",
                    LLL : "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar      : {
                    sameDay : e("[Сьогодні "),
                    nextDay : e("[Завтра "),
                    lastDay : e("[Вчора "),
                    nextWeek: e("[У] dddd ["),
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return e("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return e("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "за %s",
                    past  : "%s тому",
                    s     : "декілька секунд",
                    m     : c,
                    mm    : c,
                    h     : "годину",
                    hh    : c,
                    d     : "день",
                    dd    : c,
                    M     : "місяць",
                    MM    : c,
                    y     : "рік",
                    yy    : c
                },
                meridiemParse : /ночі|ранку|дня|вечора/,
                isPM          : function (a) {
                    return /^(дня|вечора)$/.test(a)
                },
                meridiem      : function (a, b, c) {
                    return 4 > a ? "ночі" : 12 > a ? "ранку" : 17 > a ? "дня" : "вечора"
                },
                ordinalParse  : /\d{1,2}-(й|го)/,
                ordinal       : function (a, b) {
                    switch (b) {
                        case"M":
                        case"d":
                        case"DDD":
                        case"w":
                        case"W":
                            return a + "-й";
                        case"D":
                            return a + "-го";
                        default:
                            return a
                    }
                },
                week          : {dow: 1, doy: 7}
            });
            return f
        }(), a.fullCalendar.datepickerLang("uk", "uk", {
            closeText         : "Закрити",
            prevText          : "&#x3C;",
            nextText          : "&#x3E;",
            currentText       : "Сьогодні",
            monthNames        : ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort   : ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
            dayNames          : ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            dayNamesShort     : ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin       : ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader        : "Тиж",
            dateFormat        : "dd.mm.yy",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("uk", {
            buttonText   : {
                month: "Місяць",
                week : "Тиждень",
                day  : "День",
                list : "Порядок денний"
            }, allDayText: "Увесь день", eventLimitText: function (a) {
                return "+ще " + a + "..."
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "vi", {
                months        : "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort   : "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                weekdays      : "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort : "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin   : "CN_T2_T3_T4_T5_T6_T7".split("_"),
                longDateFormat: {
                    LT  : "HH:mm",
                    LTS : "HH:mm:ss",
                    L   : "DD/MM/YYYY",
                    LL  : "D MMMM [năm] YYYY",
                    LLL : "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l   : "DD/M/YYYY",
                    ll  : "D MMM YYYY",
                    lll : "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar      : {
                    sameDay : "[Hôm nay lúc] LT",
                    nextDay : "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay : "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime  : {
                    future: "%s tới",
                    past  : "%s trước",
                    s     : "vài giây",
                    m     : "một phút",
                    mm    : "%d phút",
                    h     : "một giờ",
                    hh    : "%d giờ",
                    d     : "một ngày",
                    dd    : "%d ngày",
                    M     : "một tháng",
                    MM    : "%d tháng",
                    y     : "một năm",
                    yy    : "%d năm"
                },
                ordinalParse  : /\d{1,2}/,
                ordinal       : function (a) {
                    return a
                },
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("vi", "vi", {
            closeText         : "Đóng",
            prevText          : "&#x3C;Trước",
            nextText          : "Tiếp&#x3E;",
            currentText       : "Hôm nay",
            monthNames        : ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            monthNamesShort   : ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            dayNames          : ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort     : ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin       : ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekHeader        : "Tu",
            dateFormat        : "dd/mm/yy",
            firstDay          : 0,
            isRTL             : !1,
            showMonthAfterYear: !1,
            yearSuffix        : ""
        }), a.fullCalendar.lang("vi", {
            buttonText    : {month: "Tháng", week: "Tuần", day: "Ngày", list: "Lịch biểu"},
            allDayText    : "Cả ngày",
            eventLimitText: function (a) {
                return "+ thêm " + a
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "zh-cn", {
                months        : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort   : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays      : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort : "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin   : "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT  : "Ah点mm分",
                    LTS : "Ah点m分s秒",
                    L   : "YYYY-MM-DD",
                    LL  : "YYYY年MMMD日",
                    LLL : "YYYY年MMMD日Ah点mm分",
                    LLLL: "YYYY年MMMD日ddddAh点mm分",
                    l   : "YYYY-MM-DD",
                    ll  : "YYYY年MMMD日",
                    lll : "YYYY年MMMD日Ah点mm分",
                    llll: "YYYY年MMMD日ddddAh点mm分"
                },
                meridiemParse : /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour  : function (a, b) {
                    return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12
                },
                meridiem      : function (a, b, c) {
                    var d = 100 * a + b;
                    return 600 > d ? "凌晨" : 900 > d ? "早上" : 1130 > d ? "上午" : 1230 > d ? "中午" : 1800 > d ? "下午" : "晚上"
                },
                calendar      : {
                    sameDay    : function () {
                        return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                    }, nextDay : function () {
                        return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                    }, lastDay : function () {
                        return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                    }, nextWeek: function () {
                        var a, c;
                        return a = b().startOf("week"), c = this.unix() - a.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm"
                    }, lastWeek: function () {
                        var a, c;
                        return a = b().startOf("week"), c = this.unix() < a.unix() ? "[上]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm"
                    }, sameElse: "LL"
                },
                ordinalParse  : /\d{1,2}(日|月|周)/,
                ordinal       : function (a, b) {
                    switch (b) {
                        case"d":
                        case"D":
                        case"DDD":
                            return a + "日";
                        case"M":
                            return a + "月";
                        case"w":
                        case"W":
                            return a + "周";
                        default:
                            return a
                    }
                },
                relativeTime  : {
                    future: "%s内",
                    past  : "%s前",
                    s     : "几秒",
                    m     : "1 分钟",
                    mm    : "%d 分钟",
                    h     : "1 小时",
                    hh    : "%d 小时",
                    d     : "1 天",
                    dd    : "%d 天",
                    M     : "1 个月",
                    MM    : "%d 个月",
                    y     : "1 年",
                    yy    : "%d 年"
                },
                week          : {dow: 1, doy: 4}
            });
            return a
        }(), a.fullCalendar.datepickerLang("zh-cn", "zh-CN", {
            closeText         : "关闭",
            prevText          : "&#x3C;上月",
            nextText          : "下月&#x3E;",
            currentText       : "今天",
            monthNames        : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort   : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            dayNames          : ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort     : ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesMin       : ["日", "一", "二", "三", "四", "五", "六"],
            weekHeader        : "周",
            dateFormat        : "yy-mm-dd",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !0,
            yearSuffix        : "年"
        }), a.fullCalendar.lang("zh-cn", {
            buttonText    : {month: "月", week: "周", day: "日", list: "日程"},
            allDayText    : "全天",
            eventLimitText: function (a) {
                return "另外 " + a + " 个"
            }
        })
    }(), function () {
        !function () {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "zh-tw", {
                months        : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort   : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays      : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort : "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin   : "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT  : "Ah點mm分",
                    LTS : "Ah點m分s秒",
                    L   : "YYYY年MMMD日",
                    LL  : "YYYY年MMMD日",
                    LLL : "YYYY年MMMD日Ah點mm分",
                    LLLL: "YYYY年MMMD日ddddAh點mm分",
                    l   : "YYYY年MMMD日",
                    ll  : "YYYY年MMMD日",
                    lll : "YYYY年MMMD日Ah點mm分",
                    llll: "YYYY年MMMD日ddddAh點mm分"
                },
                meridiemParse : /早上|上午|中午|下午|晚上/,
                meridiemHour  : function (a, b) {
                    return 12 === a && (a = 0), "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0
                },
                meridiem      : function (a, b, c) {
                    var d = 100 * a + b;
                    return 900 > d ? "早上" : 1130 > d ? "上午" : 1230 > d ? "中午" : 1800 > d ? "下午" : "晚上"
                },
                calendar      : {
                    sameDay : "[今天]LT",
                    nextDay : "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay : "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                ordinalParse  : /\d{1,2}(日|月|週)/,
                ordinal       : function (a, b) {
                    switch (b) {
                        case"d":
                        case"D":
                        case"DDD":
                            return a + "日";
                        case"M":
                            return a + "月";
                        case"w":
                        case"W":
                            return a + "週";
                        default:
                            return a
                    }
                },
                relativeTime  : {
                    future: "%s內",
                    past  : "%s前",
                    s     : "幾秒",
                    m     : "一分鐘",
                    mm    : "%d分鐘",
                    h     : "一小時",
                    hh    : "%d小時",
                    d     : "一天",
                    dd    : "%d天",
                    M     : "一個月",
                    MM    : "%d個月",
                    y     : "一年",
                    yy    : "%d年"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("zh-tw", "zh-TW", {
            closeText         : "關閉",
            prevText          : "&#x3C;上月",
            nextText          : "下月&#x3E;",
            currentText       : "今天",
            monthNames        : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort   : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            dayNames          : ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort     : ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesMin       : ["日", "一", "二", "三", "四", "五", "六"],
            weekHeader        : "周",
            dateFormat        : "yy/mm/dd",
            firstDay          : 1,
            isRTL             : !1,
            showMonthAfterYear: !0,
            yearSuffix        : "年"
        }), a.fullCalendar.lang("zh-tw", {
            buttonText    : {month: "月", week: "週", day: "天", list: "待辦事項"},
            allDayText    : "全天",
            eventLimitText: "更多"
        })
    }(), (b.locale || b.lang).call(b, "en"), a.fullCalendar.lang("en"), a.datepicker && a.datepicker.setDefaults(a.datepicker.regional[""])
});