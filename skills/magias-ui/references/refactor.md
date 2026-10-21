# Refactor Mode

Prima della patch identifica sorgente, revisione e stato locale. Se stai correggendo un deployment, verifica la corrispondenza del sorgente: un nome progetto simile non basta. Se manca, prepara una correzione concreta senza applicarla alla copia sbagliata.

Definisci baseline e comportamento da preservare. Correggi il problema autorizzato, senza sostituire l’identità o uniformare pagine non coinvolte. Modifiche condivise estendono la superficie di verifica. Mantieni dati, semantica, focus e azioni; una transizione cosmetica non ritarda il feedback essenziale.

Prima di chiudere guarda la vista in cui si svolge il compito, anche se la richiesta non nomina il movimento: elenca ciò che si muove da solo o con lo scroll (slideshow, video, loop, scrub, parallax) e valuta l’interferenza con il compito (M05/MX07). Se un movimento concorrente continua durante un compito delicato, come scegliere date o compilare un modulo, applica una `task_suspension` distinta dalla `manual_pause` ([contratto](motion.md)), oppure registra perché lo lasci attivo. Se il componente che si muove è fuori dai file autorizzati, segnala il collegamento necessario.

Esegui controlli proporzionati al cambiamento, confronta risultato e baseline e registra difetti preesistenti fuori scope. Non avviare build o script senza capire se includono migrazioni o effetti su servizi reali. Usa il gate Refactor: i MUST pertinenti aperti impediscono di dichiarare la modifica verificata; il lavoro disponibile può essere consegnato con limite esplicito.
