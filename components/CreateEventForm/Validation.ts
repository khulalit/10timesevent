
export function validateForm(formValues : any){
    if(!formValues['EventName']) return 'Event name cannot be empty.'

    if(!formValues.startDate || !formValues.startTime|| !formValues.endDate || !formValues.endTime ){

        

        return "Date and Time values are either empty or not correct"
    } 
    else {
        const startDate = new Date(`${formValues.startDate} 2023`);
        const endtDate = new Date(`${formValues.endDate} 2023`);
        
        if(startDate > endtDate) return 'Start date must be less than End date';
    }

    if(!formValues.location) return 'Please provide location'


    if(!formValues['Capacity']) return "Capacity not provided"

    if(!formValues['Tickets']) return "Tickets not provided"

    return true;
}