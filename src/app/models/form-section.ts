import { ElementForm } from './element-form';

export class FormSection {
	label: string;
	children: Array<ElementForm>;
	id: string;

	constructor(item){
		this.label = item.label;
	    this.children = []; 
	    this.id = item.id || "";
	}
}