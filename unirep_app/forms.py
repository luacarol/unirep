from django import forms

class LoginForm(forms.Form):
    email = forms.EmailField(label='email', max_length=50, required=True)
    password = forms.CharField(label='password', max_length=50, required=True)

    def sendMessage(self):
        message = ''
        for key in self.errors.as_data().keys():
            message += str(key)[0].capitalize() + str(key)[1:] + ":" + f' {self.errors.as_data()[key][0].messages[0]} '
        return message
