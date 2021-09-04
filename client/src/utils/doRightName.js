export const doRightName =(abbr) => {
    switch (abbr) {
        case 'AAPL':
            return 'Apple';
        case 'GOOGL':
            return 'Google';
        case 'MSFT':
            return 'Microsoft';
        case 'FB':
            return 'Facebook';
        case 'TSLA':
            return 'Tesla';
        case 'AMZN':
            return 'Amazon';
        default:
            alert( "Can't find translate the abbreviation" + abbr);
    }
};