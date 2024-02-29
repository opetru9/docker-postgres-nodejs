import {createFood, getAllFood, updateFood, deleteFood, getAllFoodByPriceRange, getAllCheapFoodFirst, getAllExpensiveFoodFirst, getFoodNameByKeyWord, sql} from './orm.mjs'

const foodExample =[{
    id:3,
    name:'Food Name3',
    price_amount:30,
    currency:'MDL',
    available:3
},{
    id:2,
    name:'Food Name2',
    price_amount:20,
    currency:'MDL',
    available:2
},{
    id:1,
    name:'Food Name1',
    price_amount:10,
    currency:'MDL',
    available:1
}]

// CREATE
// await createFood(foodExample[0])
// await createFood(foodExample[1])
// await createFood(foodExample[2])

// UPDATE
// await updateFood({})

// DELETE
// await deleteFood({id:1})

// RENDER
const food = await getAllFood()

// SORT
// let sortedFood = await getAllFoodByPriceRange(20,80)

// let sortedFood2 = await getAllCheapFoodFirst()
// let sortedFood3 = await getAllExpensiveFoodFirst()

let sortedFood4 = await getFoodNameByKeyWord(2)


// console.log(food)
console.log(sortedFood4)
sql.end()