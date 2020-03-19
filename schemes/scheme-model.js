module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

const db  = require('../data/db-config');

function find(){
    return db('schemes');
}
function findById(id){
    return db('schemes')
    .where({id})
    .first();
}

function add(newScheme){
    return db('schemes')
    .insert(newScheme, 'id');
}
function update(newScheme, id){
    return db('schemes')
    .where({id})
    .update(newScheme);
}
function remove(id){
    return db('schemes')
    .where({id})
    .delete();
}
function findSteps(id){
    return db('steps')
    .join('schemes', 'steps.scheme_id',"=", 'schemes.id')
    .select('schemes.scheme_name as scheme', 'steps.instructions as instructions')
    .where({scheme_id: id})
}
function addStep(step, scheme_id){
  
}
 /*
router.get("/", (req, res) => {
  
    // select posts.*, users.username as author
    // from posts as p
    // join users as u on posts.user_id = users.id;
 
 db.select("posts.contents as quote", "users.username as author")
 .from("posts")
 .join("users", "posts.user_id", "=", "users.id")


*/
