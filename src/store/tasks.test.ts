import {ActionType, div, mult, salaryReducer, sub, sum} from "./tasks";


test( 'next salary (sum)', ()=>{
    //1.Тестовые данные
    const salary = 500;
    const b = 100;
    //2. Выполнение тестируемого кода
    const nextSalary = sum(salary, b);
    //3. Проверка ожидаемого результата
    expect(nextSalary).toBe(600);
});

test ('next salary(mult)', ()=>{
    expect(mult(600, 3)).toBe(1800)
});

test ('next salary(mult)', ()=>{
    expect(div(1800, 2)).toBe(900)
});

test ('next salary(sub)', ()=>{
    expect(sub(1800, 300)).toBe(1500)
});

test('salary reducer', () => {
    expect(salaryReducer(500, {type: 'sum', number: 100})).toBe(600)

    const actionMult: ActionType = {type: 'mult', number: 3};
    expect(salaryReducer(500, actionMult)).toBe(1500);

})

