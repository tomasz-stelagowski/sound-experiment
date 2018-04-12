import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Component with custom select.
 */

@Component({
    selector: 'my-select',
    template: require('./select.component.html'),
    styles: [require('./select.component.css')]
})
export class Select{

    @Input() optionList;
    @Input() float: boolean;
    @Input('id') selectId: string;
    private selected: string = '-';
    private _selected: IMessage;

    @Output() onSelect: EventEmitter<IMessage> = new EventEmitter<IMessage>();

    /**
     * Function that returns selected value.
     * @param none
     * @return selected value
     */
    get value(){
        if(this._selected)
            return this._selected;
        else
            return null;
    }

     /**
     * Function that clears select state.
     * @param none
     * @return void
     */
    public cleanSelect(){
        this.selected = '-';
        this._selected = null;
    }


     /**
     * Event handler for chosing an option in select.
     * @param value chosen in select
     * @return void
     */
    private selectOption(val: IMessage){
        this._selected = val;
        this.selected = this._selected.message;
        this.onSelect.next( this._selected );
    }
}