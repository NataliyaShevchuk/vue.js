const  {createApp} = Vue;

createApp({
    //() {} = rappresenta una funzione abbrevviata 
    data (){ //la funzione data non può ricevere gli argomenti
    //data deve avere un return di un oggetto
    return{
        users: [
            { nome: "Mario Rossi", gender: "m"},
            { nome: "Giuseppe Verdi", gender: "m"},
            { nome: "Angela Bianchi", gender: "f"},
        ]
        }
    },
    methodes: {
        onUserDetailClick (user){
            alert(user);
        },
        getIconClasses(user){

            const toReturn = [];
            if(user.gender === "f"){
                toReturn.push("fa-cat", "text-danger");
            }else{
                toReturn.push("fa-hippo", "text-primary");
            }
            return toReturn.join(" ")
        },
        addUserToList (){
            const number = {
                nome: "Pippo",
                numero: "f"
            }
            this.user.push(newUser);
        }
    }
}).mount("#app")
