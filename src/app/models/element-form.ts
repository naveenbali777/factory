export class ElementForm {
	id: string;
	where: string;
	relateTo;
	label: string;
	type:  string;
	validator : string;
	children: Array<ElementForm>;
	mandatory: boolean;
	readonly: boolean;
	options: [string];
	text: string;
	from : string;
	select : string;
	isList : boolean;
	isCore : boolean;
	isHidden : boolean;
	active:boolean = true;
	sync: string;


	constructor(item){
		this.where = item.where || "";
		this.id = item.id || -1;
		this.relateTo  = item.relateTo;
		this.text = "";
		this.label = item.label || "";
		this.type = item.type || "";
		this.from = item.from || "";
		this.select = item.select || "";
		this.isList = item.isList || "";
		this.isCore = false;
		this.active = item.active;
		this.isHidden = false;
	    this.validator = item.validator || "";
	    this.children = []; 
	    this.options = item.options || [];
	    this.mandatory = item.mandatory || false;
	    this.readonly = item.readonly || false;
	}
}