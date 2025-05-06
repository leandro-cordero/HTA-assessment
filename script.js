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
    

    // Email validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    $('#email-input').on('blur', function() {
        const email = $(this).val();
        
        if (email === '') {
            $('#email-error').text('Email is required');
        }
    });
    $('#email-input').on('input', function() {
        const email = $(this).val();
        
        if (!emailRegex.test(email)) {
            $('#email-error').text('Please enter a valid email address');
        } else {
            $('#email-error').text('');
        }
    });

    
    // Form validation on submission
    $('#form').submit(function(e) {
        const email = $('#email-input').val();
        
        if (!emailRegex.test(email)) {
            e.preventDefault();
            $('#email-error').text('Please enter a valid email address before submitting');
            return false;
        }
        
        return true;
    });
});