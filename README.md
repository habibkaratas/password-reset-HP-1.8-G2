# HP 1/8 G2 TAPE ADMIN PAROLA SIFIRLAMA
Bu script administrator parolasının unutulması veya bilinmiyor olması durumunda admin parolasını sıfırlamak için yeni bir key üretmek amacıyla yazılmıştır.

Parolayı sıfırlamadan önce aşağıdaki adımları sırasıyla gerçekleştirin:

HP 1/8 G2 Autolader'ın ön paneline fiziksel olarak erişin.

Ana ekrandan, Main tuşuna basın.

Main'den Bilgi tuşuna basın.

Bilgi'den Daha Fazla'ya basın.

Bu menüden Tarih ve Saat tuşuna basın.

Tarihi (yıl dahil) ve saati not edin.

Ekranda geçerli bir tarih ve saat
gösterilir.

Ardından aşağıdakileri yapın:

Enter'a basın. Karışınıza çıkan menüden left-most menüsüne girin. Servisi aramak için bir uyarı mesajı görünecektir.

Tamam'a basın.

Script aracılığıyla oluşturduğunuz yeni kodu ön panele girin.

Tamam'a basın. Ekranda şifrenin sıfırlandığını belirten bir mesaj göreceksiniz.

Ardından yeni bir parola belirleyin.

Hepsi bu kadar :) 

Sosyal medyadan takip etmeyi unutmayın :)

----------------------------------------------------

This code is a function that generates a password based on the current year, month, day, and time. It appears that the password is calculated as follows:

    The current year, month, day, and time are concatenated to create a date-time string in the format yymmddhh.

    This date-time string is converted to a number by multiplying it by 123.

    The resulting number is then transformed into a password by applying the following rules:
        If the number is greater than 99999999, the password is fixed at 44122333.
        If the number is less than 10000000, a 1 is prepended to it.
        For each digit in the resulting number, the following transformations are applied:
            If the digit is 0, it is replaced with 1.
            If the digit is 9, it is replaced with 1.
            If the digit is greater than 4, it is decremented by 4.
            Otherwise, the digit is left unchanged.

    The resulting string of digits is the password.

---------------------------------------------------

twitter.com/habib_karatas

t.me/habib_karatas

www.linkedin.com/in/habib-karata%C5%9F-94828872/


