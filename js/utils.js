export function dayOfTheWeek(day, month, year) {
    const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    return weekday[new Date(`${year}-${month}-${day}`).getDay()];
}

export function getMonth(day, month, year) {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const d = new Date(new Date(`${year}-${month}-${day}`));
    return monthNames[d.getMonth()];
}

export function getCitiesList(){
    const citiesName = ["Abidjan", "Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Agra", "Ahmedabad", "Aleppo", "Alexandria", "Algiers", "Almaty", "Amman", "Amsterdam", "Anchorage", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Arnold", "Ashgabat", "Asmara", "Asuncion", "Athens", "Auckland", "Aurangabad", "Avarua", "Baghdad", "Baku", "Bamako", "Banda Aceh", "Bandar Seri Begawan", "Bandung", "Bangalore", "Bangkok", "Bangui", "Banjul", "Bareilly", "Barcelona", "Barranquilla", "Basrah", "Basse-Terre", "Basseterre", "Beijing", "Beirut", "Bekasi", "Belem", "Belgaum", "Belgrade", "Belmopan", "Belo Horizonte", "Bengaluru", "Berlin", "Bern", "Bhopal", "Bhubaneswar", "Bishkek", "Bissau", "Bogotá", "Bogota", "Boston", "Brasilia", "Bratislava", "Brazzaville", "Bridgetown", "Brisbane", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura", "Bursa", "Busan", "Cairo", "Cali", "Caloocan", "Camayenne", "Canberra", "Cape Town", "Caracas", "Casablanca", "Castries", "Cayenne", "Chandigarh", "Charlotte Amalie", "Chengdu", "Chennai", "Chicago", "Chisinau", "Chittagong", "Chongqing", "Coimbatore", "Colombo", "Conakry", "Copenhagen", "Cordoba", "Cuttack", "Curitiba", "Daegu", "Daejeon", "Dakar", "Dallas", "Damascus", "Dar es Salaam", "Delhi", "Denver", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dongguan", "Douala", "Douglas", "Dubai", "Dublin", "Durban", "Dushanbe", "Faisalabad", "Fort-de-France", "Fortaleza", "Frankfurt", "Freetown", "Fukuoka", "Funafuti", "Gaborone", "Geneva", "George Town", "Georgetown", "Gibraltar", "Gitega", "Giza", "Goa", "Gorakhpur", "Greater Noida", "Guadalajara", "Guangzhou", "Guatemala City", "Guayaquil", "Gujranwala", "Gustavia", "Guwahati", "Gwangju", "Hamburg", "Hanoi", "Harare", "Havana", "Helsinki", "Ho Chi Minh City", "Hong Kong", "Honiara", "Honolulu", "Houston", "Hyderabad", "Ibadan", "Incheon", "Indore", "Isfahan", "Islamabad", "Istanbul", "Izmir", "Jaipur", "Jakarta", "Jalandhar", "Jammu", "Jeddah", "Jerusalem", "Jodhpur", "Johannesburg", "Juarez", "Juba", "Kabul", "Kaduna", "Kampala", "Kanpur", "Kaohsiung", "Karachi", "Karaj", "Kathmandu", "Kawasaki", "Kharkiv", "Khartoum", "Khulna", "Kigali", "Kingsburg", "Kingston", "Kingstown", "Kinshasa", "Kochi", "Kobe", "Kolkata", "Kota Bharu", "Kowloon", "Kuala Lumpur", "Kumasi", "Kuwait", "Kyiv", "Kyoto", "La Paz", "Lagos", "Lahore", "Las Vegas", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lome", "London", "Los Angeles", "Lucknow", "Ludhiana", "Luanda", "Lubumbashi", "Lusaka", "Luxembourg", "Macau", "Madrid", "Majuro", "Makassar", "Malabo", "Male", "Mamoudzou", "Managua", "Manama", "Manaus", "Manila", "Mangalore", "Maputo", "Maracaibo", "Maracay", "Mariehamn", "Marigot", "Maseru", "Mashhad", "Mbabane", "Mecca", "Medan", "Medellin", "Medina", "Melbourne", "Mexico City", "Miami", "Milan", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montreal", "Moroni", "Moscow", "Mosul", "Mumbai", "Munich", "Multan", "Muscat", "N'Djamena", "Nagoya", "Nagpur", "Nairobi", "Nanchong", "Nanjing", "Nashik", "Nassau", "Nay Pyi Taw", "New Delhi", "New York", "Niamey", "Nicosia", "Nouakchott", "Noumea", "Novosibirsk", "Nuku'alofa", "Nur-Sultan", "Nuuk", "Oranjestad", "Osaka", "Oslo", "Ottawa", "Ouagadougou", "Pago Pago", "Palembang", "Palo Alto", "Panama", "Papeete", "Paramaribo", "Paris", "Patna", "Perth", "Philadelphia", "Phnom Penh", "Phoenix", "Podgorica", "Port Louis", "Port Moresby", "Port of Spain", "Port-Vila", "Port-au-Prince", "Porto Alegre", "Porto-Novo", "Prague", "Praia", "Pretoria", "Pristina", "Puebla", "Pune", "Pyongyang", "Quezon City", "Quito", "Raipur", "Rajkot", "Ranchi", "Rabat", "Rawalpindi", "Recife", "Reykjavik", "Riga", "Rio de Janeiro", "Riyadh", "Road Town", "Rome", "Roseau", "Saint George's", "Saint Helier", "Saint John's", "Saint Peter Port", "Saint Petersburg", "Saint-Denis", "Saint-Pierre", "Saipan", "Salvador", "San Antonio", "San Diego", "San Francisco", "San Jose", "San Juan", "San Marino", "San Salvador", "Sanaa", "Santa Cruz de la Sierra", "Santiago", "Santo Domingo", "Sao Paulo", "Sao Tome", "Sapporo", "Sarajevo", "São Paulo", "Seattle", "Semarang", "Seoul", "Shanghai", "Sharjah", "Shenzhen", "Singapore", "Skopje", "Sofia", "South Tangerang", "Soweto", "Stockholm", "Sucre", "Surabaya", "Surat", "Suva", "Sydney", "Tabriz", "Taipei", "Tallinn", "Tangerang", "Tarawa", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Tel Aviv", "Thane", "Thimphu", "Tianjin", "Tijuana", "Tirana", "Tokyo", "Toronto", "Torshavn", "Tripoli", "Tunis", "Udaipur", "Ulan Bator", "Vaduz", "Valencia", "Valletta", "Vancouver", "Varanasi", "Venice", "Vienna", "Vientiane", "Vijayawada", "Vilnius", "Visakhapatnam", "Warsaw", "Washington", "Washington D.C.", "Wellington", "Willemstad", "Windhoek", "Wuhan", "Xi'an", "Yamoussoukro", "Yangon", "Yaounde", "Yekaterinburg", "Yerevan", "Yokohama", "Zagreb", "Zurich", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
    return citiesName;
}
export function convertTo12Hour(time24) {
    const [hourStr, minute] = time24.split(':');
    let hour = parseInt(hourStr);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  }
  