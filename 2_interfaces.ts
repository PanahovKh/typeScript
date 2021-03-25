interface Rect {
    readonly id: string
    color?: string // не обезательный параметр
    size: {
        width: number
        heigth: number
    }
}

const rest1 :Rect = {
    id: '1234',
    size: {
        width: 33,
        heigth: 54
    },
    color: 'ccc',
}

const rect3 = {} as Rect
const rect4 = <Rect> {}

/////////////////////////////////
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '12344',
    size :{
        width: 45,
        heigth: 21
    },
    getArea(): number {
        return this.size.width * this.size.heigth
    }
}
//////////////////////////////////////////////////////

interface IClock {
    time: Date
    setTime(data: Date) : void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}
/////////////////////////////////////////
interface Styles {
    [key: string] :string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px', 
    borferRadius: '5px'
}