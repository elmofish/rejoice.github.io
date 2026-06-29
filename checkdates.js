(function () {
    // Tour calendar data for each month.
    const months = [
        {
            name: 'June 2026',
            subtitle: 'Summer tour schedule',
            cells: [
                { empty: true }, { empty: true }, { empty: true }, { empty: true }, { empty: true },
                { day: 1, label: 'London', active: true },
                { day: 2, label: 'Paris' },
                { day: 3, label: 'Berlin' },
                { day: 4, label: 'Amsterdam' },
                { day: 5, label: 'Barcelona', active: true },
                { day: 6, label: 'Lisbon' },
                { day: 7, label: 'Madrid', active: true },
                { day: 8, label: 'Rome' },
                { day: 9, label: 'Prague' },
                { day: 10, label: 'Vienna' },
                { day: 11, label: 'Budapest', active: true },
                { day: 12, label: 'New York', active: true },
                { day: 13, label: 'Chicago' },
                { day: 14, label: 'Toronto', active: true },
                { day: 15, label: 'Boston' },
                { day: 16, label: 'Philly' },
                { day: 17, label: 'Atlanta', active: true },
                { day: 18, label: 'Miami' },
                { day: 19, label: 'Austin' },
                { day: 20, label: 'Dallas', active: true },
                { day: 21, label: 'Houston' },
                { day: 22, label: 'Nashville' },
                { day: 23, label: 'Seattle', active: true },
                { day: 24, label: 'San Fran' },
                { day: 25, label: 'Los Angeles', active: true },
                { day: 26, label: 'San Diego' },
                { day: 27, label: 'Portland' },
                { day: 28, label: 'Denver', active: true },
                { day: 29, label: 'Salt Lake' },
                { day: 30, label: 'Phoenix' }
            ],
            shows: [
                { title: 'June 12 — New York City', venue: 'The Glass Hall • 8:00 PM' },
                { title: 'June 14 — Toronto', venue: 'Neon Theater • 7:30 PM' },
                { title: 'June 25 — Los Angeles', venue: 'Sunset Arena • 9:00 PM' }
            ]
        },
        {
            name: 'July 2026',
            subtitle: 'Florida & Georgia tour',
            dayCount: 31,
            labels: [
                'Miami, FL', 'Atlanta, GA', 'Orlando, FL', 'Savannah, GA', 'Tampa, FL',
                'Augusta, GA', 'Jacksonville, FL', 'Macon, GA', 'St. Petersburg, FL',
                'Columbus, GA', 'Gainesville, FL'
            ],
            shows: [
                { title: 'July 4 — Atlanta', venue: 'Peachtree Hall • 8:00 PM' },
                { title: 'July 7 — Orlando', venue: 'Garden Stage • 8:30 PM' },
                { title: 'July 10 — Tampa', venue: 'Bayfront Arena • 9:00 PM' }
            ]
        },
        {
            name: 'August 2026',
            subtitle: 'Sunshine state run',
            dayCount: 31,
            labels: [
                'Orlando, FL', 'Miami, FL', 'Savannah, GA', 'Atlanta, GA', 'Tampa, FL',
                'Augusta, GA', 'Jacksonville, FL', 'Macon, GA', 'St. Petersburg, FL',
                'Columbus, GA', 'Pensacola, FL'
            ],
            shows: [
                { title: 'August 1 — Miami', venue: 'Oceanview Hall • 8:00 PM' },
                { title: 'August 4 — Atlanta', venue: 'Georgia Dome • 8:30 PM' },
                { title: 'August 7 — Jacksonville', venue: 'Riverfront Stage • 9:00 PM' }
            ]
        },
        {
            name: 'September 2026',
            subtitle: 'Georgia & Florida encore',
            dayCount: 30,
            labels: [
                'Tallahassee, FL', 'Atlanta, GA', 'Orlando, FL', 'Savannah, GA', 'Miami, FL',
                'Augusta, GA', 'Jacksonville, FL', 'Macon, GA', 'Tampa, FL', 'Columbus, GA'
            ],
            shows: [
                { title: 'September 1 — Tallahassee', venue: 'Capitol Park • 7:30 PM' },
                { title: 'September 4 — Atlanta', venue: 'Eastside Arena • 8:00 PM' },
                { title: 'September 7 — Tampa', venue: 'Harbor Stage • 9:00 PM' }
            ]
        },
        {
            name: 'October 2026',
            subtitle: 'Autumn tour through FL/GA',
            dayCount: 31,
            labels: [
                'Miami, FL', 'Atlanta, GA', 'Orlando, FL', 'Savannah, GA', 'Tampa, FL',
                'Augusta, GA', 'Jacksonville, FL', 'Macon, GA', 'St. Petersburg, FL',
                'Columbus, GA', 'Tallahassee, FL'
            ],
            shows: [
                { title: 'October 4 — Atlanta', venue: 'Skyline Arena • 8:00 PM' },
                { title: 'October 7 — Orlando', venue: 'Magic Theater • 8:30 PM' },
                { title: 'October 10 — Tampa', venue: 'Pier Stage • 9:00 PM' }
            ]
        },
        {
            name: 'November 2026',
            subtitle: 'Holiday season kickoff',
            dayCount: 30,
            labels: [
                'Jacksonville, FL', 'Atlanta, GA', 'Orlando, FL', 'Savannah, GA', 'Miami, FL',
                'Augusta, GA', 'Tampa, FL', 'Macon, GA', 'Columbus, GA', 'St. Petersburg, FL'
            ],
            shows: [
                { title: 'November 1 — Jacksonville', venue: 'Riverstage • 7:30 PM' },
                { title: 'November 4 — Atlanta', venue: 'Peachtree Pavilion • 8:00 PM' },
                { title: 'November 7 — Miami', venue: 'Coral Grove • 9:00 PM' }
            ]
        },
        {
            name: 'December 2026',
            subtitle: 'Year-end celebration',
            dayCount: 31,
            labels: [
                'Orlando, FL', 'Atlanta, GA', 'Miami, FL', 'Savannah, GA', 'Tampa, FL',
                'Augusta, GA', 'Jacksonville, FL', 'Macon, GA', 'Columbus, GA',
                'St. Petersburg, FL', 'Tallahassee, FL'
            ],
            shows: [
                { title: 'December 4 — Orlando', venue: 'Winter Hall • 8:00 PM' },
                { title: 'December 7 — Atlanta', venue: 'Midtown Arena • 8:30 PM' },
                { title: 'December 10 — Tampa', venue: 'Holiday Stage • 9:00 PM' }
            ]
        }
    ];

    const monthLabel = document.getElementById('month-label');
    const monthSubtitle = document.getElementById('month-subtitle');
    const calendarGrid = document.getElementById('calendar-grid');
    const showList = document.getElementById('show-list');
    const prevButton = document.getElementById('calendar-prev');
    const nextButton = document.getElementById('calendar-next');
    let currentIndex = 0;

    /**
     * Build calendar cells for a month.
     * Uses explicit cells for June and auto-generates cells for later months.
     */
    function buildCells(config) {
        if (config.cells) {
            return config.cells;
        }

        const cells = [];
        for (let i = 0; i < 35; i += 1) {
            if (i < 5) {
                cells.push({ empty: true });
                continue;
            }

            const day = i - 4;
            if (day > config.dayCount) {
                cells.push({ empty: true });
                continue;
            }

            const labelIndex = Math.floor((day - 1) / 3);
            const label = day % 3 === 1 ? config.labels[labelIndex % config.labels.length] : '';
            cells.push({ day, label, active: Boolean(label) });
        }

        return cells;
    }

    /**
     * Render the active month and show list into the page.
     */
    function renderMonth(index) {
        const month = months[index];

        monthLabel.textContent = month.name;
        monthSubtitle.textContent = month.subtitle;

        const cells = buildCells(month);
        calendarGrid.innerHTML = cells
            .map((cell) => {
                if (cell.empty) {
                    return '<div class="calendar-day empty"></div>';
                }

                const classes = ['calendar-day'];
                if (cell.active) {
                    classes.push('active');
                }

                return `<div class="${classes.join(' ')}">${cell.day}${cell.label ? `<small>${cell.label}</small>` : ''}</div>`;
            })
            .join('');

        showList.innerHTML = month.shows
            .map(
                (show) => `
            <div class="show-item">
                <div class="show-meta">
                    <strong>${show.title}</strong>
                    <span>${show.venue}</span>
                </div>
                <button class="ticket-btn">Tickets</button>
            </div>
        `
            )
            .join('');
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex + months.length - 1) % months.length;
        renderMonth(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % months.length;
        renderMonth(currentIndex);
    });

    renderMonth(currentIndex);
})();
