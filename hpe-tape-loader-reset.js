const passwordCreate = () => {
    const yy = 2022; // Yılı Girin //
    const mm = 12; // Ayı girin //
    const dd = 11; // Günü girin //
    const hh = 19; // O anki saati dakika bilgisi olmadan girin //
    
    const c = (hh * 1001 + dd * 101 + mm + yy) * 123;

    let p = '';
    
    if(c > 99999999) {
        return 44122333;
    }
    else {
        let newC = String(c);
        if(c < 10000000) {
            newC = '1' + newC;
        }

        for(let i = 0; i < newC.length; i++) {
            if(newC[i] === '0') {
                p += 1;
            }
            else if(newC[i] === '9') {
                p += 1;
            }
            else if(Number(newC[i]) > 4) {
                p += Number(newC[i]) - 4;
            }
            else {
                p += newC[i];
            }
        }
    }
    
    return p;
  }
  
  console.log(passwordCreate())
