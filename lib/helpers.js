// FORMATTERS: DATE & PRICE
export function formatDate(date) {
    const dateObject = new Date(date)
    const mm = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(dateObject)
    
    const parsedDate = `${dateObject.getDate()} ${mm}, ${dateObject.getFullYear()}`
  
    return parsedDate;
}

export function formatPrice(price) {
    return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' kr';
}
