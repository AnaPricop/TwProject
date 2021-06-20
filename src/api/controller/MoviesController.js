const MovieService = require("../services/moviesService");
let options;
module.exports = class Nobel {
    static async apiGetMoviesWhere(res, req) {
        const data = await req.on('data', function (data) {
            options = JSON.parse(data);
        });
        // console.log(options);
        try {
            const winners = await MovieService.getMoviesWhere(options);
            res.write(JSON.stringify(winners));
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }
    }

    static async apiGetAllMovies(res, req, next) {
        try {
            let result = await MovieService.getAllMovies();
            // console.log(result);
            res.write(JSON.stringify(result));
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
            res.statusCode = 500;
        } finally {
            res.end();
        }
    }

    static async apiCreateMovies(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                options = JSON.parse(data);
                // console.log(options);
            });

            let status = await MovieService.createMovies(options);
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

    static async apiUpdateMovies(res, req, next) {
        try {
            const data = await req.on('data', function (data) {
                options = JSON.parse(data);
                console.log(options);
            });

            let status = await MovieService.updateMovies(options);
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

    static async apiDeleteMovies(res, req, next) {
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options);
        try {
            const deleteResponse = await MovieService.deleteMovies(options);
            res.write(JSON.stringify(deleteResponse));
        } catch (error) {
            res.statusCode = 500;
        }
    }
}