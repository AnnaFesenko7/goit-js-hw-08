import throttle from'lodash.throttle'
const formRef = document.querySelector('.feedback-form')
const emailRef = formRef.querySelector('input');
const messageRef = formRef.querySelector('textarea');
const formData = {}
const STORAGE_KEY = 'feedback-form-state';
formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubm)

savedData();

function savedData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    
    if (savedData) {
        const parseFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) 
            
        console.log(parseFormData);
        emailRef.value = parseFormData.email || "";
        messageRef.value = parseFormData.message || "";
        
        }
    }

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    console.log(" formData", formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubm(e) {
    e.preventDefault();
    console.log('Отправляем форму');
    e.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}