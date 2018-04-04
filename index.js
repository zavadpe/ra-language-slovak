module.exports = {
  ra: {
      action: {
          delete: 'Zmazať',
          show: 'Ukázať',
          list: 'Zoznam',
          save: 'Uložiť',
          create: 'Vytvoriť',
          edit: 'Upraviť',
          sort: 'Zotriediť',
          cancel: 'Zrušiť',
          undo: 'Vrátiť zmeny',
          refresh: 'Obnoviť',
          add: 'Pridať',
          remove: 'Odstrániť',
          add_filter: 'Pridaj filter',
          remove_filter: 'Odober filter',
          back: 'Späť',
          bulk_actions: '%{smart_count} selected',
      },
      boolean: {
          true: 'Áno',
          false: 'Nie',
      },
      page: {
          list: 'Všetky %{name}',
          edit: '%{name} #%{id}',
          show: '%{name} #%{id}',
          create: 'Vytvor %{name}',
          dashboard: 'Prehľad',
          not_found: 'Nenájdené',
          loading: 'Načítavam',
      },
      input: {
          file: {
              upload_several:
                  'Pretiahnite súbory pre nahranie alebo kliknite a vyberte.',
              upload_single:
                  'Pretiahnite súbor pre nahranie alebo kliknite a vyberte.',
          },
          image: {
              upload_several:
                  'Pretiahnite obrázky pre nahranie alebo kliknite a vyberte.',
              upload_single:
                  'Pretiahnite obrázok pre nahranie alebo kliknite a vyberte.',
          },
          references: {
              all_missing: 'Odkazované dáta neboli nájdené.',
              many_missing:
                  'Niektoré z príslušných odkazov už nie sú k dispozícií.',
              single_missing:
                  'Príslušný odkaz už nie sú k dispozícií.',
          },
      },
      message: {
          yes: 'Áno',
          no: 'Nie',
          are_you_sure: 'Ste si isti?',
          about: 'O',
          not_found: 'Zadali ste zlú adresu URL alebo link.',
          loading: 'Stránka sa načítava, počkajte prosím.',
          invalid_form: 'Formulár nie je platný, skontrolujte chyby.',
          delete_title: 'Zmazať %{name} #%{id}',
          delete_content: 'Ste si istí, že chcete zmazať túto položku?',
          bulk_delete_title:
              'Zmazať %{name} |||| Zmazať %{smart_count} %{name}',
          bulk_delete_content:
              'Ste si istí, že chcete zmazať %{name}? |||| Ste si istí, že chcete zmazať tieto %{smart_count} položky?',
      },
      navigation: {
          no_results: 'Žiadne výsledky',
          no_more_results:
              'Číslo strany (%{page}) je za rozsahom. Skúste predchádzajúce strany.',
          page_out_of_boundaries: 'Číslo strany (%{page}) je mimo rozsah.',
          page_out_from_end: 'Nemožno ísť za poslednú stranu',
          page_out_from_begin: 'Nemožno ísť pred prvú stranu',
          page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
          next: 'Ďalšia',
          prev: 'Predošlá',
      },
      auth: {
          username: 'Užívateľské meno',
          password: 'Heslo',
          sign_in: 'Prihlásiť',
          sign_in_error: 'Overenie zlyhalo, skúste to znova',
          logout: 'Odhlásiť',
      },
      notification: {
          updated: 'Záznam aktualizovaný |||| %{smart_count} záznamov aktualizovaných',
          created: 'Záznam vytvorený',
          deleted: 'Záznam zmazaný |||| %{smart_count} záznamov zmazaných',
          bad_item: 'Nesprávny záznam',
          item_doesnt_exist: 'Záznam neexistuje',
          http_error: 'Chyba komunikácie zo serverom',
          canceled: 'Akcia zrušená',
      },
      validation: {
          required: 'Požadovaný',
          minLength: 'Musí byť najmenej %{min} znakov',
          maxLength: 'Môže byť najviac %{max} znakov',
          minValue: 'Musí byť najmenej %{min}',
          maxValue: 'Môže byť najviac %{max}',
          number: 'Musí byť číslo',
          email: 'Musí byť valídna emailová adresa',
          oneOf: 'Musí byť jedno z: %{options}',
          regex: 'Musí spĺňať špecifický formát (regexp): %{pattern}',
      },
  },
};