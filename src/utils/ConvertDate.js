const convertToNepaliDate = async (gregorianDate) => {
    try {
      // Extract just the date portion (YYYY-MM-DD) from the ISO string
      const dateOnly = gregorianDate.split('T')[0];
  
      const response = await fetch(
        `https://nepali-datetime.amitgaru.me/date/convert/ad-bs?ad_date=${dateOnly}&format=%Y-%m-%d`
      );
      const data = await response.json();
      return data.data; // Returns Nepali date as a string
    } catch (error) {
      console.error('Error converting to Nepali date:', error);
      return gregorianDate; // Fallback to original date if conversion fails
    }
  };

  const convertToGregorianDate = async (nepaliDate) => {
    try {
      const response = await fetch(
        `https://nepali-datetime.amitgaru.me/date/convert/bs-ad?bs_date=${nepaliDate}&format=%Y-%m-%d`
      );
      const data = await response.json();
      return data.data; // Returns Gregorian date
    } catch (error) {
      console.error('Error converting to Gregorian date:', error);
      return null;
    }
  };

  export {
    convertToGregorianDate,
    convertToNepaliDate
  }