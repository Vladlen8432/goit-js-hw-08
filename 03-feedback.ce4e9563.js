!function(){var e=document.querySelector(".feedback-form"),a=e.querySelector('input[name = "email"]'),t=e.querySelector('textarea[name = "message"]'),l="feedback-form-state",n=JSON.parse(localStorage.getItem(l))||{},o=function(){n.email=a.value,n.message=t.value,localStorage.setItem(l,JSON.stringify(n))};a.addEventListener("input",o),t.addEventListener("input",o),e.addEventListener("submit",(function(e){e.preventDefault(),console.log("Email",n.email),console.log("Message",n.message),n={},localStorage.removeItem(l),a.value="",t.value=""})),a.value=n.email||"",t.value=n.message||""}();
//# sourceMappingURL=03-feedback.ce4e9563.js.map