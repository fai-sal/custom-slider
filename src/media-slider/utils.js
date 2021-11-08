
export const colors = [
    { name: 'white', color: '#fff' },
    { name: 'Dark gray"', color: 'rgb(40, 48, 61)' },
    { name: 'Red', color: 'rgb(228, 209, 209)' },
    { name: 'Green', color: '#d1e4dd' },
    { name: 'Blue"', color: '#d1dfe4' },
    { name: 'Purple', color: '#d1d1e4' }
];
export const getVideoLength = (fileLength) => {
    const [min, second] = fileLength.split(':');
    return (parseInt(min) * 60 + parseInt(second)) * 1000
}