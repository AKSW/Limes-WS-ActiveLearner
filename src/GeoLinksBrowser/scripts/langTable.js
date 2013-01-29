/**
 * @class LangTable <br>
 * maps Browserlanguage Tags to Sparql Language Tags for all available BrowserLangTags
 */
function LangTable()
{


    /**
     * getSparqlTag - given a browserLangTag e.g. DE it returns the Sparql Language Tag for it
     * @param browserTag the Browser language Tag
     */
    this.getSparqlTag = function(browserTag)
    {
	if (this.BrowserTable.index.hasOwnProperty(browserTag))
	{
	    return this.BrowserTable.index[browserTag].value;
	} else {
	    return "EN";
	}
    }

    this.BrowserTable = {

	"(none)": {
	    "label": "No region assigned",
	    "blang1": "eo",
	    "blang2": "ia",
	    "blang3": "ie",
	    "blang4": "io",
	    "blang5": "vo"
	},
	"AD": {
	    "label": "Andorra",
	    "blang1": "ca",
	    "blang2": "fr-AD"
	},
	"AE": {
	    "label": "United Arab Emirates",
	    "blang1": "ar-AE"
	},
	"AF": {
	    "label": "Afghanistan",
	    "blang1": "fa-AF",
	    "blang2": "ps",
	    "blang3": "ug",
	    "blang4": "uz-AF"
	},
	"AG": {
	    "label": "Antigua And Barbuda",
	    "blang1": "en-AG"
	},
	"AI": {
	    "label": "Anguilla",
	    "blang1": "en-AI"
	},
	"AL": {
	    "label": "Albania",
	    "blang1": "sq"
	},
	"AM": {
	    "label": "Armenia",
	    "blang1": "hy"
	},
	"AN": {
	    "label": "Netherlands Antilles",
	    "blang1": "nl-AN"
	},
	"AO": {
	    "label": "Angola",
	    "blang1": "kg",
	    "blang2": "kj",
	    "blang3": "pt-AO"
	},
	"AR": {
	    "label": "Argentina",
	    "blang1": "cy-AR",
	    "blang2": "es-AR",
	    "blang3": "gn"
	},
	"AS": {
	    "label": "American Samoa",
	    "blang1": "en-AS",
	    "blang2": "sm"
	},
	"AT": {
	    "label": "Austria",
	    "blang1": "de-AT",
	    "blang2": "hu"
	},
	"AU": {
	    "label": "Australia",
	    "blang1": "en-AU",
	    "blang2": "YI"
	},
	"AW": {
	    "label": "Aruba",
	    "blang1": "nl-AW"
	},
	"AX": {
	    "label": "Ã&land Islands",
	    "blang1": "sv-AX"
	},
	"AZ": {
	    "label": "Azerbaijan",
	    "blang1": "av",
	    "blang2": "az",
	    "blang3": "az-Arab",
	    "blang4": "az-Cyrl",
	    "blang5": "az-Latn",
	    "blang6": "os"
	},
	"BA": {
	    "label": "Bosnia And Herzegovina",
	    "blang1": "bs",
	    "blang2": "hr-BA",
	    "blang3": "sr-BA"
	},
	"BB": {
	    "label": "Barbados",
	    "blang1": "en-BB"
	},
	"BD": {
	    "label": "Bangladesh",
	    "blang1": "bn-BD"
	},
	"BE": {
	    "label": "Belgium",
	    "blang1": "de-BE",
	    "blang2": "en-BE",
	    "blang3": "fr-BE",
	    "blang4": "nl-BE",
	    "blang5": "wa",
	    "blang6": "yi"
	},
	"BF": {
	    "label": "Burkina Faso",
	    "blang1": "bm",
	    "blang2": "fr-BF",
	    "blang3": "ha"
	},
	"BG": {
	    "label": "Bulgaria",
	    "blang1": "bg",
	    "blang2": "cu",
	    "blang3": "tr-BG"
	},
	"BH": {
	    "label": "Bahrain",
	    "blang1": "ar-BH"
	},
	"BI": {
	    "label": "Burundi",
	    "blang1": "fr-BI",
	    "blang2": "rn"
	},
	"BJ": {
	    "label": "Benin",
	    "blang1": "fr-BJ"
	},
	"BM": {
	    "label": "Bermuda",
	    "blang1": "en-BM"
	},
	"BN": {
	    "label": "Brunei Darussalam",
	    "blang1": "en-BN",
	    "blang2": "ms-BN"
	},
	"BO": {
	    "label": "Bolivia",
	    "blang1": "ay",
	    "blang2": "es-BO"
	},
	"BR": {
	    "label": "Brazil",
	    "blang1": "pt-BR"
	},
	"BS": {
	    "label": "Bahamas",
	    "blang1": "en-BS"
	},
	"BT": {
	    "label": "Bhutan",
	    "blang1": "dz",
	    "blang2": "ne"
	},
	"BW": {
	    "label": "Botswana",
	    "blang1": "en-BW",
	    "blang2": "sn",
	    "blang3": "tn-BW"
	},
	"BY": {
	    "label": "Belarus",
	    "blang1": "be",
	    "blang2": "cu",
	    "blang3": "yi"
	},
	"BZ": {
	    "label": "Belize",
	    "blang1": "en-BZ"
	},
	"CA": {
	    "label": "Canada",
	    "blang1": "cr",
	    "blang2": "en-CA",
	    "blang3": "fr-CA",
	    "blang4": "iu",
	    "blang5": "oj",
	    "blang6": "yi"
	},
	"CC": {
	    "label": "Cocos (Keeling) Islands",
	    "blang1": "ms-CC"
	},
	"CD": {
	    "label": "Congo, The Democratic Republic Of The",
	    "blang1": "fr-CD",
	    "blang2": "kg",
	    "blang3": "ln-CD",
	    "blang4": "lu"
	},
	"CF": {
	    "label": "Central African Republic",
	    "blang1": "fr-CF",
	    "blang2": "sg"
	},
	"CG": {
	    "label": "Congo",
	    "blang1": "fr-CG",
	    "blang2": "kg",
	    "blang3": "ln-CG"
	},
	"CH": {
	    "label": "Switzerland",
	    "blang1": "de-CH",
	    "blang2": "fr-CH",
	    "blang3": "it-CH",
	    "blang4": "rm"
	},
	"CI": {
	    "label": "CÃ´te D'ivoire",
	    "blang1": "ak",
	    "blang2": "bm",
	    "blang3": "dr-CI"
	},
	"CK": {
	    "label": "Cook Islands",
	    "blang1": "en-CK"
	},
	"CL": {
	    "label": "Chile",
	    "blang1": "ay",
	    "blang2": "es-CL"
	},
	"CM": {
	    "label": "Cameroon",
	    "blang1": "en-CM",
	    "blang2": "fr-CM"
	},
	"CN": {
	    "label": "China",
	    "blang1": "bo",
	    "blang2": "i-hak",
	    "blang3": "ii",
	    "blang4": "za",
	    "blang5": "zh-CN",
	    "blang6": "zh-gan",
	    "blang7": "zh-guoyu",
	    "blang8": "zh-hakka",
	    "blang9": "zh-Hans",
	    "blang10": "zh-Hans-CN",
	    "blang11": "zh-Hant",
	    "blang12": "zh-Hant-CN",
	    "blang13": "zh-wuu",
	    "blang14": "zh-xiang",
	    "blang15": "zh-yue"
	},
	"CO": {
	    "label": "Colombia",
	    "blang1": "es-CO"
	},
	"CR": {
	    "label": "Costa Rica",
	    "blang1": "es-CR"
	},
	"CS": {
	    "label": "Serbia And Montenegro",
	    "blang1": "cu",
	    "blang2": "hu",
	    "blang3": "sq",
	    "blang4": "sr",
	    "blang5": "sr-Cyrl",
	    "blang6": "sr-Latn"
	},
	"CU": {
	    "label": "Cuba",
	    "blang1": "es-CU"
	},
	"CV": {
	    "label": "Cape Verde",
	    "blang1": "pt-CV"
	},
	"CX": {
	    "label": "Christmas Island",
	    "blang1": "ms-CC"
	},
	"CY": {
	    "label": "Cyprus",
	    "blang1": "el-CY",
	    "blang2": "tr-CY"
	},
	"CZ": {
	    "label": "Czech Republic",
	    "blang1": "cs"
	},
	"DE": {
	    "label": "Germany",
	    "blang1": "da-DE",
	    "blang2": "da-DE",
	    "blang3": "de-1901",
	    "blang4": "de-1996",
	    "blang5": "de-AT-1901",
	    "blang6": "de-AT-1996",
	    "blang7": "de-CH-1901",
	    "blang8": "de-CH-1996",
	    "blang9": "de-DE",
	    "blang10": "de-DE-1901",
	    "blang11": "de-DE-1996",
	    "blang12": "dsb",
	    "blang13": "fy-DE",
	    "blang14": "hsb",
	    "blang15": "lb",
	    "blang16": "nds",
	    "blang17": "wen",
	    "blang18": "yi"
	},
	"DJ": {
	    "label": "Djibouti",
	    "blang1": "aa-DJ",
	    "blang2": "fr-DJ",
	    "blang3": "so-DJ"
	},
	"DK": {
	    "label": "Denmark",
	    "blang1": "da-DK",
	    "blang2": "de-DK"
	},
	"DM": {
	    "label": "Dominica",
	    "blang1": "en-DM"
	},
	"DO": {
	    "label": "Dominican Republic",
	    "blang1": "es-DO"
	},
	"DZ": {
	    "label": "Algeria",
	    "blang1": "ar-DZ"
	},
	"EC": {
	    "label": "Ecuador",
	    "blang1": "es-EC"
	},
	"EE": {
	    "label": "Estonia",
	    "blang1": "et",
	    "blang2": "yi"
	},
	"EG": {
	    "label": "Egypt",
	    "blang1": "ar-EG"
	},
	"ER": {
	    "label": "Eritrea",
	    "blang1": "aa-ER",
	    "blang2": "byn",
	    "blang3": "en-ER",
	    "blang4": "gez-ER",
	    "blang5": "ti-ER",
	    "blang6": "tig"
	},
	"ES": {
	    "label": "Spain",
	    "blang1": "an",
	    "blang2": "ca",
	    "blang3": "es-ES",
	    "blang4": "eu",
	    "blang5": "gl"
	},
	"ET": {
	    "label": "Ethiopia",
	    "blang1": "aa-ET",
	    "blang2": "am",
	    "blang3": "en-ET",
	    "blang4": "gez-ET",
	    "blang5": "om-ET",
	    "blang6": "sid",
	    "blang7": "so-ET",
	    "blang8": "ti-ET",
	    "blang9": "wal"
	},
	"FI": {
	    "label": "Finland",
	    "blang1": "fi-FI",
	    "blang2": "smn",
	    "blang3": "sv-FI"
	},
	"FJ": {
	    "label": "Fiji",
	    "blang1": "en-FJ",
	    "blang2": "fj"
	},
	"FK": {
	    "label": "Falkland Islands (Malvinas)",
	    "blang1": "en-FK"
	},
	"FM": {
	    "label": "Micronesia, Federated States Of",
	    "blang1": "en-FM"
	},
	"FO": {
	    "label": "Faroe Islands",
	    "blang1": "da-FO",
	    "blang2": "fo"
	},
	"FR": {
	    "label": "France",
	    "blang1": "br",
	    "blang2": "co",
	    "blang3": "de-FR",
	    "blang4": "fr-FR",
	    "blang5": "oc"
	},
	"GA": {
	    "label": "Gabon ",
	    "blang1": "fr-GA"
	},
	"GB": {
	    "label": "United Kingdom",
	    "blang1": "cy-GB",
	    "blang2": "en-GB",
	    "blang3": "en-GB",
	    "blang4": "fr-GB",
	    "blang5": "ga-GB",
	    "blang6": "gd",
	    "blang7": "gv",
	    "blang8": "kw"
	},
	"GD": {
	    "label": "Grenada",
	    "blang1": "en-GD"
	},
	"GE": {
	    "label": "Georgia",
	    "blang1": "ab",
	    "blang2": "ka",
	    "blang3": "os"
	},
	"GF": {
	    "label": "French Guiana",
	    "blang1": "fr-GF"
	},
	"GH": {
	    "label": "Ghana",
	    "blang1": "ak",
	    "blang2": "ee",
	    "blang3": "en-GH",
	    "blang4": "tw"
	},
	"GI": {
	    "label": "Gibraltar",
	    "blang1": "en-GI"
	},
	"GL": {
	    "label": "Greenland",
	    "blang1": "da-GL",
	    "blang2": "kl"
	},
	"GM": {
	    "label": "Gambia",
	    "blang1": "bm",
	    "blang2": "en-GM",
	    "blang3": "wo"
	},
	"GN": {
	    "label": "Guinea",
	    "blang1": "fr-GN"
	},
	"GP": {
	    "label": "Guadeloupe",
	    "blang1": "fr-GP"
	},
	"GQ": {
	    "label": "Equatorial Guinea",
	    "blang1": "es-GQ"
	},
	"GR": {
	    "label": "Greece",
	    "blang1": "el-GR"
	},
	"GT": {
	    "label": "Guatemala",
	    "blang1": "es-GT"
	},
	"GU": {
	    "label": "Guam",
	    "blang1": "ch-GU",
	    "blang2": "en-GU"
	},
	"GW": {
	    "label": "Guinea-Bissau",
	    "blang1": "pt-GW"
	},
	"GY": {
	    "label": "Guyana",
	    "blang1": "en-GY"
	},
	"HK": {
	    "label": "Hong Kong",
	    "blang1": "en-HK",
	    "blang2": "zh-Hant",
	    "blang3": "zh-Hant-HK",
	    "blang4": "zh-HK"
	},
	"HN": {
	    "label": "Honduras",
	    "blang1": "es-HN"
	},
	"HR": {
	    "label": "Croatia",
	    "blang1": "hr-HR",
	    "blang2": "it-HR"
	},
	"HT": {
	    "label": "Haiti",
	    "blang1": "fr-HT",
	    "blang2": "ht"
	},
	"HU": {
	    "label": "Hungary",
	    "blang1": "de-HU",
	    "blang2": "hu-HU",
	    "blang3": "sk-HU",
	    "blang4": "sr-HU"
	},
	"ID": {
	    "label": "Indonesia",
	    "blang1": "id",
	    "blang2": "jv",
	    "blang3": "su"
	},
	"IE": {
	    "label": "Ireland",
	    "blang1": "en-IE",
	    "blang2": "ga-IE"
	},
	"IL": {
	    "label": "Israel",
	    "blang1": "ar-IL",
	    "blang2": "en-IL",
	    "blang3": "he",
	    "blang4": "yi"
	},
	"IN": {
	    "label": "India",
	    "blang1": "ar-IN",
	    "blang2": "as",
	    "blang3": "bh",
	    "blang4": "bn-IN",
	    "blang5": "en-IN",
	    "blang6": "gu",
	    "blang7": "hi",
	    "blang8": "kn",
	    "blang9": "kok",
	    "blang10": "ks",
	    "blang11": "ml",
	    "blang12": "mr",
	    "blang13": "ne",
	    "blang14": "or",
	    "blang15": "pa",
	    "blang16": "pi",
	    "blang17": "sa",
	    "blang18": "sd-In",
	    "blang19": "ta-IN",
	    "blang20": "te",
	    "blang21": "ur-IN"
	},
	"IO": {
	    "label": "British Indian Ocean Territory",
	    "blang1": "en-IO"
	},
	"IQ": {
	    "label": "Iraq",
	    "blang1": "ar-IQ",
	    "blang2": "ku"
	},
	"IR": {
	    "label": "Iran, Islamic Republic Of",
	    "blang1": "ae",
	    "blang2": "fa-IR",
	    "blang3": "ku"
	},
	"IS": {
	    "label": "Iceland",
	    "blang1": "is"
	},
	"IT": {
	    "label": "Italy",
	    "blang1": "co",
	    "blang2": "de-IT",
	    "blang3": "fr-IT",
	    "blang4": "it-IT",
	    "blang5": "sc"
	},
	"JM": {
	    "label": "Jamaica",
	    "blang1": "en-JM"
	},
	"JO": {
	    "label": "Jordan",
	    "blang1": "ar-JO"
	},
	"JP": {
	    "label": "Japan",
	    "blang1": "ja"
	},
	"KE": {
	    "label": "Kenya",
	    "blang1": "en-KE",
	    "blang2": "ki",
	    "blang3": "om-KE",
	    "blang4": "so-KE",
	    "blang5": "sw-KE"
	},
	"KG": {
	    "label": "Kyrgyzstan",
	    "blang1": "ky",
	    "blang2": "ug"
	},
	"KH": {
	    "label": "Cambodia",
	    "blang1": "km"
	},
	"KI": {
	    "label": "Kiribati",
	    "blang1": "en-KI"
	},
	"KM": {
	    "label": "Comoros",
	    "blang1": "fr-KM"
	},
	"KN": {
	    "label": "Saint Kitts And Nevis",
	    "blang1": "en-KN"
	},
	"KP": {
	    "label": "Korea, Democratic People's Republic Of",
	    "blang1": "ko-KP"
	},
	"KR": {
	    "label": "Korea, Republic Of",
	    "blang1": "ko-KR"
	},
	"KW": {
	    "label": "Kuwait",
	    "blang1": "ar-KW"
	},
	"KY": {
	    "label": "Cayman Islands",
	    "blang1": "en-KY"
	},
	"KZ": {
	    "label": "Kazakhstan",
	    "blang1": "av",
	    "blang2": "kk",
	    "blang3": "os",
	    "blang4": "ug"
	},
	"LA": {
	    "label": "Lao People's Democratic Republic",
	    "blang1": "lo"
	},
	"LB": {
	    "label": "Lebanon",
	    "blang1": "ar-LB",
	    "blang2": "fr-LB"
	},
	"LC": {
	    "label": "Saint Lucia",
	    "blang1": "en-LC"
	},
	"LI": {
	    "label": "Liechtenstein",
	    "blang1": "de-LI"
	},
	"LK": {
	    "label": "Sri Lanka",
	    "blang1": "si"
	},
	"LR": {
	    "label": "Liberia",
	    "blang1": "en-LR"
	},
	"LS": {
	    "label": "Lesotho",
	    "blang1": "en-LS",
	    "blang2": "st",
	    "blang3": "xh"
	},
	"LT": {
	    "label": "Lithuania",
	    "blang1": "lt",
	    "blang2": "yi"
	},
	"LU": {
	    "label": "Luxembourg",
	    "blang1": "de-LU",
	    "blang2": "fr-LU",
	    "blang3": "lb"
	},
	"LV": {
	    "label": "Latvia",
	    "blang1": "lv",
	    "blang2": "yi"
	},
	"LY": {
	    "label": "Libyan Arab Jamahiriya",
	    "blang1": "ar-LY"
	},
	"MA": {
	    "label": "Morocco",
	    "blang1": "ar-MA"
	},
	"MC": {
	    "label": "Monaco",
	    "blang1": "fr-MC"
	},
	"MD": {
	    "label": "Moldova, Republic Of",
	    "blang1": "mo",
	    "blang2": "ro",
	    "blang3": "tr",
	    "blang4": "uk",
	    "blang5": "yi"
	},
	"MG": {
	    "label": "Madagascar",
	    "blang1": "fr-MG",
	    "blang2": "mg"
	},
	"MH": {
	    "label": "Marshall Islands",
	    "blang1": "en-MH",
	    "blang2": "mh"
	},
	"MK": {
	    "label": "Macedonia, The Former Yugoslav Republic Of",
	    "blang1": "cu",
	    "blang2": "mk"
	},
	"ML": {
	    "label": "Mali",
	    "blang1": "bm",
	    "blang2": "fr-ML"
	},
	"MM": {
	    "label": "Myanmar",
	    "blang1": "my"
	},
	"MN": {
	    "label": "Mongolia",
	    "blang1": "mn"
	},
	"MO": {
	    "label": "Macao",
	    "blang1": "zh-Hant",
	    "blang2": "zh-Hant-MO",
	    "blang3": "zh-MO"
	},
	"MP": {
	    "label": "Northern Mariana Islands",
	    "blang1": "ch-MP",
	    "blang2": "en-MP"
	},
	"MQ": {
	    "label": "Martinique",
	    "blang1": "fr-MQ"
	},
	"MR": {
	    "label": "Mauritania",
	    "blang1": "ar-MR",
	    "blang2": "wo"
	},
	"MS": {
	    "label": "Montserrat",
	    "blang1": "en-MS"
	},
	"MT": {
	    "label": "Malta",
	    "blang1": "en-MT",
	    "blang2": "mt"
	},
	"MU": {
	    "label": "Mauritius",
	    "blang1": "en-MU"
	},
	"MV": {
	    "label": "Maldives",
	    "blang1": "dv"
	},
	"MW": {
	    "label": "Malawi",
	    "blang1": "en-MW",
	    "blang2": "ny"
	},
	"MX": {
	    "label": "Mexico",
	    "blang1": "es-MX"
	},
	"MY": {
	    "label": "Malaysia",
	    "blang1": "jv",
	    "blang2": "ms-MY"
	},
	"MZ": {
	    "label": "Mozambique",
	    "blang1": "pt-MZ",
	    "blang2": "sn"
	},
	"NA": {
	    "label": "Namibia",
	    "blang1": "en-NA",
	    "blang2": "hz",
	    "blang3": "ng"
	},
	"NC": {
	    "label": "New Caledonia",
	    "blang1": "fr-NC"
	},
	"NE": {
	    "label": "Niger",
	    "blang1": "ff-NE",
	    "blang2": "fr-NE",
	    "blang3": "ha",
	    "blang4": "kr"
	},
	"NF": {
	    "label": "Norfolk Island",
	    "blang1": "en-NF"
	},
	"NG": {
	    "label": "Nigeria",
	    "blang1": "en-NG",
	    "blang2": "ff-NG",
	    "blang3": "ha",
	    "blang4": "ig",
	    "blang5": "kr",
	    "blang6": "yo"
	},
	"NI": {
	    "label": "Nicaragua",
	    "blang1": "es-NI"
	},
	"NL": {
	    "label": "Netherlands",
	    "blang1": "fy-NL",
	    "blang2": "li",
	    "blang3": "nl-NL"
	},
	"NO": {
	    "label": "Norway",
	    "blang1": "nb",
	    "blang2": "nn",
	    "blang3": "no",
	    "blang4": "no-bok",
	    "blang5": "no-nyn"
	},
	"NP": {
	    "label": "Nepal",
	    "blang1": "ne"
	},
	"NR": {
	    "label": "Nauru",
	    "blang1": "en-NR",
	    "blang2": "na"
	},
	"NU": {
	    "label": "Niue",
	    "blang1": "en-NU"
	},
	"NZ": {
	    "label": "New Zealand",
	    "blang1": "en-NZ",
	    "blang2": "mi"
	},
	"OM": {
	    "label": "Oman",
	    "blang1": "ar-OM"
	},
	"PA": {
	    "label": "Panama",
	    "blang1": "es-PA"
	},
	"PE": {
	    "label": "Peru",
	    "blang1": "ay",
	    "blang2": "es-PE",
	    "blang3": "qu"
	},
	"PF": {
	    "label": "French Polynesia",
	    "blang1": "fr-PF",
	    "blang2": "ty"
	},
	"PG": {
	    "label": "Papua New Guinea",
	    "blang1": "en-PG",
	    "blang2": "ho"
	},
	"PH": {
	    "label": "Philippines",
	    "blang1": "en-PH",
	    "blang2": "tl"
	},
	"PK": {
	    "label": "Pakistan",
	    "blang1": "en-PK",
	    "blang2": "sd-PK",
	    "blang3": "ur-PK"
	},
	"PL": {
	    "label": "Poland",
	    "blang1": "de-PL",
	    "blang2": "pl",
	    "blang3": "yi"
	},
	"PM": {
	    "label": "Saint Pierre And Miquelon",
	    "blang1": "fr-PM"
	},
	"PN": {
	    "label": "Pitcairn",
	    "blang1": "en-PN"
	},
	"PR": {
	    "label": "Puerto Rico",
	    "blang1": "en-PR",
	    "blang2": "es-PR"
	},
	"PS": {
	    "label": "Palestinian Territory, Occupied",
	    "blang1": "ar-PS"
	},
	"PT": {
	    "label": "Portugal",
	    "blang1": "pt-PT"
	},
	"PW": {
	    "label": "Palau",
	    "blang1": "en-PW"
	},
	"PY": {
	    "label": "Paraguay",
	    "blang1": "es-PY",
	    "blang2": "gn"
	},
	"QA": {
	    "label": "Qatar",
	    "blang1": "ar-QA"
	},
	"RE": {
	    "label": "RÃ©union",
	    "blang1": "fr-RE"
	},
	"RO": {
	    "label": "Romania",
	    "blang1": "cu",
	    "blang2": "hu",
	    "blang3": "ro",
	    "blang4": "YI"
	},
	"RU": {
	    "label": "Russian Federation",
	    "blang1": "av",
	    "blang2": "ba",
	    "blang3": "ce",
	    "blang4": "cu",
	    "blang5": "cv",
	    "blang6": "kv",
	    "blang7": "os",
	    "blang8": "ru-RU",
	    "blang9": "tt",
	    "blang10": "yi"
	},
	"RW": {
	    "label": "Rwanda",
	    "blang1": "en-RW",
	    "blang2": "fr-RW",
	    "blang3": "rw"
	},
	"SA": {
	    "label": "Saudi Arabia",
	    "blang1": "ar-SA"
	},
	"SB": {
	    "label": "Solomon Islands",
	    "blang1": "en-SB"
	},
	"SC": {
	    "label": "Seychelles",
	    "blang1": "en-SC",
	    "blang2": "fr-SC"
	},
	"SD": {
	    "label": "Sudan",
	    "blang1": "ar-SD",
	    "blang2": "din",
	    "blang3": "ha"
	},
	"SE": {
	    "label": "Sweden",
	    "blang1": "fi-SE",
	    "blang2": "se",
	    "blang3": "sma",
	    "blang4": "sme",
	    "blang5": "sv-SE"
	},
	"SG": {
	    "label": "Singapore",
	    "blang1": "bn-SG",
	    "blang2": "en-SG",
	    "blang3": "ms-SG",
	    "blang4": "ta-SG",
	    "blang5": "zh-Hans-SG",
	    "blang6": "zh-SG"
	},
	"SH": {
	    "label": "Saint Helena ",
	    "blang1": "en-SH"
	},
	"SI": {
	    "label": "Slovenia",
	    "blang1": "hu-SI",
	    "blang2": "it-SI"
	},
	"SK": {
	    "label": "Slovakia",
	    "blang1": "hu",
	    "blang2": "sk"
	},
	"SL": {
	    "label": "Sierra Leone",
	    "blang1": "en-SL"
	},
	"SM": {
	    "label": "San Marino",
	    "blang1": "it-SM"
	},
	"SN": {
	    "label": "Senegal",
	    "blang1": "ff-SN",
	    "blang2": "wo"
	},
	"SO": {
	    "label": "Somalia",
	    "blang1": "ar-SO",
	    "blang2": "en-SO",
	    "blang3": "so-SO"
	},
	"SR": {
	    "label": "Suriname",
	    "blang1": "jv",
	    "blang2": "nl-SR"
	},
	"ST": {
	    "label": "Sao Tome And Principe",
	    "blang1": "pt-ST"
	},
	"SV": {
	    "label": "El Salvador",
	    "blang1": "es-SV"
	},
	"SY": {
	    "label": "Syrian Arab Republic",
	    "blang1": "ar-SY",
	    "blang2": "syr"
	},
	"SZ": {
	    "label": "Swaziland",
	    "blang1": "en-SZ",
	    "blang2": "ss-SZ"
	},
	"TC": {
	    "label": "Turks And Caicos Islands",
	    "blang1": "en-TC"
	},
	"TD": {
	    "label": "Chad",
	    "blang1": "ar-TD",
	    "blang2": "fr-TD"
	},
	"TG": {
	    "label": "Togo",
	    "blang1": "ee",
	    "blang2": "fr-TG",
	    "blang3": "ha"
	},
	"TH": {
	    "label": "Thailand",
	    "blang1": "si",
	    "blang2": "th"
	},
	"TJ": {
	    "label": "Tajikistan",
	    "blang1": "os",
	    "blang2": "tg",
	    "blang3": "ug"
	},
	"TK": {
	    "label": "Tokelau",
	    "blang1": "en-TK"
	},
	"TL": {
	    "label": "Timor-Leste",
	    "blang1": "pt-TL"
	},
	"TM": {
	    "label": "Turkmenistan",
	    "blang1": "os",
	    "blang2": "tk"
	},
	"TN": {
	    "label": "Tunisia",
	    "blang1": "ar-TN"
	},
	"TO": {
	    "label": "Tonga",
	    "blang1": "en-TO",
	    "blang2": "to"
	},
	"TR": {
	    "label": "Turkey",
	    "blang1": "ab",
	    "blang2": "av",
	    "blang3": "ku",
	    "blang4": "tr-TR",
	    "blang5": "ug"
	},
	"TT": {
	    "label": "Trinidad And Tobago",
	    "blang1": "en-TT"
	},
	"TV": {
	    "label": "Tuvalu",
	    "blang1": "gil",
	    "blang2": "tvl"
	},
	"TW": {
	    "label": "Taiwan, Province Of China",
	    "blang1": "zh-Hant",
	    "blang2": "zh-Hant-TW",
	    "blang3": "zh-min",
	    "blang4": "zh-min-nan",
	    "blang5": "zh-TW"
	},
	"TZ": {
	    "label": "Tanzania, United Republic Of",
	    "blang1": "sw-TZ"
	},
	"UA": {
	    "label": "Ukraine",
	    "blang1": "ab",
	    "blang2": "cu",
	    "blang3": "hu",
	    "blang4": "os",
	    "blang5": "pl",
	    "blang6": "ro",
	    "blang7": "ru-UA",
	    "blang8": "uk",
	    "blang9": "yi"
	},
	"UG": {
	    "label": "Uganda",
	    "blang1": "en-UG",
	    "blang2": "lg"
	},
	"UM": {
	    "label": "United States Minor Outlying Islands",
	    "blang1": "en-UM"
	},
	"US": {
	    "label": "United States",
	    "blang1": "en-US",
	    "blang2": "es-US",
	    "blang3": "haw",
	    "blang4": "ik",
	    "blang5": "nv",
	    "blang6": "oj",
	    "blang7": "yi"
	},
	"UY": {
	    "label": "Uruguay",
	    "blang1": "es-UY"
	},
	"UZ": {
	    "label": "Uzbekistan",
	    "blang1": "os",
	    "blang2": "ug",
	    "blang3": "uz-Cyrl",
	    "blang4": "uz-Latn",
	    "blang5": "uz-UZ"
	},
	"VA": {
	    "label": "Holy See (Vatican City State)",
	    "blang1": "fr",
	    "blang2": "it",
	    "blang3": "la"
	},
	"VC": {
	    "label": "Saint Vincent And The Grenadines",
	    "blang1": "en-VC"
	},
	"VE": {
	    "label": "Venezuela",
	    "blang1": "es-VE"
	},
	"VG": {
	    "label": "Virgin Islands, British",
	    "blang1": "en-VG"
	},
	"VI": {
	    "label": "Virgin Islands, U.S.",
	    "blang1": "en-VI"
	},
	"VN": {
	    "label": "Viet Nam",
	    "blang1": "vi"
	},
	"VU": {
	    "label": "Vanuatu",
	    "blang1": "bi",
	    "blang2": "en-VU",
	    "blang3": "fr-VU"
	},
	"WF": {
	    "label": "Wallis And Futuna",
	    "blang1": "fr-WF"
	},
	"WS": {
	    "label": "Samoa",
	    "blang1": "en-WS",
	    "blang2": "sm"
	},
	"YE": {
	    "label": "Yemen",
	    "blang1": "ar-YE"
	},
	"YT": {
	    "label": "Mayotte",
	    "blang1": "fr-YT"
	},
	"YU": {
	    "label": "Yugoslavia",
	    "blang1": "sr-Cyrl-YU",
	    "blang2": "sr-Latn-YU",
	    "blang3": "sr-YU"
	},
	"ZA": {
	    "label": "South Africa",
	    "blang1": "af",
	    "blang2": "en-ZA",
	    "blang3": "nr",
	    "blang4": "ss-ZA",
	    "blang5": "tn-ZA",
	    "blang6": "ts",
	    "blang7": "ve",
	    "blang8": "xh",
	    "blang9": "yi",
	    "blang10": "zu"
	},
	"ZM": {
	    "label": "Zambia",
	    "blang1": "en-ZM"
	},
	"ZW": {
	    "label": "Zimbabwe",
	    "blang1": "en-ZW",
	    "blang2": "nd",
	    "blang3": "sn",
	    "blang4": "ve",
	    "blang5": "zu"
	},
	"index": {
	    "No region assigned": {
		"value": "(none)"
	    },
	    "eo": {
		"value": "(none)"
	    },
	    "ia": {
		"value": "(none)"
	    },
	    "ie": {
		"value": "(none)"
	    },
	    "io": {
		"value": "(none)"
	    },
	    "vo": {
		"value": "(none)"
	    },
	    "Andorra": {
		"value": "AD"
	    },
	    "ca": {
		"value": "ES"
	    },
	    "fr-AD": {
		"value": "AD"
	    },
	    "United Arab Emirates": {
		"value": "AE"
	    },
	    "ar-AE": {
		"value": "AE"
	    },
	    "Afghanistan": {
		"value": "AF"
	    },
	    "fa-AF": {
		"value": "AF"
	    },
	    "ps": {
		"value": "AF"
	    },
	    "ug": {
		"value": "UZ"
	    },
	    "uz-AF": {
		"value": "AF"
	    },
	    "Antigua And Barbuda": {
		"value": "AG"
	    },
	    "en-AG": {
		"value": "AG"
	    },
	    "Anguilla": {
		"value": "AI"
	    },
	    "en-AI": {
		"value": "AI"
	    },
	    "Albania": {
		"value": "AL"
	    },
	    "sq": {
		"value": "CS"
	    },
	    "Armenia": {
		"value": "AM"
	    },
	    "hy": {
		"value": "AM"
	    },
	    "Netherlands Antilles": {
		"value": "AN"
	    },
	    "nl-AN": {
		"value": "AN"
	    },
	    "Angola": {
		"value": "AO"
	    },
	    "kg": {
		"value": "CG"
	    },
	    "kj": {
		"value": "AO"
	    },
	    "pt-AO": {
		"value": "AO"
	    },
	    "Argentina": {
		"value": "AR"
	    },
	    "cy-AR": {
		"value": "AR"
	    },
	    "es-AR": {
		"value": "AR"
	    },
	    "gn": {
		"value": "PY"
	    },
	    "American Samoa": {
		"value": "AS"
	    },
	    "en-AS": {
		"value": "AS"
	    },
	    "sm": {
		"value": "WS"
	    },
	    "Austria": {
		"value": "AT"
	    },
	    "de-AT": {
		"value": "AT"
	    },
	    "hu": {
		"value": "UA"
	    },
	    "Australia": {
		"value": "AU"
	    },
	    "en-AU": {
		"value": "AU"
	    },
	    "YI": {
		"value": "RO"
	    },
	    "Aruba": {
		"value": "AW"
	    },
	    "nl-AW": {
		"value": "AW"
	    },
	    "Ã&land Islands": {
		"value": "AX"
	    },
	    "sv-AX": {
		"value": "AX"
	    },
	    "Azerbaijan": {
		"value": "AZ"
	    },
	    "av": {
		"value": "TR"
	    },
	    "az": {
		"value": "AZ"
	    },
	    "az-Arab": {
		"value": "AZ"
	    },
	    "az-Cyrl": {
		"value": "AZ"
	    },
	    "az-Latn": {
		"value": "AZ"
	    },
	    "os": {
		"value": "UZ"
	    },
	    "Bosnia And Herzegovina": {
		"value": "BA"
	    },
	    "bs": {
		"value": "BA"
	    },
	    "hr-BA": {
		"value": "BA"
	    },
	    "sr-BA": {
		"value": "BA"
	    },
	    "Barbados": {
		"value": "BB"
	    },
	    "en-BB": {
		"value": "BB"
	    },
	    "Bangladesh": {
		"value": "BD"
	    },
	    "bn-BD": {
		"value": "BD"
	    },
	    "Belgium": {
		"value": "BE"
	    },
	    "de-BE": {
		"value": "BE"
	    },
	    "en-BE": {
		"value": "BE"
	    },
	    "fr-BE": {
		"value": "BE"
	    },
	    "nl-BE": {
		"value": "BE"
	    },
	    "wa": {
		"value": "BE"
	    },
	    "yi": {
		"value": "ZA"
	    },
	    "Burkina Faso": {
		"value": "BF"
	    },
	    "bm": {
		"value": "ML"
	    },
	    "fr-BF": {
		"value": "BF"
	    },
	    "ha": {
		"value": "TG"
	    },
	    "Bulgaria": {
		"value": "BG"
	    },
	    "bg": {
		"value": "BG"
	    },
	    "cu": {
		"value": "UA"
	    },
	    "tr-BG": {
		"value": "BG"
	    },
	    "Bahrain": {
		"value": "BH"
	    },
	    "ar-BH": {
		"value": "BH"
	    },
	    "Burundi": {
		"value": "BI"
	    },
	    "fr-BI": {
		"value": "BI"
	    },
	    "rn": {
		"value": "BI"
	    },
	    "Benin": {
		"value": "BJ"
	    },
	    "fr-BJ": {
		"value": "BJ"
	    },
	    "Bermuda": {
		"value": "BM"
	    },
	    "en-BM": {
		"value": "BM"
	    },
	    "Brunei Darussalam": {
		"value": "BN"
	    },
	    "en-BN": {
		"value": "BN"
	    },
	    "ms-BN": {
		"value": "BN"
	    },
	    "Bolivia": {
		"value": "BO"
	    },
	    "ay": {
		"value": "PE"
	    },
	    "es-BO": {
		"value": "BO"
	    },
	    "Brazil": {
		"value": "BR"
	    },
	    "pt-BR": {
		"value": "BR"
	    },
	    "Bahamas": {
		"value": "BS"
	    },
	    "en-BS": {
		"value": "BS"
	    },
	    "Bhutan": {
		"value": "BT"
	    },
	    "dz": {
		"value": "BT"
	    },
	    "ne": {
		"value": "NP"
	    },
	    "Botswana": {
		"value": "BW"
	    },
	    "en-BW": {
		"value": "BW"
	    },
	    "sn": {
		"value": "ZW"
	    },
	    "tn-BW": {
		"value": "BW"
	    },
	    "Belarus": {
		"value": "BY"
	    },
	    "be": {
		"value": "BY"
	    },
	    "Belize": {
		"value": "BZ"
	    },
	    "en-BZ": {
		"value": "BZ"
	    },
	    "Canada": {
		"value": "CA"
	    },
	    "cr": {
		"value": "CA"
	    },
	    "en-CA": {
		"value": "CA"
	    },
	    "fr-CA": {
		"value": "CA"
	    },
	    "iu": {
		"value": "CA"
	    },
	    "oj": {
		"value": "US"
	    },
	    "Cocos (Keeling) Islands": {
		"value": "CC"
	    },
	    "ms-CC": {
		"value": "CX"
	    },
	    "Congo, The Democratic Republic Of The": {
		"value": "CD"
	    },
	    "fr-CD": {
		"value": "CD"
	    },
	    "ln-CD": {
		"value": "CD"
	    },
	    "lu": {
		"value": "CD"
	    },
	    "Central African Republic": {
		"value": "CF"
	    },
	    "fr-CF": {
		"value": "CF"
	    },
	    "sg": {
		"value": "CF"
	    },
	    "Congo": {
		"value": "CG"
	    },
	    "fr-CG": {
		"value": "CG"
	    },
	    "ln-CG": {
		"value": "CG"
	    },
	    "Switzerland": {
		"value": "CH"
	    },
	    "de-CH": {
		"value": "CH"
	    },
	    "fr-CH": {
		"value": "CH"
	    },
	    "it-CH": {
		"value": "CH"
	    },
	    "rm": {
		"value": "CH"
	    },
	    "CÃ´te D'ivoire": {
		"value": "CI"
	    },
	    "ak": {
		"value": "GH"
	    },
	    "dr-CI": {
		"value": "CI"
	    },
	    "Cook Islands": {
		"value": "CK"
	    },
	    "en-CK": {
		"value": "CK"
	    },
	    "Chile": {
		"value": "CL"
	    },
	    "es-CL": {
		"value": "CL"
	    },
	    "Cameroon": {
		"value": "CM"
	    },
	    "en-CM": {
		"value": "CM"
	    },
	    "fr-CM": {
		"value": "CM"
	    },
	    "China": {
		"value": "CN"
	    },
	    "bo": {
		"value": "CN"
	    },
	    "i-hak": {
		"value": "CN"
	    },
	    "ii": {
		"value": "CN"
	    },
	    "za": {
		"value": "CN"
	    },
	    "zh-CN": {
		"value": "CN"
	    },
	    "zh-gan": {
		"value": "CN"
	    },
	    "zh-guoyu": {
		"value": "CN"
	    },
	    "zh-hakka": {
		"value": "CN"
	    },
	    "zh-Hans": {
		"value": "CN"
	    },
	    "zh-Hans-CN": {
		"value": "CN"
	    },
	    "zh-Hant": {
		"value": "TW"
	    },
	    "zh-Hant-CN": {
		"value": "CN"
	    },
	    "zh-wuu": {
		"value": "CN"
	    },
	    "zh-xiang": {
		"value": "CN"
	    },
	    "zh-yue": {
		"value": "CN"
	    },
	    "Colombia": {
		"value": "CO"
	    },
	    "es-CO": {
		"value": "CO"
	    },
	    "Costa Rica": {
		"value": "CR"
	    },
	    "es-CR": {
		"value": "CR"
	    },
	    "Serbia And Montenegro": {
		"value": "CS"
	    },
	    "sr": {
		"value": "CS"
	    },
	    "sr-Cyrl": {
		"value": "CS"
	    },
	    "sr-Latn": {
		"value": "CS"
	    },
	    "Cuba": {
		"value": "CU"
	    },
	    "es-CU": {
		"value": "CU"
	    },
	    "Cape Verde": {
		"value": "CV"
	    },
	    "pt-CV": {
		"value": "CV"
	    },
	    "Christmas Island": {
		"value": "CX"
	    },
	    "Cyprus": {
		"value": "CY"
	    },
	    "el-CY": {
		"value": "CY"
	    },
	    "tr-CY": {
		"value": "CY"
	    },
	    "Czech Republic": {
		"value": "CZ"
	    },
	    "cs": {
		"value": "CZ"
	    },
	    "Germany": {
		"value": "DE"
	    },
	    "da-DE": {
		"value": "DE"
	    },
	    "de-1901": {
		"value": "DE"
	    },
	    "de-1996": {
		"value": "DE"
	    },
	    "de-AT-1901": {
		"value": "DE"
	    },
	    "de-AT-1996": {
		"value": "DE"
	    },
	    "de-CH-1901": {
		"value": "DE"
	    },
	    "de-CH-1996": {
		"value": "DE"
	    },
	    "de-DE": {
		"value": "DE"
	    },
	    "de-DE-1901": {
		"value": "DE"
	    },
	    "de-DE-1996": {
		"value": "DE"
	    },
	    "dsb": {
		"value": "DE"
	    },
	    "fy-DE": {
		"value": "DE"
	    },
	    "hsb": {
		"value": "DE"
	    },
	    "lb": {
		"value": "LU"
	    },
	    "nds": {
		"value": "DE"
	    },
	    "wen": {
		"value": "DE"
	    },
	    "Djibouti": {
		"value": "DJ"
	    },
	    "aa-DJ": {
		"value": "DJ"
	    },
	    "fr-DJ": {
		"value": "DJ"
	    },
	    "so-DJ": {
		"value": "DJ"
	    },
	    "Denmark": {
		"value": "DK"
	    },
	    "da-DK": {
		"value": "DK"
	    },
	    "de-DK": {
		"value": "DK"
	    },
	    "Dominica": {
		"value": "DM"
	    },
	    "en-DM": {
		"value": "DM"
	    },
	    "Dominican Republic": {
		"value": "DO"
	    },
	    "es-DO": {
		"value": "DO"
	    },
	    "Algeria": {
		"value": "DZ"
	    },
	    "ar-DZ": {
		"value": "DZ"
	    },
	    "Ecuador": {
		"value": "EC"
	    },
	    "es-EC": {
		"value": "EC"
	    },
	    "Estonia": {
		"value": "EE"
	    },
	    "et": {
		"value": "EE"
	    },
	    "Egypt": {
		"value": "EG"
	    },
	    "ar-EG": {
		"value": "EG"
	    },
	    "Eritrea": {
		"value": "ER"
	    },
	    "aa-ER": {
		"value": "ER"
	    },
	    "byn": {
		"value": "ER"
	    },
	    "en-ER": {
		"value": "ER"
	    },
	    "gez-ER": {
		"value": "ER"
	    },
	    "ti-ER": {
		"value": "ER"
	    },
	    "tig": {
		"value": "ER"
	    },
	    "Spain": {
		"value": "ES"
	    },
	    "an": {
		"value": "ES"
	    },
	    "es-ES": {
		"value": "ES"
	    },
	    "eu": {
		"value": "ES"
	    },
	    "gl": {
		"value": "ES"
	    },
	    "Ethiopia": {
		"value": "ET"
	    },
	    "aa-ET": {
		"value": "ET"
	    },
	    "am": {
		"value": "ET"
	    },
	    "en-ET": {
		"value": "ET"
	    },
	    "gez-ET": {
		"value": "ET"
	    },
	    "om-ET": {
		"value": "ET"
	    },
	    "sid": {
		"value": "ET"
	    },
	    "so-ET": {
		"value": "ET"
	    },
	    "ti-ET": {
		"value": "ET"
	    },
	    "wal": {
		"value": "ET"
	    },
	    "Finland": {
		"value": "FI"
	    },
	    "fi-FI": {
		"value": "FI"
	    },
	    "smn": {
		"value": "FI"
	    },
	    "sv-FI": {
		"value": "FI"
	    },
	    "Fiji": {
		"value": "FJ"
	    },
	    "en-FJ": {
		"value": "FJ"
	    },
	    "fj": {
		"value": "FJ"
	    },
	    "Falkland Islands (Malvinas)": {
		"value": "FK"
	    },
	    "en-FK": {
		"value": "FK"
	    },
	    "Micronesia, Federated States Of": {
		"value": "FM"
	    },
	    "en-FM": {
		"value": "FM"
	    },
	    "Faroe Islands": {
		"value": "FO"
	    },
	    "da-FO": {
		"value": "FO"
	    },
	    "fo": {
		"value": "FO"
	    },
	    "France": {
		"value": "FR"
	    },
	    "br": {
		"value": "FR"
	    },
	    "co": {
		"value": "IT"
	    },
	    "de-FR": {
		"value": "FR"
	    },
	    "fr-FR": {
		"value": "FR"
	    },
	    "oc": {
		"value": "FR"
	    },
	    "Gabon ": {
		"value": "GA"
	    },
	    "fr-GA": {
		"value": "GA"
	    },
	    "United Kingdom": {
		"value": "GB"
	    },
	    "cy-GB": {
		"value": "GB"
	    },
	    "en-GB": {
		"value": "GB"
	    },
	    "fr-GB": {
		"value": "GB"
	    },
	    "ga-GB": {
		"value": "GB"
	    },
	    "gd": {
		"value": "GB"
	    },
	    "gv": {
		"value": "GB"
	    },
	    "kw": {
		"value": "GB"
	    },
	    "Grenada": {
		"value": "GD"
	    },
	    "en-GD": {
		"value": "GD"
	    },
	    "Georgia": {
		"value": "GE"
	    },
	    "ab": {
		"value": "UA"
	    },
	    "ka": {
		"value": "GE"
	    },
	    "French Guiana": {
		"value": "GF"
	    },
	    "fr-GF": {
		"value": "GF"
	    },
	    "Ghana": {
		"value": "GH"
	    },
	    "ee": {
		"value": "TG"
	    },
	    "en-GH": {
		"value": "GH"
	    },
	    "tw": {
		"value": "GH"
	    },
	    "Gibraltar": {
		"value": "GI"
	    },
	    "en-GI": {
		"value": "GI"
	    },
	    "Greenland": {
		"value": "GL"
	    },
	    "da-GL": {
		"value": "GL"
	    },
	    "kl": {
		"value": "GL"
	    },
	    "Gambia": {
		"value": "GM"
	    },
	    "en-GM": {
		"value": "GM"
	    },
	    "wo": {
		"value": "SN"
	    },
	    "Guinea": {
		"value": "GN"
	    },
	    "fr-GN": {
		"value": "GN"
	    },
	    "Guadeloupe": {
		"value": "GP"
	    },
	    "fr-GP": {
		"value": "GP"
	    },
	    "Equatorial Guinea": {
		"value": "GQ"
	    },
	    "es-GQ": {
		"value": "GQ"
	    },
	    "Greece": {
		"value": "GR"
	    },
	    "el-GR": {
		"value": "GR"
	    },
	    "Guatemala": {
		"value": "GT"
	    },
	    "es-GT": {
		"value": "GT"
	    },
	    "Guam": {
		"value": "GU"
	    },
	    "ch-GU": {
		"value": "GU"
	    },
	    "en-GU": {
		"value": "GU"
	    },
	    "Guinea-Bissau": {
		"value": "GW"
	    },
	    "pt-GW": {
		"value": "GW"
	    },
	    "Guyana": {
		"value": "GY"
	    },
	    "en-GY": {
		"value": "GY"
	    },
	    "Hong Kong": {
		"value": "HK"
	    },
	    "en-HK": {
		"value": "HK"
	    },
	    "zh-Hant-HK": {
		"value": "HK"
	    },
	    "zh-HK": {
		"value": "HK"
	    },
	    "Honduras": {
		"value": "HN"
	    },
	    "es-HN": {
		"value": "HN"
	    },
	    "Croatia": {
		"value": "HR"
	    },
	    "hr-HR": {
		"value": "HR"
	    },
	    "it-HR": {
		"value": "HR"
	    },
	    "Haiti": {
		"value": "HT"
	    },
	    "fr-HT": {
		"value": "HT"
	    },
	    "ht": {
		"value": "HT"
	    },
	    "Hungary": {
		"value": "HU"
	    },
	    "de-HU": {
		"value": "HU"
	    },
	    "hu-HU": {
		"value": "HU"
	    },
	    "sk-HU": {
		"value": "HU"
	    },
	    "sr-HU": {
		"value": "HU"
	    },
	    "Indonesia": {
		"value": "ID"
	    },
	    "id": {
		"value": "ID"
	    },
	    "jv": {
		"value": "SR"
	    },
	    "su": {
		"value": "ID"
	    },
	    "Ireland": {
		"value": "IE"
	    },
	    "en-IE": {
		"value": "IE"
	    },
	    "ga-IE": {
		"value": "IE"
	    },
	    "Israel": {
		"value": "IL"
	    },
	    "ar-IL": {
		"value": "IL"
	    },
	    "en-IL": {
		"value": "IL"
	    },
	    "he": {
		"value": "IL"
	    },
	    "India": {
		"value": "IN"
	    },
	    "ar-IN": {
		"value": "IN"
	    },
	    "as": {
		"value": "IN"
	    },
	    "bh": {
		"value": "IN"
	    },
	    "bn-IN": {
		"value": "IN"
	    },
	    "en-IN": {
		"value": "IN"
	    },
	    "gu": {
		"value": "IN"
	    },
	    "hi": {
		"value": "IN"
	    },
	    "kn": {
		"value": "IN"
	    },
	    "kok": {
		"value": "IN"
	    },
	    "ks": {
		"value": "IN"
	    },
	    "ml": {
		"value": "IN"
	    },
	    "mr": {
		"value": "IN"
	    },
	    "or": {
		"value": "IN"
	    },
	    "pa": {
		"value": "IN"
	    },
	    "pi": {
		"value": "IN"
	    },
	    "sa": {
		"value": "IN"
	    },
	    "sd-In": {
		"value": "IN"
	    },
	    "ta-IN": {
		"value": "IN"
	    },
	    "te": {
		"value": "IN"
	    },
	    "ur-IN": {
		"value": "IN"
	    },
	    "British Indian Ocean Territory": {
		"value": "IO"
	    },
	    "en-IO": {
		"value": "IO"
	    },
	    "Iraq": {
		"value": "IQ"
	    },
	    "ar-IQ": {
		"value": "IQ"
	    },
	    "ku": {
		"value": "TR"
	    },
	    "Iran, Islamic Republic Of": {
		"value": "IR"
	    },
	    "ae": {
		"value": "IR"
	    },
	    "fa-IR": {
		"value": "IR"
	    },
	    "Iceland": {
		"value": "IS"
	    },
	    "is": {
		"value": "IS"
	    },
	    "Italy": {
		"value": "IT"
	    },
	    "de-IT": {
		"value": "IT"
	    },
	    "fr-IT": {
		"value": "IT"
	    },
	    "it-IT": {
		"value": "IT"
	    },
	    "sc": {
		"value": "IT"
	    },
	    "Jamaica": {
		"value": "JM"
	    },
	    "en-JM": {
		"value": "JM"
	    },
	    "Jordan": {
		"value": "JO"
	    },
	    "ar-JO": {
		"value": "JO"
	    },
	    "Japan": {
		"value": "JP"
	    },
	    "ja": {
		"value": "JP"
	    },
	    "Kenya": {
		"value": "KE"
	    },
	    "en-KE": {
		"value": "KE"
	    },
	    "ki": {
		"value": "KE"
	    },
	    "om-KE": {
		"value": "KE"
	    },
	    "so-KE": {
		"value": "KE"
	    },
	    "sw-KE": {
		"value": "KE"
	    },
	    "Kyrgyzstan": {
		"value": "KG"
	    },
	    "ky": {
		"value": "KG"
	    },
	    "Cambodia": {
		"value": "KH"
	    },
	    "km": {
		"value": "KH"
	    },
	    "Kiribati": {
		"value": "KI"
	    },
	    "en-KI": {
		"value": "KI"
	    },
	    "Comoros": {
		"value": "KM"
	    },
	    "fr-KM": {
		"value": "KM"
	    },
	    "Saint Kitts And Nevis": {
		"value": "KN"
	    },
	    "en-KN": {
		"value": "KN"
	    },
	    "Korea, Democratic People's Republic Of": {
		"value": "KP"
	    },
	    "ko-KP": {
		"value": "KP"
	    },
	    "Korea, Republic Of": {
		"value": "KR"
	    },
	    "ko-KR": {
		"value": "KR"
	    },
	    "Kuwait": {
		"value": "KW"
	    },
	    "ar-KW": {
		"value": "KW"
	    },
	    "Cayman Islands": {
		"value": "KY"
	    },
	    "en-KY": {
		"value": "KY"
	    },
	    "Kazakhstan": {
		"value": "KZ"
	    },
	    "kk": {
		"value": "KZ"
	    },
	    "Lao People's Democratic Republic": {
		"value": "LA"
	    },
	    "lo": {
		"value": "LA"
	    },
	    "Lebanon": {
		"value": "LB"
	    },
	    "ar-LB": {
		"value": "LB"
	    },
	    "fr-LB": {
		"value": "LB"
	    },
	    "Saint Lucia": {
		"value": "LC"
	    },
	    "en-LC": {
		"value": "LC"
	    },
	    "Liechtenstein": {
		"value": "LI"
	    },
	    "de-LI": {
		"value": "LI"
	    },
	    "Sri Lanka": {
		"value": "LK"
	    },
	    "si": {
		"value": "TH"
	    },
	    "Liberia": {
		"value": "LR"
	    },
	    "en-LR": {
		"value": "LR"
	    },
	    "Lesotho": {
		"value": "LS"
	    },
	    "en-LS": {
		"value": "LS"
	    },
	    "st": {
		"value": "LS"
	    },
	    "xh": {
		"value": "ZA"
	    },
	    "Lithuania": {
		"value": "LT"
	    },
	    "lt": {
		"value": "LT"
	    },
	    "Luxembourg": {
		"value": "LU"
	    },
	    "de-LU": {
		"value": "LU"
	    },
	    "fr-LU": {
		"value": "LU"
	    },
	    "Latvia": {
		"value": "LV"
	    },
	    "lv": {
		"value": "LV"
	    },
	    "Libyan Arab Jamahiriya": {
		"value": "LY"
	    },
	    "ar-LY": {
		"value": "LY"
	    },
	    "Morocco": {
		"value": "MA"
	    },
	    "ar-MA": {
		"value": "MA"
	    },
	    "Monaco": {
		"value": "MC"
	    },
	    "fr-MC": {
		"value": "MC"
	    },
	    "Moldova, Republic Of": {
		"value": "MD"
	    },
	    "mo": {
		"value": "MD"
	    },
	    "ro": {
		"value": "UA"
	    },
	    "tr": {
		"value": "MD"
	    },
	    "uk": {
		"value": "UA"
	    },
	    "Madagascar": {
		"value": "MG"
	    },
	    "fr-MG": {
		"value": "MG"
	    },
	    "mg": {
		"value": "MG"
	    },
	    "Marshall Islands": {
		"value": "MH"
	    },
	    "en-MH": {
		"value": "MH"
	    },
	    "mh": {
		"value": "MH"
	    },
	    "Macedonia, The Former Yugoslav Republic Of": {
		"value": "MK"
	    },
	    "mk": {
		"value": "MK"
	    },
	    "Mali": {
		"value": "ML"
	    },
	    "fr-ML": {
		"value": "ML"
	    },
	    "Myanmar": {
		"value": "MM"
	    },
	    "my": {
		"value": "MM"
	    },
	    "Mongolia": {
		"value": "MN"
	    },
	    "mn": {
		"value": "MN"
	    },
	    "Macao": {
		"value": "MO"
	    },
	    "zh-Hant-MO": {
		"value": "MO"
	    },
	    "zh-MO": {
		"value": "MO"
	    },
	    "Northern Mariana Islands": {
		"value": "MP"
	    },
	    "ch-MP": {
		"value": "MP"
	    },
	    "en-MP": {
		"value": "MP"
	    },
	    "Martinique": {
		"value": "MQ"
	    },
	    "fr-MQ": {
		"value": "MQ"
	    },
	    "Mauritania": {
		"value": "MR"
	    },
	    "ar-MR": {
		"value": "MR"
	    },
	    "Montserrat": {
		"value": "MS"
	    },
	    "en-MS": {
		"value": "MS"
	    },
	    "Malta": {
		"value": "MT"
	    },
	    "en-MT": {
		"value": "MT"
	    },
	    "mt": {
		"value": "MT"
	    },
	    "Mauritius": {
		"value": "MU"
	    },
	    "en-MU": {
		"value": "MU"
	    },
	    "Maldives": {
		"value": "MV"
	    },
	    "dv": {
		"value": "MV"
	    },
	    "Malawi": {
		"value": "MW"
	    },
	    "en-MW": {
		"value": "MW"
	    },
	    "ny": {
		"value": "MW"
	    },
	    "Mexico": {
		"value": "MX"
	    },
	    "es-MX": {
		"value": "MX"
	    },
	    "Malaysia": {
		"value": "MY"
	    },
	    "ms-MY": {
		"value": "MY"
	    },
	    "Mozambique": {
		"value": "MZ"
	    },
	    "pt-MZ": {
		"value": "MZ"
	    },
	    "Namibia": {
		"value": "NA"
	    },
	    "en-NA": {
		"value": "NA"
	    },
	    "hz": {
		"value": "NA"
	    },
	    "ng": {
		"value": "NA"
	    },
	    "New Caledonia": {
		"value": "NC"
	    },
	    "fr-NC": {
		"value": "NC"
	    },
	    "Niger": {
		"value": "NE"
	    },
	    "ff-NE": {
		"value": "NE"
	    },
	    "fr-NE": {
		"value": "NE"
	    },
	    "kr": {
		"value": "NG"
	    },
	    "Norfolk Island": {
		"value": "NF"
	    },
	    "en-NF": {
		"value": "NF"
	    },
	    "Nigeria": {
		"value": "NG"
	    },
	    "en-NG": {
		"value": "NG"
	    },
	    "ff-NG": {
		"value": "NG"
	    },
	    "ig": {
		"value": "NG"
	    },
	    "yo": {
		"value": "NG"
	    },
	    "Nicaragua": {
		"value": "NI"
	    },
	    "es-NI": {
		"value": "NI"
	    },
	    "Netherlands": {
		"value": "NL"
	    },
	    "fy-NL": {
		"value": "NL"
	    },
	    "li": {
		"value": "NL"
	    },
	    "nl-NL": {
		"value": "NL"
	    },
	    "Norway": {
		"value": "NO"
	    },
	    "nb": {
		"value": "NO"
	    },
	    "nn": {
		"value": "NO"
	    },
	    "no": {
		"value": "NO"
	    },
	    "no-bok": {
		"value": "NO"
	    },
	    "no-nyn": {
		"value": "NO"
	    },
	    "Nepal": {
		"value": "NP"
	    },
	    "Nauru": {
		"value": "NR"
	    },
	    "en-NR": {
		"value": "NR"
	    },
	    "na": {
		"value": "NR"
	    },
	    "Niue": {
		"value": "NU"
	    },
	    "en-NU": {
		"value": "NU"
	    },
	    "New Zealand": {
		"value": "NZ"
	    },
	    "en-NZ": {
		"value": "NZ"
	    },
	    "mi": {
		"value": "NZ"
	    },
	    "Oman": {
		"value": "OM"
	    },
	    "ar-OM": {
		"value": "OM"
	    },
	    "Panama": {
		"value": "PA"
	    },
	    "es-PA": {
		"value": "PA"
	    },
	    "Peru": {
		"value": "PE"
	    },
	    "es-PE": {
		"value": "PE"
	    },
	    "qu": {
		"value": "PE"
	    },
	    "French Polynesia": {
		"value": "PF"
	    },
	    "fr-PF": {
		"value": "PF"
	    },
	    "ty": {
		"value": "PF"
	    },
	    "Papua New Guinea": {
		"value": "PG"
	    },
	    "en-PG": {
		"value": "PG"
	    },
	    "ho": {
		"value": "PG"
	    },
	    "Philippines": {
		"value": "PH"
	    },
	    "en-PH": {
		"value": "PH"
	    },
	    "tl": {
		"value": "PH"
	    },
	    "Pakistan": {
		"value": "PK"
	    },
	    "en-PK": {
		"value": "PK"
	    },
	    "sd-PK": {
		"value": "PK"
	    },
	    "ur-PK": {
		"value": "PK"
	    },
	    "Poland": {
		"value": "PL"
	    },
	    "de-PL": {
		"value": "PL"
	    },
	    "pl": {
		"value": "UA"
	    },
	    "Saint Pierre And Miquelon": {
		"value": "PM"
	    },
	    "fr-PM": {
		"value": "PM"
	    },
	    "Pitcairn": {
		"value": "PN"
	    },
	    "en-PN": {
		"value": "PN"
	    },
	    "Puerto Rico": {
		"value": "PR"
	    },
	    "en-PR": {
		"value": "PR"
	    },
	    "es-PR": {
		"value": "PR"
	    },
	    "Palestinian Territory, Occupied": {
		"value": "PS"
	    },
	    "ar-PS": {
		"value": "PS"
	    },
	    "Portugal": {
		"value": "PT"
	    },
	    "pt-PT": {
		"value": "PT"
	    },
	    "Palau": {
		"value": "PW"
	    },
	    "en-PW": {
		"value": "PW"
	    },
	    "Paraguay": {
		"value": "PY"
	    },
	    "es-PY": {
		"value": "PY"
	    },
	    "Qatar": {
		"value": "QA"
	    },
	    "ar-QA": {
		"value": "QA"
	    },
	    "RÃ©union": {
		"value": "RE"
	    },
	    "fr-RE": {
		"value": "RE"
	    },
	    "Romania": {
		"value": "RO"
	    },
	    "Russian Federation": {
		"value": "RU"
	    },
	    "ba": {
		"value": "RU"
	    },
	    "ce": {
		"value": "RU"
	    },
	    "cv": {
		"value": "RU"
	    },
	    "kv": {
		"value": "RU"
	    },
	    "ru-RU": {
		"value": "RU"
	    },
	    "tt": {
		"value": "RU"
	    },
	    "Rwanda": {
		"value": "RW"
	    },
	    "en-RW": {
		"value": "RW"
	    },
	    "fr-RW": {
		"value": "RW"
	    },
	    "rw": {
		"value": "RW"
	    },
	    "Saudi Arabia": {
		"value": "SA"
	    },
	    "ar-SA": {
		"value": "SA"
	    },
	    "Solomon Islands": {
		"value": "SB"
	    },
	    "en-SB": {
		"value": "SB"
	    },
	    "Seychelles": {
		"value": "SC"
	    },
	    "en-SC": {
		"value": "SC"
	    },
	    "fr-SC": {
		"value": "SC"
	    },
	    "Sudan": {
		"value": "SD"
	    },
	    "ar-SD": {
		"value": "SD"
	    },
	    "din": {
		"value": "SD"
	    },
	    "Sweden": {
		"value": "SE"
	    },
	    "fi-SE": {
		"value": "SE"
	    },
	    "se": {
		"value": "SE"
	    },
	    "sma": {
		"value": "SE"
	    },
	    "sme": {
		"value": "SE"
	    },
	    "sv-SE": {
		"value": "SE"
	    },
	    "Singapore": {
		"value": "SG"
	    },
	    "bn-SG": {
		"value": "SG"
	    },
	    "en-SG": {
		"value": "SG"
	    },
	    "ms-SG": {
		"value": "SG"
	    },
	    "ta-SG": {
		"value": "SG"
	    },
	    "zh-Hans-SG": {
		"value": "SG"
	    },
	    "zh-SG": {
		"value": "SG"
	    },
	    "Saint Helena ": {
		"value": "SH"
	    },
	    "en-SH": {
		"value": "SH"
	    },
	    "Slovenia": {
		"value": "SI"
	    },
	    "hu-SI": {
		"value": "SI"
	    },
	    "it-SI": {
		"value": "SI"
	    },
	    "Slovakia": {
		"value": "SK"
	    },
	    "sk": {
		"value": "SK"
	    },
	    "Sierra Leone": {
		"value": "SL"
	    },
	    "en-SL": {
		"value": "SL"
	    },
	    "San Marino": {
		"value": "SM"
	    },
	    "it-SM": {
		"value": "SM"
	    },
	    "Senegal": {
		"value": "SN"
	    },
	    "ff-SN": {
		"value": "SN"
	    },
	    "Somalia": {
		"value": "SO"
	    },
	    "ar-SO": {
		"value": "SO"
	    },
	    "en-SO": {
		"value": "SO"
	    },
	    "so-SO": {
		"value": "SO"
	    },
	    "Suriname": {
		"value": "SR"
	    },
	    "nl-SR": {
		"value": "SR"
	    },
	    "Sao Tome And Principe": {
		"value": "ST"
	    },
	    "pt-ST": {
		"value": "ST"
	    },
	    "El Salvador": {
		"value": "SV"
	    },
	    "es-SV": {
		"value": "SV"
	    },
	    "Syrian Arab Republic": {
		"value": "SY"
	    },
	    "ar-SY": {
		"value": "SY"
	    },
	    "syr": {
		"value": "SY"
	    },
	    "Swaziland": {
		"value": "SZ"
	    },
	    "en-SZ": {
		"value": "SZ"
	    },
	    "ss-SZ": {
		"value": "SZ"
	    },
	    "Turks And Caicos Islands": {
		"value": "TC"
	    },
	    "en-TC": {
		"value": "TC"
	    },
	    "Chad": {
		"value": "TD"
	    },
	    "ar-TD": {
		"value": "TD"
	    },
	    "fr-TD": {
		"value": "TD"
	    },
	    "Togo": {
		"value": "TG"
	    },
	    "fr-TG": {
		"value": "TG"
	    },
	    "Thailand": {
		"value": "TH"
	    },
	    "th": {
		"value": "TH"
	    },
	    "Tajikistan": {
		"value": "TJ"
	    },
	    "tg": {
		"value": "TJ"
	    },
	    "Tokelau": {
		"value": "TK"
	    },
	    "en-TK": {
		"value": "TK"
	    },
	    "Timor-Leste": {
		"value": "TL"
	    },
	    "pt-TL": {
		"value": "TL"
	    },
	    "Turkmenistan": {
		"value": "TM"
	    },
	    "tk": {
		"value": "TM"
	    },
	    "Tunisia": {
		"value": "TN"
	    },
	    "ar-TN": {
		"value": "TN"
	    },
	    "Tonga": {
		"value": "TO"
	    },
	    "en-TO": {
		"value": "TO"
	    },
	    "to": {
		"value": "TO"
	    },
	    "Turkey": {
		"value": "TR"
	    },
	    "tr-TR": {
		"value": "TR"
	    },
	    "Trinidad And Tobago": {
		"value": "TT"
	    },
	    "en-TT": {
		"value": "TT"
	    },
	    "Tuvalu": {
		"value": "TV"
	    },
	    "gil": {
		"value": "TV"
	    },
	    "tvl": {
		"value": "TV"
	    },
	    "Taiwan, Province Of China": {
		"value": "TW"
	    },
	    "zh-Hant-TW": {
		"value": "TW"
	    },
	    "zh-min": {
		"value": "TW"
	    },
	    "zh-min-nan": {
		"value": "TW"
	    },
	    "zh-TW": {
		"value": "TW"
	    },
	    "Tanzania, United Republic Of": {
		"value": "TZ"
	    },
	    "sw-TZ": {
		"value": "TZ"
	    },
	    "Ukraine": {
		"value": "UA"
	    },
	    "ru-UA": {
		"value": "UA"
	    },
	    "Uganda": {
		"value": "UG"
	    },
	    "en-UG": {
		"value": "UG"
	    },
	    "lg": {
		"value": "UG"
	    },
	    "United States Minor Outlying Islands": {
		"value": "UM"
	    },
	    "en-UM": {
		"value": "UM"
	    },
	    "United States": {
		"value": "US"
	    },
	    "en-US": {
		"value": "US"
	    },
	    "es-US": {
		"value": "US"
	    },
	    "haw": {
		"value": "US"
	    },
	    "ik": {
		"value": "US"
	    },
	    "nv": {
		"value": "US"
	    },
	    "Uruguay": {
		"value": "UY"
	    },
	    "es-UY": {
		"value": "UY"
	    },
	    "Uzbekistan": {
		"value": "UZ"
	    },
	    "uz-Cyrl": {
		"value": "UZ"
	    },
	    "uz-Latn": {
		"value": "UZ"
	    },
	    "uz-UZ": {
		"value": "UZ"
	    },
	    "Holy See (Vatican City State)": {
		"value": "VA"
	    },
	    "fr": {
		"value": "VA"
	    },
	    "it": {
		"value": "VA"
	    },
	    "la": {
		"value": "VA"
	    },
	    "Saint Vincent And The Grenadines": {
		"value": "VC"
	    },
	    "en-VC": {
		"value": "VC"
	    },
	    "Venezuela": {
		"value": "VE"
	    },
	    "es-VE": {
		"value": "VE"
	    },
	    "Virgin Islands, British": {
		"value": "VG"
	    },
	    "en-VG": {
		"value": "VG"
	    },
	    "Virgin Islands, U.S.": {
		"value": "VI"
	    },
	    "en-VI": {
		"value": "VI"
	    },
	    "Viet Nam": {
		"value": "VN"
	    },
	    "vi": {
		"value": "VN"
	    },
	    "Vanuatu": {
		"value": "VU"
	    },
	    "bi": {
		"value": "VU"
	    },
	    "en-VU": {
		"value": "VU"
	    },
	    "fr-VU": {
		"value": "VU"
	    },
	    "Wallis And Futuna": {
		"value": "WF"
	    },
	    "fr-WF": {
		"value": "WF"
	    },
	    "Samoa": {
		"value": "WS"
	    },
	    "en-WS": {
		"value": "WS"
	    },
	    "Yemen": {
		"value": "YE"
	    },
	    "ar-YE": {
		"value": "YE"
	    },
	    "Mayotte": {
		"value": "YT"
	    },
	    "fr-YT": {
		"value": "YT"
	    },
	    "Yugoslavia": {
		"value": "YU"
	    },
	    "sr-Cyrl-YU": {
		"value": "YU"
	    },
	    "sr-Latn-YU": {
		"value": "YU"
	    },
	    "sr-YU": {
		"value": "YU"
	    },
	    "South Africa": {
		"value": "ZA"
	    },
	    "af": {
		"value": "ZA"
	    },
	    "en-ZA": {
		"value": "ZA"
	    },
	    "nr": {
		"value": "ZA"
	    },
	    "ss-ZA": {
		"value": "ZA"
	    },
	    "tn-ZA": {
		"value": "ZA"
	    },
	    "ts": {
		"value": "ZA"
	    },
	    "ve": {
		"value": "ZW"
	    },
	    "zu": {
		"value": "ZW"
	    },
	    "Zambia": {
		"value": "ZM"
	    },
	    "en-ZM": {
		"value": "ZM"
	    },
	    "Zimbabwe": {
		"value": "ZW"
	    },
	    "en-ZW": {
		"value": "ZW"
	    },
	    "nd": {
		"value": "ZW"
	    },
	    "[object Object]": {
		"value": "index"
	    }
	}
    }
}
