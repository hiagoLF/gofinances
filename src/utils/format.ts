export function formatNumberToReais(num: number){
    const formated = num.toFixed(2).replace('.', ',')
    
    return 'R$ '+formated
}

export function formatDateToBr(date: Date){
    return `${('00'+date.getDate()).slice(-2)}/${('00'+date.getMonth()).slice(-2)}/${(date.getFullYear())}`
}