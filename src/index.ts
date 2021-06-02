class lsd {
	
	_pence : number = 0;
	
	readonly SHILLINGS_PER_POUND : number = 20;
	readonly PENCE_PER_SHILLING : number = 12;
	readonly PENCE_PER_POUND : number = 240;
	
	get pounds() { return parseInt(this._pence / this.PENCE_PER_POUND); }
	get shillings() { return parseInt(this._pence / this.PENCE_PER_SHILLING) % this.SHILLINGS_PER_POUND; }
	get pence() { return this._pence % this.PENCE_PER_SHILLING; }
	
	get totalPence() { return this._pence; }
	get totalShillings() { return parseInt(this._pence / this.PENCE_PER_SHILLING); }
	
	constructor(pence : number = 0) {
		this._pence = pence;
	}
	
	// constructor(pounds: number = 0, shillings: number = 0, pence: number = 0) {
		// this._pence = pence;
		// this.addShillings(shillings);
		// this.addPounds(pounds);
	// }
	
	addPence(pence: number) : void {
		this._pence += pence;
	}
	
	addShillings(shillings: number) : void {
		this._pence += shillings * this.PENCE_PER_SHILLING;
	}
	
	addPounds(pounds: number) : void {
		this._pence += pounds * this.PENCE_PER_POUND;
	}
	
	add(money : lsd) : void {
		this._pence += money.totalPence;
	}
	
	toString(format: string) : string {
		if (!format) return `£${this.pounds}/${this.shillings}/${this.pence}`;
		return format
			.replace("$l", this.pounds)
			.replace("$s", this.shillings)
			.replace("$d", this.pence);
	}
}

export { lsd };