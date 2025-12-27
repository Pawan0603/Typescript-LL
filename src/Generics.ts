function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(34)
wrapInArray({flavor: "ginger"})

function pair<A, B>(a: A, b: B): [A,B]{
    return [a, b]
}

pair("masala", 'test')
pair("masala", 34)
pair("masala", {flavor: "ginger"})

interface Box<T>{
    content: T
}

const numberBox: Box<number> = {content: 32}
const numberBoxCup: Box<string> = {content: "32"}

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}