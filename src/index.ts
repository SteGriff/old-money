export default class lds {
	
	_pence : number = 0;
	
	static readonly SHILLINGS_PER_POUND : number = 20;
	static readonly PENCE_PER_SHILLING : number = 12;
	static readonly PENCE_PER_POUND : number = 240;
	
	get pounds() { return parseInt(this._pence / PENCE_PER_POUND); }
	get shillings() { return parseInt(this._pence / PENCE_PER_SHILLING) % SHILLINGS_PER_POUND; }
	get pence() { return this._pence % PENCE_PER_SHILLING; }
	
	constructor(pence : number = 0) {
		this._pence = pence;
	}
}