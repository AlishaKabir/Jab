const form = document.getElementById('userdata');
// adding data to db
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('userdata').add({
      birthcerbo:form.birthcerbo.value,
       email:form.email.value,
       name: form.name.value,
       phone:form.phone.value,
       vaccine:form.vaccine.value
       

    });
    form.name.value = '';
    form.email.value = '';
    form.vaccine.value='';
    form.phone.value='';
    form.birthcerbo.value='';
});