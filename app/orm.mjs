import postgres from 'postgres'

// connect to the DataBase
const sql = postgres(`postgres://postgres:qazws@localhost:5433/food`)

// let NewTable = await sql`
//             CREATE TABLE food_table (
//                 id SERIAL PRIMARY KEY,
//                 name VARCHAR(255) UNIQUE,
//                 price_amount DECIMAL,
//                 currency VARCHAR(10),
//                 available INTEGER
//             );
//         `;


//------------ CRUD -----------------
// CREATE
async function createFood(food){
    await sql`
            INSERT INTO food_table VALUES(
                ${food.id},
                ${food.name},
                ${food.price_amount},
                ${food.currency},
                ${food.available}
            );
        `;
}
// RENDER
async function getAllFood(){
     const selectedFood = await sql `
        select * from food_table;
     `
     return selectedFood
}
// UPDATE
async function updateFood(food){
    await sql`
            UPDATE food_table
            SET 
                name = ${food.name},
                price_amount = ${food.price_amount},
                currency = ${food.currency},
                available = ${food.available}
            WHERE id = ${food.id};
        `;
}
// DELETE
async function deleteFood(food){
    await sql `
        DELETE FROM food_table WHERE id = ${food.id};
    `
}


// SORT
async function getAllFoodByPriceRange( minPrice, maxPrice ){
     const sortedFood = await sql `
        SELECT * FROM food_table 
        WHERE price_amount >= ${minPrice} AND 
        price_amount <= ${maxPrice};
     `
     return sortedFood
}

async function getAllCheapFoodFirst(){
     const sortedFood = await sql`
            SELECT * FROM food_table 
            ORDER BY price_amount ASC;
        `;
     return sortedFood
}

async function getAllExpensiveFoodFirst(){
     const sortedFood = await sql `
        SELECT * FROM food_table 
        ORDER BY price_amount DESC;
     `
     return sortedFood
}

async function getFoodNameByKeyWord(keyword){
     const sortedFood = await sql `
        SELECT * FROM food_table 
        WHERE name ILIKE ${'%'+keyword+'%'};
     `
     return sortedFood
}




export {createFood, getAllFood, updateFood, deleteFood, getAllFoodByPriceRange, getAllCheapFoodFirst, getAllExpensiveFoodFirst, getFoodNameByKeyWord, sql}