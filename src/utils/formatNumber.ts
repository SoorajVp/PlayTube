
export const formatNumber = (num: number): string => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'; // For millions
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K'; // For thousands
    }
    return num.toString(); // Return the number itself if less than 1000
}