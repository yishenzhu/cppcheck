<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru_RU">
<context>
    <name>About</name>
    <message>
        <location filename="about.ui" line="14"/>
        <source>About Cppcheck</source>
        <translation>О Cppcheck</translation>
    </message>
    <message>
        <location filename="about.ui" line="64"/>
        <source>Version %1</source>
        <translation>Версия %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="71"/>
        <source>Cppcheck - A tool for static C/C++ code analysis.</source>
        <translation>Cppcheck - программа для статического анализа кода на языках С/С++.</translation>
    </message>
    <message>
        <location filename="about.ui" line="81"/>
        <source>Copyright © 2007-%1 Cppcheck team.</source>
        <oldsource>Copyright © 2007-2021 Cppcheck team.</oldsource>
        <translation type="unfinished">Copyright © 2007-2021 Cppcheck team.</translation>
    </message>
    <message>
        <location filename="about.ui" line="91"/>
        <source>This program is licensed under the terms
of the GNU General Public License version 3</source>
        <translation>Эта программа распространяется на
условиях лицензии GNU General Public License, версии 3</translation>
    </message>
    <message>
        <location filename="about.ui" line="102"/>
        <source>Visit Cppcheck homepage at %1</source>
        <translation>Посетите домашнюю страницу: %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="115"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Many thanks to these libraries that we use:&lt;/p&gt;&lt;ul style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;pcre&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;picojson&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;qt&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;tinyxml2&lt;/li&gt;&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplicationDialog</name>
    <message>
        <location filename="applicationdialog.ui" line="23"/>
        <source>Add an application</source>
        <translation>Добавление приложения</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="41"/>
        <source>Here you can add an application that can open error files. Specify a name for the application, the application executable and command line parameters for the application.

The following texts in parameters are replaced with appropriate values when application is executed:
(file) - Filename containing the error
(line) - Line number containing the error
(message) - Error message
(severity) - Error severity

Example opening a file with Kate and make Kate scroll to the correct line:
Executable: kate
Parameters: -l(line) (file)</source>
        <translation>Вы можете добавить приложение, которое можно будет использовать для открытия файла с ошибками. Задайте название приложения, путь до него и параметры командной строки.

Следующие текстовые параметры будут заменены реальными значениями при запуске приложения:
(file) - файл, содержащий ошибку
(line) - номер строки с ошибкой
(message) - текст ошибки
(severity) - тип ошибки

Пример открытия файла с помощью Kate (скролл переместится на нужную строчку):
Программа: kate
Параметры: -l(line) (file)</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="76"/>
        <source>&amp;Name:</source>
        <translation>&amp;Название:</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="86"/>
        <source>&amp;Executable:</source>
        <translation>&amp;Программа:</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="96"/>
        <source>&amp;Parameters:</source>
        <translation>&amp;Параметры:</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="138"/>
        <source>Browse</source>
        <translation>Просмотреть</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="63"/>
        <source>Executable files (*.exe);;All files(*.*)</source>
        <translation>Выполняемые файлы  (*.exe);;Все файлы(*.*)</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="66"/>
        <source>Select viewer application</source>
        <translation>Выберите приложение</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="81"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="82"/>
        <source>You must specify a name, a path and optionally parameters for the application!</source>
        <translation>Вы должны задать название и путь к приложению!</translation>
    </message>
</context>
<context>
    <name>FileViewDialog</name>
    <message>
        <location filename="fileviewdialog.cpp" line="51"/>
        <source>Could not find the file: %1</source>
        <oldsource>Could not find the file:
</oldsource>
        <translation>Невозможно найти файл: %1</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="55"/>
        <location filename="fileviewdialog.cpp" line="69"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="65"/>
        <source>Could not read the file: %1</source>
        <translation>Невозможно прочитать файл: %1</translation>
    </message>
</context>
<context>
    <name>HelpDialog</name>
    <message>
        <location filename="helpdialog.ui" line="14"/>
        <source>Cppcheck GUI help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="34"/>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="44"/>
        <source>Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.cpp" line="79"/>
        <source>Helpfile &apos;%1&apos; was not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.cpp" line="81"/>
        <source>Cppcheck</source>
        <translation type="unfinished">Cppcheck</translation>
    </message>
</context>
<context>
    <name>LibraryAddFunctionDialog</name>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="23"/>
        <source>Add function</source>
        <translation>Добавить функцию</translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="34"/>
        <source>Function name(s)</source>
        <translation>Имя(имена) функции</translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="44"/>
        <source>Number of arguments</source>
        <translation>Количество аргументов</translation>
    </message>
</context>
<context>
    <name>LibraryDialog</name>
    <message>
        <location filename="librarydialog.ui" line="14"/>
        <source>Library Editor</source>
        <translation>Редактор библиотек</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="22"/>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="29"/>
        <source>Save</source>
        <translation>Сохранить</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="36"/>
        <source>Save as</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="62"/>
        <source>Functions</source>
        <translation>Функции</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="71"/>
        <source>Sort</source>
        <translation>Сортировать</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="111"/>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="131"/>
        <source>Filter:</source>
        <translation>Фильтр:</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="164"/>
        <source>Comments</source>
        <translation>Комментарии</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="204"/>
        <source>noreturn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="212"/>
        <source>False</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="217"/>
        <source>True</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="222"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="232"/>
        <source>return value must be used</source>
        <translation>должно быть использовано возвращаемое значение</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="239"/>
        <source>ignore function in leaks checking</source>
        <translation>пропускать функцию при проверке на утечки</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="246"/>
        <source>Arguments</source>
        <translation>Аргументы</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="258"/>
        <source>Edit</source>
        <translation>Изменить</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="87"/>
        <location filename="librarydialog.cpp" line="159"/>
        <source>Library files (*.cfg)</source>
        <translation>Файлы библиотек (*.cfg)</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="89"/>
        <source>Open library file</source>
        <translation>Открыть файл библиотеки</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="100"/>
        <location filename="librarydialog.cpp" line="112"/>
        <location filename="librarydialog.cpp" line="149"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="101"/>
        <source>Cannot open file %1.</source>
        <oldsource>Can not open file %1.</oldsource>
        <translation>Невозможно открыть файл %1.</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="113"/>
        <source>Failed to load %1. %2.</source>
        <translation>Ошибка загрузки %1. %2.</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="150"/>
        <source>Cannot save file %1.</source>
        <oldsource>Can not save file %1.</oldsource>
        <translation>Невозможно сохранить файл %1.</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="162"/>
        <source>Save the library as</source>
        <translation>Сохранить библиотеку как</translation>
    </message>
</context>
<context>
    <name>LibraryEditArgDialog</name>
    <message>
        <location filename="libraryeditargdialog.ui" line="14"/>
        <source>Edit argument</source>
        <translation>Редактировать аргумент</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="20"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is bool value allowed? For instance result from comparison or from &apos;!&apos; operator.&lt;/p&gt;
&lt;p&gt;Typically, set this if the argument is a pointer, size, etc.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    memcmp(x, y, i == 123);   // last argument should not have a bool value&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="28"/>
        <source>Not bool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="35"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is a null parameter value allowed?&lt;/p&gt;
&lt;p&gt;Typically this should be used on any pointer parameter that does not allow null.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    strcpy(x,y); // neither x or y is allowed to be null.&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="43"/>
        <source>Not null</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="50"/>
        <source>Not uninit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="57"/>
        <source>String</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="70"/>
        <source>Format string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="92"/>
        <source>Min size of buffer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="101"/>
        <location filename="libraryeditargdialog.ui" line="203"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="109"/>
        <location filename="libraryeditargdialog.ui" line="214"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="114"/>
        <location filename="libraryeditargdialog.ui" line="219"/>
        <source>argvalue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="119"/>
        <location filename="libraryeditargdialog.ui" line="224"/>
        <source>mul</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="124"/>
        <location filename="libraryeditargdialog.ui" line="229"/>
        <source>strlen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="132"/>
        <location filename="libraryeditargdialog.ui" line="237"/>
        <source>Arg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="159"/>
        <location filename="libraryeditargdialog.ui" line="264"/>
        <source>Arg2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="194"/>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="310"/>
        <source>Valid values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="mainwindow.ui" line="26"/>
        <location filename="mainwindow.ui" line="604"/>
        <location filename="mainwindow.cpp" line="347"/>
        <location filename="mainwindow.cpp" line="501"/>
        <location filename="mainwindow.cpp" line="575"/>
        <location filename="mainwindow.cpp" line="680"/>
        <location filename="mainwindow.cpp" line="702"/>
        <location filename="mainwindow.cpp" line="1175"/>
        <location filename="mainwindow.cpp" line="1300"/>
        <location filename="mainwindow.cpp" line="1584"/>
        <location filename="mainwindow.cpp" line="1592"/>
        <location filename="mainwindow.cpp" line="1615"/>
        <location filename="mainwindow.cpp" line="1686"/>
        <location filename="mainwindow.cpp" line="1760"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="131"/>
        <source>A&amp;nalyze</source>
        <translation>Анализ</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="183"/>
        <source>Standard</source>
        <translation>Стандартные</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="70"/>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="89"/>
        <source>&amp;View</source>
        <translation>&amp;Вид</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="93"/>
        <source>&amp;Toolbars</source>
        <translation>&amp;Панель инструментов</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="135"/>
        <source>C++ standard</source>
        <translation>Стандарт C++</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="145"/>
        <source>&amp;C standard</source>
        <oldsource>C standard</oldsource>
        <translation>&amp;Стандарт C</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="170"/>
        <source>&amp;Edit</source>
        <translation>&amp;Правка</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="231"/>
        <source>&amp;License...</source>
        <translation>&amp;Лицензия...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="236"/>
        <source>A&amp;uthors...</source>
        <translation>&amp;Авторы...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="245"/>
        <source>&amp;About...</source>
        <translation>&amp;О программе...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="250"/>
        <source>&amp;Files...</source>
        <translation>&amp;Файлы...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="253"/>
        <location filename="mainwindow.ui" line="256"/>
        <source>Analyze files</source>
        <oldsource>Check files</oldsource>
        <translation>Проверить файлы</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="259"/>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="268"/>
        <source>&amp;Directory...</source>
        <translation>&amp;Каталог...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="271"/>
        <location filename="mainwindow.ui" line="274"/>
        <source>Analyze directory</source>
        <oldsource>Check directory</oldsource>
        <translation>Проверка каталога</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="277"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="289"/>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="307"/>
        <source>&amp;Stop</source>
        <translation>Остановить</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="310"/>
        <location filename="mainwindow.ui" line="313"/>
        <source>Stop analysis</source>
        <oldsource>Stop checking</oldsource>
        <translation>Остановить проверку</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="316"/>
        <source>Esc</source>
        <translation>Esc</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="325"/>
        <source>&amp;Save results to file...</source>
        <translation>Сохранить отчёт в файл...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="328"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="333"/>
        <source>&amp;Quit</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="345"/>
        <source>&amp;Clear results</source>
        <translation>Очистить отчёт</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="354"/>
        <source>&amp;Preferences</source>
        <translation>Параметры</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="387"/>
        <location filename="mainwindow.ui" line="390"/>
        <source>Show errors</source>
        <translation>Показать ошибки</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="533"/>
        <location filename="mainwindow.ui" line="536"/>
        <source>Show warnings</source>
        <translation>Показать предупреждения</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="551"/>
        <location filename="mainwindow.ui" line="554"/>
        <source>Show performance warnings</source>
        <translation>Показать предупреждения производительности</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="562"/>
        <source>Show &amp;hidden</source>
        <translation>Показать скрытые</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="790"/>
        <location filename="mainwindow.cpp" line="828"/>
        <source>Information</source>
        <translation>Информационные сообщения</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="577"/>
        <source>Show information messages</source>
        <translation>Показать информационные сообщения</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="592"/>
        <source>Show portability warnings</source>
        <translation>Показать предупреждения переносимости</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="607"/>
        <source>Show Cppcheck results</source>
        <translation>Просмотр результатов Cppcheck</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="619"/>
        <source>Clang</source>
        <translation>Clang</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="622"/>
        <source>Show Clang results</source>
        <translation>Просмотр результатов Clang</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="630"/>
        <source>&amp;Filter</source>
        <translation>Фильтр</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="633"/>
        <source>Filter results</source>
        <translation>Результаты фильтрации</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="649"/>
        <source>Windows 32-bit ANSI</source>
        <translation>Windows 32-bit ANSI</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="657"/>
        <source>Windows 32-bit Unicode</source>
        <translation>Windows 32-bit Unicode</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="665"/>
        <source>Unix 32-bit</source>
        <translation>Unix 32-bit</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="673"/>
        <source>Unix 64-bit</source>
        <translation>Unix 64-bit</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="681"/>
        <source>Windows 64-bit</source>
        <translation>Windows 64-bit</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="751"/>
        <source>&amp;Print...</source>
        <translation>Печать...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="754"/>
        <source>Print the Current Report</source>
        <translation>Напечатать текущий отчет</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="759"/>
        <source>Print Pre&amp;view...</source>
        <translation>Предварительный просмотр...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="762"/>
        <source>Open a Print Preview Dialog for the Current Results</source>
        <translation>Открыть диалог печати для текущих результатов</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="770"/>
        <source>Open library editor</source>
        <translation>Открыть редактор библиотек</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="395"/>
        <source>&amp;Check all</source>
        <translation>Отметить все</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="220"/>
        <source>Filter</source>
        <translation>Фильтр</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="286"/>
        <source>&amp;Reanalyze modified files</source>
        <oldsource>&amp;Recheck modified files</oldsource>
        <translation>Заново проверить измененные файлы</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="298"/>
        <source>Reanal&amp;yze all files</source>
        <translation>Заново проверить все файлы</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="336"/>
        <source>Ctrl+Q</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="366"/>
        <source>Style war&amp;nings</source>
        <translation>Стилистические предупреждения</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="384"/>
        <source>E&amp;rrors</source>
        <translation>Ошибки</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="400"/>
        <source>&amp;Uncheck all</source>
        <translation>Сбросить все</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="405"/>
        <source>Collapse &amp;all</source>
        <translation>Свернуть все</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="410"/>
        <source>&amp;Expand all</source>
        <translation>Развернуть все</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="418"/>
        <source>&amp;Standard</source>
        <translation>Стандартные</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="421"/>
        <source>Standard items</source>
        <translation>Стандартные элементы</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="437"/>
        <source>Toolbar</source>
        <translation>Панель инструментов</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="445"/>
        <source>&amp;Categories</source>
        <translation>Категории</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="448"/>
        <source>Error categories</source>
        <translation>Категории ошибок</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="453"/>
        <source>&amp;Open XML...</source>
        <translation>&amp;Открыть XML...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="462"/>
        <source>Open P&amp;roject File...</source>
        <translation>Открыть файл &amp;проекта...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="465"/>
        <source>Ctrl+Shift+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="474"/>
        <source>Sh&amp;ow Scratchpad...</source>
        <translation>Показать Блокнот</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="479"/>
        <source>&amp;New Project File...</source>
        <translation>&amp;Новый файл проекта...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="482"/>
        <source>Ctrl+Shift+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="487"/>
        <source>&amp;Log View</source>
        <translation>Посмотреть &amp;лог</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="490"/>
        <source>Log View</source>
        <translation>Посмотреть лог</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="498"/>
        <source>C&amp;lose Project File</source>
        <translation>&amp;Закрыть файл проекта</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="506"/>
        <source>&amp;Edit Project File...</source>
        <translation>&amp;Изменить файл проекта...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="518"/>
        <source>&amp;Statistics</source>
        <translation>&amp;Статистика</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="530"/>
        <source>&amp;Warnings</source>
        <translation>Предупреждения</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="548"/>
        <source>Per&amp;formance warnings</source>
        <translation>Предупреждения производительности</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="574"/>
        <source>&amp;Information</source>
        <translation>Информационные предупреждения</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="589"/>
        <source>&amp;Portability</source>
        <translation>Предупреждения переносимости</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="689"/>
        <source>P&amp;latforms</source>
        <translation>Платформы</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="703"/>
        <source>C++&amp;11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="714"/>
        <source>C&amp;99</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="722"/>
        <source>&amp;Posix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="730"/>
        <source>C&amp;11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="738"/>
        <source>&amp;C89</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="746"/>
        <source>&amp;C++03</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="767"/>
        <source>&amp;Library Editor...</source>
        <translation>Редактор библиотеки</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="778"/>
        <source>&amp;Auto-detect language</source>
        <translation>Автоматическое определение языка</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="786"/>
        <source>&amp;Enforce C++</source>
        <translation>Принудительно C++</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="794"/>
        <source>E&amp;nforce C</source>
        <translation>Принудительно C</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="805"/>
        <source>C++14</source>
        <translation>C++14</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="813"/>
        <source>Reanalyze and check library</source>
        <translation>Повторный анализ библиотеки</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="821"/>
        <source>Check configuration (defines, includes)</source>
        <translation>Проверить конфигурацию (defines, includes)</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="829"/>
        <source>C++17</source>
        <translation>C++17</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="840"/>
        <source>C++20</source>
        <translation>C++20</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="426"/>
        <source>&amp;Contents</source>
        <translation>Помощь</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="201"/>
        <source>Categories</source>
        <translation>Категории</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="369"/>
        <location filename="mainwindow.ui" line="372"/>
        <source>Show style warnings</source>
        <translation>Показать стилистические предупреждения</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="429"/>
        <source>Open the help contents</source>
        <translation>Открыть помощь</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="432"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="121"/>
        <source>&amp;Help</source>
        <translation>Помощь</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="106"/>
        <location filename="mainwindow.cpp" line="1456"/>
        <source>Quick Filter:</source>
        <translation>Быстрый фильтр:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="651"/>
        <source>Select configuration</source>
        <translation>Выбор конфигурации</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="681"/>
        <source>Found project file: %1

Do you want to load this project file instead?</source>
        <translation>Найден файл проекта: %1

Вы хотите загрузить этот проект?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="799"/>
        <source>File not found</source>
        <translation>Файл не найден</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="802"/>
        <source>Bad XML</source>
        <translation>Некорректный XML</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="805"/>
        <source>Missing attribute</source>
        <translation>Пропущен атрибут</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="808"/>
        <source>Bad attribute value</source>
        <translation>Некорректное значение атрибута</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="811"/>
        <source>Unsupported format</source>
        <translation>Неподдерживаемый формат</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="828"/>
        <source>Failed to load the selected library &apos;%1&apos;.
%2</source>
        <translation>Не удалось загрузить выбранную библиотеку &apos;%1&apos;.
%2</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1352"/>
        <source>License</source>
        <translation>Лицензия</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1359"/>
        <source>Authors</source>
        <translation>Авторы</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1374"/>
        <source>Save the report file</source>
        <translation>Сохранить файл с отчетом</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1191"/>
        <location filename="mainwindow.cpp" line="1381"/>
        <source>XML files (*.xml)</source>
        <translation>XML-файлы (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="342"/>
        <source>There was a problem with loading the editor application settings.

This is probably because the settings were changed between the Cppcheck versions. Please check (and fix) the editor application settings, otherwise the editor program might not start correctly.</source>
        <translation>Возникла проблема при загрузке настроек программы.

Возможно, это связано с изменениями в версии программы. Пожалуйста, проверьте (и исправьте) настройки приложения.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="576"/>
        <source>You must close the project file before selecting new files or directories!</source>
        <translation>Вы должны закрыть проект перед выбором новых файлов или каталогов!</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="790"/>
        <source>The library &apos;%1&apos; contains unknown elements:
%2</source>
        <translation>Библиотека &apos;%1&apos; содержит неизвестные элементы:
%2</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="814"/>
        <source>Duplicate platform type</source>
        <translation>Дубликат типа платформы</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="817"/>
        <source>Platform type redefined</source>
        <translation>Переобъявление типа платформы</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="820"/>
        <source>Unknown element</source>
        <translation>Неизвестный элемент</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="823"/>
        <source>Unknown issue</source>
        <translation>Неизвестная проблема</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="844"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="844"/>
        <source>Failed to load %1. Your Cppcheck installation is broken. You can use --data-dir=&lt;directory&gt; at the command line to specify where this file is located. Please note that --data-dir is supposed to be used by installation scripts and therefore the GUI does not start when it is used, all that happens is that the setting is configured.</source>
        <translation>Невозможно загрузить %1. Cppcheck установлен некорректно. Вы можете использовать --data-dir=&lt;directory&gt; в командной строке для указания расположения файлов конфигурации. Обратите внимание, что --data-dir предназначен для использования сценариями установки. При включении данной опции, графический интерфейс пользователя не запускается.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1193"/>
        <source>Open the report file</source>
        <translation>Открыть файл с отчетом</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1385"/>
        <source>Text files (*.txt)</source>
        <translation>Текстовые файлы (*.txt)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1389"/>
        <source>CSV files (*.csv)</source>
        <translation>CSV файлы(*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1494"/>
        <source>Project files (*.cppcheck);;All files(*.*)</source>
        <translation>Файлы проекта (*.cppcheck);;Все файлы(*.*)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1496"/>
        <source>Select Project File</source>
        <translation>Выберите файл проекта</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="177"/>
        <location filename="mainwindow.cpp" line="1458"/>
        <location filename="mainwindow.cpp" line="1524"/>
        <location filename="mainwindow.cpp" line="1655"/>
        <source>Project:</source>
        <translation>Проект:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="502"/>
        <source>No suitable files found to analyze!</source>
        <translation>Не найдено подходящих файлов для анализа</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="590"/>
        <source>C/C++ Source</source>
        <translation>Исходный код C/C++</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="591"/>
        <source>Compile database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="592"/>
        <source>Visual Studio</source>
        <translation type="unfinished">Visual Studio</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="593"/>
        <source>Borland C++ Builder 6</source>
        <translation type="unfinished">Borland C++ Builder 6</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="596"/>
        <source>Select files to analyze</source>
        <translation>Выбор файлов для анализа</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="611"/>
        <source>Select directory to analyze</source>
        <translation>Выбор каталога для анализа</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="651"/>
        <source>Select the configuration that will be analyzed</source>
        <translation>Выбор используемой конфигурации</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="703"/>
        <source>Found project files from the directory.

Do you want to proceed analysis without using any of these project files?</source>
        <translation>Обнаружены файлы проекты из каталога.

Вы хотите продолжить анализ без использования этих файлов проекта?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1176"/>
        <source>Current results will be cleared.

Opening a new XML file will clear current results.
Do you want to proceed?</source>
        <translation>Текущие результаты будут очищены.

Открытие нового XML-файла приведет к очистке текущих результатов.
Вы хотите продолжить?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1296"/>
        <source>Analyzer is running.

Do you want to stop the analysis and exit Cppcheck?</source>
        <translation>Анализатор запущен.

Вы хотите остановить анализ и выйти из Cppcheck?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1338"/>
        <source>About</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1372"/>
        <source>XML files (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <translation>XML файлы (*.xml);;Текстовые файлы (*.txt);;CSV файлы (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1585"/>
        <source>Build dir &apos;%1&apos; does not exist, create it?</source>
        <translation>Директория для сборки &apos;%1&apos; не существует, создать?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1593"/>
        <source>To check the project using addons, you need a build directory.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1616"/>
        <source>Failed to import &apos;%1&apos;, analysis is stopped</source>
        <translation>Невозможно импортировать &apos;%1&apos;, анализ остановлен</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1640"/>
        <source>Project files (*.cppcheck)</source>
        <translation>Файлы проекта (*.cppcheck)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1642"/>
        <source>Select Project Filename</source>
        <translation>Выберите имя файла для проекта</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1687"/>
        <source>No project file loaded</source>
        <translation>Файл с проектом не загружен</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1755"/>
        <source>The project file

%1

 could not be found!

Do you want to remove the file from the recently used projects -list?</source>
        <translation>Файл с проектом

%1

не найден!
Хотите удалить его из списка проектов?</translation>
    </message>
    <message>
        <location filename="main.cpp" line="100"/>
        <source>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help              Print this help
    -p &lt;file&gt;               Open given project file and start checking it
    -l &lt;file&gt;               Open given results xml file
    -d &lt;directory&gt;          Specify the directory that was checked to generate the results xml specified with -l
    -v, --version           Show program version
    --data-dir=&lt;directory&gt;  This option is for installation scripts so they can configure the directory where
                            datafiles are located (translations, cfg). The GUI is not started when this option
                            is used.</source>
        <oldsource>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help              Print this help
    -p &lt;file&gt;               Open given project file and start checking it
    -l &lt;file&gt;               Open given results xml file
    -d &lt;directory&gt;          Specify the directory that was checked to generate the results xml specified with -l
    -v, --version           Show program version
    --data-dir=&lt;directory&gt;  Specify directory where GUI datafiles are located (translations, cfg)</oldsource>
        <translation>Cppcheck GUI.

Синтаксис:
    cppcheck-gui [ОПЦИИ] [файлы или пути]

Опции:
    -h, --help              Выдать подсказку на стандартный вывод и успешно завершиться.
    -p &lt;file&gt;               Открыть указанный файл проекта и начать проверку
    -l &lt;file&gt;               Открыть xml-файл с полученными результатами
    -d &lt;directory&gt;          Указать каталог, который был проверен для создания результатов xml, указанных с помощью -l
    -v, --version           Выдать информацию о версии на стандартный вывод и успешно завершиться.
    --data-dir=&lt;directory&gt;  Этот параметр предназначен для сценариев установки, чтобы они могли
                            настроить каталог, в котором расположены файлы данных (конфигурация, переводы).
                            Графический интерфейс пользователя не будет запущен, если указана эта опция.</translation>
    </message>
    <message>
        <location filename="main.cpp" line="115"/>
        <source>Cppcheck GUI - Command line parameters</source>
        <translation>Cppcheck GUI - параметры Командной строки</translation>
    </message>
</context>
<context>
    <name>NewSuppressionDialog</name>
    <message>
        <location filename="newsuppressiondialog.ui" line="17"/>
        <source>New suppression</source>
        <translation>Новое подавление</translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="25"/>
        <source>Error ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="32"/>
        <source>File name</source>
        <translation>Имя файла</translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="42"/>
        <source>Line number</source>
        <translation>Номер строки</translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="52"/>
        <source>Symbol name</source>
        <translation>Имя символа</translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.cpp" line="78"/>
        <source>Edit suppression</source>
        <translation>Редактировать подавление</translation>
    </message>
</context>
<context>
    <name>Platforms</name>
    <message>
        <location filename="platforms.cpp" line="38"/>
        <source>Native</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="39"/>
        <source>Unix 32-bit</source>
        <translation>Unix 32-bit</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="40"/>
        <source>Unix 64-bit</source>
        <translation>Unix 64-bit</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="41"/>
        <source>Windows 32-bit ANSI</source>
        <translation>Windows 32-bit ANSI</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="42"/>
        <source>Windows 32-bit Unicode</source>
        <translation>Windows 32-bit Unicode</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="43"/>
        <source>Windows 64-bit</source>
        <translation>Windows 64-bit</translation>
    </message>
</context>
<context>
    <name>ProjectFile</name>
    <message>
        <location filename="projectfile.ui" line="14"/>
        <source>Project File</source>
        <translation>Файл проекта</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="24"/>
        <source>Paths and Defines</source>
        <translation>Каталоги и определения</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="30"/>
        <source>Import Project (Visual studio / compile database/ Borland C++ Builder 6)</source>
        <oldsource>Import Project (Visual studio / compile database)</oldsource>
        <translation>Импорт проекта (Visual studio / compile database/ Borland C++ Builder 6)</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="231"/>
        <source>Defines must be separated by a semicolon. Example: DEF1;DEF2=5;DEF3=int</source>
        <oldsource>Defines must be separated by a semicolon &apos;;&apos;</oldsource>
        <translation>Defines должны быть разделены точкой с запятой &apos;;&apos;</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="389"/>
        <source>Note: Put your own custom .cfg files in the same folder as the project file. You should see them above.</source>
        <translation>Положите свои .cfg-файлы в один каталог с файлом проекта. Вы увидите их сверху.</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="448"/>
        <source>Clang (experimental)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="464"/>
        <source>If you want to design your classes to be as flexible and robust as possible then the public interface must be very robust. Cppcheck will asumme that arguments can take *any* value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="489"/>
        <source>Check code in headers  (should be ON normally. if you want a limited quick analysis then turn this OFF)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="542"/>
        <source>Max recursion in template instantiation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="603"/>
        <source>Filepaths in warnings will be relative to this path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="619"/>
        <source>If tags are added, you will be able to right click on warnings and set one of these tags. You can manually categorize warnings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="629"/>
        <source>Exclude source files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="640"/>
        <source>Exclude folder...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="647"/>
        <source>Exclude file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="786"/>
        <source>MISRA C 2012</source>
        <translation>MISRA C 2012</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="795"/>
        <source>MISRA rule texts</source>
        <translation>Файл с текстами правил MISRA</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="802"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copy/paste the text from Appendix A &amp;quot;Summary of guidelines&amp;quot; from the MISRA C 2012 pdf to a text file.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Скопируйте текст из Appendix A &amp;quot;Summary of guidelines&amp;quot; из фала правил MISRA C 2012 pdf в текстовый файл.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="809"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="73"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;You have a choice:&lt;/p&gt;&lt;p&gt; * Analyze all Debug and Release configurations&lt;/p&gt;&lt;p&gt; * Only analyze the first matching Debug configuration&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Выберите:&lt;/p&gt;&lt;p&gt; * Анализ всех конфигураций Debug и Release&lt;/p&gt;&lt;p&gt; * Анализ только первой подходящей конфигурации Debug&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="60"/>
        <location filename="projectfile.ui" line="422"/>
        <source>Browse...</source>
        <translation>Обзор...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="76"/>
        <source>Analyze all Visual Studio configurations</source>
        <translation>Анализировать все конфигурации Visual Studio</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="113"/>
        <source>Selected VS Configurations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="147"/>
        <source>Paths:</source>
        <translation>Пути:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="181"/>
        <location filename="projectfile.ui" line="296"/>
        <source>Add...</source>
        <translation>Добавить...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="188"/>
        <location filename="projectfile.ui" line="303"/>
        <location filename="projectfile.ui" line="654"/>
        <source>Edit</source>
        <translation>Изменить</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="195"/>
        <location filename="projectfile.ui" line="310"/>
        <location filename="projectfile.ui" line="661"/>
        <location filename="projectfile.ui" line="704"/>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="242"/>
        <source>Undefines:</source>
        <translation>Удаленные макроопределения:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="252"/>
        <source>Undefines must be separated by a semicolon. Example: UNDEF1;UNDEF2;UNDEF3</source>
        <translation>Удаленные макроопределения должны быть разделены точкой с запятой, например: UNDEF1;UNDEF2;UNDEF3</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="265"/>
        <source>Include Paths:</source>
        <translation>Пути заголовочных файлов:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="362"/>
        <source>Types and Functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="403"/>
        <location filename="projectfile.ui" line="458"/>
        <source>Analysis</source>
        <translation>Анализ</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="415"/>
        <source>This is a workfolder that Cppcheck will use for various purposes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="432"/>
        <source>Parser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="438"/>
        <source>Cppcheck (built in)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="467"/>
        <source>Check that each class has a safe public interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="483"/>
        <source>Limit analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="499"/>
        <source>Check code in unused templates (should be ON normally, however in theory you can safely ignore warnings in unused templates)</source>
        <oldsource>Check code in unused templates  (slower and less accurate analysis)</oldsource>
        <translation type="unfinished">Проверить код в неиспользуемых шаблонах</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="511"/>
        <source>Max CTU depth</source>
        <translation>Максимальная глубина CTU</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="821"/>
        <source>External tools</source>
        <translation>Внешние инструменты</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="330"/>
        <source>Up</source>
        <translation>Вверх</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="337"/>
        <source>Down</source>
        <translation>Вниз</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="368"/>
        <source>Platform</source>
        <translation>Платформа</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="591"/>
        <source>Warning options</source>
        <translation>Опции предупреждений</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="597"/>
        <source>Root path:</source>
        <translation>Корневой каталог:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="613"/>
        <source>Warning tags (separated by semicolon)</source>
        <translation>Теги предупреждений (через &apos;;&apos;)</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="409"/>
        <source>Cppcheck build dir (whole program analysis, incremental analysis, statistics, etc)</source>
        <translation>Каталог сборки Cppcheck</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="380"/>
        <source>Libraries</source>
        <translation>Библиотеки</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="686"/>
        <source>Suppressions</source>
        <translation>Подавления</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="697"/>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="743"/>
        <location filename="projectfile.ui" line="749"/>
        <source>Addons</source>
        <translation>Дополнения</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="755"/>
        <source>Note: Addons require &lt;a href=&quot;https://www.python.org/&quot;&gt;Python&lt;/a&gt; being installed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="765"/>
        <source>Y2038</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="772"/>
        <source>Thread safety</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="779"/>
        <source>Coding standards</source>
        <translation>Стандарты кодирования</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="834"/>
        <source>Clang analyzer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="827"/>
        <source>Clang-tidy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="221"/>
        <source>Defines:</source>
        <translation>Объявленные макроопределения:</translation>
    </message>
</context>
<context>
    <name>ProjectFileDialog</name>
    <message>
        <location filename="projectfiledialog.cpp" line="93"/>
        <source>Project file: %1</source>
        <translation>Файл проекта: %1</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="462"/>
        <source>Select Cppcheck build dir</source>
        <translation>Выбрать директорию сборки Cppcheck</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="758"/>
        <source>Select include directory</source>
        <translation>Выберите директорию для поиска заголовочных файлов</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="738"/>
        <source>Select a directory to check</source>
        <translation>Выберите директорию для проверки</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="352"/>
        <source>(no rule texts file)</source>
        <translation>(файл с текстами правил недоступен)</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="358"/>
        <source>Clang-tidy (not found)</source>
        <translation>Clang-tidy (не найден)</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="502"/>
        <source>Visual Studio</source>
        <translation>Visual Studio</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="503"/>
        <source>Compile database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="504"/>
        <source>Borland C++ Builder 6</source>
        <translation>Borland C++ Builder 6</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="505"/>
        <source>Import Project</source>
        <translation>Импорт проекта</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="778"/>
        <source>Select directory to ignore</source>
        <translation>Выберите директорию, которую надо проигнорировать</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="786"/>
        <source>Source files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="787"/>
        <source>All files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="788"/>
        <source>Exclude file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="872"/>
        <source>Select MISRA rule texts file</source>
        <translation>Выбрать файл текстов правил MISRA</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="874"/>
        <source>MISRA rule texts file (%1)</source>
        <translation>Файл текстов правил MISRA (%1)</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="translationhandler.cpp" line="86"/>
        <source>Unknown language specified!</source>
        <translation>Неизвестный язык!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="111"/>
        <source>Language file %1 not found!</source>
        <oldsource>Language file %1.qm not found!</oldsource>
        <translation>Языковой файл %1 не найден!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="117"/>
        <source>Failed to load translation for language %1 from file %2</source>
        <oldsource>Failed to load translation for language %1 from file %2.qm</oldsource>
        <translation>Ошибка загрузки переводов для языка %1 из файла %2</translation>
    </message>
    <message>
        <location filename="cppchecklibrarydata.cpp" line="34"/>
        <source>line %1: Unhandled element %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="cppchecklibrarydata.cpp" line="39"/>
        <source>line %1: Mandatory attribute &apos;%2&apos; missing in &apos;%3&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="249"/>
        <source> (Not found)</source>
        <translation> (Недоступно)</translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="73"/>
        <source>Thin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="75"/>
        <source>ExtraLight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="77"/>
        <source>Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="79"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="81"/>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="83"/>
        <source>DemiBold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="85"/>
        <source>Bold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="87"/>
        <source>ExtraBold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="89"/>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="73"/>
        <source>Editor Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="76"/>
        <source>Editor Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="79"/>
        <source>Highlight Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="82"/>
        <source>Line Number Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="85"/>
        <source>Line Number Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="88"/>
        <source>Keyword Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="91"/>
        <source>Keyword Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="94"/>
        <source>Class Foreground Color</source>
        <oldsource>Class ForegroundColor</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="97"/>
        <source>Class Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="100"/>
        <source>Quote Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="103"/>
        <source>Quote Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="106"/>
        <source>Comment Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="109"/>
        <source>Comment Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="112"/>
        <source>Symbol Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="115"/>
        <source>Symbol Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="118"/>
        <source>Symbol Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="138"/>
        <source>Set to Default Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="140"/>
        <source>Set to Default Dark</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <location filename="translationhandler.cpp" line="34"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="35"/>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="36"/>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="37"/>
        <source>Save</source>
        <translation>Сохранить</translation>
    </message>
</context>
<context>
    <name>ResultsTree</name>
    <message>
        <location filename="resultstree.cpp" line="1427"/>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1427"/>
        <source>Severity</source>
        <translation>Важность</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1427"/>
        <source>Line</source>
        <translation>Строка</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1427"/>
        <source>Summary</source>
        <translation>Кратко</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="162"/>
        <source>Undefined file</source>
        <translation>Неопределенный файл</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="654"/>
        <source>Copy</source>
        <translation>Копировать</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="836"/>
        <source>Could not find file:</source>
        <translation>Невозможно найти файл:</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="840"/>
        <source>Please select the folder &apos;%1&apos;</source>
        <translation>Выберите каталог &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="841"/>
        <source>Select Directory &apos;%1&apos;</source>
        <translation>Выбрать каталог &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="843"/>
        <source>Please select the directory where file is located.</source>
        <translation>Укажите каталог с расположением файла.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="351"/>
        <source>debug</source>
        <translation>отлаживать</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="288"/>
        <source>note</source>
        <translation>заметка</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="653"/>
        <source>Recheck</source>
        <translation>Проверить заново</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="655"/>
        <source>Hide</source>
        <translation>Скрыть</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="656"/>
        <source>Hide all with id</source>
        <translation>Скрыть все с id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="675"/>
        <source>Suppress selected id(s)</source>
        <translation>Подавить выбранные id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="657"/>
        <source>Open containing folder</source>
        <translation>Открыть содержащую папку</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="691"/>
        <location filename="resultstree.cpp" line="1427"/>
        <source>Tag</source>
        <translation>Тег</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="693"/>
        <source>No tag</source>
        <translation>Тег отсутствует</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="735"/>
        <location filename="resultstree.cpp" line="749"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="736"/>
        <source>No editor application configured.

Configure the editor application for Cppcheck in preferences/Applications.</source>
        <oldsource>Configure the text file viewer program in Cppcheck preferences/Applications.</oldsource>
        <translation>Никакое приложение редактора не сконфигурировано.
Сконфигурируйте приложение редактора для Cppcheck в предпочтениях/Приложениях.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="750"/>
        <source>No default editor application selected.

Please select the default editor application in preferences/Applications.</source>
        <translation>Никакое приложение редактора по умолчанию не выбрано.
Выберите приложение редактора по умолчанию в предпочтениях/Приложениях.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="776"/>
        <source>Could not find the file!</source>
        <translation>Не удается найти файл!</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="822"/>
        <source>Could not start %1

Please check the application path and parameters are correct.</source>
        <translation>Не удалось запустить %1
Пожалуйста, проверьте путь приложения, и верны ли параметры.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="844"/>
        <source>Select Directory</source>
        <translation>Выберите директорию</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1427"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1427"/>
        <source>Inconclusive</source>
        <translation>Спорное</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1427"/>
        <source>Since date</source>
        <translation>Начиная с даты</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="333"/>
        <source>style</source>
        <translation>стиль</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="336"/>
        <source>error</source>
        <translation>ошибка</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="339"/>
        <source>warning</source>
        <translation>предупреждение</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="342"/>
        <source>performance</source>
        <translation>производительность</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="345"/>
        <source>portability</source>
        <translation>переносимость</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="348"/>
        <source>information</source>
        <translation>информация</translation>
    </message>
</context>
<context>
    <name>ResultsView</name>
    <message>
        <location filename="resultsview.cpp" line="201"/>
        <source>Print Report</source>
        <translation>Распечатать отчет</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="220"/>
        <source>No errors found, nothing to print.</source>
        <translation>Ошибок не найдено, нечего распечатывать.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="264"/>
        <source>%p% (%1 of %2 files checked)</source>
        <translation>%p% (%1 из %2 файлов проверено)</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="281"/>
        <location filename="resultsview.cpp" line="292"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="282"/>
        <source>No errors found.</source>
        <translation>Ошибок не найдено.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="289"/>
        <source>Errors were found, but they are configured to be hidden.
To toggle what kind of errors are shown, open view menu.</source>
        <translation>Были обнаружены ошибки, но они настроены быть скрыты.
Для переключения какие ошибки отображаются, откройте меню представления.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="336"/>
        <location filename="resultsview.cpp" line="355"/>
        <source>Failed to read the report.</source>
        <translation>Не удалось прочитать отчет.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="343"/>
        <source>XML format version 1 is no longer supported.</source>
        <translation>XML формат версии 1 больше не поддерживается.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="403"/>
        <source>First included by</source>
        <translation>Только первый включенный</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="408"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="410"/>
        <source>Bug hunting analysis is incomplete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="484"/>
        <source>Clear Log</source>
        <translation>Очистить лог</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="485"/>
        <source>Copy this Log entry</source>
        <translation>Скопировать данную запись</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="486"/>
        <source>Copy complete Log</source>
        <translation>Скопировать полный лог</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="183"/>
        <location filename="resultsview.cpp" line="191"/>
        <source>Failed to save the report.</source>
        <translation>Не удалось сохранить отчет.</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="26"/>
        <source>Results</source>
        <translation>Результаты</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="82"/>
        <source>Analysis Log</source>
        <translation>Лог анализа</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="104"/>
        <source>Warning Details</source>
        <translation>Детали предупреждения</translation>
    </message>
</context>
<context>
    <name>ScratchPad</name>
    <message>
        <location filename="scratchpad.ui" line="14"/>
        <source>Scratchpad</source>
        <translation>Блокнот</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="20"/>
        <source>Copy or write some C/C++ code here:</source>
        <translation>Исходный код C/C++:</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="37"/>
        <source>Optionally enter a filename (mainly for automatic language detection) and click on &quot;Check&quot;:</source>
        <translation>При необходимости введите имя файла и нажмите &quot;Проверить&quot;:</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="71"/>
        <source>filename</source>
        <translation>имя файла</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="78"/>
        <source>Check</source>
        <translation>Проверить</translation>
    </message>
</context>
<context>
    <name>Settings</name>
    <message>
        <location filename="settings.ui" line="14"/>
        <source>Preferences</source>
        <translation>Параметры</translation>
    </message>
    <message>
        <location filename="settings.ui" line="24"/>
        <source>General</source>
        <translation>Общие</translation>
    </message>
    <message>
        <location filename="settings.ui" line="195"/>
        <source>Add...</source>
        <translation>Добавить...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="41"/>
        <source>Number of threads: </source>
        <translation>Количество потоков исполнения:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="85"/>
        <source>Ideal count:</source>
        <translation>Рекомендуемое значение:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="114"/>
        <source>Force checking all #ifdef configurations</source>
        <oldsource>Check all #ifdef configurations</oldsource>
        <translation>Проверять все варианты #ifdef конфигураций</translation>
    </message>
    <message>
        <location filename="settings.ui" line="121"/>
        <source>Show full path of files</source>
        <translation>Показывать полные пути к файлам</translation>
    </message>
    <message>
        <location filename="settings.ui" line="128"/>
        <source>Show &quot;No errors found&quot; message when no errors found</source>
        <translation>Показывать сообщение, если ошибок не найдено</translation>
    </message>
    <message>
        <location filename="settings.ui" line="135"/>
        <source>Display error Id in column &quot;Id&quot;</source>
        <translation>Отображать номер ошибки в колонке &quot;id&quot;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="142"/>
        <source>Enable inline suppressions</source>
        <translation>Включить inline-подавление ошибок</translation>
    </message>
    <message>
        <location filename="settings.ui" line="149"/>
        <source>Check for inconclusive errors also</source>
        <translation>Показывать также спорные ошибки</translation>
    </message>
    <message>
        <location filename="settings.ui" line="156"/>
        <source>Show statistics on check completion</source>
        <translation>Показывать статистику после завершения проверки</translation>
    </message>
    <message>
        <location filename="settings.ui" line="176"/>
        <source>Show internal warnings in log</source>
        <translation>Показывать внутренние предупреждения в логе</translation>
    </message>
    <message>
        <location filename="settings.ui" line="287"/>
        <source>Addons</source>
        <translation>Дополнения</translation>
    </message>
    <message>
        <location filename="settings.ui" line="293"/>
        <source>Python binary (leave this empty to use python in the PATH)</source>
        <translation>Python (оставьте пустым для использования python из PATH)</translation>
    </message>
    <message>
        <location filename="settings.ui" line="304"/>
        <location filename="settings.ui" line="345"/>
        <location filename="settings.ui" line="390"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="323"/>
        <source>MISRA addon</source>
        <translation>Дополнение MISRA</translation>
    </message>
    <message>
        <location filename="settings.ui" line="331"/>
        <source>MISRA rule texts file</source>
        <translation>Файл с текстами правил MISRA: </translation>
    </message>
    <message>
        <location filename="settings.ui" line="338"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copy/paste the text from Appendix A &amp;quot;Summary of guidelines&amp;quot; from the MISRA C 2012 pdf to a text file.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Скопируйте текст из Appendix A &amp;quot;Summary of guidelines&amp;quot; из фала правил MISRA C 2012 pdf в текстовый файл.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="371"/>
        <source>Clang</source>
        <translation>Clang</translation>
    </message>
    <message>
        <location filename="settings.ui" line="377"/>
        <source>Clang path (leave empty to use system PATH)</source>
        <translation>Clang (оставьте пустым для использования clang из PATH)</translation>
    </message>
    <message>
        <location filename="settings.ui" line="400"/>
        <source>Visual Studio headers</source>
        <translation>Заголовочные файлы Visual Studio</translation>
    </message>
    <message>
        <location filename="settings.ui" line="406"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Paths to Visual Studio headers, separated by semicolon &apos;;&apos;.&lt;/p&gt;&lt;p&gt;You can open a Visual Studio command prompt, write &amp;quot;SET INCLUDE&amp;quot;. Then copy/paste the paths.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Путь до заголовочных файлов Visual Studio headers, разделенных символом &apos;;&apos;.&lt;/p&gt;&lt;p&gt;Вы можете открыть командную строку Visual Studio, ввести &amp;quot;SET INCLUDE&amp;quot; и скопировать пути.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="436"/>
        <source>Code Editor</source>
        <translation>Редактор</translation>
    </message>
    <message>
        <location filename="settings.ui" line="442"/>
        <source>Code Editor Style</source>
        <translation>Оформление</translation>
    </message>
    <message>
        <location filename="settings.ui" line="448"/>
        <source>System Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="455"/>
        <source>Default Light Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="462"/>
        <source>Default Dark Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="471"/>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="209"/>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location filename="settings.ui" line="184"/>
        <source>Applications</source>
        <translation>Приложения</translation>
    </message>
    <message>
        <location filename="settings.ui" line="202"/>
        <location filename="settings.ui" line="478"/>
        <source>Edit...</source>
        <translation>Изменить...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="216"/>
        <source>Set as default</source>
        <translation>Установить по умолчанию</translation>
    </message>
    <message>
        <location filename="settings.ui" line="239"/>
        <source>Reports</source>
        <translation>Отчёты</translation>
    </message>
    <message>
        <location filename="settings.ui" line="245"/>
        <source>Save all errors when creating report</source>
        <translation>Сохранять все ошибки при создании отчёта</translation>
    </message>
    <message>
        <location filename="settings.ui" line="252"/>
        <source>Save full path to files in reports</source>
        <translation>Сохранять полные пути к файлам в отчётах</translation>
    </message>
    <message>
        <location filename="settings.ui" line="273"/>
        <source>Language</source>
        <translation>Язык</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="settingsdialog.cpp" line="109"/>
        <source>N/A</source>
        <translation>Нет данных</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="220"/>
        <source>The executable file &quot;%1&quot; is not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="231"/>
        <source>Add a new application</source>
        <translation>Добавить новое приложение</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="261"/>
        <source>Modify an application</source>
        <translation>Изменить приложение</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="266"/>
        <source> [Default]</source>
        <translation> [По умолчанию]</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="291"/>
        <source>[Default]</source>
        <translation>[По умолчанию]</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="346"/>
        <source>Select python binary</source>
        <translation>Выберите исполняемый файл python</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="353"/>
        <source>Select MISRA File</source>
        <translation>Выберите файл текстов правил MISRA</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="384"/>
        <source>Select clang path</source>
        <translation>Выберите исполняемый файл clang</translation>
    </message>
</context>
<context>
    <name>StatsDialog</name>
    <message>
        <location filename="statsdialog.ui" line="14"/>
        <location filename="statsdialog.ui" line="248"/>
        <location filename="statsdialog.cpp" line="160"/>
        <location filename="statsdialog.cpp" line="207"/>
        <source>Statistics</source>
        <translation>Статистика</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="27"/>
        <location filename="statsdialog.cpp" line="198"/>
        <source>Project</source>
        <translation>Проект</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="33"/>
        <source>Project:</source>
        <translation>Проект:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="53"/>
        <source>Paths:</source>
        <translation>Пути:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="85"/>
        <source>Include paths:</source>
        <translation>Включенные пути:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="108"/>
        <source>Defines:</source>
        <translation>Объявленные макроопределения:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="131"/>
        <source>Undefines:</source>
        <translation>Удаленные макроопределения:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="165"/>
        <location filename="statsdialog.cpp" line="203"/>
        <source>Previous Scan</source>
        <translation>Последнее сканирование</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="171"/>
        <source>Path Selected:</source>
        <translation>Выбранный путь:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="181"/>
        <source>Number of Files Scanned:</source>
        <translation>Количество просканированных файлов:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="201"/>
        <source>Scan Duration:</source>
        <translation>Продолжительность сканирования:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="256"/>
        <source>Errors:</source>
        <translation>Ошибки:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="274"/>
        <source>Warnings:</source>
        <translation>Предупреждения:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="292"/>
        <source>Stylistic warnings:</source>
        <translation>Стилистические предупреждения:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="310"/>
        <source>Portability warnings:</source>
        <translation>Предупреждения переносимости:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="328"/>
        <source>Performance issues:</source>
        <translation>Проблемы с производительностью:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="346"/>
        <source>Information messages:</source>
        <translation>Информационные сообщения:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="363"/>
        <source>History</source>
        <translation>История</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="369"/>
        <source>File:</source>
        <translation>Файл:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="407"/>
        <source>Copy to Clipboard</source>
        <translation>Скопировать в буфер обмена</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="414"/>
        <source>Pdf Export</source>
        <translation>Экспорт PDF</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="136"/>
        <source>1 day</source>
        <translation>1 день</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="136"/>
        <source>%1 days</source>
        <translation>%1 дней</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="138"/>
        <source>1 hour</source>
        <translation>1 час</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="138"/>
        <source>%1 hours</source>
        <translation>%1 часов</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="140"/>
        <source>1 minute</source>
        <translation>1 минута</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="140"/>
        <source>%1 minutes</source>
        <translation>%1 минут</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="142"/>
        <source>1 second</source>
        <translation>1 секунда</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="142"/>
        <source>%1 seconds</source>
        <translation>%1 секунд</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="146"/>
        <source>0.%1 seconds</source>
        <translation>0.1%1 секунд</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="148"/>
        <source> and </source>
        <translation>и</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="175"/>
        <source>Export PDF</source>
        <translation>Экспорт PDF</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="197"/>
        <source>Project Settings</source>
        <translation>Настройки проекта</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="199"/>
        <source>Paths</source>
        <translation>Пути</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="200"/>
        <source>Include paths</source>
        <translation>Включенные пути</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="201"/>
        <source>Defines</source>
        <translation>Объявленные макроопределения:</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="202"/>
        <source>Undefines</source>
        <translation>Удаленные макроопределения:</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="204"/>
        <source>Path selected</source>
        <translation>Выбранные пути</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="205"/>
        <source>Number of files scanned</source>
        <translation>Количество просканированных файлов</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="206"/>
        <source>Scan duration</source>
        <translation>Продолжительность сканирования</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="162"/>
        <location filename="statsdialog.cpp" line="208"/>
        <source>Errors</source>
        <translation>Ошибки</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="88"/>
        <source>File: </source>
        <translation>Файл: </translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="88"/>
        <source>No cppcheck build dir</source>
        <translation>Не задана директория сборки</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="164"/>
        <location filename="statsdialog.cpp" line="209"/>
        <source>Warnings</source>
        <translation>Предупреждения</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="166"/>
        <location filename="statsdialog.cpp" line="210"/>
        <source>Style warnings</source>
        <translation>Стилистические предупреждения</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="168"/>
        <location filename="statsdialog.cpp" line="211"/>
        <source>Portability warnings</source>
        <translation>Предупреждения переносимости</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="170"/>
        <location filename="statsdialog.cpp" line="212"/>
        <source>Performance warnings</source>
        <translation>Предупреждения производительности</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="172"/>
        <location filename="statsdialog.cpp" line="213"/>
        <source>Information messages</source>
        <translation>Информационные сообщения</translation>
    </message>
</context>
<context>
    <name>ThreadResult</name>
    <message>
        <location filename="threadresult.cpp" line="52"/>
        <source>%1 of %2 files checked</source>
        <translation>%1 из %2 файлов проверены</translation>
    </message>
</context>
<context>
    <name>TranslationHandler</name>
    <message>
        <location filename="translationhandler.cpp" line="124"/>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation>Не удалось изменить язык пользовательского интерфейса:

%1

Язык пользовательского интерфейса был сброшен на английский. Откройте Настройки-диалог для выбора любого из доступных языков.</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="130"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
</context>
<context>
    <name>TxtReport</name>
    <message>
        <location filename="txtreport.cpp" line="74"/>
        <source>inconclusive</source>
        <translation>незначительная</translation>
    </message>
</context>
<context>
    <name>toFilterString</name>
    <message>
        <location filename="common.cpp" line="53"/>
        <source>All supported files (%1)</source>
        <translation>Все поддерживаемые файлы (%1)</translation>
    </message>
    <message>
        <location filename="common.cpp" line="58"/>
        <source>All files (%1)</source>
        <translation>Все файлы (%1)</translation>
    </message>
</context>
</TS>
