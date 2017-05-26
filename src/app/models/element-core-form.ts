export class ElementCoreForm {
	label: string;
	type:  string;
	validator : string;
	options: [string];

	constructor(item){
		this.label = item.label;
		this.type = item.type;
	    this.validator = item.validator;
	    this.options = item.options || [];
	}
}