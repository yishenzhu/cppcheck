<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sv_SE">
<context>
    <name>About</name>
    <message>
        <location filename="about.ui" line="14"/>
        <source>About Cppcheck</source>
        <translation>Om Cppcheck</translation>
    </message>
    <message>
        <location filename="about.ui" line="64"/>
        <source>Version %1</source>
        <translation>Version %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="71"/>
        <source>Cppcheck - A tool for static C/C++ code analysis.</source>
        <translation>Cppcheck - Ett verktyg för statisk analys av C/C++ kod.</translation>
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
        <translation>This program is licensed under the terms
of the GNU General Public License version 3</translation>
    </message>
    <message>
        <location filename="about.ui" line="102"/>
        <source>Visit Cppcheck homepage at %1</source>
        <translation>Hemsida: %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="115"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Many thanks to these libraries that we use:&lt;/p&gt;&lt;ul&gt;
&lt;li&gt;pcre&lt;/li&gt;
&lt;li&gt;picojson&lt;/li&gt;
&lt;li&gt;qt&lt;/li&gt;
&lt;li&gt;tinyxml2&lt;/li&gt;
&lt;li&gt;z3&lt;/li&gt;&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Many thanks to these libraries that we use:&lt;/p&gt;&lt;ul&gt;
&lt;li&gt;tinyxml2&lt;/li&gt;
&lt;li&gt;picojson&lt;/li&gt;
&lt;li&gt;pcre&lt;/li&gt;
&lt;li&gt;qt&lt;/li&gt;&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplicationDialog</name>
    <message>
        <location filename="applicationdialog.ui" line="23"/>
        <source>Add an application</source>
        <translation>Lägg till program</translation>
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
        <translation>Här kan du ange en applikation som kan användas för att visa fel. Ange applikationens namn, körbara fil samt kommandorads parametrar.

Följande texter i parametrarna ersätts med motsvarande värden när applikationen körs:
(file) - filnamn för källkodsfil
(line) - radnummer
(message) - felmeddelande
(severity) - typ / svårighetsgrad

Exempel för att öppna en fil med Kate och ange att Kate skall skrolla till rätt rad:
Körbar fil: kate
Parametrar: -l(line) (file)</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="76"/>
        <source>&amp;Name:</source>
        <translation>Namn:</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="86"/>
        <source>&amp;Executable:</source>
        <translation>Körbar fil:</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="96"/>
        <source>&amp;Parameters:</source>
        <translation>Parametrar:</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="138"/>
        <source>Browse</source>
        <translation>Bläddra</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="63"/>
        <source>Executable files (*.exe);;All files(*.*)</source>
        <translation>Exekverbara filer (*.exe);;Alla filer(*.*)</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="66"/>
        <source>Select viewer application</source>
        <translation>Välj program</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="81"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="82"/>
        <source>You must specify a name, a path and optionally parameters for the application!</source>
        <translation>Du måste ange namn, sökväg samt eventuellt parametrar för applikationen!</translation>
    </message>
    <message>
        <source>You must specify a name, a path and parameters for the application!</source>
        <translation type="obsolete">Du måste ange ett namn, en sökväg samt parametrar för programmet!</translation>
    </message>
</context>
<context>
    <name>FileViewDialog</name>
    <message>
        <location filename="fileviewdialog.cpp" line="51"/>
        <source>Could not find the file: %1</source>
        <oldsource>Could not find the file:
</oldsource>
        <translation>Kunde inte hitta filen: %1</translation>
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
        <translation>Kunde inte läsa filen: %1</translation>
    </message>
</context>
<context>
    <name>FunctionContractDialog</name>
    <message>
        <location filename="functioncontractdialog.ui" line="14"/>
        <source>Function contract</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="functioncontractdialog.ui" line="20"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="functioncontractdialog.ui" line="27"/>
        <source>Requirements for parameters</source>
        <translation type="unfinished"></translation>
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
        <location filename="helpdialog.cpp" line="77"/>
        <source>Helpfile &apos;%1&apos; was not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.cpp" line="79"/>
        <source>Cppcheck</source>
        <translation type="unfinished">Cppcheck</translation>
    </message>
</context>
<context>
    <name>LibraryAddFunctionDialog</name>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="23"/>
        <source>Add function</source>
        <translation>Lägg till funktion</translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="34"/>
        <source>Function name(s)</source>
        <translation>Funktion namn</translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="44"/>
        <source>Number of arguments</source>
        <translation>Antal argument</translation>
    </message>
</context>
<context>
    <name>LibraryDialog</name>
    <message>
        <location filename="librarydialog.ui" line="14"/>
        <source>Library Editor</source>
        <translation>Library Editor</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="22"/>
        <source>Open</source>
        <translation>Öppna</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="29"/>
        <source>Save</source>
        <translation>Spara</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="36"/>
        <source>Save as</source>
        <translation>Spara som</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="62"/>
        <source>Functions</source>
        <translation>Funktioner</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="71"/>
        <source>Sort</source>
        <translation>Sortera</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="111"/>
        <source>Add</source>
        <translation>Lägg till</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="131"/>
        <source>Filter:</source>
        <translation>Filter:</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="164"/>
        <source>Comments</source>
        <translation>Kommentar</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="204"/>
        <source>noreturn</source>
        <translation>noreturn</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="212"/>
        <source>False</source>
        <translation>False</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="217"/>
        <source>True</source>
        <translation>True</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="222"/>
        <source>Unknown</source>
        <translation>Vet ej</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="232"/>
        <source>return value must be used</source>
        <translation>retur värde måste användas</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="239"/>
        <source>ignore function in leaks checking</source>
        <translation>Ignorera funktionen när cppcheck letar efter läckor</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="246"/>
        <source>Arguments</source>
        <translation>Argument</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="258"/>
        <source>Edit</source>
        <translation>Redigera</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="83"/>
        <location filename="librarydialog.cpp" line="155"/>
        <source>Library files (*.cfg)</source>
        <translation>Library fil (*.cfg)</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="85"/>
        <source>Open library file</source>
        <translation>Öppna Library fil</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="96"/>
        <location filename="librarydialog.cpp" line="108"/>
        <location filename="librarydialog.cpp" line="145"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="97"/>
        <source>Cannot open file %1.</source>
        <oldsource>Can not open file %1.</oldsource>
        <translation type="unfinished">Kunde ej öppna filen %1.</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="109"/>
        <source>Failed to load %1. %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="146"/>
        <source>Cannot save file %1.</source>
        <oldsource>Can not save file %1.</oldsource>
        <translation type="unfinished">Kunde ej spara filen %1.</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="158"/>
        <source>Save the library as</source>
        <translation>Spara library som</translation>
    </message>
</context>
<context>
    <name>LibraryEditArgDialog</name>
    <message>
        <location filename="libraryeditargdialog.ui" line="14"/>
        <source>Edit argument</source>
        <translation>Konfigurera argument</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="20"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is bool value allowed? For instance result from comparison or from &apos;!&apos; operator.&lt;/p&gt;
&lt;p&gt;Typically, set this if the argument is a pointer, size, etc.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    memcmp(x, y, i == 123);   // last argument should not have a bool value&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation>Är bool värde tillåtet? Exempelvis resultatet från jämförelse eller från ! operatorn.
Normalt bör inte bool värde användas om argumentet är en pekare eller en storlek etc.
Exempel:
    memcmp(x, y, i == 123);   // sista argumentet bör inte vara ett bool värde</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="28"/>
        <source>Not bool</source>
        <translation>Ej bool</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="35"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is a null parameter value allowed?&lt;/p&gt;
&lt;p&gt;Typically this should be used on any pointer parameter that does not allow null.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    strcpy(x,y); // neither x or y is allowed to be null.&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation>Är null värde tillåtet?
Klicka i denna om argumentet är en pointer parameter som ej tillåter null.
Exempel:
    strcpy(x,y); // varken x eller y får vara null.</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="43"/>
        <source>Not null</source>
        <translation>Ej null</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="50"/>
        <source>Not uninit</source>
        <translation>Ej uninit</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="57"/>
        <source>String</source>
        <translation>Sträng</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="70"/>
        <source>Format string</source>
        <translation>Format sträng</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="92"/>
        <source>Min size of buffer</source>
        <translation>Minsta storlek för buffer</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="101"/>
        <location filename="libraryeditargdialog.ui" line="203"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="109"/>
        <location filename="libraryeditargdialog.ui" line="214"/>
        <source>None</source>
        <translation>Ingen</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="114"/>
        <location filename="libraryeditargdialog.ui" line="219"/>
        <source>argvalue</source>
        <translation>argvalue</translation>
    </message>
    <message>
        <source>constant</source>
        <translation type="obsolete">constant</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="119"/>
        <location filename="libraryeditargdialog.ui" line="224"/>
        <source>mul</source>
        <translation>mul</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="124"/>
        <location filename="libraryeditargdialog.ui" line="229"/>
        <source>strlen</source>
        <translation>strlen</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="132"/>
        <location filename="libraryeditargdialog.ui" line="237"/>
        <source>Arg</source>
        <translation>Arg</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="159"/>
        <location filename="libraryeditargdialog.ui" line="264"/>
        <source>Arg2</source>
        <translation>Arg2</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="194"/>
        <source>and</source>
        <translation>och</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="310"/>
        <source>Valid values</source>
        <translation>Tillåtna värden</translation>
    </message>
</context>
<context>
    <name>LogView</name>
    <message>
        <source>Checking Log</source>
        <translation type="obsolete">Analys logg</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Spara</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="obsolete">Töm</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Stäng</translation>
    </message>
    <message>
        <source>Save Log</source>
        <translation type="obsolete">Spara logg</translation>
    </message>
    <message>
        <source>Text files (*.txt *.log);;All files (*.*)</source>
        <translation type="obsolete">Text filer (*.txt *.log);;Alla filer (*.*)</translation>
    </message>
    <message>
        <source>Cppcheck</source>
        <translation type="obsolete">Cppcheck</translation>
    </message>
    <message>
        <source>Could not open file for writing: &quot;%1&quot;</source>
        <translation type="obsolete">Kunde ej öppna fil för skrivning: &quot;%1&quot;</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="mainwindow.ui" line="26"/>
        <location filename="mainwindow.ui" line="604"/>
        <location filename="mainwindow.cpp" line="333"/>
        <location filename="mainwindow.cpp" line="490"/>
        <location filename="mainwindow.cpp" line="564"/>
        <location filename="mainwindow.cpp" line="696"/>
        <location filename="mainwindow.cpp" line="718"/>
        <location filename="mainwindow.cpp" line="1195"/>
        <location filename="mainwindow.cpp" line="1320"/>
        <location filename="mainwindow.cpp" line="1594"/>
        <location filename="mainwindow.cpp" line="1602"/>
        <location filename="mainwindow.cpp" line="1625"/>
        <location filename="mainwindow.cpp" line="1702"/>
        <location filename="mainwindow.cpp" line="1777"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="131"/>
        <source>A&amp;nalyze</source>
        <translation>Analysera</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="183"/>
        <source>Standard</source>
        <translation>Standard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="70"/>
        <source>&amp;File</source>
        <translation>&amp;Arkiv</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="89"/>
        <source>&amp;View</source>
        <translation>&amp;Visa</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="93"/>
        <source>&amp;Toolbars</source>
        <translation>Verktygsfält</translation>
    </message>
    <message>
        <source>&amp;Check</source>
        <translation type="obsolete">&amp;Check</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="135"/>
        <source>C++ standard</source>
        <translation>C++ standard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="145"/>
        <source>&amp;C standard</source>
        <oldsource>C standard</oldsource>
        <translation>C standard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="170"/>
        <source>&amp;Edit</source>
        <translation>&amp;Redigera</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="231"/>
        <source>&amp;License...</source>
        <translation>&amp;Licens...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="236"/>
        <source>A&amp;uthors...</source>
        <translation>&amp;Utvecklat av...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="245"/>
        <source>&amp;About...</source>
        <translation>&amp;Om...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="250"/>
        <source>&amp;Files...</source>
        <translation>&amp;Filer...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="253"/>
        <location filename="mainwindow.ui" line="256"/>
        <source>Analyze files</source>
        <oldsource>Check files</oldsource>
        <translation>Analysera filer</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="259"/>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="268"/>
        <source>&amp;Directory...</source>
        <translation>&amp;Katalog...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="271"/>
        <location filename="mainwindow.ui" line="274"/>
        <source>Analyze directory</source>
        <oldsource>Check directory</oldsource>
        <translation>Analysera mapp</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="277"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <source>&amp;Recheck files</source>
        <translation type="obsolete">Starta &amp;om check</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="289"/>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <source>&amp;Reanalyze all files</source>
        <oldsource>&amp;Recheck all files</oldsource>
        <translation type="obsolete">Analysera om alla filer</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="307"/>
        <source>&amp;Stop</source>
        <translation>&amp;Stoppa</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="310"/>
        <location filename="mainwindow.ui" line="313"/>
        <source>Stop analysis</source>
        <oldsource>Stop checking</oldsource>
        <translation>Stoppa analys</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="316"/>
        <source>Esc</source>
        <translation>Esc</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="325"/>
        <source>&amp;Save results to file...</source>
        <translation>&amp;Spara resultat till fil...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="328"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="333"/>
        <source>&amp;Quit</source>
        <translation>&amp;Avsluta</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="345"/>
        <source>&amp;Clear results</source>
        <translation>&amp;Töm resultat</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="354"/>
        <source>&amp;Preferences</source>
        <translation>&amp;Inställningar</translation>
    </message>
    <message>
        <source>Errors</source>
        <translation type="obsolete">Fel</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="387"/>
        <location filename="mainwindow.ui" line="390"/>
        <source>Show errors</source>
        <translation>Visa fel</translation>
    </message>
    <message>
        <source>Show S&amp;cratchpad...</source>
        <translation type="obsolete">Visa s&amp;cratchpad...</translation>
    </message>
    <message>
        <source>Warnings</source>
        <translation type="obsolete">Varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="533"/>
        <location filename="mainwindow.ui" line="536"/>
        <source>Show warnings</source>
        <translation>Visa varningar</translation>
    </message>
    <message>
        <source>Performance warnings</source>
        <translation type="obsolete">Prestanda varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="551"/>
        <location filename="mainwindow.ui" line="554"/>
        <source>Show performance warnings</source>
        <translation>Visa prestanda varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="562"/>
        <source>Show &amp;hidden</source>
        <translation>Visa dolda</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="806"/>
        <location filename="mainwindow.cpp" line="844"/>
        <source>Information</source>
        <translation>Information</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="577"/>
        <source>Show information messages</source>
        <translation>Visa informations meddelanden</translation>
    </message>
    <message>
        <source>Portability</source>
        <translation type="obsolete">Portabilitet</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="592"/>
        <source>Show portability warnings</source>
        <translation>Visa portabilitets varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="607"/>
        <source>Show Cppcheck results</source>
        <translation>Visa Cppcheck resultat</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="619"/>
        <source>Clang</source>
        <translation>Clang</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="622"/>
        <source>Show Clang results</source>
        <translation>Visa Clang resultat</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="630"/>
        <source>&amp;Filter</source>
        <translation>&amp;Filter</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="633"/>
        <source>Filter results</source>
        <translation>Filtrera resultat</translation>
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
        <source>Platforms</source>
        <translation type="obsolete">Plattformar</translation>
    </message>
    <message>
        <source>C++11</source>
        <translation type="obsolete">C++11</translation>
    </message>
    <message>
        <source>C99</source>
        <translation type="obsolete">C99</translation>
    </message>
    <message>
        <source>Posix</source>
        <translation type="obsolete">Posix</translation>
    </message>
    <message>
        <source>C11</source>
        <translation type="obsolete">C11</translation>
    </message>
    <message>
        <source>C89</source>
        <translation type="obsolete">C89</translation>
    </message>
    <message>
        <source>C++03</source>
        <translation type="obsolete">C++03</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="751"/>
        <source>&amp;Print...</source>
        <translation>Skriv ut...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="754"/>
        <source>Print the Current Report</source>
        <translation>Skriv ut aktuell rapport</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="759"/>
        <source>Print Pre&amp;view...</source>
        <translation>Förhandsgranska utskrift...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="762"/>
        <source>Open a Print Preview Dialog for the Current Results</source>
        <translation>Öppnar förhandsgranskning för nuvarande resultat</translation>
    </message>
    <message>
        <source>Library Editor...</source>
        <translation type="obsolete">Library Editor...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="770"/>
        <source>Open library editor</source>
        <translation>Öppna library editor</translation>
    </message>
    <message>
        <source>Auto-detect language</source>
        <translation type="obsolete">Välj språk automatiskt</translation>
    </message>
    <message>
        <source>Enforce C++</source>
        <translation type="obsolete">C++</translation>
    </message>
    <message>
        <source>Enforce C</source>
        <translation type="obsolete">C</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="395"/>
        <source>&amp;Check all</source>
        <translation>&amp;Kryssa alla</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="220"/>
        <source>Filter</source>
        <translation>Filter</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="286"/>
        <source>&amp;Reanalyze modified files</source>
        <oldsource>&amp;Recheck modified files</oldsource>
        <translation>Analysera om ändrade filer</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="298"/>
        <source>Reanal&amp;yze all files</source>
        <translation>Analysera om alla filer</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="336"/>
        <source>Ctrl+Q</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="366"/>
        <source>Style war&amp;nings</source>
        <translation>Style varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="384"/>
        <source>E&amp;rrors</source>
        <translation>Fel</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="400"/>
        <source>&amp;Uncheck all</source>
        <translation>Kryssa &amp;ur alla</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="405"/>
        <source>Collapse &amp;all</source>
        <translatorcomment>Ingen bra översättning!</translatorcomment>
        <translation>&amp;Fäll ihop alla</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="410"/>
        <source>&amp;Expand all</source>
        <translation>&amp;Expandera alla</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="418"/>
        <source>&amp;Standard</source>
        <translation>&amp;Standard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="421"/>
        <source>Standard items</source>
        <translation>Standard poster</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="437"/>
        <source>Toolbar</source>
        <translation>Verktygsfält</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="445"/>
        <source>&amp;Categories</source>
        <translation>&amp;Kategorier</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="448"/>
        <source>Error categories</source>
        <translation>Fel kategorier</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="453"/>
        <source>&amp;Open XML...</source>
        <translation>&amp;Öppna XML...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="462"/>
        <source>Open P&amp;roject File...</source>
        <translation>Öppna Projektfil...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="465"/>
        <source>Ctrl+Shift+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="474"/>
        <source>Sh&amp;ow Scratchpad...</source>
        <translation>Visa Scratchpad...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="479"/>
        <source>&amp;New Project File...</source>
        <translation>Ny projektfil...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="482"/>
        <source>Ctrl+Shift+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="487"/>
        <source>&amp;Log View</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="490"/>
        <source>Log View</source>
        <translation>Logg vy</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="498"/>
        <source>C&amp;lose Project File</source>
        <translation>Stäng projektfil</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="506"/>
        <source>&amp;Edit Project File...</source>
        <translation>Redigera projektfil...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="518"/>
        <source>&amp;Statistics</source>
        <translation>Statistik</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="530"/>
        <source>&amp;Warnings</source>
        <translation>Varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="548"/>
        <source>Per&amp;formance warnings</source>
        <translation>Optimerings varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="574"/>
        <source>&amp;Information</source>
        <translation>Information</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="589"/>
        <source>&amp;Portability</source>
        <translation>Portabilitet</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="689"/>
        <source>P&amp;latforms</source>
        <translation>Plattformar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="703"/>
        <source>C++&amp;11</source>
        <translation>C++11</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="714"/>
        <source>C&amp;99</source>
        <translation>C99</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="722"/>
        <source>&amp;Posix</source>
        <translation>Posix</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="730"/>
        <source>C&amp;11</source>
        <translation>C11</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="738"/>
        <source>&amp;C89</source>
        <translation>C89</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="746"/>
        <source>&amp;C++03</source>
        <translation>C++03</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="767"/>
        <source>&amp;Library Editor...</source>
        <translation>Library Editor...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="778"/>
        <source>&amp;Auto-detect language</source>
        <translation>Detektera språk automatiskt</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="786"/>
        <source>&amp;Enforce C++</source>
        <translation>Tvinga C++</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="794"/>
        <source>E&amp;nforce C</source>
        <translation>Tvinga C</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="805"/>
        <source>C++14</source>
        <translation>C++14</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="813"/>
        <source>Reanalyze and check library</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="821"/>
        <source>Check configuration (defines, includes)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="829"/>
        <source>C++17</source>
        <translation type="unfinished">C++17</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="840"/>
        <source>C++20</source>
        <translation type="unfinished">C++20</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="426"/>
        <source>&amp;Contents</source>
        <translation>&amp;Innehåll</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="201"/>
        <source>Categories</source>
        <translation>Kategorier</translation>
    </message>
    <message>
        <source>Style warnings</source>
        <translation type="obsolete">Stil varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="369"/>
        <location filename="mainwindow.ui" line="372"/>
        <source>Show style warnings</source>
        <translation>Visa stil varningar</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="429"/>
        <source>Open the help contents</source>
        <translation>Öppna hjälp</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="432"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="121"/>
        <source>&amp;Help</source>
        <translation>&amp;Hjälp</translation>
    </message>
    <message>
        <source>Select directory to check</source>
        <translation type="obsolete">Välj katalog som skall kontrolleras</translation>
    </message>
    <message>
        <source>No suitable files found to check!</source>
        <translation type="obsolete">Inga lämpliga filer hittades!</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="87"/>
        <location filename="mainwindow.cpp" line="1463"/>
        <source>Quick Filter:</source>
        <translation>Snabbfilter:</translation>
    </message>
    <message>
        <source>C/C++ Source, Compile database, Visual Studio (%1 %2 *.sln *.vcxproj)</source>
        <translation type="obsolete">C/C++ källkod, Compile database, Visual Studio (%1 %2 *.sln *.vcxproj)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="667"/>
        <source>Select configuration</source>
        <translation>Välj konfiguration</translation>
    </message>
    <message>
        <source>Select the configuration that will be checked</source>
        <translation type="obsolete">Välj konfiguration som kommer analyseras</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="697"/>
        <source>Found project file: %1

Do you want to load this project file instead?</source>
        <translation>Hittade projektfil: %1

Vill du ladda denna projektfil istället?</translation>
    </message>
    <message>
        <source>Found project files from the directory.

Do you want to proceed checking without using any of these project files?</source>
        <translation type="obsolete">Hittade projektfil(er) i mappen.

Vill du fortsätta analysen utan att använda någon av dessa projektfiler?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="815"/>
        <source>File not found</source>
        <translation>Filen hittades ej</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="818"/>
        <source>Bad XML</source>
        <translation>Ogiltig XML</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="821"/>
        <source>Missing attribute</source>
        <translation>Attribut finns ej</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="824"/>
        <source>Bad attribute value</source>
        <translation>Ogiltigt attribut värde</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="827"/>
        <source>Unsupported format</source>
        <translation>Format stöds ej</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="844"/>
        <source>Failed to load the selected library &apos;%1&apos;.
%2</source>
        <translation>Misslyckades att ladda valda library &apos;%1&apos;.
%2</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1362"/>
        <source>License</source>
        <translation>Licens</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1369"/>
        <source>Authors</source>
        <translation>Utvecklare</translation>
    </message>
    <message>
        <source>XML files version 2 (*.xml);;XML files version 1 (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <oldsource>XML files (*.xml);;Text files (*.txt);;CSV files (*.csv)</oldsource>
        <translation type="obsolete">XML filer version 2 (*.xml);;XML filer version 1 (*.xml);;Text filer (*.txt);;CSV filer (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1384"/>
        <source>Save the report file</source>
        <translation>Spara rapport</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1211"/>
        <location filename="mainwindow.cpp" line="1391"/>
        <source>XML files (*.xml)</source>
        <translation>XML filer (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="328"/>
        <source>There was a problem with loading the editor application settings.

This is probably because the settings were changed between the Cppcheck versions. Please check (and fix) the editor application settings, otherwise the editor program might not start correctly.</source>
        <translation>Det uppstod ett problem när programinställningarna skulle laddas.

En trolig orsak är att inställningarna ändrats för olika Cppcheck versioner. Kontrollera programinställningarna.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="565"/>
        <source>You must close the project file before selecting new files or directories!</source>
        <translation>Du måste stänga projektfilen innan nya filer eller sökvägar kan väljas!</translation>
    </message>
    <message>
        <source>Select files to check</source>
        <translation type="obsolete">Välj filer att kontrollera</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="806"/>
        <source>The library &apos;%1&apos; contains unknown elements:
%2</source>
        <translation>Library filen &apos;%1&apos; har element som ej hanteras:
%2</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="830"/>
        <source>Duplicate platform type</source>
        <translation>Dubbel plattformstyp</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="833"/>
        <source>Platform type redefined</source>
        <translation>Plattformstyp definieras igen</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="836"/>
        <source>Unknown element</source>
        <translation>Element hanteras ej</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="839"/>
        <source>Unknown issue</source>
        <translation>Något problem</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="860"/>
        <source>Error</source>
        <translation>Fel</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="860"/>
        <source>Failed to load %1. Your Cppcheck installation is broken. You can use --data-dir=&lt;directory&gt; at the command line to specify where this file is located. Please note that --data-dir is supposed to be used by installation scripts and therefore the GUI does not start when it is used, all that happens is that the setting is configured.</source>
        <translation>Misslyckades att ladda %1. Din Cppcheck installation är ej komplett. Du kan använda --data-dir&lt;directory&gt; på kommandoraden för att specificera var denna fil finns. Det är meningen att --data-dir kommandot skall köras under installationen,så GUIt kommer ej visas när --data-dir används allt som händer är att en inställning görs.</translation>
    </message>
    <message>
        <source>Current results will be cleared.

Opening a new XML file will clear current results.Do you want to proceed?</source>
        <translation type="vanished">Nuvarande resultat kommer rensas bort.

När en ny XML fil öppnas så tas alla nuvarande resultat bort. Vill du fortsätta?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1213"/>
        <source>Open the report file</source>
        <translation>Öppna rapportfilen</translation>
    </message>
    <message>
        <source>Checking is running.

Do you want to stop the checking and exit Cppcheck?</source>
        <translation type="obsolete">Cppcheck kör.

Vill du stoppa analysen och avsluta Cppcheck?</translation>
    </message>
    <message>
        <source>XML files version 1 (*.xml)</source>
        <translation type="obsolete">XML filer version 1 (*.xml)</translation>
    </message>
    <message>
        <source>Deprecated XML format</source>
        <translation type="obsolete">Gammalt XML format</translation>
    </message>
    <message>
        <source>XML format 1 is deprecated and will be removed in cppcheck 1.81.</source>
        <translation type="obsolete">XML format 1 är gammalt och stödet kommer tas bort i Cppcheck 1.81</translation>
    </message>
    <message>
        <source>XML files version 2 (*.xml)</source>
        <translation type="obsolete">XML filer version 2 (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1395"/>
        <source>Text files (*.txt)</source>
        <translation>Text filer (*.txt)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1399"/>
        <source>CSV files (*.csv)</source>
        <translation>CSV filer (*.csv)</translation>
    </message>
    <message>
        <source>Cppcheck - %1</source>
        <translation type="vanished">Cppcheck - %1</translation>
    </message>
    <message>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation type="obsolete">Misslyckades att ändra språk:

%1

Språket har nollställts till Engelska. Öppna Preferences och välj något av de tillgängliga språken.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1501"/>
        <source>Project files (*.cppcheck);;All files(*.*)</source>
        <translation>Projektfiler (*.cppcheck);;Alla filer(*.*)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1503"/>
        <source>Select Project File</source>
        <translation>Välj projektfil</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="163"/>
        <location filename="mainwindow.cpp" line="1465"/>
        <location filename="mainwindow.cpp" line="1531"/>
        <location filename="mainwindow.cpp" line="1665"/>
        <source>Project:</source>
        <translation>Projekt:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="491"/>
        <source>No suitable files found to analyze!</source>
        <translation>Inga filer hittades att analysera!</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="579"/>
        <source>C/C++ Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="580"/>
        <source>Compile database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="581"/>
        <source>Visual Studio</source>
        <translation type="unfinished">Visual Studio</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="582"/>
        <source>Borland C++ Builder 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="585"/>
        <source>Select files to analyze</source>
        <translation>Välj filer att analysera</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="600"/>
        <source>Select directory to analyze</source>
        <translation>Välj mapp att analysera</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="667"/>
        <source>Select the configuration that will be analyzed</source>
        <translation>Välj konfiguration som kommer analyseras</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="719"/>
        <source>Found project files from the directory.

Do you want to proceed analysis without using any of these project files?</source>
        <translation>Hittade projekt filer i mappen.

Vill du fortsätta analysen utan att använda någon av dessa projekt filer?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1196"/>
        <source>Current results will be cleared.

Opening a new XML file will clear current results.
Do you want to proceed?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1316"/>
        <source>Analyzer is running.

Do you want to stop the analysis and exit Cppcheck?</source>
        <translation>Analys körs.

Vill du stoppa analysen och avsluta Cppcheck?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1382"/>
        <source>XML files (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <translation>XML filer (*.xml);;Text filer (*.txt);;CSV filer (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1595"/>
        <source>Build dir &apos;%1&apos; does not exist, create it?</source>
        <translation>Build dir &apos;%1&apos; existerar ej, skapa den?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1603"/>
        <source>To check the project using addons, you need a build directory.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1626"/>
        <source>Failed to import &apos;%1&apos;, analysis is stopped</source>
        <translation>Misslyckades att importera &apos;%1&apos;, analysen stoppas</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1650"/>
        <source>Project files (*.cppcheck)</source>
        <translation>Projekt filer (*.cppcheck)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1652"/>
        <source>Select Project Filename</source>
        <translation>Välj Projektfil</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1703"/>
        <source>No project file loaded</source>
        <translation>Inget projekt laddat</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1772"/>
        <source>The project file

%1

 could not be found!

Do you want to remove the file from the recently used projects -list?</source>
        <translation>Projektfilen

%1

 kunde inte hittas!

Vill du ta bort filen från &apos;senast använda projekt&apos;-listan?</translation>
    </message>
    <message>
        <source>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help     Print this help
    -p &lt;file&gt;      Open given project file and start checking it
    -l &lt;file&gt;      Open given results xml file
    -d &lt;directory&gt; Specify the directory that was checked to generate the results xml specified with -l
    -v, --version  Show program version</source>
        <translation type="obsolete">Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help     Print this help
    -p &lt;file&gt;      Open given project file and start checking it
    -l &lt;file&gt;      Open given results xml file
    -d &lt;directory&gt; Specify the directory that was checked to generate the results xml specified with -l
    -v, --version  Show program version</translation>
    </message>
    <message>
        <location filename="main.cpp" line="99"/>
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
                            is used.</translation>
    </message>
    <message>
        <location filename="main.cpp" line="114"/>
        <source>Cppcheck GUI - Command line parameters</source>
        <translation>Cppcheck GUI - Command line parameters</translation>
    </message>
</context>
<context>
    <name>NewSuppressionDialog</name>
    <message>
        <location filename="newsuppressiondialog.ui" line="17"/>
        <source>New suppression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="25"/>
        <source>Error ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="32"/>
        <source>File name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="42"/>
        <source>Line number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="52"/>
        <source>Symbol name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.cpp" line="74"/>
        <source>Edit suppression</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Platforms</name>
    <message>
        <source>Built-in</source>
        <translation type="obsolete">Generell</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="38"/>
        <source>Native</source>
        <translation>Native</translation>
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
    <name>Project</name>
    <message>
        <source>Cppcheck</source>
        <translation type="obsolete">Cppcheck</translation>
    </message>
    <message>
        <source>Could not read the project file.</source>
        <translation type="obsolete">Kunde ej läsa projektfilen.</translation>
    </message>
    <message>
        <source>Could not write the project file.</source>
        <translation type="obsolete">Kunde ej skriva projektfilen</translation>
    </message>
</context>
<context>
    <name>ProjectFile</name>
    <message>
        <location filename="projectfile.ui" line="14"/>
        <source>Project File</source>
        <translation>Projektfil</translation>
    </message>
    <message>
        <source>Project</source>
        <translation type="obsolete">Projekt</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;In the build dir, cppcheck stores data about each translation unit.&lt;/p&gt;&lt;p&gt;With a build dir you get whole program analysis.&lt;/p&gt;&lt;p&gt;Unchanged files will be analyzed much faster; Cppcheck skip the analysis of these files and reuse their old data.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="obsolete">I build dir sparar Cppcheck information för varje translation unit.
Med build dir får du whole program analys.
Omodifierade filer analyseras mycket fortare, Cppcheck hoppar över analysen och återanvänder den gamla informationen</translation>
    </message>
    <message>
        <source>Cppcheck build dir (whole program analysis, faster analysis for unchanged files)</source>
        <translation type="obsolete">Cppcheck build dir (whole program analys, snabbare analys för omodifierade filer)</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="24"/>
        <source>Paths and Defines</source>
        <translation>Sökvägar och defines</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Cppcheck can import Visual studio solutions (*.sln), Visual studio projects (*.vcxproj) or compile databases.&lt;/p&gt;&lt;p&gt;Files to check, defines, include paths are imported.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="obsolete">Cppcheck kan importera Visual studio solutions (*.sln), Visual studio projekt (*.vcxproj) eller compile databases.
Sökvägar och defines importeras.</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="30"/>
        <source>Import Project (Visual studio / compile database/ Borland C++ Builder 6)</source>
        <oldsource>Import Project (Visual studio / compile database)</oldsource>
        <translation type="unfinished">Importera Projekt (Visual Studio / compile database)</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="231"/>
        <source>Defines must be separated by a semicolon. Example: DEF1;DEF2=5;DEF3=int</source>
        <oldsource>Defines must be separated by a semicolon &apos;;&apos;</oldsource>
        <translation type="unfinished">Defines separeras med semicolon &apos;;&apos;</translation>
    </message>
    <message>
        <source>&amp;Root:</source>
        <oldsource>Root:</oldsource>
        <translation type="obsolete">Rot:</translation>
    </message>
    <message>
        <source>Libraries:</source>
        <translation type="obsolete">Libraries:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="389"/>
        <source>Note: Put your own custom .cfg files in the same folder as the project file. You should see them above.</source>
        <translation>Obs: Lägg dina egna .cfg filer i samma folder som projekt filen. De skall isåfall visas ovan.</translation>
    </message>
    <message>
        <source>Visual Studio</source>
        <translation type="obsolete">Visual Studio</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="833"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="73"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;You have a choice:&lt;/p&gt;&lt;p&gt; * Analyze all Debug and Release configurations&lt;/p&gt;&lt;p&gt; * Only analyze the first matching Debug configuration&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Du har ett val:&lt;/p&gt;&lt;p&gt; * Analysera alla Debug och Release konfigurationer&lt;/p&gt;&lt;p&gt; * Analysera bara den första matchande Debug konfigurationen&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="60"/>
        <location filename="projectfile.ui" line="422"/>
        <source>Browse...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="76"/>
        <source>Analyze all Visual Studio configurations</source>
        <translation>Analysera alla Visual Studio konfigurationer</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="113"/>
        <source>Selected VS Configurations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="147"/>
        <source>Paths:</source>
        <translation>Sökvägar:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="181"/>
        <location filename="projectfile.ui" line="296"/>
        <source>Add...</source>
        <translation>Lägg till...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="188"/>
        <location filename="projectfile.ui" line="303"/>
        <location filename="projectfile.ui" line="671"/>
        <source>Edit</source>
        <translation>Redigera</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="195"/>
        <location filename="projectfile.ui" line="310"/>
        <location filename="projectfile.ui" line="678"/>
        <location filename="projectfile.ui" line="721"/>
        <source>Remove</source>
        <translation>Ta bort</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="242"/>
        <source>Undefines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="252"/>
        <source>Undefines must be separated by a semicolon. Example: UNDEF1;UNDEF2;UNDEF3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="265"/>
        <source>Include Paths:</source>
        <translation>Include sökvägar:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="415"/>
        <source>This is a workfolder that Cppcheck will use for various purposes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="448"/>
        <source>Clang (experimental)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="464"/>
        <source>Normal analysis -- Avoid false positives.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="474"/>
        <source>Bug hunting -- Generates mostly noise. The goal is to be &quot;soundy&quot; and detect most bugs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="481"/>
        <source>If you want to design your classes to be as flexible and robust as possible then the public interface must be very robust. Cppcheck will asumme that arguments can take *any* value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="506"/>
        <source>Check code in headers  (should be ON normally. if you want a limited quick analysis then turn this OFF)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="559"/>
        <source>Max recursion in template instantiation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="620"/>
        <source>Filepaths in warnings will be relative to this path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="636"/>
        <source>If tags are added, you will be able to right click on warnings and set one of these tags. You can manually categorize warnings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="646"/>
        <source>Exclude source files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="657"/>
        <source>Exclude folder...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="664"/>
        <source>Exclude file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="810"/>
        <source>MISRA C 2012</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="819"/>
        <source>MISRA rule texts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="826"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copy/paste the text from Appendix A &amp;quot;Summary of guidelines&amp;quot; from the MISRA C 2012 pdf to a text file.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="845"/>
        <source>External tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Includes</source>
        <translation type="obsolete">Include</translation>
    </message>
    <message>
        <source>Include directories:</source>
        <translation type="obsolete">Include sökvägar</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="330"/>
        <source>Up</source>
        <translation>Upp</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="337"/>
        <source>Down</source>
        <translation>Ned</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="368"/>
        <source>Platform</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="403"/>
        <location filename="projectfile.ui" line="458"/>
        <source>Analysis</source>
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
        <source>Clang</source>
        <translation type="obsolete">Clang</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="484"/>
        <source>Check that each class has a safe public interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="500"/>
        <source>Limit analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="516"/>
        <source>Check code in unused templates (should be ON normally, however in theory you can safely ignore warnings in unused templates)</source>
        <oldsource>Check code in unused templates  (slower and less accurate analysis)</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="528"/>
        <source>Max CTU depth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="608"/>
        <source>Warning options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="614"/>
        <source>Root path:</source>
        <translation>Bas sökväg:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="630"/>
        <source>Warning tags (separated by semicolon)</source>
        <translation>Varnings taggar (separerade med semikolon)</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="409"/>
        <source>Cppcheck build dir (whole program analysis, incremental analysis, statistics, etc)</source>
        <translation>Cppcheck build dir (whole program analys, incremental analys, statistik, etc)</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="362"/>
        <source>Types and Functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="380"/>
        <source>Libraries</source>
        <translation>Libraries</translation>
    </message>
    <message>
        <source>Exclude</source>
        <translation type="obsolete">Exkludera</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="703"/>
        <source>Suppressions</source>
        <translation>Suppressions</translation>
    </message>
    <message>
        <source>Suppression list:</source>
        <translation type="obsolete">Suppression-list:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="714"/>
        <source>Add</source>
        <translation>Lägg till</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="760"/>
        <location filename="projectfile.ui" line="766"/>
        <source>Addons</source>
        <translation>Addons</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="772"/>
        <source>Note: Addons require &lt;a href=&quot;https://www.python.org/&quot;&gt;Python&lt;/a&gt; being installed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="782"/>
        <source>Y2038</source>
        <translation>Y2038</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="789"/>
        <source>Thread safety</source>
        <translation>Tråd säkerhet</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="796"/>
        <source>Coding standards</source>
        <translation>Kodstandarder</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="803"/>
        <source>CERT</source>
        <translation>CERT</translation>
    </message>
    <message>
        <source>Extra Tools</source>
        <translation type="obsolete">Extra verktyg</translation>
    </message>
    <message>
        <source>It is common best practice to use several tools.</source>
        <translation type="obsolete">Best practice är att använda flera verktyg</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="858"/>
        <source>Clang analyzer</source>
        <translation>Clang analyzer</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="851"/>
        <source>Clang-tidy</source>
        <translation>Clang-tidy</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="221"/>
        <source>Defines:</source>
        <translation>Defines:</translation>
    </message>
</context>
<context>
    <name>ProjectFileDialog</name>
    <message>
        <location filename="projectfiledialog.cpp" line="85"/>
        <source>Project file: %1</source>
        <translation>Projektfil: %1</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="347"/>
        <source>(no rule texts file)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="353"/>
        <source>Clang-tidy (not found)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="460"/>
        <source>Select Cppcheck build dir</source>
        <translation>Välj Cppcheck build dir</translation>
    </message>
    <message>
        <source>Visual Studio (*.sln *.vcxproj);;Compile database (compile_commands.json)</source>
        <translation type="obsolete">Visual Studio (*.sln *.vcxproj);;Compile database (compile_commands.json)</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="756"/>
        <source>Select include directory</source>
        <translation>Välj include sökväg</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="784"/>
        <source>Source files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="785"/>
        <source>All files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="786"/>
        <source>Exclude file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="870"/>
        <source>Select MISRA rule texts file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="872"/>
        <source>MISRA rule texts file (%1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="736"/>
        <source>Select a directory to check</source>
        <translation>Välj mapp att analysera</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="500"/>
        <source>Visual Studio</source>
        <translation type="unfinished">Visual Studio</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="501"/>
        <source>Compile database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="502"/>
        <source>Borland C++ Builder 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="503"/>
        <source>Import Project</source>
        <translation>Importera Projekt</translation>
    </message>
    <message>
        <source>Visual Studio (*.sln *.vcxproj);;Compile database (compile_database.json)</source>
        <translation type="obsolete">Visual Studio (*.sln *.vcxproj);;Compile database (compile_database.json)</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="776"/>
        <source>Select directory to ignore</source>
        <translation>Välj sökväg att ignorera</translation>
    </message>
    <message>
        <source>Add Suppression</source>
        <translation type="obsolete">Lägg till Suppression</translation>
    </message>
    <message>
        <source>Select error id suppress:</source>
        <translation type="obsolete">Välj error Id suppress:</translation>
    </message>
</context>
<context>
    <name>QDialogButtonBox</name>
    <message>
        <source>OK</source>
        <translation type="vanished">OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="vanished">Avbryt</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="vanished">Stäng</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="vanished">Spara</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="translationhandler.cpp" line="86"/>
        <source>Unknown language specified!</source>
        <translation>Okänt språk valt!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="111"/>
        <source>Language file %1 not found!</source>
        <oldsource>Language file %1.qm not found!</oldsource>
        <translation>Språk filen %1 hittades ej!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="117"/>
        <source>Failed to load translation for language %1 from file %2</source>
        <oldsource>Failed to load translation for language %1 from file %2.qm</oldsource>
        <translation>Misslyckades med att ladda översättningen för %1 från filen %2</translation>
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
        <location filename="projectfiledialog.cpp" line="242"/>
        <source> (Not found)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="71"/>
        <source>Thin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="73"/>
        <source>ExtraLight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="75"/>
        <source>Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="77"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="79"/>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="81"/>
        <source>DemiBold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="83"/>
        <source>Bold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="85"/>
        <source>ExtraBold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="87"/>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="71"/>
        <source>Editor Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="74"/>
        <source>Editor Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="77"/>
        <source>Highlight Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="80"/>
        <source>Line Number Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="83"/>
        <source>Line Number Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="86"/>
        <source>Keyword Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="89"/>
        <source>Keyword Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="92"/>
        <source>Class Foreground Color</source>
        <oldsource>Class ForegroundColor</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="95"/>
        <source>Class Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="98"/>
        <source>Quote Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="101"/>
        <source>Quote Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="104"/>
        <source>Comment Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="107"/>
        <source>Comment Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="110"/>
        <source>Symbol Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="113"/>
        <source>Symbol Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="116"/>
        <source>Symbol Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="136"/>
        <source>Set to Default Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="138"/>
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
        <translation>Avbryt</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="36"/>
        <source>Close</source>
        <translation>Stäng</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="37"/>
        <source>Save</source>
        <translation>Spara</translation>
    </message>
</context>
<context>
    <name>ResultsTree</name>
    <message>
        <location filename="resultstree.cpp" line="1442"/>
        <source>File</source>
        <translation>Fil</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1442"/>
        <source>Severity</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1442"/>
        <source>Line</source>
        <translation>Rad</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1442"/>
        <source>Summary</source>
        <translation>Sammanfattning</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="158"/>
        <source>Undefined file</source>
        <translation>Odefinierad fil</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="659"/>
        <source>Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="846"/>
        <source>Could not find file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="850"/>
        <source>Please select the folder &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="851"/>
        <source>Select Directory &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="853"/>
        <source>Please select the directory where file is located.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Inconclusive]</source>
        <translation type="obsolete">[Inconclusive]</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="347"/>
        <source>debug</source>
        <translation>debug</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="284"/>
        <source>note</source>
        <translation>note</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="658"/>
        <source>Recheck</source>
        <translation>Analysera om</translation>
    </message>
    <message>
        <source>Copy filename</source>
        <translation type="obsolete">Kopiera filnamn</translation>
    </message>
    <message>
        <source>Copy full path</source>
        <translation type="obsolete">Kopiera full sökväg</translation>
    </message>
    <message>
        <source>Copy message</source>
        <translation type="obsolete">Kopiera meddelande</translation>
    </message>
    <message>
        <source>Copy message id</source>
        <translation type="obsolete">Kopiera meddelande id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="660"/>
        <source>Hide</source>
        <translation>Dölj</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="661"/>
        <source>Hide all with id</source>
        <translation>Dölj alla med id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="681"/>
        <source>Suppress selected id(s)</source>
        <translation>Stäng av valda id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="662"/>
        <source>Open containing folder</source>
        <translation>Öppna mapp</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="651"/>
        <source>Edit contract..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="685"/>
        <source>Suppress</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="701"/>
        <location filename="resultstree.cpp" line="1442"/>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="703"/>
        <source>No tag</source>
        <translation>Ingen tag</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="745"/>
        <location filename="resultstree.cpp" line="759"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="746"/>
        <source>No editor application configured.

Configure the editor application for Cppcheck in preferences/Applications.</source>
        <oldsource>Configure the text file viewer program in Cppcheck preferences/Applications.</oldsource>
        <translation>Ingen editor konfigurerad.

Konfigurera program i inställningar/program.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="760"/>
        <source>No default editor application selected.

Please select the default editor application in preferences/Applications.</source>
        <translation>Ingen standard editor vald.

Vänligen välj standard editor i inställningar/Program.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="786"/>
        <source>Could not find the file!</source>
        <translation>Kunde inte hitta filen!</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="832"/>
        <source>Could not start %1

Please check the application path and parameters are correct.</source>
        <translation>Kunde inte starta %1

Kontrollera att sökvägen och parametrarna är korrekta.</translation>
    </message>
    <message>
        <source>Could not find file:
%1
Please select the directory where file is located.</source>
        <translation type="obsolete">Kunde inte hitta filen:
%1
Välj mappen där filen finns.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="854"/>
        <source>Select Directory</source>
        <translation>Välj mapp</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1442"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1442"/>
        <source>Inconclusive</source>
        <translation>Inconclusive</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1442"/>
        <source>Since date</source>
        <translation>Sedan datum</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="329"/>
        <source>style</source>
        <translation>stil</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="332"/>
        <source>error</source>
        <translation>fel</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="335"/>
        <source>warning</source>
        <translation>varning</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="338"/>
        <source>performance</source>
        <translation>prestanda</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="341"/>
        <source>portability</source>
        <translation>portabilitet</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="344"/>
        <source>information</source>
        <translation>information</translation>
    </message>
</context>
<context>
    <name>ResultsView</name>
    <message>
        <location filename="resultsview.cpp" line="252"/>
        <source>Print Report</source>
        <translation>Skriv ut rapport</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="271"/>
        <source>No errors found, nothing to print.</source>
        <translation>Inga fel hittades, inget att skriva ut.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="315"/>
        <source>%p% (%1 of %2 files checked)</source>
        <translation>%p% (%1 av %2 filer analyserade)</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="332"/>
        <location filename="resultsview.cpp" line="343"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="333"/>
        <source>No errors found.</source>
        <translation>Inga fel hittades.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="340"/>
        <source>Errors were found, but they are configured to be hidden.
To toggle what kind of errors are shown, open view menu.</source>
        <translation>Fel hittades, men de visas ej.
För att ställa in vilka fel som skall visas använd visa menyn.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="387"/>
        <location filename="resultsview.cpp" line="406"/>
        <source>Failed to read the report.</source>
        <translation>Misslyckades att läsa rapporten.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="394"/>
        <source>XML format version 1 is no longer supported.</source>
        <translation>XML format version 1 stöds ej längre.</translation>
    </message>
    <message>
        <source>Summary</source>
        <translation type="obsolete">Sammanfattning</translation>
    </message>
    <message>
        <source>Message</source>
        <translation type="obsolete">Meddelande</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="454"/>
        <source>First included by</source>
        <translation>Först inkluderad av</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="459"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="461"/>
        <source>Bug hunting analysis is incomplete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="582"/>
        <source>Clear Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="583"/>
        <source>Copy this Log entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="584"/>
        <source>Copy complete Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No errors found, nothing to save.</source>
        <translation type="vanished">Inga fel hittades, ingenting att spara.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="234"/>
        <location filename="resultsview.cpp" line="242"/>
        <source>Failed to save the report.</source>
        <translation>Misslyckades med att spara rapporten.</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="26"/>
        <source>Results</source>
        <translation>Resultat</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="82"/>
        <source>Analysis Log</source>
        <translation>Analys Log</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="104"/>
        <source>Warning Details</source>
        <translation>Varningsdetaljer</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="158"/>
        <source>Functions</source>
        <translation type="unfinished">Funktioner</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="196"/>
        <source>Variables</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="217"/>
        <source>Only show variable names that contain text:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="164"/>
        <location filename="resultsview.ui" line="229"/>
        <source>Configured contracts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="178"/>
        <location filename="resultsview.ui" line="243"/>
        <source>Missing contracts:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScratchPad</name>
    <message>
        <location filename="scratchpad.ui" line="14"/>
        <source>Scratchpad</source>
        <translation>Scratchpad</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="20"/>
        <source>Copy or write some C/C++ code here:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="37"/>
        <source>Optionally enter a filename (mainly for automatic language detection) and click on &quot;Check&quot;:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="71"/>
        <source>filename</source>
        <translation>Filnamn</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="78"/>
        <source>Check</source>
        <translation>Analysera</translation>
    </message>
</context>
<context>
    <name>Settings</name>
    <message>
        <location filename="settings.ui" line="14"/>
        <source>Preferences</source>
        <translation>Inställningar</translation>
    </message>
    <message>
        <location filename="settings.ui" line="24"/>
        <source>General</source>
        <translation>Allmänt</translation>
    </message>
    <message>
        <source>Include paths:</source>
        <translation type="obsolete">Include sökvägar:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="195"/>
        <source>Add...</source>
        <translation>Lägg till...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="41"/>
        <source>Number of threads: </source>
        <translation>Antal trådar:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="85"/>
        <source>Ideal count:</source>
        <translation>Optimalt värde:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="114"/>
        <source>Force checking all #ifdef configurations</source>
        <oldsource>Check all #ifdef configurations</oldsource>
        <translation>Kontrollera alla #ifdef konfigurationer</translation>
    </message>
    <message>
        <location filename="settings.ui" line="121"/>
        <source>Show full path of files</source>
        <translation>Visa den fulla sökvägen för filer</translation>
    </message>
    <message>
        <location filename="settings.ui" line="128"/>
        <source>Show &quot;No errors found&quot; message when no errors found</source>
        <translation>Visa &quot;Inga fel hittades&quot; meddelande när inga fel hittas</translation>
    </message>
    <message>
        <location filename="settings.ui" line="135"/>
        <source>Display error Id in column &quot;Id&quot;</source>
        <translation>Visa meddelande id i kolumn &quot;Id&quot;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="142"/>
        <source>Enable inline suppressions</source>
        <translation>Använd inline suppressions</translation>
    </message>
    <message>
        <location filename="settings.ui" line="149"/>
        <source>Check for inconclusive errors also</source>
        <translation>Kör inconclusive analys</translation>
    </message>
    <message>
        <location filename="settings.ui" line="156"/>
        <source>Show statistics on check completion</source>
        <translation>Visa statistik när analys är klar</translation>
    </message>
    <message>
        <location filename="settings.ui" line="176"/>
        <source>Show internal warnings in log</source>
        <translation>Visa interna fel i loggen</translation>
    </message>
    <message>
        <location filename="settings.ui" line="287"/>
        <source>Addons</source>
        <translation>Addons</translation>
    </message>
    <message>
        <location filename="settings.ui" line="293"/>
        <source>Python binary (leave this empty to use python in the PATH)</source>
        <translation>Python binär fil (lämna tom för att använda python i PATH)</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="331"/>
        <source>MISRA rule texts file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="338"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copy/paste the text from Appendix A &amp;quot;Summary of guidelines&amp;quot; from the MISRA C 2012 pdf to a text file.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="371"/>
        <source>Clang</source>
        <translation>Clang</translation>
    </message>
    <message>
        <location filename="settings.ui" line="377"/>
        <source>Clang path (leave empty to use system PATH)</source>
        <translation>Clang sökväg (lämna tom för att använda PATH)</translation>
    </message>
    <message>
        <location filename="settings.ui" line="400"/>
        <source>Visual Studio headers</source>
        <translation>Visual Studio headers</translation>
    </message>
    <message>
        <location filename="settings.ui" line="406"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Paths to Visual Studio headers, separated by semicolon &apos;;&apos;.&lt;/p&gt;&lt;p&gt;You can open a Visual Studio command prompt, write &amp;quot;SET INCLUDE&amp;quot;. Then copy/paste the paths.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sökvägar till Visual Studio headers, separerade med semikolon &apos;;&apos;.&lt;/p&gt;&lt;p&gt;Du kan öppna en Visual Studio command prompt, och skriva &amp;quot;SET INCLUDE&amp;quot;. Sedan kopiera och klistra in sökvägarna.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="436"/>
        <source>Code Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="442"/>
        <source>Code Editor Style</source>
        <translation type="unfinished"></translation>
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
        <source>Paths</source>
        <translation type="obsolete">Sökvägar</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="obsolete">Redigera</translation>
    </message>
    <message>
        <location filename="settings.ui" line="209"/>
        <source>Remove</source>
        <translation>Ta bort</translation>
    </message>
    <message>
        <location filename="settings.ui" line="184"/>
        <source>Applications</source>
        <translation>Program</translation>
    </message>
    <message>
        <location filename="settings.ui" line="202"/>
        <location filename="settings.ui" line="478"/>
        <source>Edit...</source>
        <translation>Redigera...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="216"/>
        <source>Set as default</source>
        <translation>Sätt förvald</translation>
    </message>
    <message>
        <location filename="settings.ui" line="239"/>
        <source>Reports</source>
        <translation>Rapporter</translation>
    </message>
    <message>
        <location filename="settings.ui" line="245"/>
        <source>Save all errors when creating report</source>
        <translation>Spara alla fel</translation>
    </message>
    <message>
        <location filename="settings.ui" line="252"/>
        <source>Save full path to files in reports</source>
        <translation>Spara fulla sökvägar</translation>
    </message>
    <message>
        <location filename="settings.ui" line="273"/>
        <source>Language</source>
        <translation>Språk</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation type="obsolete">Avancerade</translation>
    </message>
    <message>
        <source>&amp;Show inconclusive errors</source>
        <translation type="obsolete">Visa inconclusive meddelanden</translation>
    </message>
    <message>
        <source>S&amp;how internal warnings in log</source>
        <translation type="obsolete">Visa interna fel i loggen</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="settingsdialog.cpp" line="108"/>
        <source>N/A</source>
        <translation>Ej tillgängligt</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="219"/>
        <source>The executable file &quot;%1&quot; is not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="230"/>
        <source>Add a new application</source>
        <translation>Lägg till program</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="260"/>
        <source>Modify an application</source>
        <translation>Ändra program</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="265"/>
        <source> [Default]</source>
        <translation> [Vald]</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="290"/>
        <source>[Default]</source>
        <translation>[Förvald]</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="345"/>
        <source>Select python binary</source>
        <translation>Välj python binär</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="352"/>
        <source>Select MISRA File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="383"/>
        <source>Select clang path</source>
        <translation>Välj Clang sökväg</translation>
    </message>
    <message>
        <source>Select include directory</source>
        <translation type="obsolete">Välj include mapp</translation>
    </message>
</context>
<context>
    <name>StatsDialog</name>
    <message>
        <location filename="statsdialog.ui" line="14"/>
        <location filename="statsdialog.ui" line="248"/>
        <location filename="statsdialog.cpp" line="159"/>
        <location filename="statsdialog.cpp" line="206"/>
        <source>Statistics</source>
        <translation>Statistik</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="27"/>
        <location filename="statsdialog.cpp" line="197"/>
        <source>Project</source>
        <translation>Projekt</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="33"/>
        <source>Project:</source>
        <translation>Projekt:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="53"/>
        <source>Paths:</source>
        <translation>Sökvägar:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="85"/>
        <source>Include paths:</source>
        <translation>Include sökvägar:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="108"/>
        <source>Defines:</source>
        <translation>Defines:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="131"/>
        <source>Undefines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="165"/>
        <location filename="statsdialog.cpp" line="202"/>
        <source>Previous Scan</source>
        <translation>Föregående analys</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="171"/>
        <source>Path Selected:</source>
        <translation>Vald sökväg:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="181"/>
        <source>Number of Files Scanned:</source>
        <translation>Antal analyserade filer:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="201"/>
        <source>Scan Duration:</source>
        <translation>Analys tid:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="256"/>
        <source>Errors:</source>
        <translation>Fel:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="274"/>
        <source>Warnings:</source>
        <translation>Varningar:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="292"/>
        <source>Stylistic warnings:</source>
        <translation>Stil varningar:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="310"/>
        <source>Portability warnings:</source>
        <translation>Portabilitets varningar:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="328"/>
        <source>Performance issues:</source>
        <translation>Prestanda varningar:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="346"/>
        <source>Information messages:</source>
        <translation>Informations meddelanden:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="363"/>
        <source>History</source>
        <translation>Historik</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="369"/>
        <source>File:</source>
        <translation>Fil:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="407"/>
        <source>Copy to Clipboard</source>
        <translation>Kopiera</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="414"/>
        <source>Pdf Export</source>
        <translation>Pdf Export</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="135"/>
        <source>1 day</source>
        <translation>1 dag</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="135"/>
        <source>%1 days</source>
        <translation>%1 dagar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="137"/>
        <source>1 hour</source>
        <translation>1 timme</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="137"/>
        <source>%1 hours</source>
        <translation>%1 timmar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="139"/>
        <source>1 minute</source>
        <translation>1 minut</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="139"/>
        <source>%1 minutes</source>
        <translation>%1 minuter</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="141"/>
        <source>1 second</source>
        <translation>1 sekund</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="141"/>
        <source>%1 seconds</source>
        <translation>%1 sekunder</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="145"/>
        <source>0.%1 seconds</source>
        <translation>0.%1 sekunder</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="147"/>
        <source> and </source>
        <translation> och </translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="174"/>
        <source>Export PDF</source>
        <translation>Exportera PDF</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="196"/>
        <source>Project Settings</source>
        <translation>Projekt inställningar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="198"/>
        <source>Paths</source>
        <translation>Sökvägar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="199"/>
        <source>Include paths</source>
        <translation>Include sökvägar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="200"/>
        <source>Defines</source>
        <translation>Definitioner</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="201"/>
        <source>Undefines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="203"/>
        <source>Path selected</source>
        <translation>Vald sökväg</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="204"/>
        <source>Number of files scanned</source>
        <translation>Antal analyserade filer</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="205"/>
        <source>Scan duration</source>
        <translation>Tid</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="161"/>
        <location filename="statsdialog.cpp" line="207"/>
        <source>Errors</source>
        <translation>Fel</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="87"/>
        <source>File: </source>
        <translation>Fil:</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="87"/>
        <source>No cppcheck build dir</source>
        <translation>Ingen Cppcheck build dir</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="163"/>
        <location filename="statsdialog.cpp" line="208"/>
        <source>Warnings</source>
        <translation>Varningar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="165"/>
        <location filename="statsdialog.cpp" line="209"/>
        <source>Style warnings</source>
        <translation>Stil varningar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="167"/>
        <location filename="statsdialog.cpp" line="210"/>
        <source>Portability warnings</source>
        <translation>Portabilitetsvarningar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="169"/>
        <location filename="statsdialog.cpp" line="211"/>
        <source>Performance warnings</source>
        <translation>Prestanda varningar</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="171"/>
        <location filename="statsdialog.cpp" line="212"/>
        <source>Information messages</source>
        <translation>Informationsmeddelanden</translation>
    </message>
</context>
<context>
    <name>ThreadResult</name>
    <message>
        <location filename="threadresult.cpp" line="51"/>
        <source>%1 of %2 files checked</source>
        <translation>%1 av %2 filer analyserade</translation>
    </message>
</context>
<context>
    <name>TranslationHandler</name>
    <message>
        <location filename="translationhandler.cpp" line="124"/>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation>Misslyckades att ändra språk:

%1

Språket har nollställts till Engelska. Öppna Preferences och välj något av de tillgängliga språken.</translation>
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
        <translation>inconclusive</translation>
    </message>
</context>
<context>
    <name>VariableContractsDialog</name>
    <message>
        <location filename="variablecontractsdialog.ui" line="14"/>
        <source>Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="variablecontractsdialog.ui" line="20"/>
        <source>You can specify min and max value for the variable here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="variablecontractsdialog.ui" line="29"/>
        <source>Min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="variablecontractsdialog.ui" line="39"/>
        <source>Max</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>toFilterString</name>
    <message>
        <location filename="common.cpp" line="53"/>
        <source>All supported files (%1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="common.cpp" line="58"/>
        <source>All files (%1)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
