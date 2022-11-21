//dall'oggetto globale Vue, estraggo in una variabile la funzione CreateApp
const  {createApp} = Vue;

createApp({
    //() {} = rappresenta una funzione abbrevviata 
    data (){ //la funzione data non può ricevere gli argomenti
    //data deve avere un return di un oggetto
    return{
        //nell'ggetto posso mettere qualsiasi oggetto che mi serve 
            nome: "Mario", 
            cognome: "Rossi",
            scelto: true,  //nel caso delle checkbox la chiave avrà il  valore booleano: true o falso e lo stesso vale per l'attributo v-model
            indirizzo: { //possiamo anche andare a recuperare un oggetto 
                via: "Via Roma",
                città: "Roma",
                cap: "00171"
            },
            btnDanger: "btn-primary",
            numUtente: 0,
            numAi: 0,
            gameResult: ""
        }
    },
    methods:{
        onBtnClick: function(){
            console.log("hai cliccato il pulsante");
            if(this.btnDanger === "btn-primary"){
                this.btnDanger = "btn-danger";
            }else{
                this.btnDanger = "btn-primary";
            }
        },
        startDiceGame(){
            this.numUtente = this.getRandomNumber(1, 100);

            this.numAi = this.getRandomNumber (1, 100);

            if(this.numUtente > this.numAi){
                this.gameResult = "l'utente ha vinto";
            }else if (this.numUtente < this.numAi){
                this.gameResult = "Ha vinto il Pc";
            }else{
                this.gameResult = "Pareggio!";
            }
        },
        getRandomNumber(min,max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
}).mount("#app")

