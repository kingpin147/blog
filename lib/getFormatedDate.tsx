export default function getFormattedDate(dateString: string | undefined): string {
    if (!dateString) {
      // Handle the case where dateString is undefined
      return 'No date available';
    }
  
    const parsedDate = new Date(dateString);
  
    if (isNaN(parsedDate.getTime())) {
      // Log or handle the error, and return a default value or an error message
      console.error('Invalid date string:', dateString);
      return 'Invalid Date';
    }
  
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(parsedDate);
  }
  