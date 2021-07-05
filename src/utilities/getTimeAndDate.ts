function getTimeAndDate(){
    const dateTime: string = (new Date().toLocaleDateString()).replace(/\/+/g,'-')+'_'+new Date().toTimeString().slice(0,8).replace(/\s+/g,'_');
    return dateTime;
}

export default getTimeAndDate;