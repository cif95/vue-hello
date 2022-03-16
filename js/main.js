// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data, magari volendo sperimentare anche prendendola da un input.

const app = new Vue(
	{
		el: '#root',
		data: {
			message:'',
			image:'',
			color:'white',
		},
		methods: {
			toggleColor() {
				this.color = this.color === 'white' ? 'blue' : 'white'
			},
		}
	}
);