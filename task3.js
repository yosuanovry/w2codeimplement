const divideAndSort = (value) => {
    let data = value.toString()
    let prosesData = data.split('0').map(el => el.split('').sort().join(''))
    let hasilData = prosesData.join('')
    
    return console.log(hasilData)
};

divideAndSort(5956560159466056);