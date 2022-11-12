class JsonToXmlAdapter {
    constructor(reader){
        this.reader = reader;
    }

    read(){
        const data = this.reader.read();
        return "{nombre: 'Equipo 3'}";
    }
    
}

module.exports = JsonToXmlAdapter;