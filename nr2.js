function holger(){
  alert('tainnana erfolgreich');
}
function makeDate() {
              var dt = new Date();
              var Monate = [
                  'JAN',
                  'FEB',
                  'MAR',
                  'APR',
                  'MAY',
                  'JUN',
                  'JUL',
                  'AUG',
                  'SEP',
                  'OCT',
                  'NOV',
                  'DEC'
              ];
              if (dt.getDate() < 10) {
                  day = '0' + dt.getDate();
              } else {
                  day = '' + dt.getDate();
              }
              alert( day + '' + Monate[dt.getMonth()] + '' + String(dt.getYear()).substr(1, 2));
          }
