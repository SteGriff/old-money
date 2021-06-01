class lds {
	
	_pence : number = 0;
	
	readonly SHILLINGS_PER_POUND : number = 20;
	readonly PENCE_PER_SHILLING : number = 12;
	readonly PENCE_PER_POUND : number = 240;
	
	get pounds() { return parseInt(this._pence / this.PENCE_PER_POUND); }
	get shillings() { return parseInt(this._pence / this.PENCE_PER_SHILLING) % this.SHILLINGS_PER_POUND; }
	get pence() { return this._pence % this.PENCE_PER_SHILLING; }
	
	constructor(pence : number = 0) {
		this._pence = pence;
	}
}

export { lds };