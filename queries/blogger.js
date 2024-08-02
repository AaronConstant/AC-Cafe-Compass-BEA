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
        const oneBlogger = await db.any("SELECT*FROM blogger WHERE id=$1", id)
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


const removeBloggerEntry = async (id) => {
    try {
        const removeBlogger = await db.one("DELETE FROM blogger WHERE id=$1 RETURNING *", id);
        return removeBlogger;
    } catch (error) {
        return error;
    }
};

module.exports= {getAllBloggers, getOneBlogger, createNewBlogger, removeBloggerEntry}