import React from "react";

import TopPageBar from "../../components/TopPageBar";

import "../../styles/pages/OnlyText.css";

const FAQPage = () => {
  return (
    <>
      <TopPageBar />
      <div className="only_text">
        <div className="container">
          <div className="cart">
            <div className="cart_text">
              <p className="center strong margin_bottom_3x">Najczęściej zadawane pytania</p>
              <p className="margin_bottom_1x">Dla użytkowników:</p>
              <p className="strong">
                1. Czy rejestracja w serwisie i uczestnictwo w kursach są naprawdę całkowicie
                darmowe?
              </p>
              <p className="justify margin_bottom_1x">Tak! </p>
              <p className="strong">
                2. Nie dostałem/-am maila po rejestracji i moje konto nie jest aktywne, co mogę
                zrobić?
              </p>
              <p className="justify margin_bottom_1x">
                W przypadku wystąpienia problemów z rejestracją prosimy o przesłanie wiadomości na
                adres kontakt@copernicuscollege.pl.; konto zostanie aktywowane tak szybko, jak
                będzie to możliwe (prosimy sprawdzić możliwość logowania po około 24 godzinach).
              </p>
              <p className="strong">3. Kto może uczestniczyć w kursie w Copernicus College?</p>
              <p className="justify margin_bottom_1x">
                Każdy. Wystarczy utworzyć darmowe konto i zapisać się na wybrany kurs.
              </p>
              <p className="strong">4. Coś nie działa. Gdzie mogę to zgłosić?</p>
              <p className="justify margin_bottom_1x">Na adres: kontakt@copernicuscollege.pl.</p>
              <p className="strong">5. Kiedy mogę otrzymać certyfikat ukończenia kursu?</p>
              <p className="justify margin_bottom_1x">
                5. Kiedy mogę otrzymać certyfikat ukończenia kursu? W przypadku większości naszych
                kursów można uzyskać certyfikat potwierdzający ich zaliczenie. Nie dotyczy to
                kursów, w których została zamieszczona informacja o braku możliwości zaliczenia.
              </p>
              <p className="justify margin_bottom_1x">
                Jeżeli zaliczysz dany kurs, w indeksie pojawi się opcja wygenerowania specjalnego
                certyfikatu, potwierdzającego ukończenie kursu. Możesz go pobrać w formacie PDF.{" "}
              </p>
              <p className="justify margin_bottom_1x">
                Wykłady gościnne nie kończą się egzaminem i za uczestnictwo w nich nie można
                otrzymać certyfikatu.
              </p>
              <p className="strong">6. Jakie są warunki zaliczenia kursu?</p>
              <p>6. Jakie są warunki zaliczenia kursu? Aby zaliczyć dany kurs, należy:</p>
              <p>(1) uczestniczyć w wymaganej części wykładów,</p>
              <p className="justify margin_bottom_1x">
                (2) zdać egzamin i uzyskać wymaganą ocenę końcową.{" "}
              </p>
              <p>Ocena końcowa:</p>
              <p>
                a) w przypadku kursów posiadających zadania domowe liczona jest na podstawie
                punktacji za zadania domowe i egzamin;
              </p>
              <p className="justify margin_bottom_1x">
                b) w przypadku kursów nieposiadających zadań domowych liczona jest na podstawie
                punktacji za egzamin.
              </p>
              <p className="justify margin_bottom_1x">
                Łatwo ustalić, czy w określonym kursie występuje sytuacja z pkt. a) czy z pkt. b).
                Jeśli w treści kursu pojawiają się "zadania domowe", oznacza to, że do zaliczenia
                kursu potrzebujesz określonej liczby punktów za zadania domowe i egzamin. Jeśli w
                treści kursu występują "testy", oznacza to, że do zaliczenia kursu wystarczy zdanie
                egzaminu.
              </p>
              <p className="justify margin_bottom_2x">
                Informację o warunkach zaliczenia kursu można znaleźć też w zakładce "postępy".
              </p>
              <p className="strong">7. Jak wyglądają egzaminy?</p>
              <p className="justify">
                W przypadku większości naszych kursów ostatnim modułem jest egzamin, który składa
                się zazwyczaj z kilkunastu lub kilkudziesięciu pytań testowych (jednokrotnego lub
                wielokrotnego wyboru). Aby do niego przystąpić, należy uczestniczyć w określonej
                części wykładów.{" "}
              </p>
              <p className="justify margin_bottom_1x">
                W przypadku niektórych kursów do zaliczenia wymagane jest także rozwiązanie zadań
                domowych. Zob. pkt 6.
              </p>
              <p className="justify">
                Jeśli zabrakło Ci kilku punktów, możesz przystąpić do egzaminu w kolejnej edycji.
                Nie ma możliwości udostępnienia dodatkowego podejścia do egzaminu.{" "}
              </p>
              <p className="justify margin_bottom_1x">
                Jeśli wypiszesz się z kursu i ponowne zapiszesz w trakcie trwania edycji, nie
                umożliwi to kolejnego podejścia do zaliczenia.
              </p>
              <p className="justify strong">8. Co jest potrzebne, by uczestniczyć w kursie?</p>
              <p className="justify margin_bottom_1x">
                Będziesz oczywiście potrzebować komputera z dostępem do Internetu – studiowanie w
                Copernicus College polega na wysłuchiwaniu nagranych wykładów, czytaniu fragmentów
                tekstów, rozwiązywaniu zadań online itd.
              </p>
              <p className="justify margin_bottom_1x">
                Wszystkie kursy są otwarte dla wszystkich, ale niektóre mogą zakładać, że studenci
                posiadają pewną wiedzę czy umiejętności w danej dziedzinie. Często będziecie mogli
                je zdobyć, uczestnicząc w innym, bardziej podstawowym kursie w Copernicus College.
              </p>
              <p className="justify strong">
                9. Czy mogę korzystać z Copernicus College na swoim smartfonie lub tablecie?
              </p>
              <p className="justify margin_bottom_1x">
                Aktualnie Copernicus College nie posiada dedykowanej aplikacji na urządzenia
                mobilne. W przyszłości z pewnością taka powstanie. Do tego czasu na smatfonach i
                tabletach można korzystać z Copernicus College przy użyciu przeglądarki.
              </p>
              <p className="justify strong">
                10. Jaką mam pewność, że w Copernicus College zdobędę rzetelną wiedzę naukową?
              </p>
              <p className="justify margin_bottom_1x">
                Copernicus College działa pod patronatem Centrum Kopernika Badań
                Interdyscyplinarnych oraz Uniwersytetu Jagiellońskiego – jednostek naukowych
                zrzeszających wybitnych polskich uczonych. Nasze kursy przygotowywane są przez
                specjalistów w danej dziedzinie, z wieloletnim doświadczeniem w pracy dydaktycznej
                na standardowych uniwersytetach.
              </p>
              <p className="justify strong">
                11. Czy wszystkie kursy dostępne są cały czas? Czym są edycje kursów?{" "}
              </p>
              <p className="justify margin_bottom_1x">
                Każdy kurs na Copernicus College trwa kilkanaście tygodni, po których następuje
                przerwa techniczna (zazwyczaj dwutygodniowa). Po niej kurs uruchamia się na nowo -
                jest to kolejna edycja. W zależności od daty premiery, nasze kursy mają na chwilę
                obecną kilka, kilkanaście lub kilkadziesiąt edycji.{" "}
              </p>
              <p className="justify margin_bottom_1x">
                Na każdą edycję można zapisać się do dnia, do którego aktywne są zapisy; jeśli
                zapisy się skończyły, poczekaj na otwarcie następnej edycji.
              </p>
              <p className="justify strong">
                {" "}
                12. Jak mogę sprawdzić, czy uczestniczyłem(-am) w wystarczającej części wykładów?
              </p>
              <p className="justify margin_bottom_1x">
                Informacja o Twoich postępach jest dostępna w zakładce "postępy".
              </p>
              <p className="justify strong">
                13. Kurs, który mnie interesuje, niedługo się kończy. Co w tej sytuacji?
              </p>
              <p className="justify margin_bottom_1x">
                13. Kurs, który mnie interesuje, niedługo się kończy. Co w tej sytuacji? Jeżeli
                edycja kursu, w której zamierzasz wziąć udział niebawem się zamyka, poczekaj na
                otwarcie kolejnej (ruszy około dwa tygodnie od zamknięcia bieżącej).
              </p>
              <p className="justify strong">14. Kiedy mogę się zapisać na kurs?</p>
              <p className="justify margin_bottom_2x">
                Zapisy na kursy są uruchamiane na około dwa tygodnie przed rozpoczęciem edycji (w
                przypadku nowych kursów jest to kilka tygodni) i trwają również podczas otwarcia
                kursu.
              </p>
              <p className="margin_bottom_1x">Dla nauczycieli i wykładowców:</p>
              <p className="justify strong">
                1. Chciałbym wykorzystać materiały z Copernicus College podczas swoich zajęć
                akademickich. Czy mogę to zrobić?
              </p>
              <p className="justify margin_bottom_1x">
                Możesz to zrobić, pamiętając o uszanowaniu praw przysługującym twórcom konkretnych
                materiałów.
              </p>
              <p className="justify strong">
                2. Czy kursy z Copernicus College są odpowiednie dla młodzieży szkolnej?
              </p>
              <p className="justify margin_bottom_1x">
                Większość kursów przygotowywanych jest na poziomie akademickim, ale z niektórych
                również młodzież szkolna może mieć dużo pożytku. Najlepiej zapoznaj się z opisem
                konkretnego kursu.
              </p>
              <p className="justify strong">
                3. Chciałbym przeprowadzić kurs w Copernicus College. Jak mogę to zrobić?
              </p>
              <p className="justify margin_bottom_2x">
                Prosimy o kontakt: kontakt@copernicuscollege.pl.
              </p>
              <p className="margin_bottom_1x">Dla przedsiębiorstw, uczelni i instytucji:</p>
              <p className="justify strong">
                1. Czy kursy oferowane przez Copernicus College mogą rozwijać wiedzę i zawodowe
                umiejętności?
              </p>
              <p className="justify margin_bottom_1x">
                Wszystko zależy od kursu i poszukiwanych umiejętności. Dla niektórych stanowisk i
                branży atutem może być zdobywanie ogólnej wiedzy, jaką zapewniają wszystkie kursy.
              </p>
              <p className="justify strong">
                2. Chcielibyśmy zasponsorować przygotowanie konkretnego kursu. Jak możemy to zrobić?
              </p>
              <p className="justify margin_bottom_1x">
                Jesteśmy otwarci na współpracę. Możemy również zaproponować odpowiedniego
                wykładowcę. Prosimy o kontakt: kontakt@copernicuscollege.pl.
              </p>
              <p className="justify strong">
                3. Chcielibyśmy zostać patronem konkretnego, przygotowanego już kursu. Czy to
                możliwe?
              </p>
              <p className="justify margin_bottom_1x">
                Jesteśmy otwarci na taką formę współpracy. Prosimy o kontakt:
                kontakt@copernicuscollege.pl.
              </p>
              <p className="justify strong">
                4. Chcielibyśmy dołączyć do Copernicus College i przygotować cały zestaw kursów. Czy
                to możliwe?
              </p>
              <p className="justify margin_bottom_1x">
                Jesteśmy otwarci na nowych partnerów. Prosimy o kontakt:
                kontakt@copernicuscollege.pl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
