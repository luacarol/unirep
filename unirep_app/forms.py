from django import forms


class LoginForm(forms.Form):
    email = forms.EmailField(label="email", max_length=50, required=True)
    password = forms.CharField(label="password", max_length=50, required=True)

    def sendMessage(self):
        message = ""
        for key in self.errors.as_data().keys():
            message += (
                str(key)[0].capitalize()
                + str(key)[1:]
                + ":"
                + f" {self.errors.as_data()[key][0].messages[0]} "
            )
        return message


class EditProfileForm(forms.Form):
    full_name = forms.CharField(label="full_name", max_length=100, required=True)
    age = forms.IntegerField(label="age", required=True)
    sex = forms.CharField(label="sex", max_length=2, required=True)
    cellphone = forms.CharField(label="cellphone", max_length=11, required=True)
    course = forms.CharField(label="course", max_length=200, required=True)
    hobbie = forms.CharField(label="hobbie", max_length=200, required=True)
    disgust = forms.CharField(label="disgust", max_length=200, required=True)

    def sendMessage(self):
        message = ""
        for key in self.errors.as_data().keys():
            message += (
                str(key)[0].capitalize()
                + str(key)[1:]
                + ":"
                + f" {self.errors.as_data()[key][0].messages[0]} "
            )
        return message
