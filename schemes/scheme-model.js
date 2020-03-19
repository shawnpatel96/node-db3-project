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
        
}
function addStep(step, scheme_id){
  
}
