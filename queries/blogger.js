const { db, pgp } = require('../db/dbConfig')


const getAllBloggers = async () => {
    try {
        const getBloggers = await db.any("SELECT*FROM blogger");
        return getBloggers;
    } catch (error) {
        return error
    }
};

const getOneBlogger = async (id) => {

    try{
        const oneBlogger = await db.one("SELECT*FROM blogger WHERE id=$1", id)
        return oneBlogger
    } catch(error) {
        return error
    }

}

const createNewBlogger = async (blogger) => {

    try {
        const createBlogger = await db.one("INSERT INTO blogger (first_name, last_name, username, password, email, gender_identity, last_login, membership_status, phone_number) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
            [
                blogger.first_name, 
                blogger.last_name,
                blogger.username, 
                blogger.password, 
                blogger.email, 
                blogger.gender_identity, 
                blogger.last_login, 
                blogger.membership_status, 
                blogger.phone_number

            ])
            return createBlogger

    }catch(error){
        return error
    }
}

const updateBlogger = async (id, blogger) => {
    try {
        const updatedBlogger = await db.one(
            `UPDATE blogger 
            SET first_name = $1, 
                last_name = $2, 
                username = $3, 
                password = $4, 
                email = $5, 
                gender_identity = $6, 
                last_login = $7, 
                membership_status = $8, 
                phone_number = $9
            WHERE id = $10 
            RETURNING *`,
            [
                blogger.first_name,
                blogger.last_name,
                blogger.username,
                blogger.password,
                blogger.email,
                blogger.gender_identity,
                blogger.last_login,
                blogger.membership_status,
                blogger.phone_number,
                id
            ]
        );
        return updatedBlogger;
    } catch (error) {
        console.error("Error updating blogger:", error);
        return { error: "Unable to update blogger" };
    }
};




const removeBloggerEntry = async (id) => {
    try {
        const removeBlogger = await db.one("DELETE FROM blogger WHERE id=$1 RETURNING *", id);
        return removeBlogger;
    } catch (error) {
        return error;
    }
};

module.exports= { getAllBloggers, getOneBlogger, createNewBlogger,updateBlogger,removeBloggerEntry }