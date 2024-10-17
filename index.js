// Summary Section
function createSummaryCard({ title, value, percentage, isPositive }) {
    const card = document.createElement('div');
    card.classList.add("summary-card");

    card.innerHTML = `
        <div class="summary-card-header">
            <h1>${title}</h1>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8.66666V9.99999" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.33333 5.99999C8.33333 6.18409 8.1841 6.33332 8 6.33332C7.81591 6.33332 7.66667 6.18409 7.66667 5.99999C7.66667 5.81589 7.81591 5.66666 8 5.66666C8.1841 5.66666 8.33333 5.81589 8.33333 5.99999Z" stroke="#64748B"/>
                <path d="M12.8333 7.99999C12.8333 10.6694 10.6694 12.8333 8 12.8333C5.33062 12.8333 3.16667 10.6694 3.16667 7.99999C3.16667 5.33061 5.33062 3.16666 8 3.16666C10.6694 3.16666 12.8333 5.33061 12.8333 7.99999Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="summary-card-body">
            <p>${value}</p>
            <span class="summary-result">
                <svg style="${isPositive ? "transform: rotate(0deg)" : "transform: rotate(180deg)"}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 10.1667V4.5H5.83333M11.3333 4.66667L4.5 11.5"  
                          stroke="currentColor"
                          stroke-width="1.5" 
                          stroke-linecap="round" 
                          stroke-linejoin="round"
                          class="${isPositive ? 'stroke-success' : 'stroke-danger'}"/>
                </svg>
                <span class="${isPositive ? 'text-success' : 'text-danger'}">${percentage}%</span>
            </span>
        </div>
    `;

    return card;
}

function initSummarySection() {
    const parent = document.querySelector("#summary-container")
    const summaryDetails = [
        {
            title: 'Total Events',
            value: '100,000',
            percentage: '+5.0',
            isPositive: true,
        },
        {
            title: 'Active Speakers',
            value: '25',
            percentage: '+5.0',
            isPositive: false,
        },{
            title: 'Total Registrations',
            value: '300',
            percentage: '+5.0',
            isPositive: true,
        },{
            title: 'Total Revenue',
            value: '$500,000',
            percentage: '+5.0',
            isPositive: true,
        },
    ]

    for (const details of summaryDetails) {
        parent.appendChild(createSummaryCard(details))
    }
}

// Chart Section
function initChart() {
    const ctx = document.getElementById('chart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ja', 'Fb', 'Mr', 'Ap', 'Ma', 'Jn', 'Jl', 'Au', 'Se', 'Oc', 'No', 'De'],
            datasets: [{
                data: [666.65, 935.12, 774.32, 434.8, 1000, 571.78, 863.67, 363.35, 851.72, 667.08, 958.96, 607.51],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1000,
                    border: {
                        display: false,
                        dash: [7, 15],
                        width: 2,
                    },
                    grid: {
                        display: true,
                        drawTicks: false,
                        color: "#E2E8F0",
                        offset: true,
                    },
                    type: 'linear',
                    ticks: {
                        stepSize: 200,
                        color: '#64748B',
                        font: {
                            size: 10,
                            weight: '400',
                            family: 'Inter',
                        },
                        padding: 16,
                    },
                },
                x: {
                    grid: {
                        display: true,
                        drawTicks: false,
                        color: (context) => {
                            // Hide every odd grid line, only show even ones
                            return context.index % 2 === 0 ? '#E2E8F0' : 'transparent';
                        },
                        offset: true
                    },
                    border: {
                        display: false,
                        dash: [7, 15],
                        width: 2,
                    },
                    ticks: {
                        color: '#64748B',
                        font: {
                            size: 10,
                            weight: '400',
                            family: 'Inter',
                        },
                        padding: 16,
                    }
                },
            },
            responsive: true,
            aspectRatio: 1.27,
            plugins: {
                legend: {
                    display: false,
                }
            },
            elements: {
                bar: {
                    backgroundColor: "#8576FF",
                    borderWidth: 16.39,
                    borderRadius: 1,
                }
            }
        }
    });
}

// Slider Section
function createSlider({title, content, imgSrc}) {
    const slide = document.createElement('div');
    slide.classList.add("slide-item");

    slide.innerHTML = `
        <img src="${imgSrc}" alt="${title}">
        <div>
            <h3>${title}</h3>
            <p>${content}</p>
        </div>
    `
    return slide
}

function initSlider() {
    const slideContents = [
        {
            "title": "Latest News & Updates",
            "content": `Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.
                            Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non.
                            Pellentesque in ut tellus.`,
            "imgSrc": "media/slide1.png"
        },
        {
            "title": "Latest News & Updates",
            "content": `Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.
                            Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non.
                            Pellentesque in ut tellus.`,
            "imgSrc": "media/slide2.png"
        },
        {
            "title": "Latest News & Updates",
            "content": `Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae.
                            Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non.
                            Pellentesque in ut tellus.`,
            "imgSrc": "media/slide3.png"
        }
    ]
    const slideBody = document.querySelector(".slide-body")
    const slideIndicator = document.querySelector('.slide-indicators')

    for (let content of slideContents) {
        slideBody.appendChild(createSlider(content))
        slideIndicator.appendChild(document.createElement("span"))
    }
    slideBody.setAttribute("data-count", slideContents.length.toString())
    changeSlide(0)

    // Add listeners
    slideBody.addEventListener("mouseenter", restartSlideShow)
    slideBody.addEventListener("mouseleave", restartSlideShow)
    document.querySelector('.slide-controls .left').addEventListener('click', prevSlide)
    document.querySelector('.slide-controls .right').addEventListener('click', nextSlide)
}

function changeSlide(position) {
    const slideBody = document.querySelector(".slide-body")
    const slides = slideBody.querySelectorAll('.slide-item')
    const activeSlide = slideBody.querySelector('.slide-item.active')

    const slideIndicators = document.querySelectorAll('.slide-indicators span')
    const activeIndicator = document.querySelector('.slide-indicators span.active')

    activeSlide?.classList.remove('active')
    activeIndicator?.classList.remove('active')

    slides.item(position).classList.add('active')
    slideIndicators.item(position).classList.add('active')

    slideBody.setAttribute("data-active", position)
    restartSlideShow()
}

let interval;

function nextSlide() {
    const slideBody = document.querySelector(".slide-body")
    const activeIndex = +slideBody.dataset.active
    const count = +slideBody.dataset.count
    changeSlide((activeIndex+1) % count)
}

function prevSlide() {
    const slideBody = document.querySelector(".slide-body")
    const activeIndex = +slideBody.dataset.active
    const count = +slideBody.dataset.count
    const position = activeIndex === 0 ? count -1 : activeIndex-1
    changeSlide(position % count)
}

// Start the automatic slide show
function startSlideShow() {
    interval = setInterval(nextSlide, 4000); // Change slide every 3 seconds
}

// Restart the slide show (clears and resets interval)
function restartSlideShow() {
    clearInterval(interval);
    startSlideShow();
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize summary
    initSummarySection()

    //Initialize chart
    initChart()

    // Initialize slider
    initSlider()
})