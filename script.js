$(document).ready(function() {
    // Country prefixes
    const countryPrefixes = {
        'mexico': '52',
        'usa': '1',
        'peru': '51',
    };

    $('#country').change(function() {
        const selectedCountry = $(this).val().toLowerCase();
        const prefix = countryPrefixes[selectedCountry] || '';
        
        $('#prefix').val(prefix);
    });

});