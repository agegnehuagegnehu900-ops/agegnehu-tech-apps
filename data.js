import { travelVocabulary, familyVocabulary, workVocabulary, emergencyVocabulary } from './vocabulary';
import { grammarLessons } from './grammar';

export const chapters = [
  {
    id: '1',
    title: 'ምዕራፍ 1: የጀርመንኛ ፊደላት (Das Deutsche Alphabet)',
    author: 'Agegnehu Tech',
    content: 'በዚህ ምዕራፍ ሁሉንም 26 መደበኛ የጀርመንኛ ፊደላት እና 4 ልዩ ፊደላት (Ä, Ö, Ü, ß) በዝርዝር እንማራለን። ለእያንዳንዱ ፊደል የአነባበብ መመሪያ በአማርኛ እና በእንግሊዝኛ ተሰጥቷል፣ እንዲሁም የምሳሌ ቃላት ተዘርዝረዋል። ጀርመንኛ ቋንቋ 30 ፊደላት አሉት — 26 መደበኛ (A-Z) እና 4 ልዩ ምልክቶች (Ä, Ö, Ü, ß)። ጀርመንኛ የሚጻፈው በላቲን ፊደላት ሲሆን፣ የአነባበብ ሥርዓቱ ከእንግሊዝኛ በተወሰነ ደረጃ ይለያል። ይህ ምዕራፍ እንደ መጽሐፍ ሙሉ ለሙሉ ዝርዝር መረጃ ይሰጣል።',
    details: [
      { de: 'A a — አ (Ah)', am: 'አነባበብ: እንደ አማርኛው "አ" ይነበባል። ረጅም ድምጽ ነው።\nEnglish: Pronounced like "ah" in "father".\n\nምሳሌዎች (Examples):\n• Apfel (አፕፈል) = Apple / ፖም\n• Arbeit (አርባይት) = Work / ሥራ\n• Abend (አበንድ) = Evening / ማታ\n• Anfang (አንፋንግ) = Beginning / መጀመሪያ\n• Auge (አውገ) = Eye / ዓይን\n\nማስታወሻ: "A" በጀርመንኛ ሁልጊዜ ግልጽና ረጅም "አ" ድምጽ ይሰጣል። ከእንግሊዝኛው "A" በተለየ መልኩ ድምጹ አይለዋወጥም። በማንኛውም ቃል ውስጥ ቢገኝ ተመሳሳይ ድምጽ ይኖረዋል። ጀርመኖች ይህንን ፊደል ሲናገሩ አፋቸውን ሰፊ አድርገው ይከፍታሉ።' },

      { de: 'B b — ቤ (Beh)', am: 'አነባበብ: እንደ አማርኛው "ብ/ቤ" ይነበባል።\nEnglish: Pronounced like "b" in "bed".\n\nምሳሌዎች (Examples):\n• Buch (ቡኽ) = Book / መጽሐፍ\n• Brot (ብሮት) = Bread / ዳቦ\n• Bruder (ብሩደር) = Brother / ወንድም\n• Baum (ባውም) = Tree / ዛፍ\n• Berlin (ቤርሊን) = Berlin / በርሊን\n\nማስታወሻ: "B" በጀርመንኛ ከእንግሊዝኛው ጋር ተመሳሳይ ነው። ነገር ግን በቃል መጨረሻ ላይ ሲመጣ ድምጹ ወደ "ፕ" ሊቀየር ይችላል። ለምሳሌ "Urlaub" (ኡርላውፕ) ሲባል "b" እንደ "p" ይነበባል። ይህ ደንብ "Auslautverhärtung" (የመጨረሻ ድምጽ ማጠንከር) ይባላል።' },

      { de: 'C c — ጼ (Tseh)', am: 'አነባበብ: እንደ "ጼ" ይነበባል (ከ "TS" ድምጽ ጋር ተመሳሳይ)።\nEnglish: Pronounced like "ts" in "tsunami".\n\nምሳሌዎች (Examples):\n• Computer (ኮምፒውተር) = Computer / ኮምፒውተር\n• Café (ካፌ) = Café / ካፌ\n• Celsius (ጸልሲዩስ) = Celsius / ሴልሺየስ\n• Chef (ሸፍ) = Boss / አለቃ\n• China (ሺና/ኪና) = China / ቻይና\n\nማስታወሻ: "C" በጀርመንኛ ብቻውን ብዙም አይጠቅምም — ብዙ ጊዜ ከሌላ ፊደል ጋር ይጣመራል (ለምሳሌ CH, CK, SCH)። "CH" ድምጽ ሁለት ዓይነት ሊሆን ይችላል: ከ "e" ወይም "i" በኋላ ለስላሳ "ኽ" ድምጽ (እንደ "ich" — ኢኽ)፣ ከ "a", "o", "u" በኋላ ጠንካራ "ኽ" ድምጽ (እንደ "ach" — አኽ)። ይህ ልዩ ባሕሪ ጀርመንኛ ቋንቋን ከሌሎች ቋንቋዎች የሚለየው ነው።' },

      { de: 'D d — ዴ (Deh)', am: 'አነባበብ: እንደ አማርኛው "ድ" ይነበባል።\nEnglish: Pronounced like "d" in "day".\n\nምሳሌዎች (Examples):\n• Danke (ዳንከ) = Thank you / አመሰግናለሁ\n• Deutschland (ዶይችላንድ) = Germany / ጀርመን\n• Doktor (ዶክቶር) = Doctor / ዶክተር\n• Dorf (ዶርፍ) = Village / መንደር\n• Dienstag (ዲንስታግ) = Tuesday / ማክሰኞ\n\nማስታወሻ: "D" በቃል መጨረሻ ላይ ሲመጣ እንደ "T" ይነበባል። ለምሳሌ "Hund" (ሁንት) ሲባል ውሻ ማለት ነው — "d" እንደ "t" ይሰማል። ይህ ደንብ ከ "B" ጋር ተመሳሳይ ነው (Auslautverhärtung)።' },

      { de: 'E e — ኤ (Eh)', am: 'አነባበብ: እንደ አማርኛው "ኤ" ይነበባል (ረጅም)፣ ወይም እንደ "እ" (አጭር)።\nEnglish: Long "ay" as in "say", or short "e" as in "bed".\n\nምሳሌዎች (Examples):\n• Essen (ኤሰን) = Food/To eat / ምግብ/መብላት\n• Eltern (ኤልተርን) = Parents / ወላጆች\n• Erde (ኤርደ) = Earth / ምድር\n• Esel (ኤዘል) = Donkey / አህያ\n• Ei (አይ) = Egg / እንቁላል\n\nማስታወሻ: "E" ሁለት ዋና ድምጾች አሉት — ረጅም "ኤ" (ለምሳሌ "Tee" = ሻይ) እና አጭር "እ" (ለምሳሌ "Bett" = አልጋ)። ፊደሉ ድርብ ሲሆን ("ee") ሁልጊዜ ረጅም ይነበባል። በተጨማሪ "E" በብዙ ቃላት መጨረሻ ላይ ደካማ "ኧ" ድምጽ ይሰጣል (ለምሳሌ "Schule" = ሹለ)።' },

      { de: 'F f — ኤፍ (Eff)', am: 'አነባበብ: እንደ አማርኛው "ፍ" ይነበባል።\nEnglish: Pronounced like "f" in "fish".\n\nምሳሌዎች (Examples):\n• Frau (ፍራው) = Woman/Mrs. / ሴት/ወይዘሮ\n• Freund (ፍሮይንድ) = Friend / ጓደኛ\n• Fisch (ፊሽ) = Fish / ዓሣ\n• Familie (ፋሚሊየ) = Family / ቤተሰብ\n• Fenster (ፌንስተር) = Window / መስኮት\n\nማስታወሻ: "F" በጀርመንኛ ከእንግሊዝኛው ጋር ፍጹም ተመሳሳይ ነው። ልዩ ነገር "V" ፊደል ብዙ ጊዜ እንደ "F" ይነበባል (ለምሳሌ "Vater" = ፋተር)።' },

      { de: 'G g — ጌ (Geh)', am: 'አነባበብ: እንደ አማርኛው "ግ" ይነበባል (ጠንካራ)።\nEnglish: Always hard "g" as in "go".\n\nምሳሌዎች (Examples):\n• Guten Tag (ጉተን ታግ) = Good day / ደህና ዋሉ\n• Geld (ጌልድ) = Money / ገንዘብ\n• Groß (ግሮስ) = Big / ትልቅ\n• Garten (ጋርተን) = Garden / የአትክልት ቦታ\n• Gesundheit (ገዙንድሃይት) = Health / ጤና\n\nማስታወሻ: "G" በጀርመንኛ ሁልጊዜ ጠንካራ "ግ" ድምጽ ይሰጣል — ከእንግሊዝኛው "gene" ለስላሳ ድምጽ ጋር አይገናኝም። በቃል መጨረሻ ላይ "G" እንደ "K" ሊሰማ ይችላል (ለምሳሌ "Tag" = ታክ)። ከ "ig" ድምጽ ጋር ሲጣመር "ኢኽ" ይላል (ለምሳሌ "fertig" = ፌርቲኽ = ዝግጁ)።' },

      { de: 'H h — ሃ (Hah)', am: 'አነባበብ: እንደ አማርኛው "ህ" ይነበባል (ለስላሳ)።\nEnglish: Pronounced like "h" in "hello".\n\nምሳሌዎች (Examples):\n• Haus (ሃውስ) = House / ቤት\n• Hund (ሁንት) = Dog / ውሻ\n• Hilfe (ሂልፈ) = Help / እርዳታ\n• Herz (ሄርጽ) = Heart / ልብ\n• Hunger (ሁንገር) = Hunger / ረሃብ\n\nማስታወሻ: "H" በቃል መጀመሪያ ላይ ግልጽ "ህ" ድምጽ ይሰጣል። ነገር ግን ከእንደ-ድምጽ (vowel) በኋላ ሲመጣ ድምጹ ዝም ይላል — ምንም አይነበብም ግን የፊት ፊደሉን ረጅም ያደርገዋል። ለምሳሌ "Uhr" (ኡር) = ሰዓት — "H" አይሰማም ግን "U" ረጅም ይሆናል። "Sahne" (ዛነ) = ክሬም — "H" ዝም ይላል።' },

      { de: 'I i — ኢ (Ih)', am: 'አነባበብ: እንደ አማርኛው "ኢ" ይነበባል (ረጅም) ወይም "ኢ" (አጭር)።\nEnglish: Long "ee" as in "see", or short "i" as in "sit".\n\nምሳሌዎች (Examples):\n• Ich (ኢኽ) = I / እኔ\n• Idee (ኢዴ) = Idea / ሐሳብ\n• Insel (ኢንዘል) = Island / ደሴት\n• Igel (ኢገል) = Hedgehog / ጃርት\n• Information (ኢንፎርማጼዮን) = Information / መረጃ\n\nማስታወሻ: "I" ረጅም ሲሆን "ኢ" (ለምሳሌ "Igel")፣ አጭር ሲሆን ከ "ኢ" ትንሽ የተለየ ድምጽ ይሰጣል (ለምሳሌ "ist" = ኢስት)። "ie" ድርብ ፊደል ሁልጊዜ ረጅም "ኢ" ድምጽ ይሰጣል (ለምሳሌ "Liebe" = ሊበ = ፍቅር)።' },

      { de: 'J j — ዮት (Yot)', am: 'አነባበብ: እንደ አማርኛው "ይ" ይነበባል — ከእንግሊዝኛው "Y" ጋር ተመሳሳይ።\nEnglish: Pronounced like "y" in "yes" (NOT like English "j").\n\nምሳሌዎች (Examples):\n• Ja (ያ) = Yes / አዎ\n• Jahr (ያር) = Year / ዓመት\n• Juni (ዩኒ) = June / ሰኔ\n• Junge (ዩንገ) = Boy / ልጅ (ወንድ)\n• Jacke (ያከ) = Jacket / ጃኬት\n\nማስታወሻ: ይህ ፊደል ለኢትዮጵያውያን ተማሪዎች ትኩረት ይፈልጋል! በእንግሊዝኛ "J" እንደ "ጅ" ይነበባል (ለምሳሌ "Jump")፣ ግን በጀርመንኛ "J" ሁልጊዜ እንደ "ይ" ይነበባል! "Ja" ማለት "ያ" እንጂ "ጃ" አይደለም። ይህ ትልቅ ልዩነት ነው — ሁልጊዜ ያስታውሱ።' },

      { de: 'K k — ካ (Kah)', am: 'አነባበብ: እንደ አማርኛው "ክ" ይነበባል (ጠንካራ)።\nEnglish: Pronounced like "k" in "kite".\n\nምሳሌዎች (Examples):\n• Kind (ኪንድ) = Child / ልጅ\n• Kaffee (ካፌ) = Coffee / ቡና\n• Kirche (ኪርኸ) = Church / ቤተክርስቲያን\n• Katze (ካጸ) = Cat / ድመት\n• Kuchen (ኩኸን) = Cake / ኬክ\n\nማስታወሻ: "K" በጀርመንኛ ሁልጊዜ ግልጽ "ክ" ድምጽ ይሰጣል። ከእንግሊዝኛው በተለየ "K" ከ "N" ፊት ለፊት ቢመጣም ይነበባል (ለምሳሌ "Knie" = ክኒ = ጉልበት)። "CK" ድርብ ፊደል ጠንካራ "ክ" ድምጽ ይሰጣል (ለምሳሌ "Brücke" = ድልድይ)።' },

      { de: 'L l — ኤል (Ell)', am: 'አነባበብ: እንደ አማርኛው "ል" ይነበባል።\nEnglish: Pronounced like "l" in "land".\n\nምሳሌዎች (Examples):\n• Liebe (ሊበ) = Love / ፍቅር\n• Land (ላንድ) = Country / ሀገር\n• Licht (ሊኽት) = Light / ብርሃን\n• Lehrer (ሌረር) = Teacher / መምህር\n• Leben (ሌበን) = Life / ሕይወት\n\nማስታወሻ: "L" በጀርመንኛ ሁልጊዜ ግልጽ ድምጽ ይሰጣል። ከእንግሊዝኛው "dark L" (ለምሳሌ "ball") በተለየ ጀርመንኛ ሁልጊዜ "bright L" ይጠቀማል — ምላስ ወደ ላይ ጥርሶች ጀርባ ይነካል።' },

      { de: 'M m — ኤም (Emm)', am: 'አነባበብ: እንደ አማርኛው "ም" ይነበባል።\nEnglish: Pronounced like "m" in "mother".\n\nምሳሌዎች (Examples):\n• Mutter (ሙተር) = Mother / እናት\n• Mann (ማን) = Man / ሰው (ወንድ)\n• Milch (ሚልኽ) = Milk / ወተት\n• Montag (ሞንታግ) = Monday / ሰኞ\n• Morgen (ሞርገን) = Morning / ጥዋት\n\nማስታወሻ: "M" በጀርመንኛ ከእንግሊዝኛና ከአማርኛ ጋር ተመሳሳይ ነው። ልዩ ነገር የለውም — በቀላሉ ይማሩት።' },

      { de: 'N n — ኤን (Enn)', am: 'አነባበብ: እንደ አማርኛው "ን" ይነበባል።\nEnglish: Pronounced like "n" in "no".\n\nምሳሌዎች (Examples):\n• Nacht (ናኽት) = Night / ሌሊት\n• Name (ናመ) = Name / ስም\n• Nein (ናይን) = No / አይ\n• Natur (ናቱር) = Nature / ተፈጥሮ\n• Nummer (ኑመር) = Number / ቁጥር\n\nማስታወሻ: "N" ከእንግሊዝኛና ከአማርኛ ጋር ተመሳሳይ ነው። ነገር ግን "NG" ድምጽ ልዩ ነው — እንደ "Ring" (ሪንግ)፣ "N" እና "G" ተዋሕደው አንድ ድምጽ ይሰጣሉ።' },

      { de: 'O o — ኦ (Oh)', am: 'አነባበብ: እንደ አማርኛው "ኦ" ይነበባል (ረጅም) ወይም አጭር "ኦ"።\nEnglish: Long "oh" as in "go", or short "o" as in "lot".\n\nምሳሌዎች (Examples):\n• Ohr (ኦር) = Ear / ጆሮ\n• Oper (ኦፐር) = Opera / ኦፔራ\n• Oma (ኦማ) = Grandma / አያት (ሴት)\n• Ordnung (ኦርድኑንግ) = Order / ሥርዓት\n• Obst (ኦብስት) = Fruit / ፍራፍሬ\n\nማስታወሻ: ረጅም "O" ክብ ከንፈር ይፈልጋል (ለምሳሌ "Ohr")። አጭር "O" ክፍት ድምጽ ነው (ለምሳሌ "Dorf" = ዶርፍ = መንደር)። "OO" ድርብ ፊደል ረጅም "ኦ" ይሰጣል (ለምሳሌ "Boot" = ቦት = ጀልባ)።' },

      { de: 'P p — ፔ (Peh)', am: 'አነባበብ: እንደ "ፕ" ይነበባል (ጠንካራ)።\nEnglish: Pronounced like "p" in "pen" (aspirated).\n\nምሳሌዎች (Examples):\n• Papa (ፓፓ) = Dad / አባት\n• Polizei (ፖሊጻይ) = Police / ፖሊስ\n• Problem (ፕሮብሌም) = Problem / ችግር\n• Platz (ፕላጽ) = Place / ቦታ\n• Post (ፖስት) = Post/Mail / ፖስታ\n\nማስታወሻ: "P" በጀርመንኛ ከእንግሊዝኛው ይልቅ ጠንካራ ነው — ትንፋሽ (aspiration) ይኖረዋል። "PF" ድርብ ፊደል ልዩ ድምጽ ነው — "ፕፍ" (ለምሳሌ "Pferd" = ፕፌርድ = ፈረስ)። ይህ ድምጽ ለጀማሪ ተማሪዎች ከባድ ሊሆን ይችላል ግን በልምምድ ይቻላል።' },

      { de: 'Q q — ኩ (Kuh)', am: 'አነባበብ: ሁልጊዜ ከ "U" ጋር ይመጣል — "QU" = "ክቭ" ይነበባል።\nEnglish: Always "QU" = "kv" sound.\n\nምሳሌዎች (Examples):\n• Qualität (ክቫሊቴት) = Quality / ጥራት\n• Quelle (ክቬለ) = Source / ምንጭ\n• Quark (ክቫርክ) = Quark (cheese) / ቋርክ\n• Quiz (ክቪዝ) = Quiz / ጥያቄ\n• Quittung (ክቪቱንግ) = Receipt / ደረሰኝ\n\nማስታወሻ: "Q" ሁልጊዜ ከ "U" ጋር ይጣመራል። ከእንግሊዝኛው "kw" በተለየ ጀርመንኛ "kv" ድምጽ ይጠቀማል። ይህ ፊደል ብዙም ጥቅም ላይ አይውልም — አብዛኛው ቃላት ከላቲን ወይም ከፈረንሳይኛ የተበደሩ ናቸው።' },

      { de: 'R r — ኤር (Err)', am: 'አነባበብ: በጉሮሮ ይነበባል — ከአማርኛው "ር" የተለየ ነው!\nEnglish: Guttural/uvular "r" (rolled in the back of the throat).\n\nምሳሌዎች (Examples):\n• Rot (ሮት) = Red / ቀይ\n• Regen (ሬገን) = Rain / ዝናብ\n• Reise (ራይዘ) = Journey / ጉዞ\n• Restaurant (ሬስቶራንት) = Restaurant / ምግብ ቤት\n• Ruhe (ሩሄ) = Quiet / ጸጥታ\n\nማስታወሻ: ይህ ፊደል ለኢትዮጵያውያን ተማሪዎች ከባድ ሊሆን ይችላል! የጀርመንኛ "R" በጉሮሮ (uvula) ላይ ይወነጨፋል — ከአማርኛው "ር" (ምላስ) በጣም ይለያል። ውሃ ስትጎረጉሩ (gargle) የሚሰማውን ድምጽ ያስቡ — ያ ነው የጀርመንኛ "R"! በቃል መጨረሻ ላይ "R" ደካማ "አ" ድምጽ ይሰጣል (ለምሳሌ "Vater" = ፋታ — "R" ዝም ይላል)።' },

      { de: 'S s — ኤስ (Ess)', am: 'አነባበብ: ከእንደ-ድምጽ ፊት "ዝ" ይነበባል፣ በሌላ ቦታ "ስ" ይነበባል።\nEnglish: "Z" before vowels, "S" elsewhere.\n\nምሳሌዎች (Examples):\n• Sonne (ዞነ) = Sun / ፀሐይ\n• Schule (ሹለ) = School / ትምህርት ቤት\n• Straße (ሽትራሰ) = Street / ጎዳና\n• Saft (ዛፍት) = Juice / ጭማቂ\n• Samstag (ዛምስታግ) = Saturday / ቅዳሜ\n\nማስታወሻ: "S" ልዩ ደንቦች አሉት: 1) ከእንደ-ድምጽ ፊት "ዝ" ይሆናል (Sonne = ዞነ)። 2) ከ "T" ወይም "P" ፊት "ሽ" ይሆናል (Straße = ሽትራሰ, Spaß = ሽፓስ)። 3) "SCH" ድርብ ፊደል ሁልጊዜ "ሽ" ይነበባል (Schule = ሹለ)። 4) ድርብ "SS" ሁልጊዜ ጠንካራ "ስ" ይነበባል (Wasser = ቫሰር)።' },

      { de: 'T t — ቴ (Teh)', am: 'አነባበብ: እንደ አማርኛው "ት" ይነበባል (ጠንካራ)።\nEnglish: Pronounced like "t" in "top" (aspirated).\n\nምሳሌዎች (Examples):\n• Tag (ታግ) = Day / ቀን\n• Tisch (ቲሽ) = Table / ጠረጴዛ\n• Telefon (ቴሌፎን) = Telephone / ስልክ\n• Tür (ቱር) = Door / በር\n• Tochter (ቶኽተር) = Daughter / ልጅ (ሴት)\n\nማስታወሻ: "T" ከጠንካራ ትንፋሽ ጋር ይነበባል። "TH" በጀርመንኛ እንደ "T" ብቻ ይነበባል (ከእንግሊዝኛው "th" ፍጹም የተለየ ነው)። ለምሳሌ "Thema" = ቴማ = ርዕስ። "TZ" ድርብ ፊደል "ጽ" ድምጽ ይሰጣል (ለምሳሌ "Katze" = ካጸ = ድመት)።' },

      { de: 'U u — ኡ (Uh)', am: 'አነባበብ: እንደ አማርኛው "ኡ" ይነበባል።\nEnglish: Pronounced like "oo" in "moon".\n\nምሳሌዎች (Examples):\n• Uhr (ኡር) = Clock / ሰዓት\n• Universität (ኡኒቨርዚቴት) = University / ዩኒቨርሲቲ\n• Urlaub (ኡርላውፕ) = Vacation / ዕረፍት\n• Umwelt (ኡምቬልት) = Environment / አካባቢ\n• Unterschied (ኡንተርሺድ) = Difference / ልዩነት\n\nማስታወሻ: ረጅም "U" ግልጽ "ኡ" ድምጽ ይሰጣል (ከንፈሮች ክብ)። አጭር "U" ትንሽ ክፍት ድምጽ ይሰጣል (ለምሳሌ "Mutter" = ሙተር = እናት)። "U" ከ "Ü" (ኡምላውት) ጋር ግራ እንዳይጋቡ — ልዩነቱ ትልቅ ነው (ከታች ይመልከቱ)።' },

      { de: 'V v — ፋው (Fau)', am: 'አነባበብ: ብዙ ጊዜ እንደ "ፍ" ይነበባል፣ አንዳንድ ጊዜ እንደ "ቭ"።\nEnglish: Usually "f" sound, sometimes "v" in foreign words.\n\nምሳሌዎች (Examples):\n• Vater (ፋተር) = Father / አባት\n• Vogel (ፎገል) = Bird / ወፍ\n• Volk (ፎልክ) = People / ሕዝብ\n• Visum (ቪዙም) = Visa / ቪዛ\n• Verb (ቨርብ) = Verb / ግስ\n\nማስታወሻ: ይህ ፊደል ለተማሪዎች ግራ የሚያጋባ ነው! በንጹህ ጀርመንኛ ቃላት "V" እንደ "ፍ" ይነበባል (Vater, Vogel, Volk)። ከውጭ በተወሰዱ ቃላት ግን እንደ "ቭ" ይነበባል (Visum, Verb, Vitamin)። ይህንን ልዩነት ለማወቅ ብዙ ማንበብና ማዳመጥ ያስፈልጋል።' },

      { de: 'W w — ቬ (Veh)', am: 'አነባበብ: እንደ "ቭ" ይነበባል — ከእንግሊዝኛው "W" ፍጹም የተለየ!\nEnglish: Pronounced like "v" in "very" (NOT like English "w").\n\nምሳሌዎች (Examples):\n• Wasser (ቫሰር) = Water / ውሃ\n• Welt (ቬልት) = World / ዓለም\n• Wir (ቪር) = We / እኛ\n• Woche (ቮኸ) = Week / ሳምንት\n• Wohnung (ቮኑንግ) = Apartment / አፓርትመንት\n\nማስታወሻ: ይህ ለኢትዮጵያውያን ተማሪዎች ቁልፍ ልዩነት ነው! "W" በጀርመንኛ እንደ "ቭ" ይነበባል! "Wasser" = "ቫሰር" እንጂ "ዋሰር" አይደለም! ይህንን ደንብ ከመጀመሪያው ሲያውቁት ትክክለኛ አነባበብ ያስችልዎታል። ብዙ ኢትዮጵያውያን ይህንን ስህተት ይሰራሉ ስለዚህ ተጠንቀቁ።' },

      { de: 'X x — ኢክስ (Iks)', am: 'አነባበብ: እንደ "ክስ" ይነበባል።\nEnglish: Pronounced like "ks" in "box".\n\nምሳሌዎች (Examples):\n• Xylophon (ክሲሎፎን) = Xylophone / ዛይሎፎን\n• Text (ቴክስት) = Text / ጽሑፍ\n• Taxi (ታክሲ) = Taxi / ታክሲ\n• Hexe (ሄክሰ) = Witch / ጠንቋይ\n• Luxus (ሉክሱስ) = Luxury / ቅንጦት\n\nማስታወሻ: "X" በጀርመንኛ ብዙም ጥቅም ላይ አይውልም — አብዛኛው ቃላት ከሌሎች ቋንቋዎች የተበደሩ ናቸው። "X" ሁልጊዜ "ክስ" ድምጽ ይሰጣል።' },

      { de: 'Y y — ኢፕሲሎን (Ypsilon)', am: 'አነባበብ: እንደ "ኢ" ወይም "ኡ" (ከ Ü ጋር ተመሳሳይ) ይነበባል።\nEnglish: Like "ü" sound or "ee" depending on word.\n\nምሳሌዎች (Examples):\n• Yoga (ዮጋ) = Yoga / ዮጋ\n• System (ዙስቴም) = System / ሥርዓት\n• Typ (ቲፕ) = Type / ዓይነት\n• Gymnasium (ጊምናዚዩም) = High school / ሁለተኛ ደረጃ ት/ቤት\n• Physik (ፊዚክ) = Physics / ፊዚክስ\n\nማስታወሻ: "Y" በጀርመንኛ ብዙ ጊዜ ከግሪክ ወይም ከውጭ ቋንቋ የተበደሩ ቃላት ውስጥ ይገኛል። ድምጹ እንደ ቃሉ ምንጭ ይለያያል — አንዳንድ ጊዜ "ኡ" (ከ Ü ጋር ተመሳሳይ)፣ አንዳንድ ጊዜ "ኢ" ድምጽ ይሰጣል።' },

      { de: 'Z z — ጸት (Tsett)', am: 'አነባበብ: እንደ "ጽ" (TS) ይነበባል — ከእንግሊዝኛው "Z" ፍጹም የተለየ!\nEnglish: Pronounced like "ts" in "tsunami" (NOT like English "z").\n\nምሳሌዎች (Examples):\n• Zeit (ጻይት) = Time / ጊዜ\n• Zug (ጹግ) = Train / ባቡር\n• Zimmer (ጺመር) = Room / ክፍል\n• Zucker (ጹከር) = Sugar / ስኳር\n• Zeitung (ጻይቱንግ) = Newspaper / ጋዜጣ\n\nማስታወሻ: ይህ ሌላ ቁልፍ ልዩነት ነው! "Z" በጀርመንኛ ሁልጊዜ "ጽ" (TS) ድምጽ ይሰጣል! "Zoo" = "ጾ" (እንደ "ዙ" አይደለም)። ይህ ለአማርኛ ተናጋሪዎች ቀላል ሊሆን ይችላል ምክንያቱም "ጽ" ድምጽ በአማርኛ ስላለ። "ZU" = "ጹ"፣ "ZEI" = "ጻይ"።' },

      { de: '═══════════════════════════════\nልዩ ፊደላት (Special Characters)\n═══════════════════════════════', am: 'ከዚህ በታች ያሉት 4 ልዩ ፊደላት በጀርመንኛ ቋንቋ ብቻ የሚገኙ ናቸው። እነዚህ ፊደላት ሌሎች ቋንቋዎች ላይ አይገኙም። ኡምላውት (Umlaut) ማለት "የተቀየረ ድምጽ" ማለት ነው — ሁለት ነጥቦች ከላይ ይቀመጣሉ (¨) እና ድምጹ ይለወጣል።' },

      { de: 'Ä ä — ኤ ኡምላውት (A-Umlaut)', am: 'አነባበብ: እንደ "ኤ" ይነበባል (ከ "A" ይልቅ ይበልጥ ግልጽ "ኤ" ድምጽ)።\nEnglish: Like "e" in "bed" or "ai" in "fair".\n\nምሳሌዎች (Examples):\n• Ärger (ኤርገር) = Anger / ቁጣ\n• Ärzt (ኤርጽት) = Doctor / ሐኪም\n• Äpfel (ኤፕፈል) = Apples / ፖሞች\n• Männer (ሜነር) = Men / ሰዎች (ወንዶች)\n• Mädchen (ሜድኸን) = Girl / ልጃገረድ\n\nማስታወሻ: "Ä" ከ "A" ይለያል — "A" = "አ" ሲሆን "Ä" = "ኤ"። ይህ ልዩነት የቃላትን ትርጉም ይለውጣል! ለምሳሌ: "Apfel" (አፕፈል) = ፖም (ነጠላ)፣ "Äpfel" (ኤፕፈል) = ፖሞች (ብዙ)። ኡምላውት ካልተገኘ "AE" ተተኪ ጽሑፍ ይጠቀማሉ (Aerger = Ärger)።' },

      { de: 'Ö ö — ኦ ኡምላውት (O-Umlaut)', am: 'አነባበብ: ከንፈሮችን ክብ አድርጎ "ኧ" ማለት — በአማርኛ ትክክለኛ ተመሳሳይ ድምጽ የለውም!\nEnglish: Like saying "ay" with rounded lips. No exact English equivalent.\n\nምሳሌዎች (Examples):\n• Öl (ኧል) = Oil / ዘይት\n• Österreich (ኧስተራይኽ) = Austria / ኦስትሪያ\n• Öffnen (ኧፍነን) = To open / መክፈት\n• Schön (ሸን) = Beautiful / ቆንጆ\n• Können (ከነን) = Can/To be able / መቻል\n\nማስታወሻ: ይህ ድምጽ ለኢትዮጵያውያን ተማሪዎች ከባድ ነው ምክንያቱም በአማርኛ ተመሳሳይ ድምጽ ስለሌለ። ለመማር: "ኦ" ለማለት ከንፈሮችን ክብ ያድርጉ ግን "ኤ" ለማለት ይሞክሩ — ይህ ድብልቅ ድምጽ "Ö" ነው! ብዙ ልምምድ ያስፈልገዋል።' },

      { de: 'Ü ü — ኡ ኡምላውት (U-Umlaut)', am: 'አነባበብ: ከንፈሮችን ክብ አድርጎ "ኢ" ማለት — ልዩ ድምጽ ነው!\nEnglish: Like saying "ee" with rounded lips. Similar to French "u".\n\nምሳሌዎች (Examples):\n• Über (ኡበር) = Over/About / ከ...በላይ\n• Übung (ኡቡንግ) = Exercise / ልምምድ\n• Tür (ቱር) = Door / በር\n• Grün (ግሩን) = Green / አረንጓዴ\n• Müde (ሙደ) = Tired / ድካም\n\nማስታወሻ: ይህ ሌላ ከባድ ድምጽ ነው! ለመማር: "ኡ" ለማለት ከንፈሮችን ክብ ያድርጉ ግን "ኢ" ለማለት ይሞክሩ — ይህ ድብልቅ ድምጽ "Ü" ነው! "U" እና "Ü" ልዩነት ትርጉም ይለውጣል: "Mutter" (ሙተር) = እናት ግን "Mütter" (ሙተር) = እናቶች።' },

      { de: 'ß — ኤስ-ጸት (Eszett / Scharfes S)', am: 'አነባበብ: እንደ ጠንካራ "ሰ" ይነበባል — ድርብ "SS" ተመሳሳይ ነው።\nEnglish: Sharp "s" sound, like "ss" in "miss".\n\nምሳሌዎች (Examples):\n• Straße (ሽትራሰ) = Street / ጎዳና\n• Fuß (ፉስ) = Foot / እግር\n• Groß (ግሮስ) = Big/Great / ትልቅ\n• Weiß (ቫይስ) = White / ነጭ\n• Spaß (ሽፓስ) = Fun / ደስታ\n\nማስታወሻ: "ß" ልዩ የጀርመንኛ ፊደል ነው — ሌላ ቋንቋ ላይ አይገኝም! ከረጅም እንደ-ድምጽ ወይም ከድርብ እንደ-ድምጽ (diphthong) በኋላ ይመጣል። "SS" ከአጭር እንደ-ድምጽ በኋላ ይመጣል። ለምሳሌ: "Straße" (ረጅም "a" + ß) ግን "Wasser" (አጭር "a" + SS)። በስዊዘርላንድ ጀርመንኛ "ß" አይጠቅሙም — ሁልጊዜ "SS" ይጽፋሉ።' },

      { de: '═══════════════════════════════\nየሰዋስው ማስታወሻ (Grammar & Culture)\n═══════════════════════════════', am: 'የጀርመንኛ ፊደላት ሥርዓት (Rechtschreibung) ስለ ጀርመንኛ ፊደላት የሚከተሉትን ዋና ዋና ደንቦች ማወቅ ያስፈልጋል:\n\n1. ሁሉም ስሞች (Nouns) በትልቅ ፊደል ይጀምራሉ: በጀርመንኛ ማንኛውም ስም (Noun) መጀመሪያ ፊደሉ ትልቅ (Capital) መሆን አለበት። ይህ ጀርመንኛን ከሌሎች አውሮፓውያን ቋንቋዎች ልዩ ያደርገዋል። ለምሳሌ: "der Tisch" (ጠረጴዛ)፣ "die Liebe" (ፍቅር)፣ "das Haus" (ቤት).\n\n2. ድርብ ፊደላት ድምጹን ያጠራል: "SS"፣ "TT"፣ "NN"፣ "MM" ወዘተ ከፊት ያለው እንደ-ድምጽ አጭር መሆኑን ያሳያል። ለምሳሌ: "Sonne" (ዞነ) — "NN" ስላለ "O" አጭር ነው.\n\n3. "CH" ሁለት ድምጾች: ከ "A/O/U" በኋላ ጠንካራ "ኽ" (ach-Laut)፣ ከ "E/I/Ä/Ö/Ü" በኋላ ለስላሳ "ኽ" (ich-Laut).\n\n4. "EI" = "አይ"፣ "IE" = "ኢ": ይህ ደንብ በጣም አስፈላጊ ነው! "Eis" = አይስ (በረዶ)፣ "Tier" = ቲር (እንስሳ).\n\n5. "EU/ÄU" = "ኦይ": ለምሳሌ "Freund" = ፍሮይንድ (ጓደኛ)፣ "Häuser" = ሆይዘር (ቤቶች).\n\nባህላዊ ማስታወሻ: ጀርመኖች ለፊደላት ትክክለኛ አጠቃቀም ትልቅ ክብር ይሰጣሉ። ስህተት ሲጽፉ ሰዎች ሊያርሙዎት ይችላሉ — ይህ ባህላዊ ጉዳይ ነው እንጂ ጨካኝነት አይደለም። ጀርመኖች ትክክለኛነትን (Genauigkeit) ያከብራሉ።' }
    ]
  },
  {
    id: '2',
    title: 'ምዕራፍ 2: ሰላምታዎች እና ንግግሮች (Begrüßungen & Gespräche)',
    author: 'Agegnehu Tech',
    content: 'በዚህ ምዕራፍ 30+ የተለያዩ የጀርመንኛ ሰላምታዎችን ለጥዋት፣ ለቀን፣ ለማታ፣ ለመደበኛ (formal) እና ለግል (informal) ሁኔታዎች እንማራለን። እንዲሁም የንግግር ምሳሌዎች (Dialoge) በጀርመንኛ፣ በእንግሊዝኛ እና በአማርኛ ተሰጥተዋል።',
    details: [
      { de: '═══ ጥዋት ሰላምታዎች (Morning) ═══', am: 'ከጥዋት 6:00 እስከ 10:00 ሰዓት ድረስ የሚጠቀሙባቸው ሰላምታዎች' },
      { de: '1. Guten Morgen!', am: 'ትርጉም: Good morning / ደህና አደሩ!\nአነባበብ: ጉተን ሞርገን\nአጠቃቀም: ይህ ከጥዋት 6:00 እስከ 10:00 ሰዓት ድረስ የሚባል መደበኛ ሰላምታ ነው። ለማንኛውም ሰው — ለጓደኛ፣ ለባለሥልጣን፣ ለማያውቁት ሰው — ሊጠቀሙበት ይችላሉ። በቢሮ ሲገቡ ለሥራ ባልደረቦችዎ ይህንን ሰላምታ ይጠቀሙ።' },
      { de: '2. Morgen!', am: 'ትርጉም: Morning! / ጥዋት!\nአነባበብ: ሞርገን\nአጠቃቀም: ይህ አጭር እና ቀላል ሰላምታ ነው — ለጓደኞች፣ ለቤተሰብ፣ ለቅርብ ሰዎች ብቻ። በቢሮ ለአለቃዎ ወይም ለማያውቁት ሰው "Morgen!" ብቻ ማለት ያልተገባ ነው — "Guten Morgen!" ይበሉ።' },
      { de: '3. Einen schönen guten Morgen!', am: 'ትርጉም: A beautiful good morning! / ቆንጆ ጥዋት ይሁንልዎ!\nአነባበብ: አይነን ሸነን ጉተን ሞርገን\nአጠቃቀም: ይህ በጣም ጨዋ እና ሞቅ ያለ ሰላምታ ነው — ለልዩ ሰዎች ወይም ደስ ሲልዎት ይጠቀሙበት። የሬዲዮ አቅራቢዎች ብዙ ጊዜ ይህንን ሰላምታ ይጠቀማሉ።' },

      { de: '═══ ቀን ሰላምታዎች (Daytime) ═══', am: 'ከቀን 10:00 እስከ 17:00 ሰዓት ድረስ የሚጠቀሙባቸው ሰላምታዎች' },
      { de: '4. Guten Tag!', am: 'ትርጉም: Good day / ደህና ዋሉ!\nአነባበብ: ጉተን ታግ\nአጠቃቀም: ይህ ሁለንተናዊ (universal) ሰላምታ ነው — ከጥዋት 10:00 እስከ ማታ 6:00 ድረስ በማንኛውም ሁኔታ ይሠራል። ለመደበኛ (formal) ንግግር ተስማሚ ነው። በመደብር፣ በባንክ፣ በቢሮ ሲገቡ ይህንን ይጠቀሙ።' },
      { de: '5. Tag!', am: 'ትርጉም: Day! / ሰላም!\nአነባበብ: ታግ\nአጠቃቀም: አጭር እና ቀላል — ለጓደኞች ብቻ። ልክ "Morgen!" እንደማለት ነው — ቀላል ግን ጨዋ ያልሆነ ለባለሥልጣን።' },
      { de: '6. Grüß Gott!', am: 'ትርጉም: God greet you / እግዚአብሔር ይባርክዎ!\nአነባበብ: ግሩስ ጎት\nአጠቃቀም: ይህ በደቡብ ጀርመን (Bayern) እና ኦስትሪያ የሚጠቀሙበት ልዩ ሰላምታ ነው — ሃይማኖታዊ ምንጭ ያለው ግን ሁሉም ይጠቀሙበታል። በሰሜን ጀርመን ይህንን ከተጠቀሙ ሰዎች ያስደንቃቸዋል — "Guten Tag!" ይበሉ ይልቅስ።' },
      { de: '7. Servus!', am: 'ትርጉም: Hi/Bye / ሰላም!\nአነባበብ: ዘርቩስ\nአጠቃቀም: ይህ በባይሬን (Bayern) እና ኦስትሪያ ጥቅም ላይ የሚውል ሰላምታ ነው — ለሰላምታም ለመለያየትም ይጠቅማል (ልክ ኢታሊያንኛ "Ciao" እንደማለት)።' },
      { de: '8. Moin! / Moin Moin!', am: 'ትርጉም: Hi! / ሰላም!\nአነባበብ: ሞይን / ሞይን ሞይን\nአጠቃቀም: ይህ በሰሜን ጀርመን (Hamburg, Bremen) የሚጠቀሙበት ልዩ ሰላምታ ነው — በማንኛውም የቀን ሰዓት ይሠራል (ጥዋትም ቀንም ማታም)! ሞይን ሞይን ብለው ከተናገሩ ሰሜን ጀርመን ያውቃሉ ብለው ያስባሉ።' },

      { de: '═══ ማታ ሰላምታዎች (Evening) ═══', am: 'ከማታ 17:00 ሰዓት በኋላ የሚጠቀሙባቸው ሰላምታዎች' },
      { de: '9. Guten Abend!', am: 'ትርጉም: Good evening / ደህና መሹ!\nአነባበብ: ጉተን አበንድ\nአጠቃቀም: ከማታ 5:00/6:00 ሰዓት በኋላ የሚባል ሰላምታ። መደበኛ (formal) ነው። ለእራት ጋብዞ ሲሄዱ "Guten Abend!" ማለት ጨዋነት ነው።' },
      { de: '10. Schönen Abend noch!', am: 'ትርጉም: Have a nice evening! / ደስ የሚል ማታ ይሁንልዎ!\nአነባበብ: ሸነን አበንድ ኖኽ\nአጠቃቀም: ይህ ሲለያዩ (ማታ ላይ) የሚባል ሰላምታ ነው — ልክ "ደስ የሚል ማታ" እንደማለት።' },
      { de: '11. Gute Nacht!', am: 'ትርጉም: Good night / ደህና ይቀሩ! / ደህና እደሩ!\nአነባበብ: ጉተ ናኽት\nአጠቃቀም: ይህ ከመኝታ በፊት ወይም ሌሊት ሲለያዩ የሚባል ሰላምታ ነው። ለቤተሰብ፣ ለጓደኛ፣ ለማንኛውም ሰው ይሠራል። ልጆች ከመኝታ በፊት "Gute Nacht, Mama!" ይላሉ።' },

      { de: '═══ ቀላል/ጓደኛ ሰላምታዎች (Informal) ═══', am: 'ለጓደኞች፣ ለቤተሰብ፣ ለቅርብ ሰዎች' },
      { de: '12. Hallo!', am: 'ትርጉም: Hello / ሰላም!\nአነባበብ: ሃሎ\nአጠቃቀም: ሁለንተናዊ ሰላምታ — በማንኛውም ጊዜ ለማንኛውም ሰው (ግን ለቅርብ ሰዎች ይበልጥ ተስማሚ)። በስልክ ሲያነሱ "Hallo?" ማለት ይችላሉ።' },
      { de: '13. Hi!', am: 'ትርጉም: Hi / ሃይ!\nአነባበብ: ሃይ\nአጠቃቀም: ከእንግሊዝኛ የተበደረ — ወጣቶች ብዙ ጊዜ ይጠቀሙበታል። ቀላልና ፈጣን ሰላምታ።' },
      { de: '14. Hey!', am: 'ትርጉም: Hey / ሄይ!\nአነባበብ: ሄይ\nአጠቃቀም: ከ "Hi" ይልቅ ይበልጥ ቀላል — ለጓደኞች ብቻ። በጽሑፍ መልዕክት (SMS/WhatsApp) ብዙ ይጠቅማል።' },
      { de: '15. Na?', am: 'ትርጉም: Well? / How\'s it going? / ምን አለ?\nአነባበብ: ና\nአጠቃቀም: ይህ ልዩ ጀርመንኛ ሰላምታ ነው — አንድ ቃል ብቻ ሆኖ "ምን አለ?" ማለት ነው። ለቅርብ ጓደኞች ብቻ ይጠቅማል። መልሱ "Na?" ወይም "Gut, und dir?" ሊሆን ይችላል።' },
      { de: '16. Was geht? / Was geht ab?', am: 'ትርጉም: What\'s up? / ምን አለ?\nአነባበብ: ቫስ ጌት / ቫስ ጌት አብ\nአጠቃቀም: የጎዳና ሰላምታ (Slang) — ወጣቶች ይጠቀሙበታል። ለአለቃ ወይም ለባለሥልጣን አይበቃም!!' },
      { de: '17. Wie geht\'s? / Wie geht es dir?', am: 'ትርጉም: How are you? (informal) / እንዴት ነህ/ሽ?\nአነባበብ: ቪ ጌትስ / ቪ ጌት ኤስ ዲር\nአጠቃቀም: ለጓደኛ "Wie geht\'s?" ወይም "Wie geht es dir?" ይበሉ። "dir" ማለት "ለአንተ/ሽ" ማለት ነው (informal)።' },

      { de: '═══ መደበኛ ሰላምታዎች (Formal) ═══', am: 'ለባለሥልጣን፣ ለማያውቁት ሰው፣ ለሥራ ቦታ' },
      { de: '18. Wie geht es Ihnen?', am: 'ትርጉም: How are you? (formal) / እንዴት ነዎት?\nአነባበብ: ቪ ጌት ኤስ ኢነን\nአጠቃቀም: ለታላቅ ሰው ወይም ለማያውቁት ሰው "Ihnen" (እርስዎ) መጠቀም ግዴታ ነው! "dir" (አንተ) ከተጠቀሙ ባልተገባ ቦታ ሥነ-ምግባር ያጣሉ ተብለው ይታሰባሉ። ይህ በጀርመን ባህል ውስጥ በጣም አስፈላጊ ደንብ ነው!!' },
      { de: '19. Freut mich, Sie kennenzulernen!', am: 'ትርጉም: Pleased to meet you! / ደስ ብሎኛል እርስዎን ማወቅ!\nአነባበብ: ፍሮይት ሚኽ ዚ ኬነንጹለርነን\nአጠቃቀም: ለመጀመሪያ ጊዜ ሲገናኙ የሚባል — ይህ በሥራ ቦታ፣ በስብሰባ፣ በመደበኛ ሁኔታ ውስጥ ጥቅም ላይ ይውላል። እጅ ሲጨባበጡ ይህንን ይበሉ።' },
      { de: '20. Herzlich willkommen!', am: 'ትርጉም: Warmly welcome / ልባዊ እንኳን ደህና መጡ!\nአነባበብ: ሄርጽሊኽ ቪልኮመን\nአጠቃቀም: ሰዎችን ለማስተናገድ ወይም ለመቀበል የሚባል — በሆቴል፣ በቤት፣ በስብሰባ።' },
      { de: '21. Es ist mir eine Ehre.', am: 'ትርጉም: It is my honor / ክብር ነው ለኔ\nአነባበብ: ኤስ ኢስት ሚር አይነ ኤረ\nአጠቃቀም: በጣም መደበኛ — ለከፍተኛ ባለሥልጣን ወይም ለልዩ ሰው ሲገናኙ።' },

      { de: '═══ የመለያየት ሰላምታዎች (Goodbye) ═══', am: 'ሲለያዩ የሚባሉ ሰላምታዎች' },
      { de: '22. Auf Wiedersehen!', am: 'ትርጉም: Goodbye (formal) / ደህና ሁኑ!\nአነባበብ: አውፍ ቪደርዜን\nአጠቃቀም: መደበኛ የመለያየት ሰላምታ — ለማንኛውም ሰው ይሠራል። ቃል በቃል "ወደ እንደገና ማየት" ማለት ነው።' },
      { de: '23. Tschüss!', am: 'ትርጉም: Bye! / ቻው!\nአነባበብ: ቹስ\nአጠቃቀም: ቀላል የመለያየት ሰላምታ — ለጓደኞችና ለቤተሰብ። በጣም ተወዳጅ ነው።' },
      { de: '24. Bis bald! / Bis später! / Bis morgen!', am: 'ትርጉም: See you soon! / See you later! / See you tomorrow!\nአነባበብ: ቢስ ባልድ / ቢስ ሽፔተር / ቢስ ሞርገን\nአጠቃቀም: "Bis" ማለት "እስከ" ማለት ነው — "Bis bald" = ብዙም ሳይቆይ እንገናኝ፣ "Bis später" = ቆየት ብሎ፣ "Bis morgen" = ነገ እንገናኝ።' },
      { de: '25. Mach\'s gut! / Pass auf dich auf!', am: 'ትርጉም: Take care! / ተጠንቀቅ!\nአነባበብ: ማኽስ ጉት / ፓስ አውፍ ዲኽ አውፍ\nአጠቃቀም: ለጓደኛ ሲለያዩ ሞቅ ያለ ሰላምታ — "ራስህን ጠብቅ" ማለት ነው።' },

      { de: '═══ ሥራ ቦታ ሰላምታዎች (Business) ═══', am: 'ለቢሮ፣ ለስብሰባ፣ ለሥራ ቦታ' },
      { de: '26. Guten Tag, mein Name ist...', am: 'ትርጉም: Good day, my name is... / ደህና ዋሉ፣ ስሜ... ነው\nአነባበብ: ጉተን ታግ ማይን ናመ ኢስት...\nአጠቃቀም: ራስዎን ለመተዋወቅ — በስብሰባ፣ በቃለ-መጠይቅ (interview) ሲጀምሩ ይህንን ይጠቀሙ።' },
      { de: '27. Ich möchte mich vorstellen.', am: 'ትርጉም: I would like to introduce myself / ራሴን ማስተዋወቅ እፈልጋለሁ\nአነባበብ: ኢኽ ሞኽተ ሚኽ ፎርሽተለን\nአጠቃቀም: ለመደበኛ ሁኔታ — ስብሰባ ሲጀምሩ ወይም አዲስ ሰዎችን ሲያገኙ።' },
      { de: '28. Wie kann ich Ihnen helfen?', am: 'ትርጉም: How can I help you? / እንዴት ልረዳዎ?\nአነባበብ: ቪ ካን ኢኽ ኢነን ሄልፈን\nአጠቃቀም: ለደንበኛ ወይም ለእንግዳ የሚባል — በመደብር፣ በቢሮ፣ በሆቴል።' },

      { de: '═══ ምላሽ ሰላምታዎች (Responses) ═══', am: 'ለሰላምታ ምላሽ' },
      { de: '29. Mir geht es gut, danke!', am: 'ትርጉም: I\'m fine, thank you / ደህና ነኝ፣ አመሰግናለሁ\nአነባበብ: ሚር ጌት ኤስ ጉት ዳንከ\nአጠቃቀም: "Wie geht es Ihnen?" ሲባሉ መመለስ — ይህ ባለፈ ቃል ቆንጆ ምላሽ ነው።' },
      { de: '30. Nicht schlecht! / Es geht so.', am: 'ትርጉም: Not bad / So-so / መጥፎ አይደለም\nአነባበብ: ኒኽት ሽሌኽት / ኤስ ጌት ዞ\nአጠቃቀም: መካከለኛ ምላሽ — "ደህና ነኝ ግን ምርጥ አይደለሁም" ለማለት ይጠቅማል።' },
      { de: '31. Leider nicht so gut.', am: 'ትርጉም: Unfortunately not so good / በአግባቡ አይደለሁም\nአነባበብ: ላይደር ኒኽት ዞ ጉት\nአጠቃቀም: ደህና ባልሆኑ ጊዜ ቅን ምላሽ ለመስጠት። ጀርመኖች ብዙ ጊዜ ቅን ምላሽ ይሰጣሉ (ከአሜሪካውያን "I\'m fine!" ልማድ በተለየ)።' },
      { de: '32. Danke, gleichfalls!', am: 'ትርጉም: Thanks, you too! / አመሰግናለሁ፣ ለእርስዎም!\nአነባበብ: ዳንከ ግላይኽፋልስ\nአጠቃቀም: "Schönen Tag noch!" ወይም "Guten Appetit!" ሲባሉ ምላሽ ለመስጠት — "ለእርስዎም!" ማለት ነው።' },

      { de: '═══════════════════════════════\nየንግግር ምሳሌ 1 (Dialogue 1)\nበመደብር ውስጥ / Im Geschäft / At a Store\n═══════════════════════════════', am: '🇩🇪 ጀርመንኛ:\nVerkäufer: Guten Tag! Wie kann ich Ihnen helfen?\nKunde: Guten Tag! Ich suche ein Buch über Deutschland.\nVerkäufer: Natürlich! Hier haben wir viele Bücher. Dieses hier ist sehr beliebt.\nKunde: Was kostet es?\nVerkäufer: Es kostet 15 Euro.\nKunde: Gut, ich nehme es. Danke schön!\nVerkäufer: Bitte schön! Auf Wiedersehen!\nKunde: Auf Wiedersehen!\n\n🇬🇧 English:\nSeller: Good day! How can I help you?\nCustomer: Good day! I\'m looking for a book about Germany.\nSeller: Of course! Here we have many books. This one is very popular.\nCustomer: How much does it cost?\nSeller: It costs 15 euros.\nCustomer: Good, I\'ll take it. Thank you!\nSeller: You\'re welcome! Goodbye!\nCustomer: Goodbye!\n\n🇪🇹 አማርኛ:\nሻጭ: ደህና ዋሉ! እንዴት ልረዳዎ?\nደንበኛ: ደህና ዋሉ! ስለ ጀርመን የሚናገር መጽሐፍ እፈልጋለሁ።\nሻጭ: በእርግጥ! እዚህ ብዙ መጽሐፍት አሉን። ይህ በጣም ተወዳጅ ነው።\nደንበኛ: ዋጋው ስንት ነው?\nሻጭ: 15 ዩሮ ነው።\nደንበኛ: ጥሩ፣ ይህንን እወስደዋለሁ። አመሰግናለሁ!\nሻጭ: ምንም አይደለም! ደህና ሁኑ!\nደንበኛ: ደህና ሁኑ!' },

      { de: '═══════════════════════════════\nየንግግር ምሳሌ 2 (Dialogue 2)\nለመጀመሪያ ጊዜ መተዋወቅ / Sich vorstellen\n═══════════════════════════════', am: '🇩🇪 ጀርመንኛ:\nAnna: Hallo! Ich bin Anna. Wie heißt du?\nBen: Hi! Ich heiße Ben. Freut mich!\nAnna: Freut mich auch! Woher kommst du?\nBen: Ich komme aus Äthiopien, aus Hantate. Und du?\nAnna: Ich komme aus Berlin. Was machst du hier?\nBen: Ich studiere Informatik an der Universität.\nAnna: Das ist toll! Ich arbeite als Lehrerin.\nBen: Schön! Wie lange bist du schon hier?\nAnna: Seit zwei Jahren. Sollen wir zusammen Kaffee trinken?\nBen: Ja, gerne! Das wäre schön.\n\n🇬🇧 English:\nAnna: Hello! I\'m Anna. What\'s your name?\nBen: Hi! My name is Ben. Pleased to meet you!\nAnna: Pleased to meet you too! Where are you from?\nBen: I come from Ethiopia, from Hantate. And you?\nAnna: I come from Berlin. What do you do here?\nBen: I study Computer Science at the university.\nAnna: That\'s great! I work as a teacher.\nBen: Nice! How long have you been here?\nAnna: For two years. Should we grab coffee together?\nBen: Yes, gladly! That would be nice.\n\n🇪🇹 አማርኛ:\nአና: ሰላም! እኔ አና ነኝ። አንተ ማን ትባላለህ?\nቤን: ሃይ! እኔ ቤን እባላለሁ። ደስ ብሎኛል!\nአና: እኔንም ደስ ብሎኛል! ከየት ነህ?\nቤን: ከኢትዮጵያ ነኝ፣ ከሃንታቴ። አንቺ?\nአና: ከበርሊን ነኝ። እዚህ ምን ትሰራለህ?\nቤን: በዩኒቨርሲቲ ኮምፒውተር ሳይንስ እማራለሁ።\nአና: ጥሩ ነው! እኔ መምህር ነኝ።\nቤን: ጥሩ! ለምን ያህል ጊዜ እዚህ ነሽ?\nአና: ለሁለት ዓመት። አብረን ቡና እንጠጣ?\nቤን: አዎ፣ ደስ ይለኛል! ጥሩ ይሆናል።' },

      { de: '═══════════════════════════════\nየንግግር ምሳሌ 3 (Dialogue 3)\nበሥራ ቦታ / Am Arbeitsplatz / At Work\n═══════════════════════════════', am: '🇩🇪 ጀርመንኛ:\nChef: Guten Morgen, Herr Agegnehu! Wie geht es Ihnen?\nAgegnehu: Guten Morgen, Herr Müller! Mir geht es gut, danke. Und Ihnen?\nChef: Auch gut, danke. Haben Sie den Bericht fertig?\nAgegnehu: Ja, ich habe ihn gestern Abend fertiggestellt.\nChef: Ausgezeichnet! Können Sie ihn mir bitte per E-Mail schicken?\nAgegnehu: Natürlich, ich schicke ihn sofort.\nChef: Vielen Dank! Wir haben um 14 Uhr eine Besprechung.\nAgegnehu: Verstanden. Ich werde pünktlich da sein.\n\n🇬🇧 English:\nBoss: Good morning, Mr. Agegnehu! How are you?\nAgegnehu: Good morning, Mr. Müller! I\'m fine, thank you. And you?\nBoss: Also good, thanks. Have you finished the report?\nAgegnehu: Yes, I finished it last night.\nBoss: Excellent! Could you please send it to me by email?\nAgegnehu: Of course, I\'ll send it right away.\nBoss: Thank you very much! We have a meeting at 2 PM.\nAgegnehu: Understood. I will be there on time.\n\n🇪🇹 አማርኛ:\nአለቃ: ደህና አደሩ አቶ አገኘሁ! እንዴት ነዎት?\nአገኘሁ: ደህና አደሩ አቶ ሙለር! ደህና ነኝ አመሰግናለሁ። እርስዎ?\nአለቃ: እኔም ደህና ነኝ። ሪፖርቱን ጨረሱ?\nአገኘሁ: አዎ ትናንት ማታ ጨርሻለሁ።\nአለቃ: በጣም ጥሩ! በኢሜይል ልኩልኝ እባክዎ?\nአገኘሁ: በእርግጥ፣ አሁን ልከዋለሁ።\nአለቃ: በጣም አመሰግናለሁ! ከሰዓት 2:00 ላይ ስብሰባ አለን።\nአገኘሁ: ገባኝ። በሰዓቱ እገኛለሁ።' },

      { de: '═══════════════════════════════\nየሰዋስው ማስታወሻ (Grammar & Culture)\n═══════════════════════════════', am: 'Du vs. Sie — የጀርመንኛ ቁልፍ ባህላዊ ደንብ:\n\nበጀርመንኛ ሁለት ዓይነት "አንተ/እርስዎ" አሉ:\n\n1. "Du" (ዱ) = አንተ/አንቺ (informal) — ለጓደኞች፣ ለቤተሰብ፣ ለልጆች፣ ለቅርብ ሰዎች\n2. "Sie" (ዚ) = እርስዎ (formal) — ለማያውቁት ሰው፣ ለአለቃ፣ ለታላቅ ሰው፣ ለባለሥልጣን\n\nይህ ደንብ በጀርመን ባህል ውስጥ በጣም አስፈላጊ ነው! ለማያውቁት ሰው "Du" ከተጠቀሙ ሥነ-ምግባር የጎደለው ይመስላል። ከሰው ጋር ለመጀመሪያ ጊዜ ሲገናኙ ሁልጊዜ "Sie" ይጠቀሙ — ሰውየው "Du darfst mich duzen" (ዱ ለማለት ትችላለህ) ቢል ብቻ ወደ "Du" ይቀየሩ።\n\nበሥራ ቦታ ብዙ ጊዜ "Sie" ይጠቀማሉ — ለአለቃ ሁልጊዜ "Sie"። አንዳንድ ዘመናዊ ኩባንያዎች (Start-ups) "Du" ይጠቀማሉ ግን ይህ ሁሉም ቦታ አይደለም።\n\nለኢትዮጵያውያን ተማሪዎች ማስታወሻ: ይህ ደንብ ከአማርኛው "አንተ" vs "እርስዎ" ጋር ተመሳሳይ ነው — ስለዚህ ለመረዳት ቀላል ይሆናል! ልክ በአማርኛ ለታላቅ ሰው "እርስዎ" እንደሚሉ ጀርመንኛም "Sie" ይጠቀሙ።\n\nተጨማሪ ባህላዊ ልምዶች:\n• ጀርመኖች ሲገናኙ እጅ ይጨባበጣሉ (ጠንካራ እጅ መጨበጥ ጥሩ ምልክት ነው)\n• ዓይን ለዓይን ማየት ጨዋነት ነው\n• ሰዓት መጠበቅ (Pünktlichkeit) በጀርመን ባህል ውስጥ ቁልፍ ነው — ሁልጊዜ በሰዓት ይምጡ!\n• "Bitte" (እባክዎ) እና "Danke" (አመሰግናለሁ) ብዙ ይጠቀሙ — ጨዋነትን ያሳያል' }
    ]
  },
  {
    id: '3',
    title: 'ምዕራፍ 3: ቁጥሮች (Die Zahlen — Numbers)',
    author: 'Agegnehu Tech',
    content: 'በዚህ ምዕራፍ ከ 0 እስከ 100 ያሉ ሁሉንም ቁጥሮች፣ ከዚያም ሺዎች እና ሚሊዮኖችን በጀርመንኛ፣ በእንግሊዝኛ እና በአማርኛ እንማራለን። ለእያንዳንዱ ቁጥር ሙሉ አነባበብ ተሰጥቷል።',
    details: [
      { de: '═══ 0 - 12: መሠረታዊ ቁጥሮች ═══', am: 'እነዚህ ቁጥሮች ልዩ ናቸው — እያንዳንዳቸው የራሳቸው ስም አላቸው፣ መታወስ አለባቸው።' },
      { de: '0 — Null (ኑል)', am: 'Zero / ዜሮ\nማስታወሻ: ስልክ ቁጥር ሲናገሩ "Null" ይላሉ።' },
      { de: '1 — Eins (አይንስ)', am: 'One / አንድ\nማስታወሻ: ከስም ፊት ሲመጣ "ein/eine" ይሆናል (der/die/das ይወስናል)።' },
      { de: '2 — Zwei (ጽቫይ)', am: 'Two / ሁለት\nማስታወሻ: ስልክ ላይ ግራ ለመቀነስ "Zwo" (ጽቮ) ሊባል ይችላል።' },
      { de: '3 — Drei (ድራይ)', am: 'Three / ሦስት' },
      { de: '4 — Vier (ፊር)', am: 'Four / አራት\nማስታወሻ: "V" እንደ "ፍ" ይነበባል!' },
      { de: '5 — Fünf (ፉንፍ)', am: 'Five / አምስት' },
      { de: '6 — Sechs (ዜክስ)', am: 'Six / ስድስት\nማስታወሻ: "chs" = "ክስ" ድምጽ ይሰጣል።' },
      { de: '7 — Sieben (ዚበን)', am: 'Seven / ሰባት' },
      { de: '8 — Acht (አኽት)', am: 'Eight / ስምንት' },
      { de: '9 — Neun (ኖይን)', am: 'Nine / ዘጠኝ' },
      { de: '10 — Zehn (ጸን)', am: 'Ten / አስር' },
      { de: '11 — Elf (ኤልፍ)', am: 'Eleven / አስራ አንድ\nማስታወሻ: ልዩ ስም — ደንብ አይከተልም።' },
      { de: '12 — Zwölf (ጽቮልፍ)', am: 'Twelve / አስራ ሁለት\nማስታወሻ: ልዩ ስም — ደንብ አይከተልም።' },

      { de: '═══ 13 - 19: Teen ቁጥሮች ═══', am: 'ደንቡ: [ቁጥር] + zehn = [ቁጥር]ዘን\nትርጉሙ: "ቁጥሩ-አስር" ማለት ነው (ልክ ከአማርኛው "አስራ-ቁጥር" ጋር ተመሳሳይ)' },
      { de: '13 — Dreizehn (ድራይጸን)', am: 'Thirteen / አስራ ሦስት' },
      { de: '14 — Vierzehn (ፊርጸን)', am: 'Fourteen / አስራ አራት' },
      { de: '15 — Fünfzehn (ፉንፍጸን)', am: 'Fifteen / አስራ አምስት' },
      { de: '16 — Sechzehn (ዜኽጸን)', am: 'Sixteen / አስራ ስድስት\nማስታወሻ: "Sechs" ላይ "s" ይጠፋል → "Sech-zehn"' },
      { de: '17 — Siebzehn (ዚብጸን)', am: 'Seventeen / አስራ ሰባት\nማስታወሻ: "Sieben" ላይ "en" ይጠፋል → "Sieb-zehn"' },
      { de: '18 — Achtzehn (አኽትጸን)', am: 'Eighteen / አስራ ስምንት' },
      { de: '19 — Neunzehn (ኖይንጸን)', am: 'Nineteen / አስራ ዘጠኝ' },

      { de: '═══ 20 - 29 ═══', am: 'ደንቡ: [ቁጥር] + und + zwanzig\nትርጉሙ: "[ቁጥር]-እና-ሃያ" — ቁጥሩ ፊት ይመጣል!' },
      { de: '20 — Zwanzig (ጽቫንጺግ)', am: 'Twenty / ሃያ' },
      { de: '21 — Einundzwanzig (አይኑንድጽቫንጺግ)', am: 'Twenty-one / ሃያ አንድ\nማስታወሻ: "አንድ-እና-ሃያ" — ቁጥር ፊት ይመጣል! ይህ ከእንግሊዝኛ ተቃራኒ ነው።' },
      { de: '22 — Zweiundzwanzig (ጽቫይኡንድጽቫንጺግ)', am: 'Twenty-two / ሃያ ሁለት' },
      { de: '23 — Dreiundzwanzig (ድራይኡንድጽቫንጺግ)', am: 'Twenty-three / ሃያ ሦስት' },
      { de: '24 — Vierundzwanzig (ፊርኡንድጽቫንጺግ)', am: 'Twenty-four / ሃያ አራት' },
      { de: '25 — Fünfundzwanzig (ፉንፍኡንድጽቫንጺግ)', am: 'Twenty-five / ሃያ አምስት' },
      { de: '26 — Sechsundzwanzig (ዜክስኡንድጽቫንጺግ)', am: 'Twenty-six / ሃያ ስድስት' },
      { de: '27 — Siebenundzwanzig (ዚበንኡንድጽቫንጺግ)', am: 'Twenty-seven / ሃያ ሰባት' },
      { de: '28 — Achtundzwanzig (አኽትኡንድጽቫንጺግ)', am: 'Twenty-eight / ሃያ ስምንት' },
      { de: '29 — Neunundzwanzig (ኖይንኡንድጽቫንጺግ)', am: 'Twenty-nine / ሃያ ዘጠኝ' },

      { de: '═══ Tens (ዐሥረቶች) ═══', am: 'ደንቡ: ከ30-90 — ብዙዎቹ "-zig" ያበቃሉ (ከ30 በስተቀር "-ßig")' },
      { de: '30 — Dreißig (ድራይሲግ)', am: 'Thirty / ሰላሳ — ልዩ: "-ßig" እንጂ "-zig" አይደለም!' },
      { de: '40 — Vierzig (ፊርጺግ)', am: 'Forty / አርባ' },
      { de: '50 — Fünfzig (ፉንፍጺግ)', am: 'Fifty / ሃምሳ' },
      { de: '60 — Sechzig (ዜኽጺግ)', am: 'Sixty / ስልሳ' },
      { de: '70 — Siebzig (ዚብጺግ)', am: 'Seventy / ሰባ' },
      { de: '80 — Achtzig (አኽትጺግ)', am: 'Eighty / ሰማንያ' },
      { de: '90 — Neunzig (ኖይንጺግ)', am: 'Ninety / ዘጠና' },

      { de: '═══ ድርብ ቁጥሮች ምሳሌዎች ═══', am: 'ደንቡ ተመሳሳይ ነው: [ቁጥር] + und + [ዐሥረት]' },
      { de: '31 — Einunddreißig', am: 'Thirty-one / ሰላሳ አንድ' },
      { de: '42 — Zweiundvierzig', am: 'Forty-two / አርባ ሁለት' },
      { de: '55 — Fünfundfünfzig', am: 'Fifty-five / ሃምሳ አምስት' },
      { de: '67 — Siebenundsechzig', am: 'Sixty-seven / ስልሳ ሰባት' },
      { de: '73 — Dreiundsiebzig', am: 'Seventy-three / ሰባ ሦስት' },
      { de: '84 — Vierundachtzig', am: 'Eighty-four / ሰማንያ አራት' },
      { de: '99 — Neunundneunzig', am: 'Ninety-nine / ዘጠና ዘጠኝ — "99 Luftballons" ዝነኛ ጀርመንኛ ዘፈን ነው!' },
      { de: '100 — Hundert (ሁንደርት)', am: 'One hundred / መቶ' },

      { de: '═══ ትልልቅ ቁጥሮች ═══', am: 'ሺዎች፣ ሚሊዮኖች፣ ቢሊዮኖች' },
      { de: '101 — Hunderteins', am: 'One hundred and one / መቶ አንድ' },
      { de: '200 — Zweihundert', am: 'Two hundred / ሁለት መቶ' },
      { de: '500 — Fünfhundert', am: 'Five hundred / አምስት መቶ' },
      { de: '1.000 — Tausend (ታውዘንድ)', am: 'One thousand / ሺህ\nማስታወሻ: ጀርመንኛ ነጥብ (.) ይጠቀማል ለሺህ፣ ኮማ (,) ለአስርዮሽ! ከእንግሊዝኛ ተቃራኒ!' },
      { de: '2.000 — Zweitausend', am: 'Two thousand / ሁለት ሺህ' },
      { de: '10.000 — Zehntausend', am: 'Ten thousand / አስር ሺህ' },
      { de: '100.000 — Hunderttausend', am: 'One hundred thousand / መቶ ሺህ' },
      { de: '1.000.000 — Eine Million (አይነ ሚሊዮን)', am: 'One million / አንድ ሚሊዮን\nማስታወሻ: "Million" ስም ነው — ትልቅ ፊደል!  "Eine" ያስፈልገዋል።' },
      { de: '1.000.000.000 — Eine Milliarde (አይነ ሚሊያርደ)', am: 'One billion / አንድ ቢሊዮን\nማስታወሻ: ይጠንቀቁ! ጀርመንኛ "Milliarde" = billion (1,000,000,000)' },

      { de: '═══ ቁጥር አጠቃቀም ምሳሌዎች ═══', am: 'ቁጥሮች በዕለታዊ ሕይወት ውስጥ' },
      { de: 'Ich bin 25 Jahre alt.', am: 'I am 25 years old / እኔ 25 ዓመቴ ነው።\nአነባበብ: ኢኽ ቢን ፉንፍኡንድጽቫንጺግ ያረ አልት' },
      { de: 'Es kostet 3,50 Euro.', am: 'It costs 3.50 euros / ዋጋው 3.50 ዩሮ ነው።\nአነባበብ: ኤስ ኮስተት ድራይ ዩሮ ፉንፍጺግ\nማስታወሻ: ኮማ (,) ለአስርዮሽ ይጠቀማሉ!' },
      { de: 'Meine Telefonnummer ist 0171-5683920.', am: 'My phone number is... / ስልክ ቁጥሬ...\nማስታወሻ: ስልክ ቁጥር ሲናገሩ ቁጥሮችን አንድ-አንድ ይላሉ: "Null-Eins-Sieben-Eins..."' },
      { de: 'Der Zug kommt um 14:30 Uhr.', am: 'The train arrives at 2:30 PM / ባቡር 2:30 ይመጣል።\nማስታወሻ: ጀርመን 24-ሰዓት ሥርዓት ይጠቀማል! 14:30 = 2:30 PM' },

      { de: '═══════════════════════════════\nየሰዋስው ማስታወሻ (Grammar & Culture)\n═══════════════════════════════', am: 'የጀርመንኛ ቁጥሮች ልዩ ባሕሪያት:\n\n1. ቁጥሮች "ተገላብጠው" ይነበባሉ: ከ21 ጀምሮ ቁጥሮች "ተገላብጠው" ይነበባሉ — ትንሹ ቁጥር ፊት ይመጣል! 21 = "Einundzwanzig" (አንድ-እና-ሃያ)፣ ልክ "አንድና ሃያ" እንደማለት። ይህ ለጀማሪ ተማሪዎች ግራ የሚያጋባ ሊሆን ይችላል ግን በልምምድ ቀላል ይሆናል።\n\n2. ነጥብና ኮማ ልዩነት: ጀርመንኛ ነጥብ (.) ለሺህ ይጠቀማል: 1.000 = ሺህ። ኮማ (,) ለአስርዮሽ: 3,50 = ሦስት ነጥብ ሃምሳ። ይህ ከእንግሊዝኛ/አሜሪካን ተቃራኒ ነው!\n\n3. ሰዓት አቆጣጠር: ጀርመን 24-ሰዓት ሥርዓት ይጠቀማል: 14:00 = ከሰዓት 2:00፣ 20:00 = ማታ 8:00። "Viertel vor drei" = "ከ3 ሩብ ሲቀር" = 2:45. "Halb drei" = "ግማሽ ሦስት" = 2:30 (ይጠንቀቁ! "ግማሽ ሦስት" ማለት 2:30 ነው እንጂ 3:30 አይደለም!).\n\n4. ቀን መጻፍ: ቀን.ወር.ዓመት ቅርጸት ይጠቀማሉ: 25.12.2026 = December 25, 2026.\n\n5. ገንዘብ: ጀርመን ዩሮ (Euro) ይጠቀማል: "€" ምልክት ከቁጥር በኋላ ይመጣል (ለምሳሌ 5,00 €).\n\nባህላዊ ማስታወሻ: ጀርመኖች ቁጥሮችን ሲቆጥሩ ከአውራ ጣት ይጀምራሉ (ከስር ጣት አይደለም)! ስለዚህ "1" ሲሉ አውራ ጣት ብቻ ያሳያሉ። ይህ ከኢትዮጵያ ልማድ ይለያል — ያስታውሱ ሰዎች ግራ እንዳይጋቡ።' }
    ]
  },
  {
    id: '4',
    title: 'ምዕራፍ 4: የጉዞ ቃላት — Travel Vocabulary (150+ ቃላት)',
    author: 'Agegnehu Tech',
    content: 'ይህ ምዕራፍ ለጉዞ አስፈላጊ የሆኑ 150+ ቃላትን ያካትታል — በአውሮፕላን ጣቢያ፣ ሆቴል፣ ትራንስፖርት፣ ምግብ ቤት፣ ግዢ። እያንዳንዱ ቃል Pro Tip በአማርኛ አለው።',
    details: travelVocabulary
  },
  {
    id: '5',
    title: 'ምዕራፍ 5: ቤተሰብና ስሜቶች — Family & Emotions (100+ ቃላት)',
    author: 'Agegnehu Tech',
    content: 'ይህ ምዕራፍ የቤተሰብ አባላት፣ ስሜቶች፣ ቤት ቃላትን ያካትታል — ከ Pro Tip ጋር።',
    details: familyVocabulary
  },
  {
    id: '6',
    title: 'ምዕራፍ 6: ሥራ ቃላት — Work & Career (150+ ቃላት)',
    author: 'Agegnehu Tech',
    content: 'ይህ ምዕራፍ ስለ ሥራ፣ ሙያ፣ ቢሮ፣ ማመልከቻ ቃላትን ያካትታል — ከ Pro Tip ጋር።',
    details: workVocabulary
  },
  {
    id: '7',
    title: 'ምዕራፍ 7: ድንገተኛ ሁኔታ — Emergency & Health (100+ ቃላት)',
    author: 'Agegnehu Tech',
    content: 'ይህ ምዕራፍ ለድንገተኛ ሁኔታ አስፈላጊ ቃላትንና ዓረፍተ ነገሮችን ያካትታል — ሐኪም ቤት፣ ፖሊስ፣ እሳት፣ ሕግ።',
    details: emergencyVocabulary
  },
  {
    id: '8',
    title: 'ምዕራፍ 8: ሰዋስው — Complete Grammar (Articles, Cases, Verbs)',
    author: 'Agegnehu Tech',
    content: 'ይህ ምዕራፍ የጀርመንኛ ሰዋስው (Grammar) ሙሉ ማብራሪያ ያካትታል — Articles (Der/Die/Das)፣ Cases (Nominativ/Akkusativ/Dativ/Genitiv)፣ Verb Conjugation፣ Sentence Structure።',
    details: grammarLessons
  }
];

export const agegnehuTechBook = [
  {
    chapter: 1,
    title: "መግቢያና ፊደላት (Introduction & Alphabet)",
    content: "ጀርመንኛ 26 መደበኛ ፊደላት እና 4 ልዩ ፊደላት አሉት።",
    lessons: [
      { de: "A, B, C, D", en: "A, B, C, D", am: "አ፣ ቤ፣ ጼ፣ ዴ" },
      { de: "Ä, Ö, Ü", en: "A, O, U Umlauts", am: "ኤ፣ ኦ(ኡ)፣ ኡ(ኢ)" },
      { de: "ß", en: "Double S", am: "ኤስ-ጼት (ሰ)" }
    ],
    note: "ጀርመንኛ ላይ 'W' እንደ 'V' (ቭ) ይነበባል። ለምሳሌ፡ Wir (ቪር) ማለት 'እኛ' ማለት ነው።"
  },
  {
    chapter: 2,
    title: "ሰላምታዎች (Greetings)",
    content: "በማንኛውም ጊዜና ቦታ ሰዎችን እንዴት ሰላም እንደምንል የሚያሳይ።",
    lessons: [
      { de: "Guten Tag", en: "Good Day", am: "ደህና ዋሉ / ሰላም" },
      { de: "Wie geht es Ihnen?", en: "How are you? (Formal)", am: "እንዴት ነዎት?" },
      { de: "Auf Wiedersehen", en: "Goodbye", am: "ደህና ሁኑ" }
    ],
    note: "ለታላቅ ሰው ወይም ለማያውቁት ሰው 'Ihnen' (እርስዎ) መጠቀም የግድ ነው።"
  },
  {
    chapter: 3,
    title: "ቁጥሮች (Numbers - 1 to 1000)",
    content: "መሰረታዊ ቁጥሮችና የሰዓት አቆጣጠር።",
    lessons: [
      { de: "Eins, Zwei, Drei", en: "One, Two, Three", am: "አንድ፣ ሁለት፣ ሦስት" },
      { de: "Zehn, Zwanzig", en: "Ten, Twenty", am: "አስር፣ ሃያ" },
      { de: "Hundert, Tausend", en: "Hundred, Thousand", am: "መቶ፣ ሺህ" }
    ],
    note: "21 ሲባል 'Einundzwanzig' (አንድና ሃያ) ይባላል።"
  },
  {
    chapter: 4,
    title: "ሰዋስው፡ መስተዋድድ (Grammar: Articles)",
    content: "በጀርመንኛ ስሞች በጾታ ይከፈላሉ (Der, Die, Das)።",
    lessons: [
      { de: "Der Mann", en: "The Man", am: "ሰውየው (ተባዕታይ)" },
      { de: "Die Frau", en: "The Woman", am: "ሴቲቱ (አንስታይ)" },
      { de: "Das Kind", en: "The Child", am: "ልጁ (መካከለኛ)" }
    ],
    note: "ማንኛውም ስም (Noun) በጀርመንኛ ሲጻፍ መጀመሪያው ፊደል በትልቅ (Capital) መሆን አለበት።"
  },
  {
    chapter: 5,
    title: "ንግግሮች (Daily Conversations)",
    content: "በሥራ ቦታና በገበያ ውስጥ የሚደረጉ ንግግሮች።",
    lessons: [
      { de: "Was kostet das?", en: "How much does this cost?", am: "ዋጋው ስንት ነው?" },
      { de: "Ich brauche Hilfe.", en: "I need help.", am: "እርዳታ እፈልጋለሁ።" },
      { de: "Ich verstehe nicht.", en: "I don't understand.", am: "አልገባኝም።" }
    ],
    note: "እርዳታ ለመጠየቅ 'Entschuldigung' (ይቅርታ) በማለት ንግግር መጀመር ይቻላል።"
  },
  {
    chapter: 6,
    title: "መዝገበ-ቃላት (A-Z Dictionary)",
    content: "በብዛት ጥቅም ላይ የሚውሉ ቃላት ዝርዝር።",
    lessons: [
      { de: "Arbeit", en: "Work", am: "ሥራ" },
      { de: "Brot", en: "Bread", am: "ዳቦ" },
      { de: "Computer", en: "Computer", am: "ኮምፒውተር" },
      { de: "Dank", en: "Thanks", am: "ምስጋና" }
    ],
    note: "ይህ መዝገበ-ቃላት በየጊዜው የሚታደስና ሰፊ ዝርዝር ያለው ነው።"
  }
];

export const developerInfo = {
  name: "Agegnehu Shibiru",
  brandName: "Agegnehu Tech",
  emails: [
    "agegnehushibiru2002@outlook.com",
    "agegnehushibiru5@gmail.com"
  ],
  biographyAmharic: `አገኘሁ ሽቢሩ (Agegnehu Shibiru) በኢትዮጵያ ሲዳማ ክልል በሃንታቴ ከተማ የሚኖር ወጣት የቴክኖሎጂ ባለሙያ ነው። አገኘሁ በኢትዮጵያ ባሕር ኃይል ውስጥ በኮማንዶነት በማገልገል ላይ የሚገኝ የአገር መከላከያ ሠራዊት አባል ሲሆን፣ ከውትድርናው ጎን ለጎን በቴክኖሎጂ እና በሶፍትዌር ኢንጂነሪንግ ዘርፍ ሰፊ ዕውቀት ያለውና በተለያዩ የኦንላይን የትምህርት ተቋማት (እንደ ALX እና Saylor Academy) ራሱን እያበቃ የሚገኝ ታታሪ ወጣት ነው።`,
  originAmharic: `የ "Agegnehu Tech" አመጣጥ፦
አገኘሁ ይህንን የጀርመንኛ ቋንቋ መማሪያ መተግበሪያ የሰራው፣ ቋንቋው የሚኖረውን ሰፊ የዕድል በር በመረዳት እና ለኢትዮጵያውያን ወንድሞቹና እህቶቹ ያለ ምንም ኢንተርኔት (Offline) በቀላሉ የሚማሩበት መንገድ እንዲመቻች በማሰብ ነው። ይህ መተግበሪያ ከቋንቋ ትምህርት ባለፈ፣ ጠንክሮ የሚሰራ ሰው በየትኛውም የሥራ መስክ ላይ ሆኖ ዓለምን የሚቀይር የቴክኖሎጂ ውጤት ማፍራት እንደሚችል ማሳያ ነው።`,
  visionAmharic: `የወደፊት ራዕይ፦
አገኘሁ ወደፊት በሀገሩ በሃንታቴ ከተማ የቴክኖሎጂ ማዕከል (Silk Bet) በመክፈት የወጣቶችን የቴክኖሎጂ ተጠቃሚነት ለማሳደግ እና በዓለም አቀፍ ደረጃ ተወዳዳሪ የሆኑ የሶፍትዌር ውጤቶችን በ "Agegnehu Tech" ስር ለማፍራት ትልቅ እቅድ አለው።`,
  biographyEnglish: `Agegnehu Shibiru is a young tech enthusiast and software engineering passionate from Hantate, Sidama, Ethiopia. He proudly serves as a member of the Ethiopian Navy (Commando) while simultaneously pursuing his passion for technology and software engineering through renowned online institutions such as ALX and Saylor Academy.`,
  originEnglish: `The Story Behind Agegnehu Tech:
Agegnehu created this German language learning application with a clear vision — to open doors of opportunity for his fellow Ethiopians by providing an accessible, offline-first learning experience. This app is more than just a language tool; it is a testament that a dedicated individual, regardless of their field, can create technology that changes lives.`,
  visionEnglish: `Future Vision:
Agegnehu plans to establish a technology center ("Silk Bet") in his hometown of Hantate, empowering the youth with digital skills and producing world-class software products under the Agegnehu Tech brand.`
};
