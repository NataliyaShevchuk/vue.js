//dall'oggetto globale Vue, estraggo in una variabile la funzione CreateApp
const  {createApp} = Vue;

createApp({
    //() {} = rappresenta una funzione abbrevviata 
    data (){ //la funzione data non può ricevere gli argomenti
    //data deve avere un return di un oggetto
    return{
        userLoggedIn: false,
        logiError: "",  //è una stringa vuota e vue considera le stringhe vuote come false 
        user: {
            nome: "",
            password: "",
            email: "",
            role: ""
        }
        }
    },
    methods:{
        onLoginFormSubmit(){
            //scrivendo così il sistema può fare pulizia nei campi e nel salvare i dati e coordinarli ogni volta 
            //con quanto scrive l'utente
            this.logiError = "";

            if(this.user.name !== "mario.rossi"){
                this.logiError = "Nome utente sbagliato";
            }
            if(this.user.password !== "password1234"){
                this.logiError = "Password sbagliata";
            }

                console.log("form submit")
        }
    }
}).mount("#app")
