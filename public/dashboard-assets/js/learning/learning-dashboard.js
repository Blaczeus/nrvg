"use strict";

document.addEventListener("DOMContentLoaded", function () {
    window.randomScalingFactor = function () {
        return Math.round(20 * Math.random());
    };

    // --- Area Chart (Blue)
    const areaChartCanvas = document.getElementById("areachartblue1");
    if (areaChartCanvas) {
        const ctx = areaChartCanvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 90);
        gradient.addColorStop(0, "rgba(0, 73, 232, 1)");
        gradient.addColorStop(0.5, "rgba(0, 168, 133, 0.5)");
        gradient.addColorStop(1, "rgba(255, 193, 7, 0)");

        const areaConfig = {
            type: "line",
            data: {
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: Array(16).fill().map(randomScalingFactor),
                        radius: 0,
                        backgroundColor: gradient,
                        borderColor: "#015EC2",
                        borderWidth: 0,
                        fill: true,
                        tension: 0.5,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { display: false }, x: { display: false } },
            },
        };

        const areaChart = new Chart(ctx, areaConfig);
        setInterval(() => {
            areaConfig.data.datasets.forEach((ds) => {
                ds.data = ds.data.map(randomScalingFactor);
            });
            areaChart.update();
        }, 3000);
    }

    // --- Summary Chart
    const summaryChartCanvas = document.getElementById("summarychart");
    if (summaryChartCanvas) {
        const ctx = summaryChartCanvas.getContext("2d");
        const grad1 = ctx.createLinearGradient(0, 0, 0, 280);
        grad1.addColorStop(0, "rgba(0, 73, 232, 1)");
        grad1.addColorStop(0.5, "rgba(0, 168, 133, 0.5)");
        grad1.addColorStop(1, "rgba(255, 193, 7, 0)");

        const grad2 = ctx.createLinearGradient(0, 0, 0, 280);
        grad2.addColorStop(0, "rgba(3, 4, 94, 0.85)");
        grad2.addColorStop(1, "rgba(0, 73, 232, 0)");

        const barConfig = {
            type: "bar",
            data: {
                labels: [
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "01:00",
                    "01:30",
                ],
                datasets: [
                    {
                        data: Array(8).fill().map(randomScalingFactor),
                        backgroundColor: grad1,
                        borderWidth: 0,
                        fill: true,
                    },
                    {
                        data: Array(8).fill().map(randomScalingFactor),
                        backgroundColor: grad2,
                        borderWidth: 0,
                        fill: true,
                    },
                ],
            },
            options: {
                animation: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: true },
                    x: { grid: { display: true } },
                },
            },
        };

        const summaryChart = new Chart(ctx, barConfig);
        setInterval(() => {
            barConfig.data.datasets.forEach((ds) => {
                ds.data = ds.data.map(randomScalingFactor);
            });
            summaryChart.update();
        }, 3000);
    }

    // --- Doughnut Chart
    const doughnutCanvas = document.getElementById("doughnutchart");
    if (doughnutCanvas) {
        const ctx = doughnutCanvas.getContext("2d");
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["IT", "Bio", "Designing", "Other"],
                datasets: [
                    {
                        data: [45, 30, 25, 10],
                        backgroundColor: [
                            "#6faa00",
                            "#ffc107",
                            "#0049e8",
                            "#becede",
                        ],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                cutout: 60,
                plugins: { legend: { display: false } },
            },
        });
    }

    // --- Progress Circles
    if (window.ProgressBar) {
        const circleConfigs = [
            {
                id: "circleprogressblue1",
                color: "#015EC2",
                trailColor: "rgba(66, 157, 255, 0.15)",
                value: 0.65,
            },
            {
                id: "circleprogressgreen1",
                color: "#91C300",
                trailColor: "#eaf4d8",
                value: 0.85,
            },
        ];

        circleConfigs.forEach((cfg) => {
            const el = document.getElementById(cfg.id);
            if (!el) return;
            const circle = new ProgressBar.Circle(el, {
                color: cfg.color,
                strokeWidth: 10,
                trailWidth: 10,
                easing: "easeInOut",
                trailColor: cfg.trailColor,
                duration: 1400,
                text: { autoStyleContainer: false },
                from: { color: cfg.color, width: 10 },
                to: { color: cfg.color, width: 10 },
                step: (state, circle) => {
                    circle.path.setAttribute("stroke", state.color);
                    const value = Math.round(circle.value() * 100);
                    circle.setText(
                        value === 0 ? "" : `${value}<small>%</small>`
                    );
                },
            });
            circle.animate(cfg.value);
        });
    }
});
