/**
 * A "modern" sleep statement.
 *
 * @param value The value to convert.
 * 
 * @param type The type of metrics.
 */
 export const convertToImperial = (value: number, type: string) => {  
    switch (type) {
      case 'speed': 
      case 'distance': return (value * 0.621371).toFixed(2);
      default: return value;
    }
 }
