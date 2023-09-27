const yearGrid = document.getElementById("year-grid");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const daysInYear = 365; // Adjust for leap years if necessary

function createDayElement(dayNumber) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = dayNumber;
    dayElement.dataset.active = "false"; // Initialize as inactive

    dayElement.addEventListener("click", () => {
        toggleDay(dayElement);
    });

    return dayElement;
}

function toggleDay(dayElement) {
    const isActive = dayElement.dataset.active === "true";
    dayElement.dataset.active = isActive ? "false" : "true";
    dayElement.classList.toggle("active", !isActive);
}

function createYearGrid() {
    for (let i = 1; i <= daysInYear; i++) {
        const dayElement = createDayElement(i);
        yearGrid.appendChild(dayElement);
    }
}

createYearGrid();
