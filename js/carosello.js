const  {createApp} = Vue;

createApp({
    //() {} = rappresenta una funzione abbrevviata 
    data (){ //la funzione data non può ricevere gli argomenti
    //data deve avere un return di un oggetto
    return{
        currenImgIndex: 0,
        movie: {
            images: [
                'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
                'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
                'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
                'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
                'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg'
            ],
            title: 'The Mandalorian',
            category: 'Action',
            length: '120',
            }
        };
    },
    methods:{
        btnPrev (){
            //se il current è 0, facendo il decremento andrei in negativo
            //per evittare questo, imposto l'indice all'ultima immagine dell'array
            if(this.currenImgIndex === 0){
                this.currenImgIndex = this.movie.images.length - 1;
            }else{
                this.currenImgIndex--;
            }
        },
        btnNext(){
            if(this.currenImgIndex = this.movie.images.length - 1){
                this.currenImgIndex = 0;
            }else{
                this.currenImgIndex++;
            }
        },
        onThmbnailClick (clickedImgIndex){
            this.currenImgIndex = clickedImgIndex;
        }
    },
    mounted () {
        console.log("mounted called");
    }
}).mount("#app")