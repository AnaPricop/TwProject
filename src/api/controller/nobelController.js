const NobelService = require("../services/nobelService");
let options;
module.exports = class Nobel {
    static async apiGetNobelWinnerWhere(res, req) {
        const data = await req.on('data', function (data) {
            options = JSON.parse(data);
        });
        // console.log(options);
        try {
            const winners = await NobelService.getNobelWinnerWhere(options);
            res.write(JSON.stringify(winners));
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    static async apiGetAllNobelWinners(res, req, next) {
        try {
            let result = await NobelService.getAllNobelWinners();
            // console.log(result);
            res.write(JSON.stringify(result));
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
            res.statusCode = 500;
        } finally {
            res.end();
        }
    }

    static async apiCreateNobelWinner(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                options = JSON.parse(data);
                // console.log(options);
            });

            let status = await NobelService.createNobelWinner(options);
            res.write(status);
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        } finally {
            res.end();
        }
    }

    static async apiUpdateNobelWinner(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                options = JSON.parse(data);
                console.log(options);
            });

            let status = await NobelService.updateNobelWinner(options);
            res.write(status);
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        } finally {
            res.end();
        }
    }

    static async apiDeleteNobelWinner(res, req, next) {
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options);
        try {
            const deleteResponse = await NobelService.deleteNobelWinner(options);
            res.write(JSON.stringify(deleteResponse));
        } catch (error) {
            res.statusCode = 500;
        }
    }
}