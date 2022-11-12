class AnalyticsLibrary {
    process(data){
        this.validateData(data);
        //TODO: complex to generate data
    }

    validateData(data){
        let result = data.toString()
        if(result.includes("{}")){
            console.log("data it's ok");
        }else{
            console.log("Data invalid");
        }
    }
}

module.exports = AnalyticsLibrary;