export function getPaymentExecDate(){
    let today = new Date();
    let dd = today.getDate() + 1;
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();

    if (today.getDay() === 5) {
        dd = dd + 2;
    }

    if (today.getDay() === 6) {
        dd = dd + 1;
    }

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    let execDate = yy + '-' + mm + '-' + dd;
    return execDate;
}