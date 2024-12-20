let basics = `
константа БРОЈ_ПОКУШАЈА = 2

дај да услов буде нетачно

док ( услов није једнако тачно ) {
    дај да резултат буде 3
    ако ( није резултат мањи од 2 ) {
        испиши(123)
        услов постаје тачно
    }
}
`

let classes = `
класа Љубимац {
    конструктор () {
        ово.име = ''
    }

    кажиНешто() {
        испиши('Нешто!')
    }
}

класа Пас наслеђује Љубимац {
    кажиНешто() {
        испиши('Ав, ав!')
    }
}

класа Мачка наслеђује Љубимац {
    кажиНешто() {
        испиши('Мјааааау!')
    }
}

дај да џеки буде нови Пас()

џеки.кажиНешто()

дај да жућа буде нова Мачка()

жућа.кажиНешто()
`

let fibonacci = `
функција фибоначијевНиз (н) {
    ако (н === 1) {
        врати [0, 1]
    } у супротном {
        дај да с = фибоначијевНиз(н - 1)
        с.гурни(с[с.дужина - 1] + с[с.дужина - 2]);
        врати с
    }
}

фибоначијевНиз(8).споји(', ')
`

let bubbleSort = `
функција сортирање (низ) {
    дај да д = низ.дужина
    за (дај да бројач1 буде 0; бројач1 мање од д; бројач1 увећај за 1) {
        за (дај да бројач2 буде 0; бројач2 мање од д; бројач2 увећај за 1) {
            ако (низ[бројач2] веће од низ[бројач2 + 1]) {
                дај да привремено буде низ[бројач2]
                низ[бројач2] постаје низ[бројач2 + 1]
                низ[бројач2 + 1] постаје привремено
            }
        }
    }
    врати низ;
}

сортирање([3, 1, 5, 2, 10])
`

let sumMatrixDiagonal = `
функција сумирајДијагоналуМатрице(матрица) {
    дај да дијагонала буде 0

    за (дај да ред буде 0; ред мањи од матрица.дужина; ред увећај за 1) {
        дијагонала постаје дијагонала + матрица[ред][ред]
    }

    врати дијагонала
}

дај да мојаМатрица буде [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

сумирајДијагоналуМатрице(мојаМатрица)
`

window.examples = {
    basics,
    classes,
    fibonacci,
    bubbleSort,
    sumMatrixDiagonal
}