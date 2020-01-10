=======menu========
id    name   pozicija
1    Contact    3
2    Home       1
3    About      2

=======kontaktu puslapis========
id    miestas   adresas    tel_1    tel_2  email
1     Kaunas    Staybu g. 2  86xxx          info@pop.lt
2     London    Wood str. 4  86xxx          info@pop.com


=======about ========
id    antraste        turinys   pozicija   ar_rodyti
1     Musu Istorija    Lorem...  2          true
2     Ka gaminame?     Lorem...  1         true
3     Mes spaudoje     Lorem...  3         false

=======vartotoju klausimai ========
id    vardas   klausimas    tel_1              email
1     Tomas   Lorem....     86xxx          info@pop.lt
2     Julius  Lorem....                    info@pop.com

=======vartotoju atsiliepimai/komentarai ========
id    vardas   user_id   atsiliepimas/komentaras   ar_rodyti   data              email
1     Tomas       13      Lorem....                true     2010-06-06          Tomas@tomas.lt
2     Julius      64      Lorem....                 false    2010-06-05         julius@julius.lt

======= Prekes/ straisniai   ========
id    pavadinimas   aprasymas      kaina    nuolaida  pozicija      data   kiekis
1     Dviratis        Lorem....     659
2     Paspirtukas     Lorem....     49.99       5           99999
3     Rieduciai       Lorem....     359         20          2

======= Prekes Kategorija  ========
id    pavadinimas   aprasymas             pozicija
1     Dviraciai       Lorem....              2
2     Paspirtukai     Lorem....             99999
3     Rieduciai       Lorem....              2
4     Vaikams
9     Akcijos         Lorem....              7
======= Prekes Kategorija tarpine lentele sujungia Kategorija ir preke(kad preke galetu tureti kelias kategorijas)  ========
prekes_id    kategorijos_id
1                 2
1                 9
2                 2
3                 2
3                 4

======= Paveiksliukai   ========
id    pavadinimas   aprasymas              pozicija      prekes_id
1     foto1.jpg         Lorem....                  3              1
2     foto2123123.PNG   Lorem....                99999            18
3     foto123.jpg       Lorem....                2              5
3     foto123.jpg       Lorem....                2              1



======= Reklamos / sukiai  ========
id    pavadinimas               Turinys              pozicija           ar_rodyti
1     pagrindine                   Lorem....                3            false
2     velykine                     Lorem....                99999         false
3    registraciju skatinimo        Lorem....                2             true

======= Order  ========
id    gavejoAdresas               gavejoMiestas       uzsakymoData
1     Savanoriu pr. 202              Kaunas               2020-12-14
2     Vytauto 12-43                   Vilnius              2020-12-16
3     Tilto pr. 2                     Kaunas               2020-12-24

======= Order Details ========
=======(ka ir kiek pirko)======
id   order_id    prekes_id    kiekis
1       1           34          1
2       1           8           4
3       3           34          1
4       4           2           2
5       4           4           2
