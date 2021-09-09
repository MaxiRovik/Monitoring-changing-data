export const parseDateAndTime=(data) => {
    if (data){
        const dateAndTime = data.split('T');
        const date = dateAndTime[0].split("-").reverse().join("-");
        const time = dateAndTime[1].split('.')[0];
        return [date, time]
    } else return ['no date', 'no time']

}