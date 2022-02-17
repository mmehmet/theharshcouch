/**
 * TTZC
 * The Time Zone Converter javascript code.
 * It defines both TTZC.Site and TTZC.Widget objects
 **/

var TTZC;
if (!TTZC) TTZC = {};
else if (typeof TTZC != "object")
  throw new Error("TTZC already exists and is not an object");

(function() {
  if(TTZC && TTZC.Widget) {
    return;
  }

  var gmts, tznames, cities, warnings;
  var shortTimes = {"az-cyrl-az":"H:mm"};
    //generated 2015-07-10 12:00:10.077145
  var shortTimes = {"az-cyrl-az":"H:mm","fa-ir":"hh:mm tt","es-do":"hh:mm tt","quz-bo":"hh:mm:ss tt","sk-sk":"H:mm","es-py":"hh:mm tt","th-th":"H:mm","ur-pk":"h:mm tt","gu-in":"HH:mm","sms-fi":"H:mm:ss","ns-za":"hh:mm:ss tt","es-hn":"hh:mm tt","es-ec":"H:mm","ar-ye":"hh:mm tt","bs-latn-ba":"H:mm:ss","id-id":"H:mm","es-co":"hh:mm tt","es-pa":"hh:mm tt","ar-qa":"hh:mm tt","de-li":"HH:mm","mn-mn":"H:mm","fr-mc":"HH:mm","sr-cyrl-ba":"H:mm:ss","pt-pt":"H:mm","af-za":"hh:mm tt","es-ve":"hh:mm tt","es-sv":"hh:mm tt","uz-cyrl-uz":"HH:mm","ar-ma":"H:mm","es-mx":"hh:mm tt","zh-sg":"tt h:mm","uz-latn-uz":"HH:mm","es-bo":"hh:mm tt","ms-bn":"H:mm","pl-pl":"HH:mm","en-029":"h:mm tt","fr-lu":"HH:mm","fo-fo":"HH.mm","fr-fr":"HH:mm","ar-jo":"hh:mm tt","sa-in":"HH:mm","eu-es":"HH:mm","es-pr":"hh:mm tt","en-nz":"h:mm tt","kk-kz":"H:mm","de-lu":"HH:mm","he-il":"HH:mm","tn-za":"hh:mm:ss tt","te-in":"HH:mm","es-ni":"hh:mm tt","es-uy":"hh:mm tt","bg-bg":"HH:mm","de-de":"HH:mm","sr-cyrl-cs":"H:mm","nn-no":"HH:mm","ar-bh":"hh:mm tt","se-fi":"H:mm:ss","lv-lv":"H:mm","en-ie":"HH:mm","ar-sy":"hh:mm tt","en-gb":"HH:mm","sma-se":"HH:mm:ss","ta-in":"HH:mm","se-no":"HH:mm:ss","syr-sy":"hh:mm tt","is-is":"HH:mm","kok-in":"HH:mm","sma-no":"HH:mm:ss","sw-ke":"h:mm tt","pt-br":"H:mm","ar-kw":"hh:mm tt","zh-cn":"H:mm","ar-eg":"hh:mm tt","sv-se":"HH:mm","pa-in":"tt hh:mm","en-za":"hh:mm tt","hu-hu":"H:mm","mt-mt":"HH:mm:ss","fr-ca":"HH:mm","fr-ch":"HH:mm","en-au":"h:mm tt","ar-ae":"hh:mm tt","smj-no":"HH:mm:ss","zh-mo":"H:mm","ar-lb":"hh:mm tt","ar-dz":"H:mm","cy-gb":"HH:mm:ss","smj-se":"HH:mm:ss","ca-es":"HH:mm","ky-kg":"H:mm","ka-ge":"H:mm","da-dk":"HH:mm","gl-es":"H:mm","se-se":"HH:mm:ss","kn-in":"HH:mm","ro-ro":"HH:mm","et-ee":"H:mm","en-us":"h:mm tt","sv-fi":"HH:mm","nl-nl":"H:mm","en-ph":"h:mm tt","vi-vn":"h:mm tt","en-jm":"hh:mm tt","ar-tn":"H:mm","ar-om":"hh:mm tt","de-at":"HH:mm","tt-ru":"H:mm","ar-sa":"hh:mm tt","lt-lt":"HH:mm","es-gt":"hh:mm tt","nl-be":"H:mm","es-cr":"hh:mm tt","zu-za":"hh:mm:ss tt","be-by":"H:mm","sl-si":"H:mm","xh-za":"hh:mm:ss tt","nb-no":"HH:mm","ja-jp":"H:mm","sr-latn-ba":"H:mm:ss","sr-latn-cs":"H:mm","fr-be":"H:mm","sq-al":"h:mm.tt","en-zw":"h:mm tt","en-tt":"hh:mm tt","en-bz":"hh:mm tt","es-es":"H:mm","es-pe":"hh:mm tt","hy-am":"H:mm","de-ch":"HH:mm","ar-ly":"hh:mm tt","fi-fi":"H:mm","uk-ua":"H:mm","ms-my":"H:mm","mi-nz":"h:mm:ss tt","cs-cz":"H:mm","es-cl":"H:mm","dv-mv":"HH:mm","it-it":"H.mm","ru-ru":"H:mm","en-ca":"h:mm tt","el-gr":"h:mm tt","es-ar":"hh:mm tt","quz-pe":"hh:mm:ss tt","zh-tw":"tt hh:mm","hr-hr":"H:mm","quz-ec":"H:mm:ss","it-ch":"HH:mm","hr-ba":"H:mm:ss","ar-iq":"hh:mm tt","smn-fi":"H:mm:ss","zh-hk":"H:mm","hi-in":"HH:mm","az-latn-az":"H:mm","tr-tr":"HH:mm","mk-mk":"HH:mm","ko-kr":"tt h:mm","mr-in":"HH:mm"};
  var gmts = {"GMT":0,"UTC":0,"GMT-14":-50400,"UTC-14":-50400,"GMT-13":-46800,"UTC-13":-46800,"GMT-12":-43200,"UTC-12":-43200,"GMT-11":-39600,"UTC-11":-39600,"GMT-10":-36000,"UTC-10":-36000,"GMT-9":-32400,"UTC-9":-32400,"GMT-8":-28800,"UTC-8":-28800,"GMT-7":-25200,"UTC-7":-25200,"GMT-6":-21600,"UTC-6":-21600,"GMT-5":-18000,"UTC-5":-18000,"GMT-4":-14400,"UTC-4":-14400,"GMT-3":-10800,"UTC-3":-10800,"GMT-2":-7200,"UTC-2":-7200,"GMT-1":-3600,"UTC-1":-3600,"GMT+0":0,"UTC+0":0,"GMT+1":3600,"UTC+1":3600,"GMT+2":7200,"UTC+2":7200,"GMT+3":10800,"UTC+3":10800,"GMT+4":14400,"UTC+4":14400,"GMT+5":18000,"UTC+5":18000,"GMT+6":21600,"UTC+6":21600,"GMT+7":25200,"UTC+7":25200,"GMT+8":28800,"UTC+8":28800,"GMT+9":32400,"UTC+9":32400,"GMT+10":36000,"UTC+10":36000,"GMT+11":39600,"UTC+11":39600,"GMT+12":43200,"UTC+12":43200,"GMT+13":46800,"UTC+13":46800,"GMT+14":50400,"UTC+14":50400};
  var tznames = {"CEDT (Central European Daylight Time)":7200,"Central European Daylight Time (CEDT)":7200,"CEST (Central European Summer Time)":7200,"Central European Summer Time (CEST)":7200,"EDT (Eastern Daylight Time)":-14400,"Eastern Daylight Time (EDT)":-14400,"EST (Eastern Standard Time)":-18000,"Eastern Standard Time (EST)":-18000,"PDT (Pacific Daylight Time)":-25200,"Pacific Daylight Time (PDT)":-25200,"PST (Pacific Standard Time)":-28800,"Pacific Standard Time (PST)":-28800,"MDT (Mountain Daylight Time)":-21600,"Mountain Daylight Time (MDT)":-21600,"MST (Mountain Standard Time)":-25200,"Mountain Standard Time (MST)":-25200,"CDT (Central Daylight Time)":-18000,"Central Daylight Time (CDT)":-18000,"CST (Central Standard Time)":-21600,"Central Standard Time (CST)":-21600,"NZST (New Zealand Standard Time)":43200,"New Zealand Standard Time (NZST)":43200,"NZDT (New Zealand Daylight Time)":46800,"New Zealand Daylight Time (NZDT)":46800,"A (Alpha Time Zone)":3600,"Alpha Time Zone (A)":3600,"ACDT (Australian Central Daylight Time)":37800,"Australian Central Daylight Time (ACDT)":37800,"ACST (Australian Central Standard Time)":34200,"Australian Central Standard Time (ACST)":34200,"ADT (Atlantic Daylight Time)":-10800,"Atlantic Daylight Time (ADT)":-10800,"AEDT (Australian Eastern Daylight Time)":39600,"Australian Eastern Daylight Time (AEDT)":39600,"AEST (Australian Eastern Standard Time)":36000,"Australian Eastern Standard Time (AEST)":36000,"AKDT (Alaska Daylight Time)":-28800,"Alaska Daylight Time (AKDT)":-28800,"AKST (Alaska Standard Time)":-32400,"Alaska Standard Time (AKST)":-32400,"AST (Atlantic Standard Time)":-14400,"Atlantic Standard Time (AST)":-14400,"AWDT (Australian Western Daylight Time)":32400,"Australian Western Daylight Time (AWDT)":32400,"AWST (Australian Western Standard Time)":28800,"Australian Western Standard Time (AWST)":28800,"B (Bravo Time Zone)":7200,"Bravo Time Zone (B)":7200,"BST (British Summer Time)":3600,"British Summer Time (BST)":3600,"C (Charlie Time Zone)":10800,"Charlie Time Zone (C)":10800,"CET (Central European Time)":3600,"Central European Time (CET)":3600,"CXT (Christmas Island Time)":25200,"Christmas Island Time (CXT)":25200,"D (Delta Time Zone)":14400,"Delta Time Zone (D)":14400,"E (Echo Time Zone)":18000,"Echo Time Zone (E)":18000,"EEDT (Eastern European Daylight Time)":10800,"Eastern European Daylight Time (EEDT)":10800,"EEST (Eastern European Summer Time)":10800,"Eastern European Summer Time (EEST)":10800,"EET (Eastern European Time)":7200,"Eastern European Time (EET)":7200,"F (Foxtrot Time Zone)":21600,"Foxtrot Time Zone (F)":21600,"G (Golf Time Zone)":25200,"Golf Time Zone (G)":25200,"GMT (Greenwich Mean Time)":0,"Greenwich Mean Time (GMT)":0,"H (Hotel Time Zone)":28800,"Hotel Time Zone (H)":28800,"HADT (Hawaii-Aleutian Daylight Time)":-32400,"Hawaii-Aleutian Daylight Time (HADT)":-32400,"HAST (Hawaii-Aleutian Standard Time)":-36000,"Hawaii-Aleutian Standard Time (HAST)":-36000,"HST (Hawaii Standard Time)":-36000,"Hawaii Standard Time (HST)":-36000,"IST (Irish Summer Time)":3600,"Irish Summer Time (IST)":3600,"K (Kilo Time Zone)":36000,"Kilo Time Zone (K)":36000,"L (Lima Time Zone)":39600,"Lima Time Zone (L)":39600,"M (Mike Time Zone)":43200,"Mike Time Zone (M)":43200,"MESZ (Mitteleuropäische Sommerzeit)":7200,"Mitteleuropäische Sommerzeit (MESZ)":7200,"MEZ (Mitteleuropäische Zeit)":3600,"Mitteleuropäische Zeit (MEZ)":3600,"MSD (Moscow Daylight Time)":14400,"Moscow Daylight Time (MSD)":14400,"MSK (Moscow Standard Time)":10800,"Moscow Standard Time (MSK)":10800,"N (November Time Zone)":-3600,"November Time Zone (N)":-3600,"NDT (Newfoundland Daylight Time)":-9000,"Newfoundland Daylight Time (NDT)":-9000,"NFT (Norfolk (Island) Time)":41400,"Norfolk (Island) Time (NFT)":41400,"NST (Newfoundland Standard Time)":-12600,"Newfoundland Standard Time (NST)":-12600,"O (Oscar Time Zone)":-7200,"Oscar Time Zone (O)":-7200,"P (Papa Time Zone)":-10800,"Papa Time Zone (P)":-10800,"Q (Quebec Time Zone)":-14400,"Quebec Time Zone (Q)":-14400,"R (Romeo Time Zone)":-18000,"Romeo Time Zone (R)":-18000,"S (Sierra Time Zone)":-21600,"Sierra Time Zone (S)":-21600,"T (Tango Time Zone)":-25200,"Tango Time Zone (T)":-25200,"U (Uniform Time Zone)":-28800,"Uniform Time Zone (U)":-28800,"UTC (Coordinated Universal Time)":0,"Coordinated Universal Time (UTC)":0,"UTC":0,"V (Victor Time Zone)":-32400,"Victor Time Zone (V)":-32400,"W (Whiskey Time Zone)":-36000,"Whiskey Time Zone (W)":-36000,"WDT (Western Daylight Time)":32400,"Western Daylight Time (WDT)":32400,"WEDT (Western European Daylight Time)":3600,"Western European Daylight Time (WEDT)":3600,"WEST (Western European Summer Time)":3600,"Western European Summer Time (WEST)":3600,"WET (Western European Time)":0,"Western European Time (WET)":0,"WST (Western Standard Time)":28800,"Western Standard Time (WST)":28800,"X (X-ray Time Zone)":-39600,"X-ray Time Zone (X)":-39600,"Y (Yankee Time Zone)":-43200,"Yankee Time Zone (Y)":-43200,"Z (Zulu Time Zone)":0,"Zulu Time Zone (Z)":0};
  var cities = {"Aba":3600,"Abadan":16200,"Abeokuta":3600,"Abidjan":0,"Abobo":0,"Abomey-Calavi":3600,"Abu Dhabi":14400,"Abu Ghurayb":10800,"Abuja":3600,"Acapulco de Juarez":-18000,"Accra":0,"Ad Dammam":10800,"Adamstown":-28800,"Adana":10800,"Addis Ababa":10800,"Adelaide":34200,"Afghanistan":16200,"Agadir":0,"Agra":19800,"Aguascalientes":-18000,"Ahmadabad":19800,"Ahvaz":16200,"Ajmer":19800,"Akola":19800,"Akure":3600,"Al Basrah":10800,"Al Basrah al Qadimah":10800,"Al Hudaydah":10800,"Al Jizah":7200,"Al Mahallah al Kubra":7200,"Al Mansurah":7200,"Al Mawsil al Jadidah":10800,"Al Ubayyid":10800,"Al `Ayn":14400,"Alabama":-18000,"Aland Islands":10800,"Alaska":-28800,"Albania":7200,"Albuquerque":-21600,"Aleppo":10800,"Alexandria":7200,"Algeria":3600,"Algiers":3600,"Aligarh":19800,"Allahabad":19800,"Almaty":21600,"Alofi":-39600,"Amagasaki":32400,"American Samoa":-39600,"Amman":10800,"Amravati":19800,"Amritsar":19800,"Amsterdam":7200,"An Najaf":10800,"An Nasiriyah":10800,"Ananindeua":-10800,"Anchorage":-28800,"Andorra":7200,"Andorra la Vella":7200,"Angola":3600,"Anguilla":-14400,"Ankara":10800,"Ansan":32400,"Anshan":28800,"Antalya":10800,"Antananarivo":10800,"Antarctica":43200,"Antigua and Barbuda":-14400,"Antipolo":28800,"Antwerp":7200,"Aomen":28800,"Apia":46800,"Aracaju":-10800,"Arak":16200,"Arbil":10800,"Ardabil":16200,"Arequipa":-18000,"Argentina":-10800,"Arizona":-25200,"Arkansas":-18000,"Armenia":14400,"Aruba":-14400,"As Sulaymaniyah":10800,"Asansol":19800,"Ashgabat":18000,"Asmara":10800,"Astana":21600,"Astrakhan'":10800,"Asuncion":-14400,"Asyut":7200,"At Ta'if":10800,"Athens":10800,"Atlanta":-14400,"Auckland":43200,"Aurangabad":19800,"Austin":-18000,"Austria":7200,"Avarua":-36000,"Az Zarqa'":10800,"Azadshahr":16200,"Azerbaijan":18000,"Baghdad":10800,"Bahamas":-14400,"Bahawalpur":18000,"Bahrain":10800,"Bairiki":43200,"Baku":18000,"Balikpapan":28800,"Baltimore":-14400,"Bamako":0,"Bamenda":3600,"Bandar Seri Begawan":28800,"Bandung":25200,"Banghazi":7200,"Bangkok":25200,"Bangladesh":21600,"Bangui":3600,"Banjarmasin":28800,"Banjul":0,"Baoding":28800,"Baotou":28800,"Barbados":-14400,"Barcelona":7200,"Bareilly":19800,"Barnaul":21600,"Barquisimeto":-16200,"Barranquilla":-18000,"Basse-Terre":-14400,"Basseterre":-14400,"Beijing":28800,"Beira":7200,"Beirut":10800,"Bekasi":25200,"Belarus":10800,"Belem":-10800,"Belford Roxo":-10800,"Belgaum":19800,"Belgium":7200,"Belgrade":7200,"Belize":-21600,"Bello":-18000,"Belmopan":-21600,"Belo Horizonte":-10800,"Benares":19800,"Bengaluru":19800,"Bengbu":28800,"Benin":3600,"Benin-City":3600,"Benoni":7200,"Benxi":28800,"Berlin":7200,"Bermuda":-10800,"Bern":7200,"Betim":-10800,"Bhatpara":19800,"Bhavnagar":19800,"Bhilai":19800,"Bhiwandi":19800,"Bhopal":19800,"Bhubaneshwar":19800,"Bhutan":21600,"Bien Hoa":25200,"Bikaner":19800,"Billings":-21600,"Bishkek":21600,"Bissau":0,"Blantyre":7200,"Bloemfontein":7200,"Bochum":7200,"Bochum-Hordel":7200,"Bogor":25200,"Bogota":-18000,"Boise":-21600,"Bokaro":19800,"Boksburg":7200,"Bolivia":-14400,"Bologna":7200,"Bosnia and Herzegovina":7200,"Boston":-14400,"Botswana":7200,"Bouake":0,"Boumerdas":3600,"Bouvet Island":7200,"Brasilia":-10800,"Bratislava":7200,"Brazil - Sao Paulo":-10800,"Brazzaville":3600,"Bremen":7200,"Bridgeport":-14400,"Bridgetown":-14400,"Brisbane":36000,"Bristol":3600,"British Indian Ocean Territory":21600,"British Virgin Islands":-14400,"Brooklyn":-14400,"Brunei":28800,"Brussels":7200,"Bryansk":10800,"Bucaramanga":-18000,"Bucuresti":10800,"Budapest":7200,"Buenos Aires":-10800,"Bujumbura":7200,"Bulawayo":7200,"Bulgaria":10800,"Bur Sa`id":7200,"Buraydah":10800,"Burkina Faso":0,"Burlington":-14400,"Bursa":10800,"Burundi":7200,"CT (Central Time)":-18000,"Cagayan de Oro":28800,"Cairo":7200,"Calabar":3600,"Calcutta":19800,"Calgary":-21600,"Cali":-18000,"Calicut":19800,"California":-25200,"Callao":-18000,"Camayenne":0,"Cambodia":25200,"Cameroon":3600,"Campinas":-10800,"Campo Grande":-14400,"Campos":-10800,"Canada - Calgary":-21600,"Canada - Edmonton":-21600,"Canada - Halifax":-10800,"Canada - Montreal":-14400,"Canada - Quebec":-14400,"Canada - Toronto":-14400,"Canada - Vancouver":-25200,"Canada - Winnipeg":-18000,"Canberra":36000,"Cancun":-18000,"Cangzhou":28800,"Cankaya":10800,"Cape Town":7200,"Cape Verde":-3600,"Caracas":-16200,"Carrefour":-14400,"Cartagena":-18000,"Casablanca":0,"Castries":-14400,"Caxias do Sul":-10800,"Cayenne":-10800,"Cayman Islands":-18000,"Cebu City":28800,"Central African Republic":3600,"Central Time (CT)":-18000,"Ch'angwon":32400,"Ch'ongju":32400,"Chad":3600,"Chandigarh":19800,"Changchun":28800,"Changde":28800,"Changsha":28800,"Changzhi":28800,"Changzhou":28800,"Chaoyang":28800,"Chaozhou":28800,"Charleston":-14400,"Charlotte":-14400,"Cheboksary":10800,"Cheju":32400,"Chelyabinsk":18000,"Chengde":28800,"Chengdu":28800,"Chennai":19800,"Cheyenne":-21600,"Chi-lung":28800,"Chiba":32400,"Chicago":-18000,"Chiclayo":-18000,"Chihuahua":-21600,"Chile":-10800,"China":28800,"Chisinau":10800,"Chittagong":21600,"Chongqing":28800,"Chonju":32400,"Christchurch":43200,"Christmas Island":25200,"Cimahi":25200,"Ciudad Guayana":-16200,"Ciudad Juarez":-21600,"Ciudad Lopez Mateos":-18000,"Ciudad Nezahualcoyotl":-18000,"Cleveland":-14400,"Cochabamba":-14400,"Cochin":19800,"Cocos Islands":23400,"Coimbatore":19800,"Colombia":-18000,"Colombo":19800,"Colorado":-21600,"Columbia":-14400,"Columbus":-14400,"Comilla":21600,"Comoros":10800,"Conakry":0,"Congo - Kinshasa":3600,"Congo - Lubumbashi":7200,"Connecticut":-14400,"Constantine":3600,"Contagem":-10800,"Cook Islands":-36000,"Copenhagen":7200,"Cordoba":-10800,"Costa Rica":-21600,"Cotonou":3600,"Croatia":7200,"Cuautitlan Izcalli":-18000,"Cuba":-14400,"Cucuta":-18000,"Cuiaba":-14400,"Culiacan":-21600,"Curitiba":-10800,"Cuttack":19800,"Cyprus":10800,"Czech Republic":7200,"Da Nang":25200,"Dakar":0,"Dalian":28800,"Dallas":-18000,"Damascus":10800,"Dandong":28800,"Dar es Salaam":10800,"Dasmarinas":28800,"Datong":28800,"Davao":28800,"Dayan":28800,"Dehra Dun":19800,"Delaware":-14400,"Delhi":19800,"Delmas 73":-14400,"Democratic Republic of the Congo":7200,"Den Haag":7200,"Denmark":7200,"Denpasar":28800,"Denver":-21600,"Depok":25200,"Des Moines":-18000,"Detroit":-14400,"Dezhou":28800,"Dhaka":21600,"Diadema":-10800,"Diego Garcia":21600,"Dili":32400,"Diyarbakir":10800,"Djibouti":10800,"Dnipropetrovsk":10800,"Dodoma":10800,"Doha":10800,"Dominica":-14400,"Dominican Republic":-14400,"Donets'k":10800,"Dongguan":28800,"Dortmund":7200,"Douala":3600,"Douglas":3600,"Dresden":7200,"Dubai":14400,"Dublin":3600,"Duisburg":7200,"Duque de Caxias":-10800,"Durango":-18000,"Durban":7200,"Durgapur":19800,"Dushanbe":18000,"Dusseldorf":7200,"ET (Eastern Time)":-14400,"East Timor":32400,"Eastern Time (ET)":-14400,"Ecatepec":-18000,"Ecuador":-18000,"Edinburgh":3600,"Edmonton":-21600,"Egypt":7200,"El Paso":-21600,"El Salvador":-21600,"England":3600,"Enugu":3600,"Equatorial Guinea":3600,"Eritrea":10800,"Erzurum":10800,"Esfahan":16200,"Eskisehir":10800,"Essen":7200,"Estonia":10800,"Ethiopia":10800,"Faisalabad":18000,"Falkland Islands":-10800,"Fargo":-18000,"Faridabad":19800,"Faroe Islands":3600,"Feira de Santana":-10800,"Fes":0,"Fiji":43200,"Finland":10800,"Florence":7200,"Florianopolis":-10800,"Florida - Miami":-14400,"Florida - Pensacola":-18000,"Flying Fish Cove":25200,"Fort Worth":-18000,"Fort-de-France":-14400,"Fortaleza":-10800,"Foshan":28800,"France":7200,"Frankfurt am Main":7200,"Freetown":0,"French Guiana":-10800,"French Polynesia":-34200,"French Southern Territories":18000,"Fresno":-25200,"Fujisawa":32400,"Fukuoka":32400,"Fukuyama":32400,"Funabashi":32400,"Funafuti":43200,"Fushun":28800,"Fuxin":28800,"Fuzhou":28800,"Gabon":3600,"Gaborone":7200,"Gambia":0,"Garoua":3600,"Gaya":19800,"Gaza":10800,"Gaziantep":10800,"Gdansk":7200,"Genova":7200,"George Town":-18000,"Georgetown":-14400,"Georgia (Country)":14400,"Georgia - United States":-14400,"Germany":7200,"Ghana":0,"Ghaziabad":19800,"Gibraltar":7200,"Gifu":32400,"Glasgow":3600,"Goeteborg":7200,"Goiania":-10800,"Gold Coast":36000,"Grand Dakar":0,"Grand Turk":-14400,"Great Britain":3600,"Greece":10800,"Greenland - Nuuk":-7200,"Grenada":-14400,"Grytviken":-7200,"Guadalajara":-18000,"Guadalupe":-18000,"Guadeloupe":-14400,"Guam":36000,"Guangzhou":28800,"Guarulhos":-10800,"Guatemala":-21600,"Guatemala City":-21600,"Guayaquil":-18000,"Guernsey":3600,"Guilin":28800,"Guinea":0,"Guinea-Bissau":0,"Guiyang":28800,"Gujranwala":18000,"Gulbarga":19800,"Guli":28800,"Guntur":19800,"Gustavia":-14400,"Guwahati":19800,"Guyana":-14400,"Gwalior":19800,"Ha Noi":25200,"Hachioji":32400,"Hagatna":36000,"Haikou":28800,"Haiphong":25200,"Haiti":-14400,"Hamadan":16200,"Hamah":10800,"Hamamatsu":32400,"Hamburg":7200,"Hamhung":32400,"Hamilton":-14400,"Handan":28800,"Hangzhou":28800,"Hannover":7200,"Haora":19800,"Harare":7200,"Harbin":28800,"Hargeysa":10800,"Havana":-14400,"Hawaii":-36000,"Heard Island and McDonald Islands":28800,"Hefei":28800,"Hegang":28800,"Helsinki":10800,"Hengshui":28800,"Hengyang":28800,"Hermosillo":-25200,"Himeji":32400,"Hims":10800,"Hirakata":32400,"Hiroshima":32400,"Hohhot":28800,"Homyel'":10800,"Honduras":-21600,"Hong Kong":28800,"Honiara":39600,"Honolulu":-36000,"Houston":-18000,"Hsin-chu-shih":28800,"Huaibei":28800,"Huainan":28800,"Huaiyin":28800,"Huancayo":-18000,"Huangshi":28800,"Hubli":19800,"Hungary":7200,"Ibadan":3600,"Ibague":-18000,"Iceland":0,"Ichikawa":32400,"Idaho - Boise":-21600,"Illinois":-18000,"Iloilo":28800,"Ilorin":3600,"Inch'on":32400,"India":19800,"Indiana - Indianapolis":-14400,"Indianapolis":-14400,"Indonesia":28800,"Indore":19800,"Iowa":-18000,"Ipoh":28800,"Iquitos":-18000,"Iran":16200,"Iraq":10800,"Ireland":3600,"Irkutsk":28800,"Islamabad":18000,"Isle of Man":3600,"Israel":10800,"Istanbul":10800,"Italy":7200,"Ivanovo":10800,"Ivory Coast":0,"Izhevsk":14400,"Izmir":10800,"Jabalpur":19800,"Jaboatao":-10800,"Jaboatao dos Guararapes":-10800,"Jackson":-18000,"Jacksonville":-14400,"Jaipur":19800,"Jakarta":25200,"Jalandhar":19800,"Jalapa Enriquez":-18000,"Jalgaon":19800,"Jamaica":-18000,"Jambi":25200,"Jamestown":0,"Jammu":19800,"Jamnagar":19800,"Jamshedpur":19800,"Japan":32400,"Jersey":3600,"Jerusalem":10800,"Jhansi":19800,"Jiamusi":28800,"Jiangmen":28800,"Jiaojiang":28800,"Jiaozuo":28800,"Jiaxing":28800,"Jiddah":10800,"Jieyang":28800,"Jilin":28800,"Jinan":28800,"Jining":28800,"Jinzhou":28800,"Jixi":28800,"Joao Pessoa":-10800,"Jodhpur":19800,"Johannesburg":7200,"Johor Bahru":28800,"Joinville":-10800,"Jordan":10800,"Jos":3600,"Juan Dolio":-14400,"Juiz de Fora":-10800,"Kabul":16200,"Kaduna":3600,"Kagoshima":32400,"Kahramanmaras":10800,"Kahriz":16200,"Kaifeng":28800,"Kaliningrad":7200,"Kalyan":19800,"Kampala":10800,"Kampung Baru Subang":28800,"Kananga":7200,"Kanazawa":32400,"Kandahar":16200,"Kano":3600,"Kanpur":19800,"Kansas - Wichita":-18000,"Kansas City":-18000,"Kao-hsiung":28800,"Karachi":18000,"Karagandy":18000,"Karaj":16200,"Karbala'":10800,"Kassala":10800,"Kathmandu":20700,"Katsina":3600,"Kaunas":10800,"Kawaguchi":32400,"Kawasaki":32400,"Kayseri":10800,"Kazakhstan - Almaty":21600,"Kazan'":10800,"Kemerovo":25200,"Kentucky - Lexington":-14400,"Kentucky - Lexington-Fayette":-14400,"Kentucky - Louisville":-14400,"Kentucky - Owensboro":-18000,"Kenya":10800,"Kerman":16200,"Kermanshah":16200,"Khabarovsk":36000,"Khabarovsk Vtoroy":36000,"Khamis Mushayt":10800,"Kharkiv":10800,"Khartoum":10800,"Khmel'nyts'kyy":10800,"Khulna":21600,"Kiev":10800,"Kigali":7200,"Kingston":-18000,"Kingstown":-14400,"Kinshasa":3600,"Kirkuk":10800,"Kirov":10800,"Kisangani":7200,"Kitakyushu":32400,"Kitchener":-14400,"Kitwe":7200,"Klang":28800,"Knoxville":-14400,"Kobe":32400,"Koeln":7200,"Kolhapur":19800,"Kolwezi":7200,"Konya":10800,"Korba":19800,"Koror":32400,"Kota":19800,"Kota Kinabalu":28800,"Kotli":18000,"Kousseri":3600,"Kowloon":28800,"Krakow":7200,"Krasnodar":10800,"Krasnoyarsk":25200,"Krugersdorp":7200,"Kryvyy Rih":10800,"Kuala Lumpur":28800,"Kuching":28800,"Kumamoto":32400,"Kumasi":0,"Kunming":28800,"Kurashiki":32400,"Kursk":10800,"Kuwait":10800,"Kwangju":32400,"Kyoto":32400,"Kyrgyzstan":21600,"L'viv":10800,"La Paz":-14400,"La Plata":-10800,"Lagos":3600,"Lahore":18000,"Langfang":28800,"Lanzhou":28800,"Laos":25200,"Las Palmas de Gran Canaria":3600,"Las Pavas":-18000,"Las Vegas":-25200,"Latvia":10800,"Lebanon":10800,"Leeds":3600,"Leipzig":7200,"Leon":-18000,"Lesotho":7200,"Lexington":-14400,"Lexington-Fayette":-14400,"Liaoyang":28800,"Liaoyuan":28800,"Liberia":0,"Libreville":3600,"Libya":7200,"Liechtenstein":7200,"Likasi":7200,"Lilongwe":7200,"Lima":-18000,"Lincoln":-18000,"Lipetsk":10800,"Lisbon":3600,"Lithuania":10800,"Little Rock":-18000,"Liuyang":28800,"Liverpool":3600,"Ljubljana":7200,"Lobamba":7200,"Lodz":7200,"Lome":0,"London":3600,"Londrina":-10800,"Long Beach":-25200,"Longyearbyen":7200,"Los Angeles":-25200,"Louisiana":-18000,"Louisville":-14400,"Luancheng":28800,"Luanda":3600,"Lubumbashi":7200,"Lucknow":19800,"Ludhiana":19800,"Luhans'k":10800,"Luohe":28800,"Luoyang":28800,"Luqiaozhen":28800,"Lusaka":7200,"Luxembourg":7200,"Luxor":7200,"Lyon":7200,"MT (Mountain Time)":-21600,"Macao":28800,"Macedonia":7200,"Maceio":-10800,"Machida":32400,"Madagascar":10800,"Madrid":7200,"Madurai":19800,"Magnitogorsk":18000,"Maiduguri":3600,"Maine":-14400,"Majuro":43200,"Makassar":28800,"Makhachkala":10800,"Makiyivka":10800,"Malabo":3600,"Malaga":7200,"Malang":25200,"Malatya":10800,"Malawi":7200,"Malaysia":28800,"Maldives":18000,"Male":18000,"Malegaon":19800,"Mali":0,"Malta":7200,"Mamoudzou":10800,"Mamuju":28800,"Manado":28800,"Managua":-21600,"Manama":10800,"Manaus":-14400,"Mandalay":23400,"Mangalore":19800,"Manila":28800,"Mansilingan":28800,"Maputo":7200,"Mar del Plata":-10800,"Maracaibo":-16200,"Mariupol'":10800,"Marrakech":0,"Marseille":7200,"Marshall Islands":43200,"Martinique":-14400,"Maryland":-14400,"Maseru":7200,"Mashhad":16200,"Masina":3600,"Massachusetts":-14400,"Matamoros":-18000,"Matola":7200,"Matsudo":32400,"Maturin":-16200,"Maua":-10800,"Mauritania":0,"Mauritius":14400,"Mawlamyine":23400,"Mayotte":10800,"Mbabane":7200,"Mbuji-Mayi":7200,"Mecca":10800,"Medan":25200,"Medellin":-18000,"Medina":10800,"Meerut":19800,"Meknes":0,"Melbourne":36000,"Melekeok":32400,"Memphis":-18000,"Mendoza":-10800,"Mercin":10800,"Merida":-18000,"Mesa":-25200,"Mexicali":-25200,"Mexico - Mexico City":-18000,"Mexico City":-18000,"Miami":-14400,"Michigan":-14400,"Milano":7200,"Milwaukee":-18000,"Minneapolis":-18000,"Minnesota":-18000,"Minsk":10800,"Misratah":7200,"Mississippi":-18000,"Missouri":-18000,"Mixco":-21600,"Mogadishu":10800,"Moldova":10800,"Mombasa":10800,"Monaco":7200,"Mongolia":32400,"Monrovia":0,"Montana":-21600,"Montenegro":7200,"Monterrey":-18000,"Montevideo":-10800,"Montreal":-14400,"Montserrat":-14400,"Moradabad":19800,"Morelia":-18000,"Morocco":0,"Moroni":10800,"Moscow":10800,"Mosul":10800,"Mountain Time (MT)":-21600,"Mozambique":7200,"Muang Phonsavan":25200,"Mudanjiang":28800,"Muenchen":7200,"Multan":18000,"Mumbai":19800,"Munich":7200,"Murcia":7200,"Muscat":14400,"Mwanza":10800,"Myanmar":23400,"Mykolayiv":10800,"Mysore":19800,"N'Djamena":3600,"Naberezhnyye Chelny":10800,"Nagasaki":32400,"Nagoya":32400,"Nagpur":19800,"Nairobi":10800,"Namangan":18000,"Namibia":3600,"Namp'o":32400,"Nampula":7200,"Nanchang":28800,"Nanchong":28800,"Nangi":19800,"Nanjing":28800,"Nanning":28800,"Nantong":28800,"Napoli":7200,"Nashville":-18000,"Nasik":19800,"Nassau":-14400,"Natal":-10800,"Naucalpan de Juarez":-18000,"Nauru":43200,"Nay Pyi Taw":23400,"Ndola":7200,"Nebraska - Lincoln":-18000,"Nebraska - Omaha":-18000,"Neijiang":28800,"Nellore":19800,"Nepal":20700,"Nerima":32400,"Netherlands":7200,"Netherlands Antilles":-14400,"Nevada":-25200,"New Caledonia":39600,"New Delhi":19800,"New Hampshire":-14400,"New Jersey":-14400,"New Kingston":-18000,"New Mexico":-21600,"New Orleans":-18000,"New South Memphis":-18000,"New York":-14400,"New Zealand":43200,"Newark":-14400,"Niamey":3600,"Nicaragua":-21600,"Nicosia":10800,"Niger":3600,"Nigeria":3600,"Niigata":32400,"Ningbo":28800,"Nishinomiya":32400,"Niteroi":-10800,"Niue":-39600,"Nizhniy Novgorod":10800,"Nizhniy Tagil":18000,"Norfolk Island":41400,"North Carolina":-14400,"North Dakota - Fargo":-18000,"North Korea":32400,"North York":-14400,"Northern Mariana Islands":36000,"Norway":7200,"Nouakchott":0,"Noumea":39600,"Nova Iguacu":-10800,"Novokuznetsk":25200,"Novosibirsk":21600,"Nuernberg":7200,"Nuku`alofa":46800,"Nuuk":-7200,"Oakland":-25200,"Odesa":10800,"Ohio":-14400,"Oita":32400,"Okayama":32400,"Okene":3600,"Oklahoma":-18000,"Oklahoma City":-18000,"Omaha":-18000,"Oman":14400,"Omdurman":10800,"Omsk":21600,"Onitsha":3600,"Oran":3600,"Oranjestad":-14400,"Oregon - Portland":-25200,"Orenburg":18000,"Orumiyeh":16200,"Osaka":32400,"Osasco":-10800,"Oslo":7200,"Ottawa":-14400,"Ouagadougou":0,"Oujda":0,"Owensboro":-18000,"Oyo":3600,"PT (Pacific Time)":-25200,"Pacific Time (PT)":-25200,"Padang":25200,"Pago Pago":-39600,"Pakistan":18000,"Palau":32400,"Palembang":25200,"Palermo":7200,"Palestinian Territory":10800,"Palikir":39600,"Palma":7200,"Panama":-18000,"Panihati":19800,"Panshan":28800,"Panzhihua":28800,"Papeete":-36000,"Papua New Guinea":36000,"Paraguay":-14400,"Paramaribo":-10800,"Paris":7200,"Pasto":-18000,"Patna":19800,"Pennsylvania":-14400,"Pensacola":-18000,"Penza":10800,"Pereira":-18000,"Perm'":18000,"Perth":28800,"Peru":-18000,"Peshawar":18000,"Petaling Jaya":28800,"Philadelphia":-14400,"Philippines":28800,"Phnom Penh":25200,"Phoenix":-25200,"Pietermaritzburg":7200,"Pikine":0,"Pimpri":19800,"Pingdingshan":28800,"Pingxiang":28800,"Pitcairn":-28800,"Plymouth":-14400,"Podgorica":7200,"Pointe-Noire":3600,"Poland":7200,"Ponce":-14400,"Pontianak":25200,"Port Elizabeth":7200,"Port Harcourt":3600,"Port Louis":14400,"Port Moresby":36000,"Port Sudan":10800,"Port-Vila":39600,"Port-au-Prince":-14400,"Port-of-Spain":-14400,"Porto Alegre":-10800,"Porto-Novo":3600,"Portugal":3600,"Poznan":7200,"Praha":7200,"Praia":-3600,"Pretoria":7200,"Pristina":7200,"Providence":-14400,"Puch'on":32400,"Puebla de Zaragoza":-18000,"Puerto Rico":-14400,"Pune":19800,"Pusan":32400,"Putian":28800,"Pyongyang":32400,"Qaraghandy":21600,"Qatar":10800,"Qingdao":28800,"Qinhuangdao":28800,"Qiqihar":28800,"Qom":16200,"Quebec":-14400,"Queretaro":-18000,"Quetta":18000,"Quilmes":-10800,"Quilon":19800,"Quito":-18000,"Ra's Bayrut":10800,"Rabat":0,"Raipur":19800,"Rajkot":19800,"Rajshahi":21600,"Ranchi":19800,"Rangoon":23400,"Rapid City":-21600,"Rasht":16200,"Rawalpindi":18000,"Recife":-10800,"Resistencia":-10800,"Reunion":14400,"Reykjavik":0,"Reynosa":-18000,"Rhode Island":-14400,"Ribeirao Preto":-10800,"Ribeirao das Neves":-10800,"Riga":10800,"Rio de Janeiro":-10800,"Riyadh":10800,"Road Town":-14400,"Roma":7200,"Romania":10800,"Rome":7200,"Rosario":-10800,"Roseau":-14400,"Rostov-na-Donu":10800,"Rotterdam":7200,"Russia - Moscow":10800,"Rwanda":7200,"Ryazan'":10800,"Sacramento":-25200,"Sagamihara":32400,"Saharanpur":19800,"Saint Barthélemy":-14400,"Saint George's":-14400,"Saint Helena":0,"Saint Helier":3600,"Saint John's":-14400,"Saint Kitts and Nevis":-14400,"Saint Louis":-18000,"Saint Lucia":-14400,"Saint Martin":-14400,"Saint Peter Port":3600,"Saint Petersburg":10800,"Saint Pierre and Miquelon":-7200,"Saint Vincent and the Grenadines":-14400,"Saint-Denis":14400,"Saint-Pierre":-7200,"Saitama":32400,"Sakai":32400,"Salem":19800,"Salt Lake City":-21600,"Salta":-10800,"Saltillo":-18000,"Salvador":-10800,"Salzburg":7200,"Samara":14400,"Samoa":46800,"Samsun":10800,"Samut Prakan":25200,"San Antonio":-18000,"San Diego":-25200,"San Francisco":-25200,"San Jose":-25200,"San Luis Potosi":-18000,"San Marino":7200,"San Miguel de Tucuman":-10800,"San Nicolas de los Garzas":-18000,"San Pedro Sula":-21600,"San Salvador":-21600,"Sanaa":10800,"Sandakan":28800,"Sanliurfa":10800,"Santa Cruz de la Sierra":-14400,"Santa Fe de la Vera Cruz":-10800,"Santa Marta":-18000,"Santiago":-10800,"Santiago de Cuba":-14400,"Santiago de los Caballeros":-14400,"Santo Andre":-10800,"Santo Domingo":-14400,"Santos":-10800,"Sao Bernardo do Campo":-10800,"Sao Joao de Meriti":-10800,"Sao Jose do Rio Preto":-10800,"Sao Jose dos Campos":-10800,"Sao Luis":-10800,"Sao Paulo":-10800,"Sao Tome":0,"Sao Tome and Principe":0,"Sapporo":32400,"Sarajevo":7200,"Saratov":10800,"Sargodha":18000,"Saudi Arabia":10800,"Seattle":-25200,"Semarang":25200,"Sendai":32400,"Senegal":0,"Seoul":32400,"Serbia":7200,"Seremban":28800,"Serra":-10800,"Sevastopol'":10800,"Sevilla":7200,"Seychelles":14400,"Shah Alam":28800,"Shanghai":28800,"Shantou":28800,"Shaoguan":28800,"Shaoxing":28800,"Sharjah":14400,"Shashi":28800,"Sheffield":3600,"Shenyang":28800,"Shenzhen":28800,"Shihezi":21600,"Shijiazhuang":28800,"Shiliguri":19800,"Shimminatocho":32400,"Shiraz":16200,"Shivaji Nagar":19800,"Shizuoka":32400,"Shuangyashan":28800,"Shymkent":21600,"Sialkot":18000,"Sierra Leone":0,"Singapore":28800,"Sioux Falls":-18000,"Siping":28800,"Situbondo":25200,"Skopje":7200,"Slovakia":7200,"Slovenia":7200,"Sofia":10800,"Sokoto":3600,"Solapur":19800,"Solomon Islands":39600,"Somalia":10800,"Songnam":32400,"Sorocaba":-10800,"South Africa":7200,"South Boston":-14400,"South Carolina":-14400,"South Dakota - Rapid City":-21600,"South Dakota - Sioux Falls":-18000,"South Georgia and the South Sandwich Islands":-7200,"South Korea":32400,"Soweto":7200,"Spain":7200,"Sri Lanka":19800,"Srinagar":19800,"Stanley":-10800,"Stockholm":7200,"Strasbourg":7200,"Stuttgart":7200,"Sucre":-14400,"Sudan":10800,"Suez":7200,"Sukkur":18000,"Sultanah":10800,"Surabaya":25200,"Surakarta":25200,"Surat":19800,"Suriname":-10800,"Suva":43200,"Suwon":32400,"Suzhou":28800,"Svalbard and Jan Mayen":7200,"Swaziland":7200,"Sweden":7200,"Switzerland":7200,"Sydney":36000,"Syria":10800,"Szczecin":7200,"T'ai-chung-shih":28800,"Ta`izz":10800,"Tabriz":16200,"Tabuk":10800,"Taegu":32400,"Taejon":32400,"Tai'an":28800,"Tainan City":28800,"Taipei":28800,"Taiwan":28800,"Taiyuan":28800,"Taizhou":28800,"Tajikistan":18000,"Tallinn":10800,"Tangerang":25200,"Tanggu":28800,"Tangier":0,"Tangshan":28800,"Tanjungkarang-Telukbetung":25200,"Tanta":7200,"Tanzania":10800,"Tashkent":18000,"Tbilisi":14400,"Tegucigalpa":-21600,"Tehran":16200,"Tel Aviv-Yafo":10800,"Tembisa":7200,"Teni":19800,"Tennessee - Knoxville":-14400,"Tennessee - Memphis":-18000,"Tennessee - Nashville":-18000,"Teresina":-10800,"Texas - El Paso":-21600,"Texas - Houston":-18000,"Thailand":25200,"Thane":19800,"Thanh pho Ho Chi Minh":25200,"The Valley":-14400,"Thimphu":21600,"Thiruvananthapuram":19800,"Tianjin":28800,"Tijuana":-25200,"Tirana":7200,"Tiruchchirappalli":19800,"Tirunelveli":19800,"Tiruppur":19800,"Tlalnepantla":-18000,"Tlaquepaque":-18000,"Togo":0,"Tokelau":46800,"Tokyo":32400,"Tol'yatti":14400,"Toluca":-18000,"Tomsk":25200,"Tonala":-18000,"Tonga":46800,"Torino":7200,"Toronto":-14400,"Torreon":-18000,"Torshavn":3600,"Toulouse":7200,"Toyohashi":32400,"Toyonaka":32400,"Trinidad and Tobago":-14400,"Tripoli":7200,"Trujillo":-18000,"Tucson":-25200,"Tula":10800,"Tulsa":-18000,"Tunis":3600,"Tunisia":3600,"Turkey":10800,"Turkmenistan":18000,"Turks and Caicos Islands":-14400,"Tuvalu":43200,"Tuxtla Gutierrez":-18000,"Tver'":10800,"Tyumen'":18000,"U.S. Virgin Islands":-14400,"Uberlandia":-10800,"Udaipur":19800,"Ufa":18000,"Uganda":10800,"Uijongbu":32400,"Ujjain":19800,"Ukraine":10800,"Ul'yanovsk":10800,"Ulaanbaatar":32400,"Ulhasnagar":19800,"Ulsan":32400,"United Arab Emirates":14400,"United Kingdom":3600,"Uruguay":-10800,"Urumqi":21600,"Utah":-21600,"Utsunomiya":32400,"Uzbekistan":18000,"Vadodara":19800,"Vaduz":7200,"Valletta":7200,"Van":10800,"Vancouver":-25200,"Vanuatu":39600,"Vatican":7200,"Vatican City":7200,"Venezuela":-16200,"Venice":7200,"Veracruz":-18000,"Vereeniging":7200,"Vermont":-14400,"Victoria":14400,"Vienna":7200,"Vientiane":25200,"Vietnam":25200,"Vijayawada":19800,"Vila Velha":-10800,"Villa Nueva":-21600,"Vilnius":10800,"Virginia":-14400,"Virginia Beach":-14400,"Vishakhapatnam":19800,"Vladivostok":36000,"Volgograd":10800,"Voronezh":10800,"Wallis and Futuna":43200,"Warangal":19800,"Warri":3600,"Warsaw":7200,"Washington":-14400,"Washington - Seattle":-25200,"Weifang":28800,"Welkom":7200,"Wellington":43200,"Wenzhou":28800,"West Virginia":-14400,"Western Sahara":0,"Wichita":-18000,"Willemstad":-14400,"Wilmington":-14400,"Windhoek":3600,"Winnipeg":-18000,"Wisconsin":-18000,"Wroclaw":7200,"Wuhan":28800,"Wuhu":28800,"Wuxi":28800,"Wyoming":-21600,"Xi'an":28800,"Xiamen":28800,"Xiangfan":28800,"Xiangtan":28800,"Xianyang":28800,"Xingtai":28800,"Xining":28800,"Xinpu":28800,"Xinxiang":28800,"Xinyang":28800,"Xuanhua":28800,"Xuchang":28800,"Xuzhou":28800,"Yamoussoukro":0,"Yancheng":28800,"Yangjiang":28800,"Yangquan":28800,"Yangzhou":28800,"Yantai":28800,"Yaounde":3600,"Yaroslavl'":10800,"Yazd":16200,"Yekaterinburg":18000,"Yemen":10800,"Yerevan":14400,"Yichang":28800,"Yinchuan":28800,"Yingkou":28800,"Yogyakarta":25200,"Yokohama":32400,"Yokosuka":32400,"Yono":32400,"Yunfu":28800,"Zagreb":7200,"Zagreb - Centar":7200,"Zahedan":16200,"Zambia":7200,"Zamboanga":28800,"Zanzibar":10800,"Zapopan":-18000,"Zaporizhzhya":10800,"Zaragoza":7200,"Zaria":3600,"Zhangjiakou":28800,"Zhangzhou":28800,"Zhanjiang":28800,"Zhengzhou":28800,"Zhenjiang":28800,"Zhoukou":28800,"Zhuhai":28800,"Zhumadian":28800,"Zhuzhou":28800,"Zibo":28800,"Zigong":28800,"Zimbabwe":7200,"Zunyi":28800,"Zurich":7200,"`Adan":10800,"vina causino":-10800};
  var warnings = {"EST (Eastern Standard Time)":"Did you mean EDT (Eastern Daylight Time)?<br/>The Eastern United States currently observes EDT, not EST.","Eastern Standard Time (EST)":"Did you mean EDT (Eastern Daylight Time)?<br/>The Eastern United States currently observes EDT, not EST.","PST (Pacific Standard Time)":"Did you mean PDT (Pacific Daylight Time)?<br/>The Western United States currently observes PDT, not PST.","Pacific Standard Time (PST)":"Did you mean PDT (Pacific Daylight Time)?<br/>The Western United States currently observes PDT, not PST.","MST (Mountain Standard Time)":"Did you mean MDT (Mountain Daylight Time)?<br/>The Western United States currently observes MDT, not MST.","Mountain Standard Time (MST)":"Did you mean MDT (Mountain Daylight Time)?<br/>The Western United States currently observes MDT, not MST.","CST (Central Standard Time)":"Did you mean CDT (Central Daylight Time)?<br/>The United States currently observes CDT, not CST.","Central Standard Time (CST)":"Did you mean CDT (Central Daylight Time)?<br/>The United States currently observes CDT, not CST.","NZDT (New Zealand Daylight Time)":"Did you mean NZST (New Zealand Standard Time)?<br/>New Zealand currently observes NZST, not NZDT.","New Zealand Daylight Time (NZDT)":"Did you mean NZST (New Zealand Standard Time)?<br/>New Zealand currently observes NZST, not NZDT.","CET (Central European Time)":"Did you mean CEDT (Central European Daylight Time)?<br/>Europe currently observes CEDT, not CET.","Central European Time (CET)":"Did you mean CEDT (Central European Daylight Time)?<br/>Europe currently observes CEDT, not CET."};

  if(!isDef(gmts) || !isDef(tznames) || !isDef(cities) || !isDef(warnings)) {
    var cities = {"Chicago":3600, "New York":3600};
    var warnings = {};
  }

  //document.write('<script src="/js/date.js" type="text/javascript"></script>');
  document.write('<script type="text/javascript" src="/js/date.js"></script>');
  //document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>');
  //document.write('<script type="text/javascript" src="/js/jquery.autocomplete.js"></script>');

  TTZC.Site = function () { }
  TTZC.Widget = function(opts) {
    this.t = opts.t;
    this.tz = opts.tz;
    this.version = 'inline'; // or can be 'inline'
  };

  TTZC.Widget.prototype.display = function() {
      this.displayInline();
  }
  
  var LOCAL_TIME_STRING = "Local time";
  var RIGHT_DEFAULT_CONTEXT = "";
  var TIME_FORMAT_24H = 'HH:mm';
  var TIME_FORMAT_12H = 'h:mm tt';
  var TIME_FORMAT_24H_TITLE_STR = 'Use 24-hour time';
  var TIME_FORMAT_12H_TITLE_STR = 'Use 12-hour time';
  var nextyear = new Date( );
  nextyear.setFullYear(nextyear.getFullYear( ) + 1);
  var convert_map = {}; // mapping of context strings ("Chicago", "GMT+3") to offset in seconds
  var time_format = 't';
  var LOCAL_TIME_UPDATE_TIMEOUT_ID = null;
  var LOCAL_TIME_UPDATE_INTERVAL = 1000 * 60;
  var local_dirty = false; // This tracks whether time1 or 2 has been changed from default 'now' value, for purposes of updating it live

  TTZC.Site.convert = convert;
  TTZC.Site.convert2 = convert2;
  TTZC.Site.recordQuery = recordQuery;
  TTZC.Site.swap24h = swap24h;
  TTZC.Site.validTimeParse = validTimeParse;
  TTZC.Site.siteInit = siteInit;
  TTZC.Widget.siteInit = siteInit;

  TTZC.Widget.prototype.displayInline = function() {
    initTzArrays();
    var to = convertBase(this.t, this.tz, LOCAL_TIME_STRING);
    if(to && !isNaN(to)) {
      document.write('<span>' + to.toString(time_format) + '</span>');
    } else {
      document.write('<span>unknown time or timezone</span>');
    }
  }
  
  TTZC.Widget.prototype.displayEmbed = function() {
    alert('embed display');
  }

  function siteInit(initialT, initialTz) {
    initTzArrays();
    initContextUI();
    initLocalTimeFormat();
    
    setFieldDefaults(initialT || getParam('t'), initialTz || getDefaultContext());
    setNoteStringDefaults(gid('c1').value, gid('c2').value);
    this.setAutofocus(getDefaultContext());

    gid('time1').dirty = false;
    gid('time2').dirty = false;
  }

  function getDefaultContext() {
    if(getParam('tz'))
        return getParam('tz');
    else
        return null;
  }

  function autofocusElem(elem_id) {
    gid(elem_id).focus();
    gid(elem_id).select();
  }
  
  function setNoteStringDefaults(context1, context2) {
      if(warnings[context1]) {
       setNoteStrings(warnings[context1], null);
      } else if (warnings[context2]) {
       setNoteStrings(warnings[context2], null);
      }
  }
  
  function setNoteStrings(warning, announcement) {
    if(warning != null) gid('warning').innerHTML = warning;
    if(announcement != null) gid('announcement').innerHTML = announcement;
  }
  
  function setFieldDefaults(time, context) {
    var current_time = Date.parse('Friday, 10-Jul-2015 12:01:15 GMT') || new Date();
    var t_parsed = validTimeParse(time);
    var t_formatted = t_parsed ? t_parsed.toString(time_format) : null;
  
    // different behavior if user specified a parameter for default context
    if(context) {
      var fixedtime;
      // if time was specified, 
      if(time) {
        $('#time1').val(t_formatted);
        fixedtime = 'time1';

        $('#time1').attr('disabled',true);
        $('#time1').addClass('disabled_color');
        $('#time2').attr('disabled',true);
        $('#time2').addClass('disabled_color');
        $('#c1').attr('disabled',true);
        $('#c1').addClass('disabled_color');
      } else {
        $('#time2').val(current_time.toString(time_format));
        fixedtime = 'time2';
      }
      $('#c1').val(context);
      $('#c2').val(LOCAL_TIME_STRING);
      convert2(fixedtime);
    } else {
      // set defaults - set the left fields
      if(time)
        $('#time1').val(t_formatted);
      else
        $('#time1').val(current_time.toString(time_format));
      $('#c1').val(LOCAL_TIME_STRING);
      if(cookie.c2) {
        $('#c2').val(cookie.c2);
        convert2('time1');
      }
    }

    LOCAL_TIME_UPDATE_TIMEOUT_ID = setTimeout(updateLocaltime, millisecondsToNextMinute());
  }
  
  function millisecondsToNextMinute() {
    var t = new Date();
    t.setMinutes(t.getMinutes() + 1);
    t.setSeconds(0);
    return t - (new Date());
  }
  
  function updateLocaltime() {
    var c1IsLocal = gid('c1').value == LOCAL_TIME_STRING;
    if(c1IsLocal && !local_dirty) {
      var current_time = new Date();
      gid('time1').value = current_time.toString(time_format);
      convert2('time1');
      LOCAL_TIME_UPDATE_TIMEOUT_ID = setTimeout(updateLocaltime, 1000 * 60);
    } else {
      clearTimeout(LOCAL_TIME_UPDATE_TIMEOUT_ID);
    }
  }
  

  function convertBase(s, from_tz_value, to_tz_value) {
    var utcDate = toUTC(validTimeParse(s), convert_map[from_tz_value]);
    var toDate = fromUTC(utcDate, convert_map[to_tz_value]);
    return toDate;
  }
 
  function convert2(from)   { convert(gid(from).value, from); }

  function convert(s, from) {
    var from_elem = gid((from == 'time1') ? 'time1' : 'time2');
    var to        = gid((from == 'time1') ? 'time2' : 'time1');
    var from_tz   = gid((from == 'time1') ? 'c1' : 'c2');
    var to_tz     = gid((from == 'time1') ? 'c2' : 'c1');
    var from_info = gid((from == 'time1') ? 'time1i' : 'time2i');
    var to_info   = gid((from == 'time1') ? 'time2i' : 'time1i');
    var from_offset = convert_map[from_tz.value];
    var to_offset = convert_map[to_tz.value];

    var convertedDateString = '';
    var fromDate = validTimeParse(s);
    if((fromDate != null) && (from_offset != null) && (to_offset != null)) {
      var toDate = convertBase(s, from_tz.value, to_tz.value);

      // If we need a suffix, then figure out which direction.
      if(fromDate.getDay() != toDate.getDay()) {
        if(to_offset > from_offset) {
          to_info.innerHTML = 'next day';
        } else {
          to_info.innerHTML = 'previous day';
        }
      } else {
        to_info.innerHTML = '';
      }

      from_info.innerHTML = '';
      convertedDateString = toDate.toString(time_format);
      to.value = convertedDateString;
      from_elem.dirty = false;
    }
    else {
      from_info.innerHTML = '';
      to_info.innerHTML = '';
    }
  }

  function recordQuery(cid, type) {
    var params = {};
    var cid_value = gid(cid).value;
    if(cid == 'c1')         params = {c1:cid_value, type:type};
    else                    params = {c2:cid_value, type:type};
    recordAction(params);
  }

  function recordAction(params) {
    if(window.location.host)
      $.ajax({async:true, url:'http://'+window.location.host+'/blank', data:params, dataType:'text'})
  }

  // context is string representing context (location, timezone name, etc.)
  function contextChange(context, cid) {
    TTZC.Site.recordQuery(cid, 'c');
    var other_id = (cid == 'c1') ? 'time2' : 'time1';
    var this_id = (cid == 'c1') ? 'time1' : 'time2';

    if(cid == 'c2') {
      cookie.c2 = context;
      cookie.store();
    }

    if(warnings[context]) setNoteStrings(warnings[context], null);
    else        setNoteStrings("", null);

    if(gid(this_id).dirty) convert2(this_id);
    else                   convert2(other_id);
  }


  function swap24h(elem) {
    var format = elem.innerHTML;
    if(elem.innerHTML == '24h') {
      time_format = TIME_FORMAT_24H;
      elem.innerHTML = '12h';
      elem.title = TIME_FORMAT_12H_TITLE_STR;
      cookie.time_format = '24h';
      cookie.store();
    } else {
      time_format = TIME_FORMAT_12H;
      elem.innerHTML = '24h';
      elem.title = TIME_FORMAT_24H_TITLE_STR;
      cookie.time_format = '12h';
      cookie.store();
    }
    
    for(var i=1; i <= 2; i++) {
      var time_elem = gid('time'+i);
      var date = validTimeParse(time_elem.value);
      if(date) {
        time_elem.value = date.toString(time_format);
      }
    }
    recordAction({hour:format});
  }

  function initTzArrays() {
    var local_offset_seconds = -(new Date()).getTimezoneOffset() * 60;
    convert_map[LOCAL_TIME_STRING] = local_offset_seconds;
    for(var s in gmts)    { convert_map[s] = gmts[s]; }
    for(var s in tznames) { convert_map[s] = tznames[s]; }
    for(var s in cities)  { convert_map[s] = cities[s]; }
  }

  function initLocalTimeFormat() {
    var cookie_24h_time_format = cookie.time_format;
    if(cookie_24h_time_format) {
      time_format = (cookie_24h_time_format == '24h') ? TIME_FORMAT_24H : TIME_FORMAT_12H;
    } else {
      // look at browser's accept_language and attempt to format times correctly
      var langs = parseAcceptLanguage('(none)');
      //langs = ['zh-cn'];
      for(var i=0; i < langs.length; i++) {
        if(shortTimes[langs[i]]) {
          time_format = shortTimes[langs[i]];
          break;
        }
      }
    }
    
    // set the ui widget
    var elem = gid('swap24h');
    if(elem) {
        if(time_format.contains('H')) {
          elem.innerHTML = '12h';
          elem.title = TIME_FORMAT_12H_TITLE_STR;
        } else {
          elem.title = TIME_FORMAT_24H_TITLE_STR;
        }
    }
  }
  
  function getParam(name) {
    var params = window.location.search;
    var match = params.match(RegExp(name + '=([^&]*)'));
    if(match && match.length >= 2) return decodeURIComponent(match[1]);
    return null;
  }

  // Utility functions
  function toUTC(date, tz_offset_seconds) {
    return new Date(date.getTime() - tz_offset_seconds * 1000);
  }
  function fromUTC(date, tz_offset_seconds) {
    return new Date(date.getTime() + tz_offset_seconds * 1000);
  }
  function isDef(v) {
    return v != undefined;
  }
  
  function validTimeParse(s) {
    if(s == null) return null;
    if(isNaN(Number(s.charAt(0)))) return null;

    // try inserting : at position 1 or 2
    var s1=null,s2=null,r0=null,r1=null,r2=null;
    r0 = Date.parse(s);
    if(s.length >= 3) {
      s1 = s.substr(0,1) + ':' + s.substr(1,s.length);
      s2 = s.substr(0,2) + ':' + s.substr(2,s.length);
      r1 = Date.parse(s1);
      r2 = Date.parse(s2);
    }

    if((s.icontains('A') ||s.icontains('P')) && s.icontains(':')) {
      return r0;
    } else if((s.icontains('A') ||s.icontains('P')) && !s.icontains(':')) {
      return r0 ? r0 : r1 ? r1 : r2;
    } else if(!s.icontains(':') && s.length >= 3) {
      return r1 ? r1 : r2 ? r2 : r0;
    } else {
      // otherwise try appending ":00" to force time conversion
      return Date.parse(s + ":00");
    }
  }
  
  String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ''); }
  String.prototype.contains = function(char) { return this.indexOf(char) != -1; }
  String.prototype.icontains = function(char) { return this.toUpperCase().indexOf(char.toUpperCase()) != -1; }
  function parseAcceptLanguage(s) {
    if(s[0] == '<') return ['en-us']; // the SSI was not replaced
    //s = 'da-DK,en-us;q=0.5'; // s = 'en-US,en;q=0.8'; // s = 'en-us';
    var elems = s.split(',');
    var langRanges = [];
    for(var i=0; i < elems.length; i++) {
      var elem = elems[i].trim();
      var langRange = elem.split(';')[0];
      langRanges.push(langRange.toLowerCase());
    }
    return langRanges;
  }

  function gid(id) {
    return document.getElementById(id);
  }

})();