let startTime = Date.now();
let accelerationFactor = 1;

function updateDateTime() {
    const currentTime = Date.now();
    const elapsedTimeInMilliseconds = (currentTime - startTime) * accelerationFactor;
    const adjustedTime = new Date(startTime + elapsedTimeInMilliseconds);

    const day = adjustedTime.getDate();
    const month = adjustedTime.getMonth() + 1; // Months are zero-indexed
    const year = adjustedTime.getFullYear();

    const hours = adjustedTime.getHours();
    const minutes = adjustedTime.getMinutes();
    const seconds = adjustedTime.getSeconds();

    const formattedDate = `${formatNumber(day)}/${formatNumber(month)}/${year}`;
    const formattedTime = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;

    document.getElementById("date").textContent = formattedDate;
    document.getElementById("time").textContent = formattedTime;

    // Increase acceleration over time
    accelerationFactor += 0.01;
}

function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

updateDateTime();
setInterval(updateDateTime, 100);
