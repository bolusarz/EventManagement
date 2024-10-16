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



document.addEventListener('DOMContentLoaded', () => {
    // Initialize summary
    initSummarySection()
})