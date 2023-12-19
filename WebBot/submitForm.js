//In pg-1 submit
function submitForm() {
    // Get Form data
    var formData = {
        firstName: document.getElementsByName('fname')[0].value,
        lastName: document.getElementsByName('lname')[0].value,
        admissionNo: document.getElementsByName('admno')[0].value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "",
        course: document.getElementsByName('course')[0].value
    };

    alert('Your data is submitted:\n' +
        "FirstName:" + formData.firstName + "\n" +
        "LastName:" + formData.lastName + "\n" +
        "admission No:" + formData.admissionNo + "\n" +
        "Gender:" + formData.gender + "\n" +
        "Course:" + formData.course);

}

