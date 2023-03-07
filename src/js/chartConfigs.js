import { CHART_COLORS } from './constants'

let arrow = document.createElement ('img');
arrow.src ='/src/images/arrow.png';

const chartConfigs = () => {
    // const tempChart = {
    //     type: 'line',
    //     color: '#fff',
    //     data: {
    //         labels: res.dailyTime,
    //         datasets: [
    //           {
    //           label: 'Temperature',
    //           data: res.dailyTemp,
    //           fill: 'start',
    //           backgroundColor: CHART_COLORS.blue,
    //           borderColor: CHART_COLORS.red,
    //           color: '#fff',
    //           tension: 0.1
    //         },
    //         {
    //           label: 'Moisture',
    //           data: res.dailyMoi,
    //           fill: 'start',
    //           backgroundColor: CHART_COLORS.purple,
    //           borderColor: CHART_COLORS.green,
    //           color: '#fff',
    //           tension: 0.1,
    //           hidden: true
    //         },
    //         {
    //           label: 'Wind',
    //           data: res.dailyWind,
    //           fill: 'start',
    //           backgroundColor: CHART_COLORS.yellow,
    //           borderColor: CHART_COLORS.orange,
    //           color: '#fff',
    //           tension: 0.1,
    //           hidden: true,
    //           pointHitRadius: 10,
    //           rotation: res.dailyWindDir,
    //           pointStyle: [arrow],
    //         },
    //         {
    //           label: 'Pressure',
    //           data: res.dailyPressure,
    //           fill: 'start',
    //           backgroundColor: CHART_COLORS.green,
    //           borderColor: CHART_COLORS.orange,
    //           color: '#fff',
    //           tension: 0.1,
    //           hidden: true
    //         },
    //       ]
    //     },
    //     options: {
    //       // responsive: false,
    //         maintainAspectRatio: false,
    //             scales: {
    //             y: {
    //             beginAtZero: true,
    //             grid: {
    //                 display: false,
    //             }
    //             },
    //             x: {
    //             grid: {
    //                 display: false,
    //             }
    //             }
    //        },
    //         plugins: {
    //         subtitle: {
    //             display: true,
    //             text: day,
    //             font: {
    //                 size: 24
    //             },
    //         },
    //         legend: {
    //             labels: {
    //                 // This more specific font property overrides the global property
    //                 font: {
    //                     size: 24
    //                 }
    //             },
    //         }
    //         },
    //     }
    // }
    const moiChartConfig = {
        type: 'line',
        color: '#fff',
        data: {
            // labels: res.dailyTime,
            datasets: [
                {
                    label: 'Moisture',
                    fill: 'start',
                    backgroundColor: CHART_COLORS.purple,
                    borderColor: CHART_COLORS.green,
                    color: '#fff',
                    tension: 0.1,
                    // hidden: true
                    pointHitRadius: 5,
                },
            ]
        },
        options: {
          // responsive: false,
            maintainAspectRatio: false,
                scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
           },
            plugins: {
            subtitle: {
                display: true,
                // text: day,
                font: {
                    size: 24
                },
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 24
                    }
                },
            }
            },
        }
    }
    const windChartConfig = {
        type: 'line',
        color: '#fff',
        data: {
            // labels: res.dailyTime,
            datasets: [
                {
                    label: 'Wind',
                    // data: res.dailyWind,
                    fill: 'start',
                    backgroundColor: CHART_COLORS.yellow,
                    borderColor: CHART_COLORS.orange,
                    color: '#fff',
                    tension: 0.1,
                    // hidden: true,
                    pointHitRadius: 10,
                    // rotation: res.dailyWindDir,
                    pointStyle: [arrow],
                },
          ]
        },
        options: {
          // responsive: false,
            maintainAspectRatio: false,
                scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
           },
            plugins: {
            subtitle: {
                display: true,
                // text: day,
                font: {
                    size: 24
                },
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 24
                    }
                },
            }
            },
        }
    }
    const pressureChartConfig = {
        type: 'line',
        color: '#fff',
        data: {
                // labels: res.dailyTime,
            datasets: [
                {
                    label: 'Pressure',
                    // data: res.dailyPressure,
                    fill: 'start',
                    backgroundColor: CHART_COLORS.green,
                    borderColor: CHART_COLORS.orange,
                    color: '#fff',
                    tension: 0.1,
                    // hidden: true
                    pointHitRadius: 5,
                },
           ]
        },
        options: {
          // responsive: false,
            maintainAspectRatio: false,
                scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
           },
            plugins: {
            subtitle: {
                display: true,
                // text: day,
                font: {
                    size: 24
                },
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 24
                    }
                },
            }
            },
        }
    }

    return {moiChartConfig, windChartConfig, pressureChartConfig}
}

export default chartConfigs;