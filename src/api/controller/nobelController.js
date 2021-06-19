const NobelService = require("../services/nobelService");
let options;
module.exports = class Nobel {
static async apiGetNobelWinnerWhere(res,req){
    const data = await req.on('data',function (data){
        options = JSON.parse(data);
    });
    console.log(options);
    try {
        const winners = await NobelService.getNobelWinnerWhere(options);
        res.write(JSON.stringify(winners));
    }catch (error){
        console.log(`ERROR : ${error.message}`);
        res.statusCode = 500;
    }
}
    static async apiGetAllNobelWinners(res,req,next){
        // try {
        //     const accidents = await AccidentService.getAllAccidents();
        //     res.write(JSON.stringify(accidents));
        // }catch (error){
        //     console.log(`ERROR : ${error.message}`);
        //     res.statusCode = 500;
        // }
        // const result = NobelService.getAllNobelWinners();
        // res.write(result);

        try {
            let result = await NobelService.getAllNobelWinners();
            console.log(result);
            res.write(JSON.stringify(result));
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
            res.statusCode = 500;
        }finally {
            res.end();
        }
    }
}