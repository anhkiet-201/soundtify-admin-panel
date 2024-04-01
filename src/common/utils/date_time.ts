export const millisecondsToHms = (milliseconds: number): string => {
    // Convert milliseconds to seconds
    const seconds = Math.floor(milliseconds / 1000);

    // Call the helper function to convert seconds to HMS
    return secondsToHms(seconds);
}

export const secondsToHms = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = secondsRemaining.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}