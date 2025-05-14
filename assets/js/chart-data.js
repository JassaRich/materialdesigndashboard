/* ====== Chart ====== */
(function ($) {
    "use strict";
    var userNumbers;
    var campaignNumbers;
    var leadNumbers;
    var revenueNumbers;
    var expensesNumbers;
    var ordersNumbers;

    /*  Home page  */
    function chart() {
        var userOptions = {
            chart: {
                type: "line",
                height: 50,
                sparkline: {
                    enabled: !0
                },
            },
            series: [{
                name: 'Users',
                data: [13.62, 39.54, 71.52, 42.54, 34.85, 49.56, 35.68, 23.65, 50.50, 29.20, 47.85, 68.56]
            }],
            stroke: {
                curve: "smooth",
                width: 4
            },
            colors: ["#313b50"],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            tooltip: {
                theme: "dark",
                fixed: {
                    enabled: !1
                },
                y: [{
                    formatter: function (e) {
                        return void 0 !== e ? + e.toFixed(2) + "k" : e
                    }
                }]
            },
        };
        var userId = document.querySelector("#userNumbers");
        userNumbers && userNumbers.destroy();
        userNumbers = userId && new ApexCharts(userId, userOptions);
        userNumbers && userNumbers.render();

        var campaignOptions = {
            chart: {
                type: "line",
                height: 50,
                sparkline: {
                    enabled: !0
                },
            },
            series: [{
                name: 'Campaign',
                data: [56.8, 84.6, 58.3, 72.5, 64.8, 82.7, 25.7, 28.7, 50.6, 25.4, 48.5, 68.5]
            }],
            stroke: {
                curve: "smooth",
                width: 4
            },
            colors: ["#313b50"],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            tooltip: {
                theme: "dark",
                labels: !0,
                fixed: {
                    enabled: !1
                },
                y: [{
                    formatter: function (e) {
                        return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                    }
                }]
            },
        };
        var campaignId = document.querySelector("#campaignNumbers");
        campaignNumbers && campaignNumbers.destroy();
        campaignNumbers = campaignId && new ApexCharts(campaignId, campaignOptions);
        campaignNumbers && campaignNumbers.render();

        var leadOptions = {
            chart: {
                type: "line",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                name: "Lead",
                data: [54, 19, 71, 42, 34, 49, 35, 23, 70, 29, 47, 68]
            }],
            stroke: {
                curve: "smooth",
                width: 4
            },
            colors: ["#313b50"],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            tooltip: {
                theme: "dark",
                fixed: {
                    enabled: !1
                },
                y: [{
                    formatter: function (e) {
                        return void 0 !== e ? + e.toFixed(2) + "%" : e
                    }
                }]
            },
        };
        var leadId = document.querySelector("#leadNumbers");
        leadNumbers && leadNumbers.destroy();
        leadNumbers = leadId && new ApexCharts(leadId, leadOptions);
        leadNumbers && leadNumbers.render();

        var revenueOptions = {
            chart: {
                type: "line",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                name: "Revenue",
                data: [53.62, 39.54, 71.52, 42.54, 34.85, 49.56, 35.68, 23.65, 10.50, 19.20, 47.85, 68.56]
            }],
            stroke: {
                curve: "smooth",
                width: 4
            },
            colors: ["#313b50"],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            tooltip: {
                theme: "dark",
                fixed: {
                    enabled: !1
                },
                y: [{
                    formatter: function (e) {
                        return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                    }
                }]
            },
        };
        var revenueId = document.querySelector("#revenueNumbers");
        revenueNumbers && revenueNumbers.destroy();
        revenueNumbers = revenueId && new ApexCharts(revenueId, revenueOptions);
        revenueNumbers && revenueNumbers.render();

        var expensesOptions = {
            chart: {
                type: "line",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                name: "Expenses",
                data: [85.0, 12.20, 18.62, 39.54, 18.85, 49.56, 71.52, 12.54, 35.68, 53.65, 47.85, 68.56]
            }],
            stroke: {
                curve: "smooth",
                width: 4
            },
            colors: ["#313b50"],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            tooltip: {
                theme: "dark",
                fixed: {
                    enabled: !1
                },
                y: [{
                    formatter: function (e) {
                        return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                    }
                }]
            },
        };
        var expensesId = document.querySelector("#expensesNumbers");
        expensesNumbers && expensesNumbers.destroy();
        expensesNumbers = expensesId && new ApexCharts(expensesId, expensesOptions);
        expensesNumbers && expensesNumbers.render();
        var ordersOption = {
            chart: {
                type: "line",
                height: 50,
                sparkline: {
                    enabled: !0
                },
            },
            series: [{
                name: 'Users',
                data: [15.62, 20.54, 50.52, 70.54, 40.85, 20.56, 30.68, 40.65, 15.50, 78.20, 60.85, 68.56]
            }],
            stroke: {
                curve: "smooth",
                width: 4
            },
            colors: ["#313b50"],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            tooltip: {
                theme: "dark",
                fixed: {
                    enabled: !1
                },
                y: [{
                    formatter: function (e) {
                        return void 0 !== e ? + e.toFixed(2) + "k" : e
                    }
                }]
            },
        };
        var ordersId = document.querySelector("#ordersNumbers");
        ordersNumbers && ordersNumbers.destroy();
        ordersNumbers = ordersId && new ApexCharts(ordersId, ordersOption);
        ordersNumbers && ordersNumbers.render();
    }
    jQuery(window).on('load', function () {
        chart();
    });

    /* Refresh chart button */
    $(".refresh").on("click", function (e) {
        chart();
    });

    var overviewOptions = {
        series: [{
            name: 'Orders',
            type: 'bar',
            data: [23, 12, 23, 22, 15, 42, 31, 27, 45, 28, 37, 45]
        }, {
            name: 'Revenue',
            type: 'line',
            data: [44.64, 55.48, 45.15, 67.62, 52.57, 44.38, 41.85, 41.44, 56.56, 27.84, 43.78, 52.57]
        }, {
            name: 'Expense',
            type: 'line',
            data: [30.55, 24.67, 36.85, 37.08, 42.85, 38.85, 46.64, 45.42, 49.89, 36.56, 38.49, 55.57]
        }],
        chart: {
            height: 365,
            type: 'line',
            stacked: false,
            foreColor: '#373d3f',
            sparkline: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        stroke: {
            width: [0, 4, 4],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: 30,
                borderRadius: 10,
            }
        },
        colors: ['#fadfa2', '#89a6ff', '#54d3c2'],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisTicks: {
                show: !1
            },
            axisBorder: {
                show: !1
            }
        },
        legend: {
            show: !0,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: 2,
            markers: {
                width: 12,
                height: 12,
                radius: 4
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            }
        },
        grid: {
            show: !1,
            xaxis: {
                lines: {
                    show: !1
                }
            },
            yaxis: {
                lines: {
                    show: !1
                }
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10
            },
        },
        tooltip: {
            theme: "dark",
            shared: !0,
            y: [{
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) + "k" : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }]
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 300,
                },
                yaxis: {
                    show: false,
                },
                plotOptions: {
                    bar: {
                        columnWidth: 40,
                        borderRadius: 5,
                    }
                },
            },
        }]
    };
    var overviewId = document.querySelector("#overviewChart");
    var overviewChart = overviewId && new ApexCharts(overviewId, overviewOptions);
    overviewChart && overviewChart.render();

    var campaignsOptions = {
        series: [
            {
                name: "Reached",
                data: [80, 50, 30, 40, 100, 20]
            },
            {
                name: "Expense",
                data: [20, 30, 40, 80, 20, 80]
            },
            {
                name: "Deals",
                data: [44, 76, 78, 13, 43, 10]
            }
        ],

        chart: {
            height: 250,
            type: "radar",
            toolbar: {
                show: true,
                tools: {
                    download: false
                }
            }
        },
        title: {
            show: false,
        },
        legend: {
            show: false,
        },
        colors: ['#fadfa2', '#89a6ff', '#54d3c2'],
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },

        tooltip: {
            shared: true,
            intersect: false
        }
    };
    var campaignsId = document.querySelector("#campaignsChart");
    var campaignsChart = campaignsId && new ApexCharts(campaignsId, campaignsOptions);
    campaignsChart && campaignsChart.render();

    var profitOptions = {
        series: [
            {
                name: "Earnings",
                type: 'bar',
                data: [8, 6, 4, 7, 5, 3, 5],
            },
            {
                name: "Expense",
                type: 'bar',
                data: [-1, -5, -2, -4, -3, -6, -2],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 250,
            stacked: true,
        },
        colors: ["#fbda8d", "#33cdb8"],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: "50%",
                columnWidth: "25%",
                borderRadius: [5],
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "all",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: !0,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: 6,
            markers: {
                width: 12,
                height: 12,
                radius: 4
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            }
        },
        grid: {
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yaxis: {
            tickAmount: 5,
        },
        tooltip: {
            theme: "dark",
            y: [{
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }]
        },
        responsive: [{
            breakpoint: 1400,
            options: {
                chart: {
                    height: '390px',
                }
            },
        },
        {
            breakpoint: 480,
            options: {
                chart: {
                    height: 300,
                },
                yaxis: {
                    show: false,
                },
            },
        }
    ],
    };
    var profitId = document.querySelector("#profitChart");
    var profitChart = profitId && new ApexCharts(profitId, profitOptions);
    profitChart && profitChart.render();

    var sessionsOptions = {
        series: [96, 84, 72],
        chart: {
            height: '310px',
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    margin: 0,
                    padding: 0,
                    size: '60%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: true,
                    },
                    value: {
                        show: true,
                    }
                }
            }
        },
        colors: ['#fadfa2', '#89a6ff', '#54d3c2'],
        labels: ['Firewalls', 'Ports', 'Services'],
        stroke: {
            lineCap: "round",
        },
        tooltip: {
            theme: "dark",
        },        
    };
    var sessionsId = document.querySelector("#sessionsChart");
    var sessionsChart = sessionsId && new ApexCharts(sessionsId, sessionsOptions);
    sessionsChart && sessionsChart.render();

    /*  eCommerce page  */
    var earningOptions = {
        series: [
            {
                name: "Earnings",
                type: 'bar',
                data: [8.6, 6.4, 4.8, 7.4, 7.05, 3.7, 8.01],
            }, {
                name: "Expenses",
                type: 'bar',
                data: [-8.6, -9.4, -2.8, -5.4, -8.05, -2.7, -5.01],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 350,
            stacked: true,
        },
        colors: ["#fbda8d", "#33cdb8"],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: "50%",
                columnWidth: "25%",
                borderRadius: [5],
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "all",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: !0,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: 8,
        },
        grid: {
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yaxis: {
            tickAmount: 5,
        },
        tooltip: {
            theme: "dark",
            y: [{
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }]
        },
    };
    var earningId = document.querySelector("#earningChart");
    var earningChart = earningId && new ApexCharts(earningId, earningOptions);
    earningChart && earningChart.render();

    var ecomoverviewOptions = {
        series: [{
            name: 'Orders',
            type: 'bar',
            data: [23, 12, 23, 22, 15, 42, 31, 27, 45, 28, 37]
        }, {
            name: 'Profit',
            type: 'bar',
            data: [44.64, 55.48, 45.15, 67.62, 52.57, 44.38, 41.85, 41.44, 56.56, 27.84, 43.78]
        }, {
            name: 'Expense',
            type: 'bar',
            data: [30.55, 24.67, 36.85, 37.08, 42.85, 38.85, 46.64, 45.42, 49.89, 36.56, 38.49]
        }],
        chart: {
            height: 365,
            type: 'line',
            stacked: false,
            foreColor: '#373d3f',
            sparkline: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        stroke: {
            show: true,
            width: [4, 4, 4],
            curve: 'smooth',
            colors: ['transparent']
        },
        plotOptions: {
            bar: {

                columnWidth: 70,
                endingShape: 'rounded',
                borderRadius: 5,
            }
        },
        colors: ["#fbda8d", "#33cdb8", "#89a6ff"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisTicks: {
                show: !1
            },
            axisBorder: {
                show: !1
            }
        },
        legend: {
            show: !0,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: 5,
            markers: {
                width: 12,
                height: 12,
                radius: 4
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            }
        },
        grid: {
            show: !1,
            xaxis: {
                lines: {
                    show: !1
                }
            },
            yaxis: {
                lines: {
                    show: !1
                }
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10
            },
        },
        tooltip: {
            theme: "dark",
            shared: !0,
            y: [{
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) + "k" : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }]
        },
        responsive: [{
            breakpoint: 768,
            options: {
                 yaxis: {
                    show: false,
                },
                plotOptions: {
                    bar: {
                        columnWidth: 100,
                        borderRadius: 5,
                    }
                },
            },
        },
        {
            breakpoint: 480,
            options: {
                chart: {
                    height: 300,
                },
                yaxis: {
                    show: false,
                },
                plotOptions: {
                    bar: {
                        borderRadius: 2,
                    }
                },
            },
        }]
    };
    var ecomoverviewId = document.querySelector("#ecomoverviewChart");
    var ecomoverviewChart = ecomoverviewId && new ApexCharts(ecomoverviewId, ecomoverviewOptions);
    ecomoverviewChart && ecomoverviewChart.render();

    var ecomCampaignsOptions = {
        series: [45, 35, 20],
        labels: ['Facebook', 'Youtube', 'Local'],
        chart: {
            height: 250,
            type: "donut",
            toolbar: {
                show: true,
                tools: {
                    download: false
                }
            }
        },
        colors: ['#fadfa2', '#89a6ff', '#54d3c2'],
        title: {
            show: false,
        },
        legend: {
            show: false,
        },
        tooltips: {
            enabled: false,
        },
        dataLabels: {
            enabled: false,
        },

    };
    var ecomCampaignsId = document.querySelector("#ecomCampaignsChart");
    var ecomCampaignsChart = ecomCampaignsId && new ApexCharts(ecomCampaignsId, ecomCampaignsOptions);
    ecomCampaignsChart && ecomCampaignsChart.render();

    /*  Apexchart page  */
    var simpleLineOptions = {
        series: [{
            name: 'Revenue',
            type: 'line',
            data: [44, 55, 45, 67, 52, 44, 41, 41, 56, 27, 43]
        }],
        chart: {
            height: 300,
            type: 'line',
            stacked: false,
            foreColor: '#373d3f',
            sparkline: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        stroke: {
            width: [4],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {

                columnWidth: 30,
                borderRadius: 10,
            }
        },
        colors: ["#33cdb8"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisTicks: {
                show: !1
            },
            axisBorder: {
                show: !1
            }
        },
        legend: {
            show: !0,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: 5,
            markers: {
                width: 12,
                height: 12,
                radius: 4
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            }
        },
        grid: {
            show: !1,
            xaxis: {
                lines: {
                    show: !1
                }
            },
            yaxis: {
                lines: {
                    show: !1
                }
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10
            },
        },
        tooltip: {
            theme: "dark",
            shared: !0,
            y: [{
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }]
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 300,
                },
                yaxis: {
                    show: false,
                },
                plotOptions: {
                    bar: {
                        columnWidth: 40,
                        borderRadius: 5,
                    }
                },
            },
        }]
    };
    var simpleLineId = document.querySelector("#simpleLineChart");
    var simpleLineChart = simpleLineId && new ApexCharts(simpleLineId, simpleLineOptions);
    simpleLineChart && simpleLineChart.render();

    var simpleBarOptions = {
        series: [{
            name: 'Revenue',
            type: 'bar',
            data: [44, 55, 45, 67, 52, 44, 41, 41, 56, 27, 43]
        }],
        chart: {
            height: 300,
            type: 'line',
            stacked: false,
            foreColor: '#373d3f',
            sparkline: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        stroke: {
            width: [0],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: 50,
                borderRadius: 8,
            }
        },
        colors: ["#6281de"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisTicks: {
                show: !1
            },
            axisBorder: {
                show: !1
            }
        },
        legend: {
            show: !0,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: 5,
            markers: {
                width: 12,
                height: 12,
                radius: 4
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            }
        },
        grid: {
            show: !1,
            xaxis: {
                lines: {
                    show: !1
                }
            },
            yaxis: {
                lines: {
                    show: !1
                }
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10
            },
        },
        tooltip: {
            theme: "dark",
            shared: !0,
            y: [{
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(2) + "k" : e
                }
            }]
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 300,
                },
                yaxis: {
                    show: false,
                },
                plotOptions: {
                    bar: {
                        columnWidth: 40,
                        borderRadius: 5,
                    }
                },
            },
        }]
    };
    var simpleBarId = document.querySelector("#simpleBarChart");
    var simpleBarChart = simpleBarId && new ApexCharts(simpleBarId, simpleBarOptions);
    simpleBarChart && simpleBarChart.render();

    var radialBarOptions = {
        series: [96, 84, 72, 60],
        chart: {
            height: 280,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    margin: 0,
                    padding: 0,
                    size: '60%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: true,
                    },
                    value: {
                        show: true,
                    }
                }
            }
        },
        colors: ["#fbda8d", "#33cdb8", "#fb739b", "#9196ff"],
        labels: ['Firewalls', 'Ports', 'Services', 'Requests'],
        stroke: {
            lineCap: "round",
        },
        tooltip: {
            theme: "dark",
        },
        responsive: [{
            breakpoint: 1366,
            options: {
                chart: {
                    height: 250,
                },
            },
        }]
    };
    var radialBarId = document.querySelector("#radialBarChart");
    var radialBarChart = radialBarId && new ApexCharts(radialBarId, radialBarOptions);
    radialBarChart && radialBarChart.render();

})(jQuery);