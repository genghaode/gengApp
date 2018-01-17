module.exports = {
	get Home(){
		return require('./Home').Home
	},
	get Category(){
		return require('./Category').Category
	},
	get Me(){
		return require('./Me').Me
	},
	get Detail(){
		return require('./Detail').Detail
	},
	get Login(){
		return require('./Login').Login
	}
}