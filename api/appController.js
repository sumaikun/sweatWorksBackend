const users =  require('../jsons/users.json')
const bars =  require('../jsons/bars.json')
const highwayStats =  require('../jsons/highwayStats.json')
const caveStats =  require('../jsons/caveStats.json')

exports.users = async function (req, res, next) {
    
   try{     
        //console.log()
        res.send(users);

    }catch(err){
        next(err);
    } 
        
}

exports.bars = async function (req, res, next) {
    
   try{     
        res.send(bars);

    }catch(err){
        next(err);
    } 
        
} 

exports.highwayStats = async function (req, res, next) {
    
    try{     
        res.send(highwayStats);

    }catch(err){
        next(err);
    } 
         
}

exports.caveStats = async function (req, res, next) {
    
    try{     
        res.send(caveStats);

    }catch(err){
        next(err);
    } 
         
}
 
