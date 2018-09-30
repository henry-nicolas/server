OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Неуспешно изчистване на mapping-ите.",
    "Failed to delete the server configuration" : "Неуспешен опит за изтриване на сървърната конфигурация.",
    "No action specified" : "Не е посочено действие",
    "No configuration specified" : "Не е посочена конфигурация",
    "No data specified" : "Не са посочени данни",
    " Could not set configuration %s" : "Неуспешно задаване на конфигруацията %s",
    "Action does not exist" : "Действието не съществува",
    "Very weak password" : "Много проста парола",
    "Weak password" : "Проста парола",
    "So-so password" : "Не особено добра парола",
    "Good password" : "Добра парола",
    "Strong password" : "Сложна парола",
    "Testing configuration…" : "Изпробване на конфигурацията...",
    "Configuration incorrect" : "Конфигурацията е грешна",
    "Configuration incomplete" : "Конфигурацията не е завършена",
    "Configuration OK" : "Конфигурацията е ОК",
    "Select groups" : "Избери Групи",
    "Select object classes" : "Избери типове обекти",
    "Please check the credentials, they seem to be wrong." : "Моля, проверете идентификационните данни, изглежда че са неправилни.",
    "Please specify the port, it could not be auto-detected." : "Моля, посочете порт, той не може да бъде автоматично определен.",
    "{nthServer}. Server" : "{nthServer}. Сървър",
    "Do you really want to delete the current Server Configuration?" : "Наистина ли желаете текущата сървърна конфигурация да бъде изтрита?",
    "Confirm Deletion" : "Потвърди Изтриването",
    "Select attributes" : "Избери атрибути",
    "LDAP / AD integration" : "LDAP / AD интеграция",
    "_%s group found_::_%s groups found_" : ["%s открита група","%s открити групи"],
    "_%s user found_::_%s users found_" : ["%s октрит потребител","%s октрити потребители"],
    "Could not find the desired feature" : "Не е открита желанта функция",
    "Invalid Host" : "Невалиден хост",
    "Test Configuration" : "Изпробване на конфигурацията",
    "Help" : "Помощ",
    "Groups meeting these criteria are available in %s:" : "Групи спазващи тези критерии са разположени в %s:",
    "Available groups" : "Налични групи",
    "Selected groups" : "Избрани групи",
    "LDAP Filter:" : "LDAP филтър:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Филтърът посочва кои LDAP групи ще имат достъп до %s инсталацията.",
    "LDAP / AD Username:" : "LDAP / AD потребител:",
    "LDAP / AD Email Address:" : "LDAP / AD имейл адрес:",
    "Other Attributes:" : "Други атрибути:",
    "Test Loginname" : "Проверка на Потребителско име",
    "Verify settings" : "Потвърди настройките",
    "%s. Server:" : "%s. Сървър:",
    "Delete the current configuration" : "Изтриване на текущата конфигурация",
    "Host" : "Хост",
    "Port" : "Порт",
    "Detect Port" : "Открит Port",
    "User DN" : "User DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN на потребителят, с който ще стане свързването, пр. uid=agent,dc=example,dc=com. За анонимен достъп, остави DN и Парола празни.",
    "Password" : "Парола",
    "For anonymous access, leave DN and Password empty." : "За анонимен достъп, остави DN и Парола празни.",
    "One Base DN per line" : "По един Base DN на ред",
    "You can specify Base DN for users and groups in the Advanced tab" : "Можете да настроите Base DN за отделни потребители/групи в раздела \"Допълнителни\"",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Избягва автоматични LDAP заявки. По-добра опция за големи инсталации, но изисква LDAP познания.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ръчно въвеждана на LDAP филтри(препоръчано за по-големи папки)",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Филтърът посочва кои LDAP потребители ще имат достъп до %s инсталацията.",
    "Saving" : "Записване",
    "Back" : "Назад",
    "Continue" : "Продължи",
    "An internal error occurred." : "Възникна вътрешно сървърна грешка.",
    "Current password" : "Текуща парола",
    "New password" : "Нова парола",
    "Wrong password." : "Грешна парола.",
    "Cancel" : "Отказ",
    "Server" : "Сървър",
    "Users" : "Потребители",
    "Groups" : "Групи",
    "Expert" : "Експерт",
    "Advanced" : "Допълнителни",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Предупреждение:</b> PHP LDAP модулът не е инсталиран, сървърът няма да работи. Моля, поискай системният админстратор да го инсталира.",
    "Connection Settings" : "Настройки на Връзката",
    "Configuration Active" : "Конфигурацията е Активна",
    "When unchecked, this configuration will be skipped." : "Когато не е отметнато, тази конфигурация ще бъде прескочена.",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Задай незадължителен резервен сървър. Трябва да бъде реплика на главния LDAP/AD сървър.",
    "Disable Main Server" : "Изключи Главиния Сървър",
    "Only connect to the replica server." : "Свържи се само с репликирания сървър.",
    "Turn off SSL certificate validation." : "Изключи валидацията на SSL сертификата.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Не е препоръчително! Ползвайте само за тестване. Ако връзката работи само с тази опция, внесете SSL сертификата на LDAP сървъра във вашия %s сървър.",
    "Cache Time-To-Live" : "Кеширай Time-To-Live",
    "in seconds. A change empties the cache." : "в секунди. Всяка промяна изтрива кеша.",
    "Directory Settings" : "Настройки на Директорията",
    "The LDAP attribute to use to generate the user's display name." : "LDAP атрибутът, който да бъде използван за генериране на видимото име на потребителя.",
    "Base User Tree" : "Base User Tree",
    "One User Base DN per line" : "По един User Base DN на ред",
    "User Search Attributes" : "Атрибути на Потребителско Търсене",
    "Optional; one attribute per line" : "По желание; един атрибут на ред",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP атрибутът, който да бъде използван за генерирането на видмото име на групата.",
    "Base Group Tree" : "Base Group Tree",
    "One Group Base DN per line" : "По един Group Base DN на ред",
    "Group Search Attributes" : "Атрибути на Групово Търсене",
    "Group-Member association" : "Group-Member асоциация",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Когато е включени, се подържат групи в групи. (Работи единствено ако членът на групата притежава атрибута DNs).",
    "Paging chunksize" : "Размер на paging-а",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Размерът използван за връщането на големи резултати от LDAP търсения като изброяване на потребители или групи. (Стойност 0 изключва paged LDAP търсения в тези ситуации).",
    "Special Attributes" : "Специални атрибути",
    "Quota Field" : "Поле за Квота",
    "Quota Default" : "Детайли на квотата",
    "Email Field" : "Поле за имейл",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Оставете празно за потребителско име (стандартно). Или посочете LDAP/AD атрибут.",
    "Internal Username" : "Вътрешно потребителско име",
    "Internal Username Attribute:" : "Атрибут на вътрешното потребителско име:",
    "Override UUID detection" : "Промени UUID откриването",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Обикновено UUID атрибутът ще бъде намерен автоматично. UUID атрибута се използва, за да се идентифицират еднозначно LDAP потребители и групи. Освен това ще бъде генерирано вътрешното име базирано на UUID-то, ако такова не е посочено по-горе. Можете да промените настройката и да използвате атрибут по свой избор. Наложително е атрибутът да бъде уникален както за потребителите така и за групите. Промените ще се отразят само за новодобавени (map-нати) LDAP потребители.",
    "UUID Attribute for Users:" : "UUID атрибут за потребителите:",
    "UUID Attribute for Groups:" : "UUID атрибут за групите:",
    "1. Server" : "1. Сървър",
    "Wrong password. Reset it?" : "Грешна парола. Възстановяване?",
    "LDAP" : "LDAP",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Предупреждение:</b> Приложенията user_ldap и user_webdavauth са несъвместими. Моля, помолете системния администратор да изключи едно от приложенията."
},
"nplurals=2; plural=(n != 1);");
