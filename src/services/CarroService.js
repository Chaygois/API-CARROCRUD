const db = require ('../db');
module.exports = {
buscarTodos:()=> {
    return new Promise((_aceito, rejeitado)=> {
        db.query('SELECT *FROM carros', (error,_results)=>{
            if (error) {rejeitado (error); return;}
        });
});
},
buscarUm: (codigo) => {
    return new Promise ((aceito,rejeitado)=>{
        db.query('SELECT *FROM carros WHERE codigo = ?', [codigo], (error,results) =>{
            if (error){rejeitado(error); return;}
            if(results.length >0){
                aceito(results[0]);
    } else{
        aceito(false);
        }
        });
        });

    }
    };