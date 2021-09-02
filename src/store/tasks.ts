export function sum (salary: number,b: number): number {
    return salary + b;
}

export function mult(salary: number,b: number): number {
    return salary * b;
}

export function div(salary: number,b: number): number {
    return salary / b;
}

export function sub(salary: number,b: number): number {
    return salary - b;
}

export  type ActionType = {
    type: 'sum' | 'mult' | 'div' | 'sub' | 'fire'
    number?: number
}

export function salaryReducer(salary: number,  action: ActionType, ) {
    switch (action.type) {
        case "sum":
            return salary + action.number!
        case "mult":
            return salary * action.number!
        case "div":
            return salary / action.number!
        case "sub":
            return salary - action.number!
        case "fire":
            return salary = 0;
        default:
            return salary

    }
}




