class lsd {
	
	totalPence : number = 0;
	
	readonly SHILLINGS_PER_POUND : number = 20;
	readonly PENCE_PER_SHILLING : number = 12;
	readonly PENCE_PER_POUND : number = 240;
	
	get pounds() { return parseInt(this.totalPence / this.PENCE_PER_POUND); }
	get shillings() { return parseInt(this.totalPence / this.PENCE_PER_SHILLING) % this.SHILLINGS_PER_POUND; }
	get pence() { return this.totalPence % this.PENCE_PER_SHILLING; }
	
	get totalShillings() { return parseInt(this.totalPence / this.PENCE_PER_SHILLING); }
	
	constructor(pence: number);
	constructor(pounds: number, shillings: number, pence: number);
	constructor(p: number = 0, shillings: number, pence: number) {
		// If p is the only argument, treat it as pence
		// Otherwise, treat it as pounds. This presents as two constructor overloads in the docs.
		if (shillings === undefined && pence === undefined)
		{
			this.totalPence = parseInt(p);
			return;
		}
		this.totalPence = parseInt(pence);
		this.addShillings(shillings);
		this.addPounds(p);
	}
	
	addPence(pence: number) : void {
		this.totalPence += pence;
	}
	
	addShillings(shillings: number) : void {
		this.totalPence += shillings * this.PENCE_PER_SHILLING;
	}
	
	addPounds(pounds: number) : void {
		this.totalPence += pounds * this.PENCE_PER_POUND;
	}
	
	add(money : lsd) : void {
		this.totalPence += money.totalPence;
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